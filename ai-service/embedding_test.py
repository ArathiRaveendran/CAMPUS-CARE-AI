from google import genai
from dotenv import load_dotenv
from sklearn.metrics.pairwise import cosine_similarity
import os

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=api_key)

complaint1 = "The hostel WiFi is not working."
complaint2 = "There is no internet connection in the hostel."

result1 = client.models.embed_content(
    model="gemini-embedding-001",
    contents=complaint1
)

result2 = client.models.embed_content(
    model="gemini-embedding-001",
    contents=complaint2
)

embedding1 = result1.embeddings[0].values
embedding2 = result2.embeddings[0].values

similarity = cosine_similarity(
    [embedding1],
    [embedding2]
)

print("Complaint 1:", complaint1)
print("Complaint 2:", complaint2)
print("Similarity:", similarity[0][0])