---
sidebar_label: 'Steps to use a Voice Agent'
sidebar_position: 2
title: Steps to Use a Voice Agent
---



![Steps to create a voice agent](/img/steps.svg)

### Steps to Use a Voice Agent

1. [Create voice agent](create-voice-agent.md):
   - A voice agent is an object that includes LLM information such as the LLM provider and the specific model to be used, along with a behavior prompt and details about the speech-to-text (STT) and text-to-speech (TTS) models.
2. [Add function](adding%20functions.md):
   - A function allows an LLM to interact with other software systems using REST API calls. 
3. [Add knowledge base](Add%20Knowledgebase.md):
   - A knowledge base provides additional contextual information to the LLM, ensuring its responses are more relevant.
4. [Receive inbound calls](Inbound%20Calls%20with%20Voiceagent.md) on voice agent's `inbound_call_url`.
5. [Make outbound calls](Outbound%20Calls%20with%20Voiceagent.md) and use voice agent's `websocket_url` to start a bidirectional audio stream


