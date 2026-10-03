require("dotenv").config();

const { analyzeComplaint } = require("./services/aiServices");

async function testAI() {
  try {
    const result = await analyzeComplaint(
      "No water in hostel",
      "There has been no water supply in the hostel bathrooms since this morning."
    );

    console.log("AI result:");
    console.log(result);
  } catch (error) {
    console.error("AI test failed:", error.message);
  }
}

testAI();