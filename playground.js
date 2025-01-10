const Gemini = require('./gemini_client');

(async () => {
  const prompt = 'Write a short story about a brave cat.';
  try {
    const response = await Gemini.generate(prompt);
    console.log('Generated Response:', response);
  } catch (error) {
    console.error('Error generating content:', error);
  }
})();
