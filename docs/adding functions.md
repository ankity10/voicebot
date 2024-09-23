---
sidebar_label: 'Adding Functions'
sidebar_position: 4
title: Adding Functions to Voice Agent
---

## What are Functions?
A function allows an LLM to interact with other software systems using REST API calls.

### Use Cases

1. Giving order status
2. Booking appointments
3. Transferring calls
4. Placing orders

### Types of Function
1. Functions with user inputs: These functions need specific information from the user at the time of the call. 
2. Functions with fixed inputs: These function use a predefined parameters that do not change. It doesn't need any user input.

:::info
Functions can have both `user_parameters` and `fixed_parameters`
:::

### 1. Create a Function with User inputs

In this example we will create a `orderStatus` function and we will provide it a `handler_url` along with other details.

1. `name`: Name of the function.
2. `handler_url`: This is the URL where LLM will make API request.
3. `description`: This description is given to the LLM so this has to provide detailed explanation of what the function does.
4. `user_parameters`: We need to provide what parameters LLM should get from user before making the API call.
5. `fix_parameters`: Defines fixed parameters which will go in the API call as it is.

```python
import plivo

client = plivo.RestClient('<auth_id>','<auth_token>')

function_payload = {
    "name": "getOrderStatus",
    "handler_url": "https://api.yourservice.com/order-status",
    "description": "This function retrieves the current status of a user's order based on the provided order ID.",
    "user_parameters": [
        {
            "name": "order_id",
            "type": "string",
            "description": "The unique identifier of the order.",
            "required": true
        }
    ],
    "fixed_parameters": [
    ]
}

function = client.functions.create(**function_payload)
print(function)

```

#### Newly Created Function Object with User Inputs

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "getOrderStatus",
  "handler_url": "https://api.yourservice.com/order-status",
  "description": "This function retrieves the current status of a user's order based on the provided order ID.",
  "user_parameters": [
    {
      "name": "order_id",
      "type": "string",
      "description": "The unique identifier of the order.",
      "required": true
    }
  ],
  "fixed_parameters": [
  ]
}
```


### 2. Create a Function with Fixed inputs

In this example we will create a `callTransfer` function and we will provide it a `handler_url` along with other details.

1. `name`: Name of the function.
   - callTransfer
2. `handler_url`: This is the URL where LLM will make API request.
   - https://api.yourservice.com/call-transfer
3. `description`: This description is given to the LLM so this has to provide detailed explanation of what the function does.
   - This function transfers the call when requested by the user.
4. `user_parameters`: Define parameters needed from the user to make the API call to the function.
   - None
5. `fix_parameters`: Defines fixed parameters which will go in the API call as it is.
   - transfer_call_to

```python
import plivo

client = plivo.RestClient('<auth_id>','<auth_token>')

function_payload = {
    "name": "callTransfer",
    "handler_url": "https://api.yourservice.com/call-transfer",
    "description": "This function transfers the call when requested by the user.",
    "user_parameters": [
    ],
    "fixed_parameters": [
        {
            "name": "transfer_call_to",
            "value": "+91111111111"
        }
    ]
}

function = client.functions.create(**function_payload)
print(function)

```

#### Newly Created Function Object with Fixed Inputs

```json
{
  "id": "195f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "callTransfer",
  "handler_url": "https://api.yourservice.com/call-transfer",
  "description": "This function transfers the call when requested by the user.",
  "user_parameters": [
  ],
  "fixed_parameters": [
    {
      "name": "transfer_call_to",
      "value": "+91111111111"
    }
  ]
}
```



### 3. Updating the Voiceagent With Function Id

```python
voiceagent_update_payload = {
    "function_ids" : [function.id]
}

client.voiceagent.update(**voiceagent_update_payload)
updated_voiceagent = client.voiceagents.get(id=voiceagent.id)
print(updated_voiceagent)
```

### 4. Updated Voiceagent With Function Associated With It

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
    "call_timeout": 30
}
```

## Function Object Definition

| Field            | Type             | Description                                                        |
|------------------|------------------|--------------------------------------------------------------------|
| id               | string \<uuid>   | Unique identifier for the function.                                |
| name             | string           | The name of the function.                                          |
| handler_url      | string           | This URL will receive a webhook when the LLM makes a function call.|
| description      | string           | A brief description of the function.                               |
| user_parameters  | Array of objects | List of user-defined parameters for the function.                  |
| user_parameters.name      | string           | The name of the parameter.                                         |
| user_parameters.type      | string           | The data type of the parameter (e.g., string, number, etc.).        |
| user_parameters.description| string           | Description of the parameter.                                      |
| user_parameters.required  | boolean          | Indicates if the parameter is required.                            |
| fixed_parameters | Array of objects | A list of fixed parameters for the function.                       |
| fixed_parameters.name      | string           | Name of the fixed parameter.                                       |
| fixed_parameters.value     | string           | Value of the fixed parameter.                                      |


