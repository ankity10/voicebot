---
sidebar_label: 'Create Voice Agent'
sidebar_position: 3
title: Create Voice Agent
---

### What is a Voice Agent? 
A voice agent is an object that includes LLM information such as the LLM provider and the specific model to be used, along with a behavior prompt and details about the speech-to-text (STT) and text-to-speech (TTS) models.


:::info
The Python SDK used in example below follows same specifications api and function interface as Plivo's official Python SDK.
:::

### Steps
1. Use Python SDK to create voice agent

### 1. Use Python SDK to Create Voice Agent


```python

import plivo

client = plivo.RestClient(auth_id='<auth_id>', auth_token='<auth_token>')

voiceagent_payload = {
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

voiceagent = client.voiceagents.create(
    **voiceagent_payload
)
print(voiceagent)


```

### 2. Newly Created Voice Agent Object

:::info
The newly created voice agent object will not have any functions and knowledgebase associated with it. They have to be added separately.
:::

```json
{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jack",
    "websocket_url": "wss://api.example.com/v1/Account/{auth_id}/Voiceagent/{voiceagent_id}/connect",
    "inbound_call_url": "https://api.plivo.com/v1/Account/{auth_id}/Voiceagent/{voiceagent_id}/inbound_call",
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