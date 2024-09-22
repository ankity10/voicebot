---
sidebar_label: 'Adding Knowledgebase'
sidebar_position: 5
title: Adding Knowledgebase to Voiceagent
---

Adding a knowledgebase document to a voiceagent will add to the knowledge of voiceagent. Voiceagent will make use of this information while talking to users. 


### 1. Upload a Knowledgebase Document Using Python SDK

```python
import plivo

client = plivo.RestClient('<auth_id>','<auth_token>')

kb = ''
with open("Features.pdf", "rb") as file:
    files = {"file": file}
    kb = client.knowledgebase.create(**files)
    print(kb)
```

### 2. Uploaded Knowledgebase Document

```json
{
  "id": "285f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Features.pdf",
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
  "websocket_url": "wss://api.example.com/v1/Account/{auth_id}/Voiceagent/{voiceagent_id}/connect",
  "inbound_call_url": "https://api.plivo.com/v1/Account/{auth_id}/Voiceagent/{voiceagent_id}/inbound_call",
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
  "callTimeout": 30
}
```