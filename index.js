const { GoogleGenerativeAI } = require("@google/generative-ai");

require("dotenv").config();

const GEMINI_API_KEYS = process.env.GEMINI_API_KEYS.split(" ");

var keyIndex = 0;

async function generate(prompt) {
  const randomKey = GEMINI_API_KEYS[keyIndex];
  console.log("Using key:", keyIndex);

  const genAI = new GoogleGenerativeAI(randomKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (e) {
    // if error occurs, try again with a new key
    console.error(e);
    console.log("Error occured, trying again with a new key...");
    keyIndex = keyIndex + 1;
    if (keyIndex >= GEMINI_API_KEYS.length) {
      console.log("All keys used, exiting...");
      return "No more keys available";
    }
    return generate(prompt);
  }
}

async function main() {
  const prompt = "Introduce yourself in 20 words or less.";
  const result = await generate(prompt);
  console.log(result);
}

main();
