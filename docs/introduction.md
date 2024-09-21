---
sidebar_label: 'Introduction'
sidebar_position: 1
---

# Introduction to AI Voice Bots

AI voice bots are LLM based programs that can answer questions based on the knowledge they have. They can also perform tasks as per the users instructions.

AI voice bots offer several advantages to businesses across industries by improving efficiency, enhancing customer experience, and reducing costs.




## How Voice Bots Works With Plivo

Voicebots make use of audio streams to get the audio from a live call in real time and respond to it in milliseconds using bidirectional websocket connection. 

### Inbound Calls Using Voicebot

Inbound calls are the calls received by Plivo. You will need to associate the inbound call url of a voicebot to an application and then map this application to a number to receive calls by voicebot. [Learn how to create outbound calls using voicebot.](Inbound%20Calls%20with%20Voicebot.md)

![Inbound voicebot call handling](/img/inbound_voicebot_v1.svg)


### Outbound Calls Using Voicebot

Outbound calls are the calls initiated by your application or client SDK. You will use Voicebot's websocket to start an audio stream to the bot. [Learn how to create outbound calls using voicebot.](Outbound%20Calls%20with%20Voicebot.md)

![Outbound voicebot call handling](/img/outbound_voicebot_v1.svg)

### Functional Scope of APIs

1. **[Voice Bot API]** Create voice bots
    - Create, Get, Delete, Update, List
    - Chat with a bot
2. **[Functions API]** Perform actions through voice bots by adding functions in them
    - Create, Delete, Update, Get, List
    - Bots can perform actions like booking appointment, placing orders, etc.
3. **[Knowledgebase API]** Add additional knowledge to these voice bots
    - Create, Get, Delete, Update, List
    - Adding knowledgebase allows voice bots to have context, this improves answer quality and reduces hallucination.

4. **[Voice  Bot Usage for Inbound]** Let the voice bots answer inbound calls
 
5. **[Voice  Bot Usage for Outbound]** Let the voice bots make outbound calls




