# Gemini API Client

This project implements a **Gemini API Client** for interacting with Google's Generative AI service. It provides seamless access to the Gemini model, with built-in functionality for retrying failed requests and rotating API keys.

## Features

- **Gemini API Integration**: Leverages the Google Generative AI API to generate creative and contextual content.
- **Retry Mechanism**: Automatically retries failed requests up to a configurable limit.
- **API Key Rotation**: Ensures continued availability by rotating through a pool of API keys.
- **Modular Design**: Easily extendable for future enhancements.

## Usage

### Generate Content
To use the `Gemini` client, import the module and call the `generate` method with a prompt.

```javascript
const gemini = require('./path/to/the/client');

(async () => {
  const prompt = "Describe the significance of artificial intelligence in healthcare.";
  const result = await gemini.generate(prompt);
  console.log(result);
})();
```

### Configuration
- **API Keys**: Add multiple API keys in the `.env` file separated by spaces.
- **Retries**: Configure the maximum number of retries for failed requests by modifying the `maxRetries` parameter.
