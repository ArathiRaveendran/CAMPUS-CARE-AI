require("dotenv").config();

const {
  generateComplaintEmbedding,
  findSimilarComplaints,
} = require("./services/similarityServices");

const testSimilarity = async () => {
  try {
    const newComplaint = {
      title: "No water supply in hostel",
      description:
        "There has been no water supply in the hostel bathrooms since this morning.",
    };

    const existingComplaint1 = {
      _id: "complaint1",
      title: "Hostel water problem",
      description:
        "The hostel bathrooms do not have any water since morning.",
    };

    const existingComplaint2 = {
      _id: "complaint2",
      title: "Library books are old",
      description:
        "Many of the books in the library are outdated and need replacement.",
    };

    console.log("Generating embeddings...");

    const newEmbedding = await generateComplaintEmbedding(
      newComplaint.title,
      newComplaint.description
    );

    const embedding1 = await generateComplaintEmbedding(
      existingComplaint1.title,
      existingComplaint1.description
    );

    const embedding2 = await generateComplaintEmbedding(
      existingComplaint2.title,
      existingComplaint2.description
    );

    existingComplaint1.embedding = embedding1;
    existingComplaint2.embedding = embedding2;

    const similarComplaints = await findSimilarComplaints(
      newEmbedding,
      [existingComplaint1, existingComplaint2]
    );

    console.log("\nSimilar complaints:");
    console.log(similarComplaints);
  } catch (error) {
    console.error("Similarity test failed:", error.message);
  }
};

testSimilarity();