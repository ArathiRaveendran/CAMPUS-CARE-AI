from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

complaint1 = "The hostel WiFi is not working."
complaint2 = "Internet connection in the hostel is not working."

vectorizer = TfidfVectorizer()

vectors = vectorizer.fit_transform([complaint1, complaint2])

similarity = cosine_similarity(vectors[0], vectors[1])

print("Similarity:", similarity[0][0])