from google import genai
from dotenv import load_dotenv
import os
import time
import json

# Load API key from .env
load_dotenv()

# Get API key
api_key = os.getenv("GEMINI_API_KEY")

# Create Gemini client
client = genai.Client(api_key=api_key)


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
            print(f"Attempt {attempt + 1} failed.")

            if attempt < 2:
                print("Retrying in 5 seconds...")
                time.sleep(5)
            else:
                print("Gemini service is currently unavailable.")
                return None


# Get complaint from user
complaint = input("Enter your complaint: ")

# Analyze complaint
result = analyze_complaint(complaint)

# Display result
print("\n--- AI Analysis ---")

if result:
    print("Category:", result["category"])
    print("Priority:", result["priority"])
    print("Summary:", result["summary"])
else:
    print("Could not analyze the complaint.")