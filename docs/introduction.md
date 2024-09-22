---
sidebar_label: 'Introduction'
sidebar_position: 1
---

# Introduction to AI Voice Agents

AI voice agents are LLM based programs that can answer questions based on the knowledge they have. They can also perform tasks as per the users instructions.

AI voice agents offer several advantages to businesses across industries by improving efficiency, enhancing customer experience, and reducing costs.




## How Voice Agents Works With Plivo

Voiceagents make use of audio streams to get the audio from a live call in real time and respond to it in milliseconds using bidirectional websocket connection. 

### Inbound Calls Using Voiceagent

Inbound calls are the calls received by Plivo. You will need to associate the inbound call url of a voiceagent to an application and then map this application to a number to receive calls by voiceagent. [Learn how to create outbound calls using voiceagent.](Inbound%20Calls%20with%20Voiceagent.md)

![Inbound voiceagent call handling](/img/inbound_voicebot_v1.svg)


### Outbound Calls Using Voiceagent

Outbound calls are the calls initiated by your application or client SDK. You will use Voiceagent's websocket to start an audio stream to the agent. [Learn how to create outbound calls using voiceagent.](Outbound%20Calls%20with%20Voiceagent.md)

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




