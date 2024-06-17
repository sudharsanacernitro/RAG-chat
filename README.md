# Browser Extension Project README

## Overview

This project involves a browser extension that allows users to query information about the currently open website. The extension sends these queries to a backend server, which uses a Local Language Model (LLM) and vector database (FAISS) to process and respond to the queries.

## Features

- **Browser Extension**: Allows users to interact with the currently open website.
- **Backend Server**: Handles requests from the extension and processes queries using LLM.
- **Local Language Model (LLM)**: Uses llama2 model from LangChain to generate responses based on website content.
- **Web-based Loader**: Utilizes WebBaseLoader from LangChain to load website details into the vector database (FAISS).

## Technologies Used

- **Frontend**:
  - HTML/CSS/JavaScript
  - Browser Extension API (e.g., Chrome Extension API)
  
- **Backend**:
  - Python
  - Flask (Web framework)
  - LangChain (for LLM and document loading)
  - FAISS (for vector database)
  
## Setup Instructions

1. **Clone Repository**: `git clone https://github.com/your/repository.git`
2. **Backend Setup**:
   - Navigate to the `backend` directory.
   - Install dependencies: `pip install -r requirements.txt`
   - Run the backend server: `python app.py`
   
3. **Extension Setup**:
   - Open your browser (e.g., Chrome, Firefox).
   - Go to Extensions settings.
   - Enable Developer mode.
   - Load unpacked extension and select the `extension` directory.

4. **Usage**:
   - Click on the extension icon in your browser.
   - Ask a query about the currently open website.
   - The extension sends the query to the backend.
   - The backend processes the query using LLM and returns a response.

## Example

- **Query**: "What is the main topic of this webpage?"
- **Response**: "The main topic of this webpage is..."

## License

This project is licensed under the [MIT License](link-to-license).
