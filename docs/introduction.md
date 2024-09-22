---
sidebar_label: 'Introduction'
sidebar_position: 1
---

# Introduction to AI Voice Agents

![voice agent](/img/voice_bot_icon.svg)

AI voice agents are programs powered by large language models (LLMs) designed to answer questions based on their knowledge and execute tasks according to user instructions.

These agents provide significant benefits to businesses across various industries by streamlining operations, enhancing customer experiences, and reducing costs.



## How Voice Agents Works With Plivo

:::info

Voice agents make use of `audio streams` to get the audio from a live call in real time and respond to it in milliseconds using bidirectional websocket connection.

:::


### Inbound Calls Using Voice Agent

Inbound calls are the calls received by Plivo. You will need to associate the `inbound_call_url`  of a voice agent to an application and then map this application to a number to receive calls by voice agent. [Learn how to create outbound calls using voiceagent.](Inbound%20Calls%20with%20Voiceagent.md)

1. End user dials calls to Plivo number.
2. Plivo platform calls the answer url configure in the mapped application for this number.
3. Voice Agent instructs Plivo using `<Stream>` XML to start the real time call audio stream.
4. Plivo starts sending audio call streaming to voice agent. 
5. Voice agent uses same websocket connection to send AI generated audio response.

![Inbound voiceagent call handling](/img/inbound_voicebot_v1.svg)


### Outbound Calls Using Voice Agent

Outbound calls are the calls initiated by your application or client SDK. You will use Voiceagent's websocket to start an audio stream to the agent. [Learn how to create outbound calls using voiceagent.](Outbound%20Calls%20with%20Voiceagent.md)

1. Your application initiates a call using an `answer_url`.
2. Plivo platform calls this number
3. Once the call is connected Plivo platform would initiate a webhook. 
4. Plivo platform will send webhook on the `answer_url` to control the call flow.
5. Your app server which handles `answer_url` will then select a voice agent and use it's websocket url to send Plivo platform stream audio instruction using `<Stream>`
6. Plivo starts sending real time audio call stream to voice agent.
7. Voice agent uses same websocket connection to send AI generated audio response.



![Outbound voiceagent call handling](/img/outbound_voicebot_v1.svg)

### Functional Scope of APIs

1. **Voice Agent API** Create voice agents
    - Create, Get, Delete, Update, List
    - Chat with a agent
2. **Functions API** Perform actions through voice agents by adding functions in them
    - Create, Delete, Update, Get, List
    - Agents can perform actions like booking appointment, placing orders, etc.
3. **Knowledgebase API** Add additional knowledge to these voice agents
    - Create, Get, Delete, Update, List
    - Adding knowledgebase allows voice agents to have context, this improves answer quality and reduces hallucination.

4. **Voice  Agent Usage for Inbound** Let the voice agents answer inbound calls
 
5. **Voice  Agent Usage for Outbound** Let the voice agents make outbound calls




