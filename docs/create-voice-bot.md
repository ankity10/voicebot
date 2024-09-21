---
sidebar_label: 'Create Voice bot'
sidebar_position: 3
title: Create Voice bot
---

### 1. Use Python SDK to Create Voicebot
This Python SDK follows same specifications and function interface as Plivo's official Python SDK.

```python

import plivo

client = plivo.RestClient(auth_id='<auth_id>', auth_token='<auth_token>')

voicebot_payload = {
    "name": "Jack",
    "prompt": ("You will keep your sentences short and crisp. You will never reply with more than 2 sentences at a time. "
               "You will stick to context throughout. You are test agent, a highly trained Front Desk agent from test. "
               "Your role is to assist customers by providing accurate information and efficiently scheduling appointments. "
               "Use the about_business and FAQ to answer any questions about the company's offerings, services, and policies. "
               "Always stay polite, professional, and concise."),
    "answer_llm": {
        "provider": "openapi",
        "model": "gpt-4o"
    },

    "tts": {
        "provider": "deepgram",
        "voice": "angus"
    },
    "stt": {
        "provider": "deepgram",
        "language": "en"
    },
    "callTimeout": 30
}

voicebot = client.voicebots.create(
    **voicebot_payload
)


```

### 2. Newly Created Voicebot Object

The newly created voicebot object will not have any functions and knowledgebase associated with it. They have to be added separately.

```python
print(voicebot)
```

```json
{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jack",
    "websocket_url": "wss://api.example.com/v1/Account/{auth_id}/Voicebot/{voicebot_id}/connect",
    "inbound_call_url": "https://api.plivo.com/v1/Account/{auth_id}/Voicebot/{voicebot_id}/inbound_call",
    "prompt": (
        "You will keep your sentences short and crisp. You will never reply with more than 2 sentences at a time. "
        "You will stick to context throughout. You are test agent, a highly trained Front Desk agent from test. "
        "Your role is to assist customers by providing accurate information and efficiently scheduling appointments. "
        "Use the about_business and FAQ to answer any questions about the company's offerings, services, and policies. "
        "Always stay polite, professional, and concise."
    ),
    "answer_llm": {
        "provider": "openapi",
        "model": "gpt-3.5"
    },
    "knowledgebase_ids": [
    ],
    "function_ids": [
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