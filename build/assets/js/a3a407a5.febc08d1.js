"use strict";(self.webpackChunkvoicebot_docs=self.webpackChunkvoicebot_docs||[]).push([[41],{5603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=t(4848),a=t(8453);const o={sidebar_label:"Adding Knowledgebase",sidebar_position:5,title:"Adding Knowledgebase to Voiceagent"},s=void 0,d={id:"Add Knowledgebase",title:"Adding Knowledgebase to Voiceagent",description:"What is a knowledgebase?",source:"@site/docs/Add Knowledgebase.md",sourceDirName:".",slug:"/Add Knowledgebase",permalink:"/docs/Add Knowledgebase",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Adding Knowledgebase",sidebar_position:5,title:"Adding Knowledgebase to Voiceagent"},sidebar:"tutorialSidebar",previous:{title:"Adding Functions",permalink:"/docs/adding functions"},next:{title:"Outbound Calls with Voice Agent",permalink:"/docs/Outbound Calls with Voiceagent"}},l={},c=[{value:"What is a knowledgebase?",id:"what-is-a-knowledgebase",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Add a Knowledgebase Document",id:"add-a-knowledgebase-document",level:2},{value:"1. Upload a Knowledgebase Document Using Python SDK",id:"1-upload-a-knowledgebase-document-using-python-sdk",level:3},{value:"2. Uploaded Knowledgebase Document",id:"2-uploaded-knowledgebase-document",level:3},{value:"3. Updating the Voiceagent With knowledgebase Id",id:"3-updating-the-voiceagent-with-knowledgebase-id",level:3},{value:"4. Updated Voiceagent Object with Knowledgebase Id Associated With It",id:"4-updated-voiceagent-object-with-knowledgebase-id-associated-with-it",level:3}];function r(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"what-is-a-knowledgebase",children:"What is a knowledgebase?"}),"\n",(0,i.jsx)(n.p,{children:"Knowledge base is a list of documents that provides additional context to the voice agent, which it utilizes when interacting with users."}),"\n",(0,i.jsx)(n.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Provide the customer service voice agent about the company's services, so it can effectively respond to user inquiries regarding those services."}),"\n",(0,i.jsx)(n.li,{children:"Provide the order-taking voice agent with the rate card for the menu items."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"add-a-knowledgebase-document",children:"Add a Knowledgebase Document"}),"\n",(0,i.jsx)(n.p,{children:"In this example, we will add a pdf file to knowledgebase which has list of services provided by the company."}),"\n",(0,i.jsx)(n.h3,{id:"1-upload-a-knowledgebase-document-using-python-sdk",children:"1. Upload a Knowledgebase Document Using Python SDK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import plivo\n\nclient = plivo.RestClient('<auth_id>','<auth_token>')\n\nkb = ''\nwith open(\"services.pdf\", \"rb\") as file:\n    files = {\"file\": file}\n    kb = client.knowledgebase.create(**files)\n    print(kb)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-uploaded-knowledgebase-document",children:"2. Uploaded Knowledgebase Document"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "285f6eca-6276-4993-bfeb-53cbbbba6f08",\n  "name": "services.pdf",\n  "url": "https://storage.plivo.com/Features.pdf"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"3-updating-the-voiceagent-with-knowledgebase-id",children:"3. Updating the Voiceagent With knowledgebase Id"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'voiceagent_kb_update_payload = {\n    "knowledgebase_ids": [kb.id],\n}\n\nclient.voiceagent.update(**voiceagent_kb_update_payload)\nupdated_voiceagent = client.voiceagents.get(id=voiceagent.id)\nprint(updated_voiceagent)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"4-updated-voiceagent-object-with-knowledgebase-id-associated-with-it",children:"4. Updated Voiceagent Object with Knowledgebase Id Associated With It"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",\n  "name": "Jack",\n  "welcome_message": "Hi, I am Jack. How can I help you today?",\n  "websocket_url": "wss://api.example.com/v1/Account/{auth_id}/Voiceagent/{voiceagent_id}/connect",\n  "call_url": "https://api.plivo.com/v1/Account/{auth_id}/Voiceagent/{voiceagent_id}/talk",\n  "prompt": "You will keep your sentences short and crisp. You will never reply with more than 2 sentences at a time. You will stick to context throughout. You are test agent, a highly trained Front Desk agent from test. Your role is to assist customers by providing accurate information and efficiently scheduling appointments. Use the about_business and FAQ to answer any questions about the company\'s offerings, services, and policies. Always stay polite, professional, and concise.",\n  "answer_llm": {\n    "provider": "openapi",\n    "model": "gpt-3.5"\n  },\n  "knowledgebase_ids": [\n    "285f6eca-6276-4993-bfeb-53cbbbba6f08"\n  ],\n  "function_ids": [\n    "497f6eca-6276-4993-bfeb-53cbbbba6f08"\n  ],\n  "tts": {\n    "provider": "deepgram",\n    "voice": "angus"\n  },\n  "stt": {\n    "provider": "deepgram",\n    "language": "af"\n  },\n  "call_timeout": 30\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var i=t(6540);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);