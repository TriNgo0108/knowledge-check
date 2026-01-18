
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    print("GEMINI_API_KEY not found in .env")
    # For listing models, sometimes you need a key.
    # If the user doesn't have it set, we can't verify via API.
    exit(1)

genai.configure(api_key=api_key)

try:
    print("Listing available models...")
    for m in genai.list_models():
        if "gemini" in m.name or "gemma" in m.name:
            print(f"name: {m.name}")
            print(f"description: {m.description}")
            print(f"supported_generation_methods: {m.supported_generation_methods}")
            print("-" * 20)
except Exception as e:
    print(f"Error listing models: {e}")
