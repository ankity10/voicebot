---
sidebar_label: 'Adding Functions'
sidebar_position: 4
title: Adding Functions to Voicebot
---

### 1. Use Python SDK to Create a Function
In this example we will create a `callTransfer` function. We will provide it a `handler_url` along with other details. We will also provide the fixed parameters. `fixedParameters` has a `transferToNumber` to be used by handler_url to transfer the call.


```python
import plivo

client = plivo.RestClient('<auth_id>','<auth_token>')

function_payload = {
    "name": "callTransfer",
    "handler_url": "https://yourapp.com/handle-transfer-call",

    "description": "This function transfers the call to a human agent when a user requests.",
    "userParameters": [
    ],
    "fixedParameters": [
        {
            "name": "transferToNumber",
            "value": "+91 8080808080"
        }
    ]
}

function = client.functions.create(**function_payload)
print(function)

```

### 2. Newly Created Function Object

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "callTransfer",
  "handler_url": "https://yourapp.com/handle-transfer-call",
  "description": "This function transfers the call to a human agent when a user requests.",
  "userParameters": [
  ],
  "fixedParameters": [
    {
      "name": "transferToNumber",
      "value": "+91 8080808080"
    }
  ]
}
```

### 3. Updating the Voicebot With Function Id

```python
voicebot_update_payload = {
    "function_ids" : [function.id]
}

client.voicebot.update(**voicebot_update_payload)
updated_voicebot = client.voicebots.get(id=voicebot.id)
print(updated_voicebot)
```

### 4. Updated Voicebot With Function Associated With It

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
      '497f6eca-6276-4993-bfeb-53cbbbba6f08'
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