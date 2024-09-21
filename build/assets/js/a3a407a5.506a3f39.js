"use strict";(self.webpackChunkvoicebot_docs=self.webpackChunkvoicebot_docs||[]).push([[41],{5603:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>r,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var t=o(4848),i=o(8453);const d={sidebar_label:"Adding Knowledgebase",sidebar_position:5,title:"Adding Knowledgebase to Voicebot"},a=void 0,s={id:"Add Knowledgebase",title:"Adding Knowledgebase to Voicebot",description:"Adding a knowledgebase document to a voicebot will add to the knowledge of voicebot. Voicebot will make use of this information while talking to users.",source:"@site/docs/Add Knowledgebase.md",sourceDirName:".",slug:"/Add Knowledgebase",permalink:"/docs/Add Knowledgebase",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Adding Knowledgebase",sidebar_position:5,title:"Adding Knowledgebase to Voicebot"},sidebar:"tutorialSidebar",previous:{title:"Adding Functions",permalink:"/docs/adding functions"},next:{title:"Outbound Calls with Voicebot",permalink:"/docs/Outbound Calls with Voicebot"}},l={},c=[{value:"1. Upload a Knowledgebase Document Using Python SDK",id:"1-upload-a-knowledgebase-document-using-python-sdk",level:3},{value:"2. Uploaded Knowledgebase Document",id:"2-uploaded-knowledgebase-document",level:3},{value:"3. Updating the Voicebot With knowledgebase Id",id:"3-updating-the-voicebot-with-knowledgebase-id",level:3},{value:"4. Updated Voicebot Object with Knowledgebase Id Associated With It",id:"4-updated-voicebot-object-with-knowledgebase-id-associated-with-it",level:3}];function b(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Adding a knowledgebase document to a voicebot will add to the knowledge of voicebot. Voicebot will make use of this information while talking to users."}),"\n",(0,t.jsx)(n.h3,{id:"1-upload-a-knowledgebase-document-using-python-sdk",children:"1. Upload a Knowledgebase Document Using Python SDK"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import plivo\n\nclient = plivo.RestClient('<auth_id>','<auth_token>')\n\nkb = ''\nwith open(\"Features.pdf\", \"rb\") as file:\n    files = {\"file\": file}\n    kb = client.knowledgebase.create(**files)\n    print(kb)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-uploaded-knowledgebase-document",children:"2. Uploaded Knowledgebase Document"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": "285f6eca-6276-4993-bfeb-53cbbbba6f08",\n  "name": "Features.pdf",\n  "url": "https://storage.plivo.com/Features.pdf"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-updating-the-voicebot-with-knowledgebase-id",children:"3. Updating the Voicebot With knowledgebase Id"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'voicebot_kb_update_payload = {\n    "knowledgebase_ids": [kb.id],\n}\n\nclient.voicebot.update(**voicebot_kb_update_payload)\nupdated_voicebot = client.voicebots.get(id=voicebot.id)\nprint(updated_voicebot)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"4-updated-voicebot-object-with-knowledgebase-id-associated-with-it",children:"4. Updated Voicebot Object with Knowledgebase Id Associated With It"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",\n  "name": "Jack",\n  "websocket_url": "wss://api.example.com/v1/Account/{auth_id}/Voicebot/{voicebot_id}/connect",\n  "inbound_call_url": "https://api.plivo.com/v1/Account/{auth_id}/Voicebot/{voicebot_id}/inbound_call",\n  "prompt": "You will keep your sentences short and crisp. You will never reply with more than 2 sentences at a time. You will stick to context throughout. You are test agent, a highly trained Front Desk agent from test. Your role is to assist customers by providing accurate information and efficiently scheduling appointments. Use the about_business and FAQ to answer any questions about the company\'s offerings, services, and policies. Always stay polite, professional, and concise.",\n  "answer_llm": {\n    "provider": "openapi",\n    "model": "gpt-3.5"\n  },\n  "knowledgebase_ids": [\n    "285f6eca-6276-4993-bfeb-53cbbbba6f08"\n  ],\n  "function_ids": [\n    "497f6eca-6276-4993-bfeb-53cbbbba6f08"\n  ],\n  "tts": {\n    "provider": "deepgram",\n    "voice": "angus"\n  },\n  "stt": {\n    "provider": "deepgram",\n    "language": "af"\n  },\n  "callTimeout": 30\n}\n'})})]})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>s});var t=o(6540);const i={},d=t.createContext(i);function a(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);