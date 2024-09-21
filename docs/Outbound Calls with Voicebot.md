---
sidebar_label: 'Outbound Calls with Voicebot'
sidebar_position: 6
title: Make Outbound Calls with Voicebot
---

### Steps

1. Setup Answer url in your application and start audio streaming.
2. Make an outbound call using SDK


### 1. Setup Answer URL handler function
This function will return `<Stream>` XML element to start the audio streaming to voicebot websocket url

```python
import plivo
from plivo import plivoxml

client = plivo.RestClient('<auth_id>','<auth_token>')

voicebot = client.voicebots.get(id='<voicebot_id>')


# This function handles answer url callbacks rom Plivo
@app.route('<answer_url>')
def answer_url_handler():

    stream_element = plivoxml.StreamElement(voicebot.websocket_url, 
                                            bidirectional= "true",
                                            audioTrack="both",
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


