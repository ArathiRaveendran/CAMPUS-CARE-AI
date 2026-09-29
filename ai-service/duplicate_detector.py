from google import genai
from dotenv import load_dotenv
from sklearn.metrics.pairwise import cosine_similarity
import os
import json
import time

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=api_key)


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
            print("Error:", e)

            if attempt < 2:
                print("Retrying in 5 seconds...")
                time.sleep(5)

            else:
                print("Gemini verification is currently unavailable.")
                return None


# Existing complaints
existing_complaints = [
    "The hostel WiFi is not working.",
    "There is no water supply in the hostel.",
    "The library computers are not working.",
    "The food quality in the college canteen is poor."
]


# New complaint
new_complaint = "The food in the college canteen is too expensive."

# Find the most similar complaint
best_complaint, similarity = find_similar_complaint(
    new_complaint,
    existing_complaints
)


print("\nNew Complaint:")
print(new_complaint)

print("\nMost Similar Complaint:")
print(best_complaint)

print("\nSimilarity:")
print(round(similarity, 4))


# Verify whether it is actually a duplicate
if similarity >= 0.85:

    verification = verify_duplicate(
        new_complaint,
        best_complaint
    )

    print("\nGemini Verification:")

    if verification:
        print("Duplicate:", verification["duplicate"])
        print("Reason:", verification["reason"])
    else:
        print("Verification could not be completed.")

else:

    print("\nGemini Verification:")
    print("Duplicate: False")
    print("Reason: Similarity is too low for duplicate verification.")