"use strict";(self.webpackChunkvoicebot_docs=self.webpackChunkvoicebot_docs||[]).push([[489],{273:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=t(4848),i=t(8453);const a={sidebar_label:"Create Voice Agent",sidebar_position:3,title:"Create Voice Agent"},s=void 0,c={id:"create-voice-agent",title:"Create Voice Agent",description:"What is a Voice Agent?",source:"@site/docs/create-voice-agent.md",sourceDirName:".",slug:"/create-voice-agent",permalink:"/docs/create-voice-agent",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Create Voice Agent",sidebar_position:3,title:"Create Voice Agent"},sidebar:"tutorialSidebar",previous:{title:"Steps to use a Voice Agent",permalink:"/docs/Steps"},next:{title:"Adding Functions",permalink:"/docs/adding functions"}},r={},l=[{value:"What is a Voice Agent?",id:"what-is-a-voice-agent",level:3},{value:"Steps",id:"steps",level:3},{value:"1. Use Python SDK to Create Voice Agent",id:"1-use-python-sdk-to-create-voice-agent",level:3},{value:"2. Newly Created Voice Agent Object",id:"2-newly-created-voice-agent-object",level:3}];function d(e){const n={admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"what-is-a-voice-agent",children:"What is a Voice Agent?"}),"\n",(0,o.jsx)(n.p,{children:"A voice agent is an object that includes LLM information such as the LLM provider and the specific model to be used, along with a behavior prompt and details about the speech-to-text (STT) and text-to-speech (TTS) models."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"The Python SDK used in example below follows same specifications api and function interface as Plivo's official Python SDK."})}),"\n",(0,o.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Use Python SDK to create voice agent"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"1-use-python-sdk-to-create-voice-agent",children:"1. Use Python SDK to Create Voice Agent"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'\nimport plivo\n\nclient = plivo.RestClient(auth_id=\'<auth_id>\', auth_token=\'<auth_token>\')\n\nvoiceagent_payload = {\n    "name": "Jack",\n    "prompt": ("You will keep your sentences short and crisp. You will never reply with more than 2 sentences at a time. "\n               "You will stick to context throughout. You are test agent, a highly trained Front Desk agent from test. "\n               "Your role is to assist customers by providing accurate information and efficiently scheduling appointments. "\n               "Use the about_business and FAQ to answer any questions about the company\'s offerings, services, and policies. "\n               "Always stay polite, professional, and concise."),\n    "answer_llm": {\n        "provider": "openapi",\n        "model": "gpt-4o"\n    },\n\n    "tts": {\n        "provider": "deepgram",\n        "voice": "angus"\n    },\n    "stt": {\n        "provider": "deepgram",\n        "language": "en"\n    },\n    "callTimeout": 30\n}\n\nvoiceagent = client.voiceagents.create(\n    **voiceagent_payload\n)\nprint(voiceagent)\n\n\n'})}),"\n",(0,o.jsx)(n.h3,{id:"2-newly-created-voice-agent-object",children:"2. Newly Created Voice Agent Object"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"The newly created voice agent object will not have any functions and knowledgebase associated with it. They have to be added separately."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",\n    "name": "Jack",\n    "websocket_url": "wss://api.example.com/v1/Account/{auth_id}/Voiceagent/{voiceagent_id}/connect",\n    "inbound_call_url": "https://api.plivo.com/v1/Account/{auth_id}/Voiceagent/{voiceagent_id}/inbound_call",\n    "prompt": (\n        "You will keep your sentences short and crisp. You will never reply with more than 2 sentences at a time. "\n        "You will stick to context throughout. You are test agent, a highly trained Front Desk agent from test. "\n        "Your role is to assist customers by providing accurate information and efficiently scheduling appointments. "\n        "Use the about_business and FAQ to answer any questions about the company\'s offerings, services, and policies. "\n        "Always stay polite, professional, and concise."\n    ),\n    "answer_llm": {\n        "provider": "openapi",\n        "model": "gpt-3.5"\n    },\n    "knowledgebase_ids": [\n    ],\n    "function_ids": [\n    ],\n    "tts": {\n        "provider": "deepgram",\n        "voice": "angus"\n    },\n    "stt": {\n        "provider": "deepgram",\n        "language": "af"\n    },\n    "callTimeout": 30\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(6540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);