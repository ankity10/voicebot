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

## Create a Voice Agent
1. Use Python SDK to create voice agent

### 1. Use Python SDK to Create Voice Agent


```python

import plivo

client = plivo.RestClient(auth_id='<auth_id>', auth_token='<auth_token>')

voiceagent_payload = {
    "name": "Jack",
    "welcome_message": "Hi, I am Jack. How can I help you today?",
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
    "call_timeout": 30
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
    "welcome_message": "Hi, I am Jack. How can I help you today?",
    "websocket_url": "wss://api.example.com/v1/Account/{auth_id}/Voiceagent/{voiceagent_id}/connect",
    "call_url": "https://api.plivo.com/v1/Account/{auth_id}/Voiceagent/{voiceagent_id}/talk",
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
    "call_timeout": 30
}
```

## Voice Agent Object Definition

| Field               | Type                     | Description                                                                 |
|---------------------|--------------------------|-----------------------------------------------------------------------------|
| id                  | string \<uuid>           | The unique ID of the voice agent.                                           |
| name                | string                   | The name of the voice agent.                                                |
| welcome_message     | string                   | Voice agent will use this message as the first message when connected to a call. |
| websocket_url       | string                   | The URL for WebSocket communication with the voice agent.                   |
| call_url            | string                   | URL to be used to answer calls.                                             |
| prompt              | string                   | The initial prompt for the agent to set context.                            |
| answer_llm          | object                   | The configuration for the LLM used to answer questions.                     |
| answer_llm.provider | string                   | Enum: "openapi", "anthropic"                                                |
| answer_llm.model    | string                   | Enum: "gpt-3.5", "gpt-4o", "gpt-4o mini", "claude 3.5 haiku", "claude 3.5 Sonnet", "Claude 3.5 Opus" |
| knowledgebase_ids   | Array of strings \<uuid> | IDs of the knowledge bases used by the voice agent.                         |
| function_ids        | Array of strings \<uuid> | IDs of functions the voice agent can perform.                               |
| tts                 | object                   | The configuration for text-to-speech.                                       |
| tts.provider        | string                   | Enum: "deepgram", "openai"                                                  |
| tts.voice           | string                   | Enum: "angus", "helios", "stella", "hera", "orpheus", "lune", "orion", "athena", "asteria", "arcas", "perseus", "Zeus", "alloy", "echo", "fable", "nova", "onyx", "shimmer" |
| stt                 | object                   | The configuration for speech-to-text.                                       |
| stt.provider        | string                   | Enum: "deepgram", "openai"                                                  |
| stt.language        | string                   | Enum: "af", "ar", "hy", "az", "be", "bs", "bg", "ca", "zh", "hr", "cs", "da", "nl", "en", "et", "fi", "fr", "gl", "de", "el", "he", "hi", "hu", "is", "id", "it", "ja", "kn", "kk", "ko", "lv", "lt", "mk", "ms", "mr", "mi", "ne", "no", "fa", "pl", "pt", "ro", "ru", "sr", "sk", "sl", "es", "sw", "sv", "tl", "ta", "th", "tr", "uk", "ur", "vi", "cy" |
| call_timeout         | integer                  | Time in seconds before the call times out.                                  |
