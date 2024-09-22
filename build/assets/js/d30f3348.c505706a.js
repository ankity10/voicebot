"use strict";(self.webpackChunkvoicebot_docs=self.webpackChunkvoicebot_docs||[]).push([[996],{5491:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(4848),l=t(8453);const a={sidebar_label:"Outbound Calls with Voiceagent",sidebar_position:6,title:"Make Outbound Calls with Voiceagent"},i=void 0,s={id:"Outbound Calls with Voiceagent",title:"Make Outbound Calls with Voiceagent",description:"Steps",source:"@site/docs/Outbound Calls with Voiceagent.md",sourceDirName:".",slug:"/Outbound Calls with Voiceagent",permalink:"/docs/Outbound Calls with Voiceagent",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Outbound Calls with Voiceagent",sidebar_position:6,title:"Make Outbound Calls with Voiceagent"},sidebar:"tutorialSidebar",previous:{title:"Adding Knowledgebase",permalink:"/docs/Add Knowledgebase"},next:{title:"Inbound Calls with Voiceagent",permalink:"/docs/Inbound Calls with Voiceagent"}},r={},c=[{value:"Steps",id:"steps",level:3},{value:"1. Setup Answer URL handler function",id:"1-setup-answer-url-handler-function",level:3},{value:"2. Make Outbound Call",id:"2-make-outbound-call",level:3}];function u(e){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Setup Answer url in your application and start audio streaming."}),"\n",(0,o.jsx)(n.li,{children:"Make an outbound call using SDK"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"1-setup-answer-url-handler-function",children:"1. Setup Answer URL handler function"}),"\n",(0,o.jsxs)(n.p,{children:["This function will return ",(0,o.jsx)(n.code,{children:"<Stream>"})," XML element to start the audio streaming to voiceagent websocket url"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import plivo\nfrom plivo import plivoxml\n\nclient = plivo.RestClient(\'<auth_id>\',\'<auth_token>\')\n\nvoiceagent = client.voiceagents.get(id=\'<voiceagent_id>\')\n\n\n# This function handles answer url callbacks rom Plivo\n@app.route(\'<answer_url>\')\ndef answer_url_handler():\n\n    stream_element = plivoxml.StreamElement(voiceagent.websocket_url, \n                                            bidirectional= "true",\n                                            audioTrack="agenth",\n                                            streamTimeout=120,\n                                            statusCallbackMethod="POST",\n                                            statusCallbackUrl="https://yourdomain.com/events/",\n                                            contentType="audio/x-l16;rate=8000",\n                                            extraHeaders="Test1=Test2,Test3=Test4")\n    \n    response = plivoxml.ResponseElement().add(stream_element)\n    return response.to_string()\n'})}),"\n",(0,o.jsx)(n.h3,{id:"2-make-outbound-call",children:"2. Make Outbound Call"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# outbound call\ncall_made = client.calls.create(\n    from_='<caller_id>',\n    to_='<destination_number>',\n    answer_url='https://<answer.url>'\n)\n"})})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var o=t(6540);const l={},a=o.createContext(l);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);