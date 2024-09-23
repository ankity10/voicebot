---
sidebar_label: 'Outbound Calls with Voice Agent'
sidebar_position: 6
title: Make Outbound Calls with Voice Agent
---

Outbound calls are phone calls initiated by your business to customers or external parties.

### Steps

1. Use voice agent's `call_url` as answer URL
2. Make an outbound call using SDK


### 1. Use Voice Agent's `call_url` as Answer URL
Voice agent's `call_url` initiates an audio stream using `<Stream>` xml object.



### 2. Make Outbound Call

Use Python SDK to make the call and use voice agent's `call_url` as `answer_url`

```python
import plivo

client = plivo.RestClient(auth_id='<auth_id>', auth_token='<auth_token>')

# get your voice agent using id
voiceagent = client.voiceagents.get(id='<voice agent id>')

# outbound call
call_made = client.calls.create(
    from_='<caller_id>',
    to_='<destination_number>',
    answer_url=voiceagent.call_url  # using voice agent's call url as answer url
)
```


