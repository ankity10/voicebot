"use strict";(self.webpackChunkvoicebot_docs=self.webpackChunkvoicebot_docs||[]).push([[899],{9233:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var t=i(4848),o=i(8453);const s={sidebar_label:"Introduction",sidebar_position:1},l="Introduction to AI Voice Agents",c={id:"introduction",title:"Introduction to AI Voice Agents",description:"voice agent",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Steps to use a Voice Agent",permalink:"/docs/Steps"}},a={},r=[{value:"How Voice Agents Works With Plivo",id:"how-voice-agents-works-with-plivo",level:2},{value:"Inbound Calls Using Voice Agent",id:"inbound-calls-using-voice-agent",level:3},{value:"Outbound Calls Using Voice Agent",id:"outbound-calls-using-voice-agent",level:3},{value:"Functional Scope of APIs",id:"functional-scope-of-apis",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"introduction-to-ai-voice-agents",children:"Introduction to AI Voice Agents"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"voice agent",src:i(3496).A+"",width:"325",height:"290"})}),"\n",(0,t.jsx)(n.p,{children:"AI voice agents are programs powered by large language models (LLMs) designed to answer questions based on their knowledge and execute tasks according to user instructions."}),"\n",(0,t.jsx)(n.p,{children:"These agents provide significant benefits to businesses across various industries by streamlining operations, enhancing customer experiences, and reducing costs."}),"\n",(0,t.jsx)(n.h2,{id:"how-voice-agents-works-with-plivo",children:"How Voice Agents Works With Plivo"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Voice agents make use of ",(0,t.jsx)(n.code,{children:"audio streams"})," to get the audio from a live call in real time and respond to it in milliseconds using bidirectional websocket connection."]})}),"\n",(0,t.jsx)(n.h3,{id:"inbound-calls-using-voice-agent",children:"Inbound Calls Using Voice Agent"}),"\n",(0,t.jsxs)(n.p,{children:["Inbound calls are the calls received by Plivo. You will need to associate the ",(0,t.jsx)(n.code,{children:"inbound_call_url"}),"  of a voice agent to an application and then map this application to a number to receive calls by voice agent. ",(0,t.jsx)(n.a,{href:"/docs/Inbound%20Calls%20with%20Voiceagent",children:"Learn how to create outbound calls using voiceagent."})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"End user dials calls to Plivo number."}),"\n",(0,t.jsx)(n.li,{children:"Plivo platform calls the answer url configure in the mapped application for this number."}),"\n",(0,t.jsxs)(n.li,{children:["Voice Agent instructs Plivo using ",(0,t.jsx)(n.code,{children:"<Stream>"})," XML to start the real time call audio stream."]}),"\n",(0,t.jsx)(n.li,{children:"Plivo starts sending audio call streaming to voice agent."}),"\n",(0,t.jsx)(n.li,{children:"Voice agent uses same websocket connection to send AI generated audio response."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Inbound voiceagent call handling",src:i(2221).A+"",width:"1440",height:"812"})}),"\n",(0,t.jsx)(n.h3,{id:"outbound-calls-using-voice-agent",children:"Outbound Calls Using Voice Agent"}),"\n",(0,t.jsxs)(n.p,{children:["Outbound calls are the calls initiated by your application or client SDK. You will use Voiceagent's websocket to start an audio stream to the agent. ",(0,t.jsx)(n.a,{href:"/docs/Outbound%20Calls%20with%20Voiceagent",children:"Learn how to create outbound calls using voiceagent."})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Your application initiates a call using an ",(0,t.jsx)(n.code,{children:"answer_url"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Plivo platform calls this number"}),"\n",(0,t.jsx)(n.li,{children:"Once the call is connected Plivo platform would initiate a webhook."}),"\n",(0,t.jsxs)(n.li,{children:["Plivo platform will send webhook on the ",(0,t.jsx)(n.code,{children:"answer_url"})," to control the call flow."]}),"\n",(0,t.jsxs)(n.li,{children:["Your app server which handles ",(0,t.jsx)(n.code,{children:"answer_url"})," will then select a voice agent and use it's websocket url to send Plivo platform stream audio instruction using ",(0,t.jsx)(n.code,{children:"<Stream>"})]}),"\n",(0,t.jsx)(n.li,{children:"Plivo starts sending real time audio call stream to voice agent."}),"\n",(0,t.jsx)(n.li,{children:"Voice agent uses same websocket connection to send AI generated audio response."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Outbound voiceagent call handling",src:i(5858).A+"",width:"1440",height:"1135"})}),"\n",(0,t.jsx)(n.h3,{id:"functional-scope-of-apis",children:"Functional Scope of APIs"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Voice Agent API"})," Create voice agents"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create, Get, Delete, Update, List"}),"\n",(0,t.jsx)(n.li,{children:"Chat with a agent"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Functions API"})," Perform actions through voice agents by adding functions in them"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create, Delete, Update, Get, List"}),"\n",(0,t.jsx)(n.li,{children:"Agents can perform actions like booking appointment, placing orders, etc."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Knowledgebase API"})," Add additional knowledge to these voice agents"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create, Get, Delete, Update, List"}),"\n",(0,t.jsx)(n.li,{children:"Adding knowledgebase allows voice agents to have context, this improves answer quality and reduces hallucination."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Voice  Agent Usage for Inbound"})," Let the voice agents answer inbound calls"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Voice  Agent Usage for Outbound"})," Let the voice agents make outbound calls"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2221:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/inbound_voicebot_v1-2f66babd7711d732bc3153bf976680cf.svg"},5858:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/outbound_voicebot_v1-02fc2e67d342be7a1b6b70b5d6a7b5fe.svg"},3496:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/voice_bot_icon-b060ea833176bf13daee1c26f283d12c.svg"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var t=i(6540);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);