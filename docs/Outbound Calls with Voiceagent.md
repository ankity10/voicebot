---
sidebar_label: 'Outbound Calls with Voice Agent'
sidebar_position: 6
title: Make Outbound Calls with Voice Agent
---

### Steps

1. Setup Answer url in your application and start audio streaming.
2. Make an outbound call using SDK


### 1. Setup Answer URL handler function
This function will return `<Stream>` XML element to start the audio streaming to voiceagent websocket url

```python
import plivo
from plivo import plivoxml

client = plivo.RestClient('<auth_id>','<auth_token>')

voiceagent = client.voiceagents.get(id='<voiceagent_id>')


# This function handles answer url callbacks rom Plivo
@app.route('<answer_url>')
def answer_url_handler():

    stream_element = plivoxml.StreamElement(voiceagent.websocket_url, 
                                            bidirectional= "true",
                                            audioTrack="agenth",
                                            streamTimeout=120,
                                            statusCallbackMethod="POST",
                                            statusCallbackUrl="https://yourdomain.com/events/",
                                            contentType="audio/x-l16;rate=8000",
                                            extraHeaders="Test1=Test2,Test3=Test4")
    
    response = plivoxml.ResponseElement().add(stream_element)
    return response.to_string()
```

### 2. Make Outbound Call

```python
# outbound call
call_made = client.calls.create(
    from_='<caller_id>',
    to_='<destination_number>',
    answer_url='https://<answer.url>'
)
```


