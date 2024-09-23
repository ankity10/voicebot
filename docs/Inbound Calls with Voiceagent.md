---
sidebar_label: 'Inbound Calls with Voice Agent'
sidebar_position: 7
title: Make Inbound Calls with Voice Agent
---


Inbound calls are phone calls initiated by customers or external parties to your business.

### Steps
1. Copy voiceagent `call_url`
2. Create an XML application
    - Use voice agent's `call_url` as `answer_url` in this application
3. Associate a phone number with this application


### 1. Get `call_url` From Voice Agent

```python
import plivo

client = plivo.RestClient('<auth_id>','<auth_token>')

voiceagent = client.voiceagents.get(id='<voiceagent_id>')


```

### 2. Create an XML Application

We will use voice agent's `call_url` as `answer_url` in this application

```python

response = client.applications.create(
   app_name='Test Application',
   answer_url=voiceagent.call_url, )
print(response)

```

Newly created application object
```json
{
  "message": "created",
  "app_id": "15784735442685051",
  "api_id": "5a9fcb68-582d-11e1-86da-6ff39efcb949"
}
```

### 3. Associate a Phone Number With Application

```python
# using app id from above code
client.numbers.update(
    number='17609915566',
    app_id='15784735442685051', )

```

:::info
Once the setup is complete, the voice agent will automatically answer any calls received by Plivo on this number.
:::

