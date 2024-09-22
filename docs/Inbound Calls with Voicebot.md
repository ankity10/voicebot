---
sidebar_label: 'Inbound Calls with Voiceagent'
sidebar_position: 7
title: Make Inbound Calls with Voiceagent
---

### Steps
1. Copy voiceagent inbound  url
2. Create a XML application
    - Use voiceagent inbound url as answer url in this application
3. Associate an inbound number with this application


### 1. Get Inbound Call URL From Voiceagent

```python
import plivo

client = plivo.RestClient('<auth_id>','<auth_token>')

voiceagent = client.voiceagents.get(id='<voiceagent_id>')


```

### 2. Create an Application

We will use `inbound_call_url` as `answer_url` in this application

```python

response = client.applications.create(
   app_name='Test Application',
   answer_url=voiceagent.inbound_call_url, )
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

### 3. Associate an Inbound Number With Application

```python
# using app id from above code
client.numbers.update(
    number='17609915566',
    app_id='15784735442685051', )

```

