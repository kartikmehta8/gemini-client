require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

class KeyManager {
  constructor(keys) {
    this.keys = keys;
    this.currentIndex = Math.floor(Math.random() * keys.length);
  }

  getNextKey() {
    const key = this.keys[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.keys.length;
    return key;
  }
}

class Gemini {
  constructor(keys, maxRetries = 5) {
    this.keyManager = new KeyManager(keys);
    this.maxRetries = maxRetries;
  }

  async generate(prompt) {
    let attempts = 0;
    while (attempts < this.maxRetries) {
      const key = this.keyManager.getNextKey();
      console.log(`Using key: ${key}`);

      const genAI = new GoogleGenerativeAI(key);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      try {
        const result = await model.generateContent(prompt);
        return result.response.text();
      } catch (e) {
        console.error(`Attempt ${attempts + 1} failed:`, e.message);
        attempts++;
      }
    }
    return 'Failed after max retries';
  }
}

module.exports = new Gemini(process.env.GEMINI_API_KEYS.split(' '));
