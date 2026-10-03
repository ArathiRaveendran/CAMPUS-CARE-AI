const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Generate an embedding for a complaint
const generateComplaintEmbedding = async (title, description) => {
  const complaintText = `${title}\n${description}`;

  const response = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: complaintText,
  });

  return response.embeddings[0].values;
};

// Calculate cosine similarity between two embeddings
const cosineSimilarity = (embeddingA, embeddingB) => {
  if (!embeddingA.length || !embeddingB.length) {
    return 0;
  }

  if (embeddingA.length !== embeddingB.length) {
    throw new Error("Embedding dimensions do not match");
  }

  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;

  for (let i = 0; i < embeddingA.length; i++) {
    dotProduct += embeddingA[i] * embeddingB[i];
    magnitudeA += embeddingA[i] ** 2;
    magnitudeB += embeddingB[i] ** 2;
  }

  if (magnitudeA === 0 || magnitudeB === 0) {
    return 0;
  }

  return dotProduct / (Math.sqrt(magnitudeA) * Math.sqrt(magnitudeB));
};

// Find complaints that are similar to a new complaint
const findSimilarComplaints = async (
  newEmbedding,
  existingComplaints,
  threshold = 0.85
) => {
  const similarComplaints = [];

  for (const complaint of existingComplaints) {
    if (!complaint.embedding || complaint.embedding.length === 0) {
      continue;
    }

    const similarityScore = cosineSimilarity(
      newEmbedding,
      complaint.embedding
    );

    if (similarityScore >= threshold) {
      similarComplaints.push({
        complaint: complaint._id,
        similarityScore: Number(similarityScore.toFixed(4)),
      });
    }
  }

  // Highest similarity first
  similarComplaints.sort(
    (a, b) => b.similarityScore - a.similarityScore
  );

  return similarComplaints;
};

module.exports = {
  generateComplaintEmbedding,
  cosineSimilarity,
  findSimilarComplaints,
};