"use strict";(self.webpackChunkjobseekr=self.webpackChunkjobseekr||[]).push([[1],{10499:(e,a,t)=>{t.d(a,{Z:()=>n});var s=t(67294);const n=({labelText:e,name:a,value:t,list:n,onChange:l})=>s.createElement("div",{className:"Kkhfx7_fOqEsxUUVXea9 form-row"},s.createElement("label",{htmlFor:a,className:"form-label"},e||a),s.createElement("select",{name:a,value:t,id:a,onChange:l,className:"form-select"},n.map(((e,a)=>s.createElement("option",{key:a,value:e},e)))))},74228:(e,a,t)=>{t.d(a,{Z:()=>l});var s=t(67294);const n={formRow:"dWtG6Jcjj5jq_EMEiWox",formInput:"_hmEmutUj_TYpj_a1RKB",formValidateMessage:"fB2EpkBakV9oAtEpXAMA"},l=({type:e,name:a,value:t,labelText:l,placeholder:m,validateMessage:o,autoFocus:c,onInputChange:r})=>s.createElement("div",{className:n.FormRow},s.createElement("label",{htmlFor:a,className:"form-label"},l||a),s.createElement("input",{type:e,name:a,value:t,placeholder:m,className:n.formInput,autoFocus:c||!1,onChange:e=>r(e)}),s.createElement("p",{className:n.formValidateMessage},o))},14814:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});var s=t(67294);var n=t(74228),l=t(10499),m=t(27353),o=t(4076),c=t(18666),r=t(1922);const i=()=>{const{isLoading:e,position:a,company:t,jobLocation:i,jobType:u,jobTypeOptions:p,status:b,statusOptions:d,isEditing:E,editJobId:v}=(0,m.C)((e=>e.job)),h=(0,m.T)(),g=e=>{const a=e.target,{name:t,value:s}=a;h((0,o.sH)({name:t,value:s}))};return s.createElement(s.Fragment,null,e&&s.createElement(r.Z,{containerClassname:"cornerLoaderContainer"}),s.createElement("section",{className:"cn9_xUsQ8JeYMvTBGTkx"},s.createElement("form",{className:"form F8Kis1fH4MwN0gyGpmgv"},s.createElement("h3",null,E?"edit job":"add job"),s.createElement("div",{className:"SB5WGAvokocJlfEBAPdM"},s.createElement(n.Z,{type:"text",name:"position",value:a,placeholder:"Enter position*",onInputChange:g}),s.createElement(n.Z,{type:"text",name:"company",value:t,placeholder:"Enter company*",onInputChange:g}),s.createElement(n.Z,{type:"text",labelText:"job location",name:"jobLocation",value:i,placeholder:"Enter job location*",onInputChange:g}),s.createElement(l.Z,{name:"status",value:b,labelText:"status",list:d,onChange:g}),s.createElement(l.Z,{name:"jobType",labelText:"job type",value:u,list:p,onChange:g}),s.createElement("div",{className:"cqwbPmNX2n6Dce8SzCeF"},s.createElement("button",{type:"button",className:"btn btn-block Moww9jZ0KJMvilIF9uMs",onClick:()=>{h((0,o.UA)())}},"clear"),s.createElement("button",{type:"submit",className:"btn btn-block",disabled:e||!a||!t||!i,onClick:e=>{e.preventDefault(),h(E?(0,c.y)({jobId:v,jobData:{position:a,company:t,jobLocation:i,jobType:u,status:b}}):(0,c.C)({position:a,company:t,jobLocation:i,jobType:u,status:b}))}},e?"please wait...":"submit"))))))}},92304:(e,a,t)=>{t.r(a),t.d(a,{default:()=>C});var s=t(67294);const n="osWv37E0G6tvdOirXBD4",l="ZUBSCn3NvTxwdfCibyhb",m="Dkk1AtJ6xT6QFTdGlJoA",o="XFZYxsKbBOOdsyBzRqPX",c="T2p3uUtDSXa5mfWjOUwF",r="BwxcV3JnuXjOg3OowHbg";var i=t(57190),u=t(74228),p=t(46830),b=t(27353),d=t(472),E=t(45814);const v=({inputsValues:e,setInputsValues:a,setIsMember:t})=>{const{email:v,password:h}=e,[g,y]=(0,s.useState)({}),j=(0,b.C)((e=>e.user.isLoading)),C=(0,b.T)();return s.createElement("form",{className:`form ${l}`,onSubmit:a=>(0,p.ip)(a,e,d.Z,E.pH,C,y)},s.createElement(i.Z,{className:n}),s.createElement("h4",{className:m},"Login"),s.createElement(u.Z,{type:"text",name:"email",value:v,placeholder:"Enter your email*",autoFocus:!0,validateMessage:g.email,onInputChange:t=>(0,p.jC)(t,e,d.Z,a,y)}),s.createElement(u.Z,{type:"password",name:"password",value:h,placeholder:"Enter your password*",validateMessage:g.password,onInputChange:t=>(0,p.jC)(t,e,d.Z,a,y)}),s.createElement("button",{className:`btn btn-block ${o}`,type:"submit",disabled:j||Object.values(e).some((([e])=>!e))||Object.values(g).some((([e])=>!!e))},j?"Please wait...":"submit"),s.createElement("div",{className:c},"Not a member yet?"," ",s.createElement("button",{className:r,type:"button",onClick:()=>t(!1)},"Register")))},h=({inputsValues:e,setInputsValues:a,setIsMember:t})=>{const{name:v,email:h,password:g}=e,[y,j]=(0,s.useState)({}),C=(0,b.C)((e=>e.user.isLoading)),Z=(0,b.T)();return s.createElement("form",{className:`form ${l}`,onSubmit:a=>(0,p.ip)(a,e,d.Z,E.a$,Z,j)},s.createElement(i.Z,{className:n}),s.createElement("h4",{className:m},"Register"),s.createElement(u.Z,{type:"text",name:"name",value:v||"",placeholder:"Enter your name*",autoFocus:!0,validateMessage:y.name,onInputChange:t=>(0,p.jC)(t,e,d.Z,a,j)}),s.createElement(u.Z,{type:"email",name:"email",value:h,placeholder:"Enter your email*",validateMessage:y.email,onInputChange:t=>(0,p.jC)(t,e,d.Z,a,j)}),s.createElement(u.Z,{type:"password",name:"password",value:g,placeholder:"Enter your password*",validateMessage:y.password,onInputChange:t=>(0,p.jC)(t,e,d.Z,a,j)}),s.createElement("button",{className:`btn btn-block ${o}`,type:"submit",disabled:C||Object.values(e).some((([,e])=>!e))||Object.values(y).some((([,e])=>!!e))},C?"Please wait...":"submit"),s.createElement("div",{className:c},"Already a member?",s.createElement("button",{className:r,type:"button",onClick:()=>t(!0)},"Login")))};var g=t(1922);const y={email:"",password:""},j={...y,name:""},C=()=>{const[e,a]=(0,s.useState)(y),[t,n]=(0,s.useState)(j),[l,m]=(0,s.useState)(!1),o=(0,b.C)((e=>e.user.isLoading));return s.createElement("main",{className:"OR4PGvBOZFsyp8yuzz2j"},o&&s.createElement(g.Z,{containerClassname:"cornerLoaderContainer"}),l?s.createElement(v,{inputsValues:e,setInputsValues:a,setIsMember:m}):s.createElement(h,{inputsValues:t,setInputsValues:n,setIsMember:m}))}},52192:(e,a,t)=>{t.r(a),t.d(a,{default:()=>r});var s=t(67294);var n=t(74228),l=t(46830),m=t(27353),o=t(45814),c=t(472);const r=()=>{const e=(0,m.T)(),{isLoading:a,user:t}=(0,m.C)((e=>e.user)),[r,i]=(0,s.useState)({name:t?.name||"",email:t?.email||"",lastName:t?.lastName||"",location:t?.location||""}),[u,p]=(0,s.useState)({});return s.createElement("section",{className:"Ho2RWxGaVA7ZJEGtLHO5"},s.createElement("form",{className:"form EJOHFjYLlyjD9vBXrX4w",onSubmit:a=>(0,l.ip)(a,r,c.Z,o.Nq,e,p)},s.createElement("h3",null,"Profile"),s.createElement("div",{className:"oLmkwBsZXEt8FkiHWItG"},s.createElement(n.Z,{type:"text",name:"name",value:r.name,placeholder:"Enter new name*",validateMessage:u.name,onInputChange:e=>(0,l.jC)(e,r,c.Z,i,p)}),s.createElement(n.Z,{type:"text",labelText:"last name",name:"lastName",value:r.lastName,placeholder:"Enter new last name*",validateMessage:u.lastName,onInputChange:e=>(0,l.jC)(e,r,c.Z,i,p)}),s.createElement(n.Z,{type:"email",name:"email",value:r.email,placeholder:"Enter new email*",validateMessage:u.email,onInputChange:e=>(0,l.jC)(e,r,c.Z,i,p)}),s.createElement(n.Z,{type:"text",name:"location",value:r.location,placeholder:"Enter new location*",validateMessage:u.location,onInputChange:e=>(0,l.jC)(e,r,c.Z,i,p)}),s.createElement("button",{className:"btn btn-block",type:"submit",disabled:a||!Object.keys(r).some((e=>r[e]!==t[e]))||Object.values(r).some((([e])=>!e))||Object.values(u).some((([e])=>!!e))},a?"Please wait...":"save changes"))))}},472:(e,a,t)=>{t.d(a,{Z:()=>s});const s={name:[{match:/.{3,}/,message:"Name must contain at least three character"},{match:/^[^0-9!@#$%^&*()_+{}[\]:;<>,.?~\\-]+$/,message:"Name must not contain special characters or numbers"}],lastName:[{match:/.{3,}/,message:"Last name must contain at least three character"},{match:/^[^0-9!@#$%^&*()_+{}[\]:;<>,.?~\\-]+$/,message:"Last name must not contain special characters or numbers"}],password:[{match:/.{8,}/,message:"Password must contain minimum 8 characters"},{match:/[a-zа-яё]/,message:"Password must contain at least 1 lowercase letter"},{match:/[A-ZА-ЯЁ]/,message:"Password must contain at least 1 uppercase letter"}],email:[{match:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,message:"Email should have the format of example@email.com"}],location:[{match:/.{3,}/,message:"Location must contain at least three character"},{match:/^[^!@#$%^&*()_+{}[\]:;<>?~\\-]+$/,message:"Location must not contain special characters"}]}},46830:(e,a,t)=>{t.d(a,{ip:()=>m,jC:()=>l});var s=t(39524),n=t(68430);const l=(e,a,t,n,l)=>{const m=e.target,{value:o}=m,c=m.name;((e,a,t,n)=>{a?t[e].every((({match:t,message:s})=>t.test(a)?(n((a=>({...a,[e]:""}))),!0):(n((a=>({...a,[e]:s}))),!1))):n((a=>({...a,[e]:s.Z.EMPTY_FIELD})))})(c,o,t,l),n({...a,[c]:o})},m=(e,a,t,l,m,o)=>{e.preventDefault(),Object.values(a).some((e=>!e))?(0,n.c0)(s.Z.EMPTY_FIELDS):((e,a,t)=>Object.entries(e).every((([n,l])=>l?a[n].every((({match:a,message:s})=>e[n]&&!a.test(l)?(t((e=>({...e,[n]:s}))),!1):(t((e=>({...e,[n]:""}))),!0))):(t((e=>({...e,[n]:s.Z.EMPTY_FIELD}))),!1))))(a,t,o)?m(l(a)):(0,n.c0)(s.Z.CHECK_FIELDS_VALUE)}}}]);