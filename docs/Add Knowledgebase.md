---
sidebar_label: 'Adding Knowledgebase'
sidebar_position: 5
title: Adding Knowledgebase to Voiceagent
---

## What is a knowledgebase?

Knowledge base is a list of documents that provides additional context to the voice agent, which it utilizes when interacting with users.

### Use Cases
1. Provide the customer service voice agent about the company's services, so it can effectively respond to user inquiries regarding those services.
2. Provide the order-taking voice agent with the rate card for the menu items.

## Add a Knowledgebase Document

In this example, we will add a pdf file to knowledgebase which has list of services provided by the company.

### 1. Upload a Knowledgebase Document Using Python SDK

```python
import plivo

client = plivo.RestClient('<auth_id>','<auth_token>')

kb = ''
with open("services.pdf", "rb") as file:
    files = {"file": file}
    kb = client.knowledgebase.create(**files)
    print(kb)
```

### 2. Uploaded Knowledgebase Document

```json
{
  "id": "285f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "services.pdf",
  "url": "https://storage.plivo.com/Features.pdf"
}
```

### 3. Updating the Voiceagent With knowledgebase Id


```python
voiceagent_kb_update_payload = {
    "knowledgebase_ids": [kb.id],
}

client.voiceagent.update(**voiceagent_kb_update_payload)
updated_voiceagent = client.voiceagents.get(id=voiceagent.id)
print(updated_voiceagent)
```

### 4. Updated Voiceagent Object with Knowledgebase Id Associated With It

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Jack",
  "welcome_message": "Hi, I am Jack. How can I help you today?",
  "websocket_url": "wss://api.example.com/v1/Account/{auth_id}/Voiceagent/{voiceagent_id}/connect",
  "call_url": "https://api.plivo.com/v1/Account/{auth_id}/Voiceagent/{voiceagent_id}/talk",
  "prompt": "You will keep your sentences short and crisp. You will never reply with more than 2 sentences at a time. You will stick to context throughout. You are test agent, a highly trained Front Desk agent from test. Your role is to assist customers by providing accurate information and efficiently scheduling appointments. Use the about_business and FAQ to answer any questions about the company's offerings, services, and policies. Always stay polite, professional, and concise.",
  "answer_llm": {
    "provider": "openapi",
    "model": "gpt-3.5"
  },
  "knowledgebase_ids": [
    "285f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "function_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "tts": {
    "provider": "deepgram",
    "voice": "angus"
  },
  "stt": {
    "provider": "deepgram",
    "language": "af"
  },
  "call_timeout": 30
}
```