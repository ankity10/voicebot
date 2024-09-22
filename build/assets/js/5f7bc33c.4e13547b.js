"use strict";(self.webpackChunkvoicebot_docs=self.webpackChunkvoicebot_docs||[]).push([[241],{6799:e=>{e.exports=JSON.parse('{"url":"redocusaurus/plugin-redoc-0.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.0","info":{"title":"Voicebot API","description":"API for creating, updating, retrieving, and managing voicebots on Plivo\'s platform. It includes real-time chat interaction via WebSocket or REST API.","version":"1.0.0"},"servers":[{"url":"https://api.plivo.com/v1/Account/{auth_id}","description":"Plivo Voicebot API Server"}],"tags":[{"name":"Voicebot","description":"API for managing voicebots"}],"paths":{"/Voicebot":{"post":{"summary":"Create a new voicebot","description":"This endpoint creates a new voicebot with specified parameters, such as name, prompt, knowledgebase, TTS/STT providers, etc.","tags":["Voicebot"],"requestBody":{"description":"Details for the new voicebot","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/VoicebotRequest"}}}},"responses":{"201":{"description":"Voicebot successfully created.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/VoicebotResponse"}}}},"400":{"description":"Invalid request parameters."},"500":{"description":"Server error while creating the voicebot."}}},"get":{"summary":"List all voicebots","description":"Retrieve a list of all voicebots associated with the given account.","tags":["Voicebot"],"parameters":[{"in":"query","name":"limit","schema":{"type":"integer","default":20},"description":"Number of results to return per page. Defaults to 20."},{"in":"query","name":"offset","schema":{"type":"integer","default":0},"description":"Number of results to skip before starting to return data. Defaults to 0."}],"responses":{"200":{"description":"A list of voicebots was retrieved successfully.","content":{"application/json":{"schema":{"type":"object","properties":{"voicebots":{"type":"array","items":{"$ref":"#/components/schemas/VoicebotResponse"}}}}}}},"500":{"description":"Server error while fetching the list of voicebots."}}}},"/Voicebot/{voicebot_id}":{"get":{"summary":"Retrieve a voicebot by ID","description":"Fetches details of a specific voicebot using its unique ID.","tags":["Voicebot"],"parameters":[{"in":"path","name":"voicebot_id","required":true,"schema":{"type":"string"},"description":"The unique ID of the voicebot."}],"responses":{"200":{"description":"Voicebot retrieved successfully.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/VoicebotResponse"}}}},"404":{"description":"Voicebot not found."},"500":{"description":"Server error while fetching the voicebot."}}},"patch":{"summary":"Update an existing voicebot","description":"Modify details of an existing voicebot by providing its ID and new attributes.","tags":["Voicebot"],"parameters":[{"in":"path","name":"voicebot_id","required":true,"schema":{"type":"string"},"description":"The unique ID of the voicebot."}],"requestBody":{"description":"Attributes to update in the voicebot.","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/VoicebotUpdateRequest"}}}},"responses":{"204":{"description":"Voicebot updated successfully."},"400":{"description":"Invalid request parameters."},"404":{"description":"Voicebot not found."},"500":{"description":"Server error while updating the voicebot."}}},"delete":{"summary":"Delete a voicebot","description":"Remove an existing voicebot by providing its ID.","tags":["Voicebot"],"parameters":[{"in":"path","name":"voicebot_id","required":true,"schema":{"type":"string"},"description":"The unique ID of the voicebot."}],"responses":{"204":{"description":"Voicebot deleted successfully."},"404":{"description":"Voicebot not found."},"500":{"description":"Server error while deleting the voicebot."}}}},"/Voicebot/{voicebot_id}/chat":{"post":{"summary":"Chat with a voicebot","description":"Engage in a conversation with a voicebot by sending a message.","tags":["Voicebot"],"parameters":[{"in":"path","name":"voicebot_id","required":true,"schema":{"type":"string"},"description":"The unique ID of the voicebot."}],"requestBody":{"description":"The message to send to the voicebot.","required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"message":{"type":"string","description":"User\'s message for the voice bot.","example":"Can you tell me more about the services you provide?"}}}}}},"responses":{"200":{"description":"Voicebot response received successfully.","content":{"application/json":{"schema":{"type":"object","properties":{"response":{"type":"string","description":"Response from the voice bot","example":"We provide live chat applications, would you like to know more?"}}}}}},"400":{"description":"Invalid request parameters."},"404":{"description":"Voicebot not found."},"500":{"description":"Server error while communicating with the voicebot."}}}},"/Voicebot/{voicebot_id}/inbound_call":{"post":{"summary":"Receive inbound calls","description":"This URL to be used as answer URL in your plivo applications for inbound calls.","tags":["Voicebot"],"parameters":[{"in":"path","name":"voicebot_id","required":true,"schema":{"type":"string"},"description":"The unique ID of the voicebot."}],"requestBody":{"description":"This request body is sent by Plivo server to voicebots for inbound calls.","required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"CallUUID":{"type":"string","description":"A unique identifier for this call.","example":"497f6eca-6276-4993-bfeb-53cbbbba6f08"},"From":{"type":"string","description":"The phone number of the party that initiated the call along with the country code. If the call is inbound, it is the caller\'s caller ID. If outbound, it is the phone number specified as the caller ID.","example":"+14155552671"},"To":{"type":"string","description":"The phone number of the called party with the country code. If the call is inbound, it is your incoming phone number. If outbound, it is the number you provided to call.","example":"+14155552672"},"ForwardedFrom":{"type":"string","description":"This parameter is set only when the call received by Plivo is a forwarded call. Its value depends on the caller\u2019s carrier. Not all carriers pass this information.","example":"+14155552673"},"CallStatus":{"type":"string","description":"Indicates the status of the call. It can be \'ringing\', \'in-progress\', or \'completed\'. For outbound calls, it can also be \'busy\', \'failed\', \'timeout\', or \'no-answer\'.","enum":["ringing","in-progress","completed","busy","failed","timeout","no-answer"],"example":"completed"},"Direction":{"type":"string","description":"Indicates the direction of the call. It can either be \'inbound\' or \'outbound\'.","enum":["inbound","outbound"],"example":"inbound"},"ALegUUID":{"type":"string","description":"A unique identifier for the first leg of an outbound call. Not present for inbound calls.","example":"497f6eca-6276-4993-bfeb-53cbbbba6f09"},"ALegRequestUUID":{"type":"string","description":"A unique request identifier returned by Plivo for an API request during an outbound call. Not present for inbound calls.","example":"497f6eca-6276-4993-bfeb-53cbbbba6f10"}}}}}},"responses":{"200":{"description":"Voicebot started audio stream.","content":{"application/json":{"schema":{"type":"object","properties":{"response":{"type":"string","description":"XML response to start the audio stream using `<Response>` and `<Stream>` objects","example":"<Response><Stream bidirectional=\\"false\\" streamTimeout=\\"120\\" audioTrack=\\"both\\" statusCallbackUrl=\\"https://<yourdomain>.com/events/\\" statusCallbackMethod=\\"POST\\" contentType=\\"raw\\">wss://yourstream.websocket.io/audiostream</Stream></Response>"}}}}}},"400":{"description":"Invalid request parameters."},"404":{"description":"Voicebot not found."},"500":{"description":"Server error while communicating with the voicebot."}}}},"/Function":{"post":{"summary":"Create a function","description":"Create a new function in the system.","tags":["Functions"],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/FunctionCreateRequest"}}}},"responses":{"201":{"description":"The function was created successfully."},"400":{"description":"Bad request, invalid data provided."}}},"get":{"summary":"List all functions","description":"Retrieve a list of all functions associated with the given account.","tags":["Functions"],"responses":{"200":{"description":"A list of functions was retrieved successfully.","content":{"application/json":{"schema":{"type":"object","properties":{"functions":{"type":"array","items":{"$ref":"#/components/schemas/Function"}}}}}}},"500":{"description":"Server error while fetching the list of functions."}}}},"/Function/{function_id}":{"get":{"summary":"Get a function","description":"Retrieve details of a specific function using its ID.","tags":["Functions"],"parameters":[{"in":"path","name":"function_id","required":true,"schema":{"type":"string"},"description":"The unique ID of the function."}],"responses":{"200":{"description":"A function was successfully retrieved.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Function"}}}},"404":{"description":"Function not found."}}},"patch":{"summary":"Update a function","description":"Update an existing function by providing its ID.","tags":["Functions"],"parameters":[{"in":"path","name":"function_id","required":true,"schema":{"type":"string"},"description":"The unique ID of the function."}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/FunctionCreateRequest"}}}},"responses":{"204":{"description":"The function was updated successfully."},"400":{"description":"Invalid request data."},"404":{"description":"Function not found."}}},"delete":{"summary":"Delete a function","description":"Delete a specific function using its ID.","tags":["Functions"],"parameters":[{"in":"path","name":"function_id","required":true,"schema":{"type":"string"},"description":"The unique ID of the function."}],"responses":{"204":{"description":"Function deleted successfully."},"404":{"description":"Function not found."}}}},"/Knowledgebase":{"post":{"summary":"Add a document","description":"Upload a PDF, DOCX, or Markdown document to the knowledgebase.","tags":["Knowledgebase"],"requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"file":{"type":"string","format":"binary","description":"The file to be uploaded (PDF, DOCX, or Markdown)."}}}}}},"responses":{"201":{"description":"The document was added to the knowledgebase successfully."},"400":{"description":"Invalid file format or request data."}}},"get":{"summary":"List documents","description":"Retrieve a list of all documents in the knowledgebase.","tags":["Knowledgebase"],"responses":{"200":{"description":"A list of documents was retrieved successfully.","content":{"application/json":{"schema":{"type":"object","properties":{"documents":{"type":"array","items":{"$ref":"#/components/schemas/Knowledgebase"}}}},"example":{"documents":[{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","name":"doc1.pdf","url":"https://storage.plivo.com/doc1.pdf"},{"id":"28af6eca-6276-4993-bfeb-53cbbbba6f08","name":"doc2.docx","url":"https://storage.plivo.com/doc2.docx"}]}}}},"500":{"description":"Server error while fetching the list of documents."}}}},"/Knowledgebase/{document_id}":{"get":{"summary":"Get a document","description":"Retrieve details of a specific knowledgebase document using its ID.","tags":["Knowledgebase"],"parameters":[{"in":"path","name":"document_id","required":true,"schema":{"type":"string"},"description":"The unique ID of the knowledgebase document."}],"responses":{"200":{"description":"The document was retrieved successfully.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Knowledgebase"}}}},"404":{"description":"Document not found."}}},"delete":{"summary":"Delete a document","description":"Delete a specific document from the knowledgebase using its ID.","tags":["Knowledgebase"],"parameters":[{"in":"path","name":"document_id","required":true,"schema":{"type":"string"},"description":"The unique ID of the document to be deleted."}],"responses":{"204":{"description":"Document deleted successfully."},"404":{"description":"Document not found."}}},"patch":{"summary":"Update a document","description":"Upload a new PDF, DOCX, or Markdown document to the knowledgebase.","tags":["Knowledgebase"],"requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"file":{"type":"string","format":"binary","description":"The file to be uploaded (PDF, DOCX, or Markdown)."}}}}}},"responses":{"204":{"description":"The document was updated to the knowledgebase successfully."},"400":{"description":"Invalid file format or request data."}}}}},"components":{"schemas":{"VoicebotUpdateRequest":{"type":"object","properties":{"name":{"type":"string","description":"The name of the voicebot.","example":"Jack"},"prompt":{"type":"string","description":"The initial prompt for the bot to set context.","example":"You will keep your sentences short and crisp. You will never reply with more than 2 sentences at a time. You will stick to context throughout. You are test agent, a highly trained Front Desk agent from test. Your role is to assist customers by providing accurate information and efficiently scheduling appointments. Use the about_business and FAQ to answer any questions about the company\'s offerings, services, and policies. Always stay polite, professional, and concise."},"answer_llm":{"type":"object","description":"The configuration for LLM used to answer questions.","properties":{"provider":{"type":"string","enum":["openapi","anthropic"]},"model":{"type":"string","enum":["gpt-3.5","gpt-4o","gpt-4o mini","claude 3.5 haiku","claude 3.5 Sonnet","Claude 3.5 Opus"]}}},"knowledgebase_ids":{"type":"array","items":{"type":"string","format":"uuid"},"description":"IDs of the knowledgebases used by the voicebot."},"function_ids":{"type":"array","items":{"type":"string","format":"uuid"},"description":"IDs of functions the voicebot can perform."},"tts":{"type":"object","description":"The configuration for text-to-speech.","properties":{"provider":{"type":"string","enum":["deepgram","openai"]},"voice":{"type":"string","enum":["angus","helios","stella","hera","orpheus","lune","orion","athena","asteria","arcas","perseus","Zeus","alloy","echo","fable","nova","onyx","shimmer"]}}},"stt":{"type":"object","description":"The configuration for speech-to-text.","properties":{"provider":{"type":"string","enum":["deepgram","openai"]},"language":{"type":"string","enum":["af","ar","hy","az","be","bs","bg","ca","zh","hr","cs","da","nl","en","et","fi","fr","gl","de","el","he","hi","hu","is","id","it","ja","kn","kk","ko","lv","lt","mk","ms","mr","mi","ne","no","fa","pl","pt","ro","ru","sr","sk","sl","es","sw","sv","tl","ta","th","tr","uk","ur","vi","cy"]}}},"callTimeout":{"type":"integer","example":30,"description":"Time in seconds before the call times out."}}},"VoicebotResponse":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"The unique ID of the voicebot."},"name":{"type":"string","description":"The name of the voicebot.","example":"Jack"},"websocket_url":{"type":"string","example":"wss://api.example.com/v1/Account/{auth_id}/Voicebot/{voicebot_id}/connect","description":"The URL for WebSocket communication with the voicebot."},"inbound_call_url":{"type":"string","description":"URL to be used to handle inbound calls.","example":"https://api.plivo.com/v1/Account/{auth_id}/Voicebot/{voicebot_id}/inbound_call"},"prompt":{"type":"string","description":"The initial prompt for the bot to set context.","example":"You will keep your sentences short and crisp. You will never reply with more than 2 sentences at a time. You will stick to context throughout. You are test agent, a highly trained Front Desk agent from test. Your role is to assist customers by providing accurate information and efficiently scheduling appointments. Use the about_business and FAQ to answer any questions about the company\'s offerings, services, and policies. Always stay polite, professional, and concise."},"answer_llm":{"type":"object","description":"The configuration for LLM used to answer questions.","properties":{"provider":{"type":"string","enum":["openapi","anthropic"]},"model":{"type":"string","enum":["gpt-3.5","gpt-4o","gpt-4o mini","claude 3.5 haiku","claude 3.5 Sonnet","Claude 3.5 Opus"]}}},"knowledgebase_ids":{"type":"array","items":{"type":"string","format":"uuid"},"description":"IDs of the knowledgebases used by the voicebot."},"function_ids":{"type":"array","items":{"type":"string","format":"uuid"},"description":"IDs of functions the voicebot can perform."},"tts":{"type":"object","description":"The configuration for text-to-speech.","properties":{"provider":{"type":"string","enum":["deepgram","openai"]},"voice":{"type":"string","enum":["angus","helios","stella","hera","orpheus","lune","orion","athena","asteria","arcas","perseus","Zeus","alloy","echo","fable","nova","onyx","shimmer"]}}},"stt":{"type":"object","description":"The configuration for speech-to-text.","properties":{"provider":{"type":"string","enum":["deepgram","openai"]},"language":{"type":"string","enum":["af","ar","hy","az","be","bs","bg","ca","zh","hr","cs","da","nl","en","et","fi","fr","gl","de","el","he","hi","hu","is","id","it","ja","kn","kk","ko","lv","lt","mk","ms","mr","mi","ne","no","fa","pl","pt","ro","ru","sr","sk","sl","es","sw","sv","tl","ta","th","tr","uk","ur","vi","cy"]}}},"callTimeout":{"type":"integer","example":30,"description":"Time in seconds before the call times out."}}},"VoicebotRequest":{"type":"object","properties":{"name":{"type":"string","description":"The name of the voicebot.","example":"Jack"},"prompt":{"type":"string","description":"The initial prompt for the bot to set context.","example":"You will keep your sentences short and crisp. You will never reply with more than 2 sentences at a time. You will stick to context throughout. You are test agent, a highly trained Front Desk agent from test. Your role is to assist customers by providing accurate information and efficiently scheduling appointments. Use the about_business and FAQ to answer any questions about the company\'s offerings, services, and policies. Always stay polite, professional, and concise."},"answer_llm":{"type":"object","description":"The configuration for LLM used to answer questions.","properties":{"provider":{"type":"string","enum":["openapi","anthropic"]},"model":{"type":"string","enum":["gpt-3.5","gpt-4o","gpt-4o mini","claude 3.5 haiku","claude 3.5 Sonnet","Claude 3.5 Opus"]}}},"knowledgebase_ids":{"type":"array","items":{"type":"string","format":"uuid"},"description":"IDs of the knowledgebases used by the voicebot."},"function_ids":{"type":"array","items":{"type":"string","format":"uuid"},"description":"IDs of functions the voicebot can perform."},"tts":{"type":"object","description":"The configuration for text-to-speech.","properties":{"provider":{"type":"string","enum":["deepgram","openai"]},"voice":{"type":"string","enum":["angus","helios","stella","hera","orpheus","lune","orion","athena","asteria","arcas","perseus","Zeus","alloy","echo","fable","nova","onyx","shimmer"]}}},"stt":{"type":"object","description":"The configuration for speech-to-text.","properties":{"provider":{"type":"string","enum":["deepgram","openai"]},"language":{"type":"string","enum":["af","ar","hy","az","be","bs","bg","ca","zh","hr","cs","da","nl","en","et","fi","fr","gl","de","el","he","hi","hu","is","id","it","ja","kn","kk","ko","lv","lt","mk","ms","mr","mi","ne","no","fa","pl","pt","ro","ru","sr","sk","sl","es","sw","sv","tl","ta","th","tr","uk","ur","vi","cy"]}}},"callTimeout":{"type":"integer","example":30,"description":"Time in seconds before the call times out."}}},"FunctionCreateRequest":{"type":"object","description":"A schema representing a function object.","properties":{"name":{"type":"string","description":"The name of the function.","example":"callTransfer"},"handler_url":{"type":"string","example":"https://yourapp.com/handle-transfer-call","description":"This url will receive a webhook when the LLM makes a function call."},"description":{"type":"string","description":"A brief description of the function.","example":"This function transfer the call to a human agent when a user requests."},"userParameters":{"type":"array","description":"List of user-defined parameters for the function.","items":{"type":"object","properties":{"name":{"type":"string","description":"The name of the parameter.","example":"Email"},"type":{"type":"string","example":"string","description":"The data type of the parameter (e.g., string, number, etc.)."},"description":{"type":"string","example":"This is a valid email address of the user","description":"Description of the parameter."},"required":{"type":"boolean","example":true,"description":"Indicates if the parameter is required."}}}},"fixedParameters":{"type":"array","description":"A list of fixed parameters for the function.","items":{"type":"object","properties":{"name":{"type":"string","description":"Name of the fixed parameter.","example":"transferToNumber"},"value":{"type":"string","description":"Value of the fixed parameter.","example":"+91 8080808080"}}}}}},"Function":{"type":"object","description":"A schema representing a function object.","properties":{"id":{"type":"string","format":"uuid","description":"Unique identifier for the function."},"name":{"type":"string","description":"The name of the function.","example":"callTransfer"},"handler_url":{"type":"string","example":"https://yourapp.com/handle-transfer-call","description":"This url will receive a webhook when the LLM makes a function call."},"description":{"type":"string","description":"A brief description of the function.","example":"This function transfer the call to a human agent when a user requests."},"userParameters":{"type":"array","description":"List of user-defined parameters for the function.","items":{"type":"object","properties":{"name":{"type":"string","description":"The name of the parameter.","example":"Email"},"type":{"type":"string","example":"string","description":"The data type of the parameter (e.g., string, number, etc.)."},"description":{"type":"string","example":"This is a valid email address of the user","description":"Description of the parameter."},"required":{"type":"boolean","example":true,"description":"Indicates if the parameter is required."}}}},"fixedParameters":{"type":"array","description":"A list of fixed parameters for the function.","items":{"type":"object","properties":{"name":{"type":"string","description":"Name of the fixed parameter.","example":"transferToNumber"},"value":{"type":"string","description":"Value of the fixed parameter.","example":"+91 8080808080"}}}}}},"Knowledgebase":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"The unique ID of the knowledgebase document."},"name":{"type":"string","example":"Features.pdf","description":"The name of the document with its extension."},"url":{"type":"string","example":"https://storage.plivo.com/Features.pdf","description":"The URL where the document can be accessed."}}}}}}}')}}]);