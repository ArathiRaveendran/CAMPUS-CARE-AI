const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const ALLOWED_PRIORITIES = ["Low", "Medium", "High", "Critical"];

const analyzeComplaint = async (title, description) => {
  const prompt = `
You are an AI assistant for a College Complaint Management System.

Analyze the following student complaint.

Title:
${title}

Description:
${description}

Determine:

1. Priority — choose exactly one:
   Low, Medium, High, Critical

Use these priority rules:

Low:
Minor inconvenience with little impact and no immediate urgency.

Medium:
A normal service problem affecting one or a limited number of students,
but it does not create immediate danger or major disruption.

High:
A significant problem affecting essential services, multiple students,
or causing substantial disruption that should be addressed quickly.

Critical:
An immediate safety, security, health, fire, electrical hazard, or other
emergency where delayed action could cause serious harm or major damage.

Consider these factors:
- Urgency
- Safety or security risk
- Number of people affected
- Whether an essential service is affected
- Severity of disruption
- Potential consequences of delaying action

2. Summary — write one short and clear sentence describing the main issue.

Return ONLY valid JSON in exactly this format:
{
  "priority": "Low",
  "summary": "Short summary of the complaint"
}

Do not return markdown.
Do not return explanations.
Do not determine or change the complaint category.
`;

  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
      });

      const text = response.text.trim();

      const cleanedText = text
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/i, "")
        .replace(/\s*```$/i, "")
        .trim();

      const result = JSON.parse(cleanedText);

      if (!ALLOWED_PRIORITIES.includes(result.priority)) {
        throw new Error("AI returned an invalid priority");
      }

      if (!result.summary || typeof result.summary !== "string") {
        throw new Error("AI returned an invalid summary");
      }

      return {
        priority: result.priority,
        summary: result.summary.trim(),
      };
    } catch (error) {
      console.log(`AI attempt ${attempt} failed: ${error.message}`);

      if (attempt === maxAttempts) {
        throw error;
      }

      // Wait before retrying
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }
};

module.exports = {
  analyzeComplaint,
};