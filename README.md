# Gemini 1.5 Flash Key-Rotation Example

This project demonstrates how to interact with the [Google Generative AI Node.js library](https://www.npmjs.com/package/@google/generative-ai) while automatically rotating through multiple Gemini API keys (for example, in case of usage limits or other errors). If a key fails, the script will try the next key, and so on, until it either succeeds or exhausts all keys.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Overview

- **Language**: JavaScript / Node.js  
- **Purpose**: Demonstrate how to:
  1. Load Gemini API keys from environment variables.
  2. Randomly select a starting key.
  3. Interact with the `@google/generative-ai` package to generate content.
  4. Rotate keys on errors.
  5. Return final content or report if all keys have been used.

## Features

- **Random Key Selection**: The script starts with a random API key from your list of keys.  
- **Auto-Rotation**: If the current key fails (e.g., due to quota limits or invalid key), the script tries the next key in the list.  
- **Loop Prevention**: If we circle back to our initial key, the script stops and logs that no more keys are available.  
- **Simple Prompt Interface**: Modify the `prompt` variable in `main()` to generate a different type of content.

## Prerequisites

1. **Node.js** version 16 or higher.  
2. **NPM** or **Yarn** package manager.  
3. **One or more** valid Gemini API keys.

## Installation

1. **Clone or Download** this repository.
2. In the project folder, run:
   ```bash
   npm install
