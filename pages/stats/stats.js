"use strict";(self.webpackChunkjobseekr=self.webpackChunkjobseekr||[]).push([[536],{41582:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var l=a(67294),n=a(1922),c=a(89583),r=a(27353);const o=({count:e,title:t,icon:a,color:n,bcg:c})=>l.createElement("article",{className:"npLwOj2BEB8LFdOzn5IW",style:{borderBottom:`5px solid ${n}`}},l.createElement("header",{className:"TyOrPt2K6ZGT9BO0G3jL"},l.createElement("span",{className:"vKTK3U1zj2bElNp_v6_e",style:{color:n}},e),l.createElement("span",{className:"pK6FQUHhDKgLwu_3SXvb",style:{background:c}},a)),l.createElement("h5",{className:"dMZKiHxV27fiEtqRWa8t"},t)),s=()=>{const{stats:e}=(0,r.C)((e=>e.allJobs)),t=[{title:"pending applications",count:e.pending||0,icon:l.createElement(c.Z2L,null),color:"#e9b949",bcg:"#fcefc7"},{title:"interviews scheduled",count:e.interview||0,icon:l.createElement(c.iCz,null),color:"#647acb",bcg:"#e0e8f9"},{title:"jobs declined",count:e.declined||0,icon:l.createElement(c.iq7,null),color:"#d66a6a",bcg:"#ffeeee"}];return l.createElement("section",{className:"XUMBSt8n4v8HJp0rTjtN"},t.map(((e,t)=>l.createElement(o,{key:t,...e}))))};var m=a(29009),i=a(94831),E=a(14195),u=a(3023),d=a(75358),p=a(99307),b=a(76955);const h=({data:e})=>l.createElement(m.h,{width:"100%",height:300},l.createElement(i.v,{data:e,margin:{top:50}},l.createElement(E.q,{strokeDasharray:"3 3 "}),l.createElement(u.K,{dataKey:"date"}),l.createElement(d.B,{allowDecimals:!1}),l.createElement(p.u,null),l.createElement(b.$,{dataKey:"count",fill:"#3b82f6",barSize:75})));var y=a(46888),f=a(86108);const g=({data:e})=>l.createElement(m.h,{width:"100%",height:300},l.createElement(y.T,{data:e,margin:{top:50}},l.createElement(E.q,{strokeDasharray:"3 3"}),l.createElement(u.K,{dataKey:"date"}),l.createElement(d.B,{allowDecimals:!1}),l.createElement(p.u,null),l.createElement(f.u,{type:"monotone",dataKey:"count",stroke:"#1e3a8a",fill:"#3b82f6"}))),k=()=>{const[e,t]=(0,l.useState)(!0),{monthlyApplications:a}=(0,r.C)((e=>e.allJobs));return l.createElement("section",{className:"bk3CpXmDzd7lFRPk5Xv2"},l.createElement("h4",{className:"bNvcnm962ub36xe95nGR"},"Monthly Applications"),l.createElement("button",{className:"fG7orJGDxwRF1tXQp1w2",type:"button",onClick:()=>{t(!e)}},e?"Area Chart":"Bar Chart"),e?l.createElement(h,{data:a}):l.createElement(g,{data:a}))};var v=a(31374);const w=()=>{const{isLoading:e,monthlyApplications:t}=(0,r.C)((e=>e.allJobs)),a=(0,r.T)();return(0,l.useEffect)((()=>{a((0,v.fy)())}),[]),l.createElement(l.Fragment,null,e?l.createElement(n.Z,{containerClassname:"layoutPagesLoaderContainer"}):l.createElement(l.Fragment,null,l.createElement(s,null),t.length>0&&l.createElement(k,null)))}}}]);