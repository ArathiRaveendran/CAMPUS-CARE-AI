from google import genai
from dotenv import load_dotenv
import os
import json
import time
from sklearn.metrics.pairwise import cosine_similarity


load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

client = genai.Client(
    api_key=api_key,
    http_options={"timeout": 30000}
)


def analyze_complaint(complaint):

    prompt = f"""
You are an AI assistant for a College Complaint Management System.

Analyze the following student complaint.

Complaint:
{complaint}

Choose exactly ONE category from:
Academic, Hostel, Electrical, Water Supply, Internet/IT,
Library, Canteen, Cleanliness, Transportation, Security, Other

Choose exactly ONE priority from:
Low, Medium, High, Critical

Then provide a short summary of the complaint.

Return ONLY valid JSON.

Use exactly these keys:

{{
    "category": "<category>",
    "priority": "<priority>",
    "summary": "<short summary>"
}}

Do not add Markdown, explanations, or ```json.
"""

    for attempt in range(3):

        try:

            response = client.models.generate_content(
                model="gemini-3.8-flash",
                contents=prompt
            )

            result = json.loads(response.text)

            return result

        except Exception as e:
            print(f"Analysis attempt {attempt + 1} failed.")
            print("Actual error:", repr(e))

            # Do not retry when Gemini quota is exhausted
            if "429" in str(e) or "RESOURCE_EXHAUSTED" in str(e):
                print("Gemini quota exhausted. Stopping retries.")
                return None

            if attempt < 2:
                print("Retrying in 5 seconds...")
                time.sleep(5)
            else:
                print("Gemini service is currently unavailable.")
                return None


def get_embedding(complaint):

    result = client.models.embed_content(
        model="gemini-embedding-001",
        contents=complaint
    )

    return result.embeddings[0].values


def find_similar_complaint(new_complaint, existing_complaints):

    new_embedding = get_embedding(new_complaint)

    best_complaint = None
    best_similarity = -1

    for complaint in existing_complaints:

        existing_embedding = get_embedding(complaint)

        similarity = cosine_similarity(
            [new_embedding],
            [existing_embedding]
        )[0][0]

        if similarity > best_similarity:
            best_similarity = similarity
            best_complaint = complaint

    return best_complaint, best_similarity


def verify_duplicate(new_complaint, existing_complaint):

    prompt = f"""
You are an AI assistant for a College Complaint Management System.

Compare these two complaints.

New complaint:
{new_complaint}

Existing complaint:
{existing_complaint}

Determine whether they describe the SAME underlying problem.

Return ONLY valid JSON using exactly these keys:

{{
    "duplicate": true,
    "reason": "short explanation"
}}

Use true if they describe essentially the same issue.
Use false if they are different issues, even if they are related to the same area.

Do not add Markdown or explanations outside the JSON.
"""

    for attempt in range(3):

        try:

            response = client.models.generate_content(
                model="gemini-3.7-flash",
                contents=prompt
            )

            return json.loads(response.text)

        except Exception as e:
            print(f"Verification attempt {attempt + 1} failed.")
            print("Actual error:", repr(e))

            # Do not retry when Gemini quota is exhausted
            if "429" in str(e) or "RESOURCE_EXHAUSTED" in str(e):
                print("Gemini quota exhausted. Stopping retries.")
                return None

            if attempt < 2:
                print("Retrying in 5 seconds...")
                time.sleep(5)
            else:
                print("Gemini verification is currently unavailable.")
                return None


def process_complaint(new_complaint, existing_complaints):

    # Step 1: Analyze complaint
    analysis = analyze_complaint(new_complaint)

    # Step 2: Find the most similar complaint
    best_complaint, similarity = find_similar_complaint(
        new_complaint,
        existing_complaints
    )


    # If Gemini analysis is unavailable, still continue with similarity detection
    if analysis is None:
        print("AI analysis unavailable. Continuing with duplicate detection.")


    # Step 3: Check whether it is actually a duplicate
    verification = None

    if similarity >= 0.85:

        verification = verify_duplicate(
            new_complaint,
            best_complaint
        )

    # Step 4: Prepare final result
    result = {
        "category": analysis["category"] if analysis else None,
        "priority": analysis["priority"] if analysis else None,
        "summary": analysis["summary"] if analysis else None,
        "similar_complaint": best_complaint,
        "similarity": round(similarity, 4),
        "duplicate": verification["duplicate"] if verification else None,
        "duplicate_reason": verification["reason"] if verification else None
    }

    return result







