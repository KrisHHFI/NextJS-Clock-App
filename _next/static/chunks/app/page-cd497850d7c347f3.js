(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7223:function(e,a,s){Promise.resolve().then(s.bind(s,9196)),Promise.resolve().then(s.bind(s,4755))},9196:function(e,a,s){"use strict";var r=s(7437),t=s(2265),n=s(6648);s(2957),a.default=()=>{let[e,a]=(0,t.useState)(!0),s=(0,t.useRef)(null),c=(0,t.useRef)(null),l=(0,t.useRef)(null),i=(0,t.useRef)(null),o=(0,t.useRef)(null),d=(0,t.useRef)(null),u=(0,t.useRef)(null),h=(0,t.useRef)(null),m=(0,t.useRef)(null),f=(0,t.useRef)(null),g=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let e=setInterval(()=>{let e=new Date,a=e.getDate(),r=e.getHours(),t=e.getMinutes(),n=e.getSeconds(),x=r%12/12*360;x+=t/60*30;let N=t/60*360,j=(n+e.getMilliseconds()/1e3)/60*360;s.current&&(s.current.innerHTML=a.toString()),c.current&&(c.current.style.transform="translate(-50%, -100%) rotate(".concat(x,"deg)")),l.current&&(l.current.style.transform="translate(-50%, -100%) rotate(".concat(N,"deg)")),i.current&&(i.current.style.transform="translate(-50%, -100%) rotate(".concat(j,"deg)")),o.current&&(o.current.style.transform="translate(-50%, -50%) rotate(".concat(j,"deg)")),d.current&&(d.current.style.transform="translate(-50%, -50%) rotate(".concat(j,"deg)")),u.current&&(u.current.style.transform="translate(-50%, -50%) rotate(".concat(j,"deg)")),f.current&&(f.current.style.transform="translate(-50%, -50%) rotate(".concat(N,"deg)")),h.current&&(h.current.style.transform="translate(-50%, -50%) rotate(".concat(-N,"deg)")),m.current&&(m.current.style.transform="translate(-50%, -50%) rotate(".concat(-x,"deg)")),g.current&&(g.current.style.transform="translate(-50%, -50%) rotate(".concat(x,"deg)"))},100);return()=>clearInterval(e)},[]),(0,t.useEffect)(()=>{let a=document.querySelector(".face"),s=document.querySelectorAll(".alphanumerics"),r=document.querySelectorAll(".gears");a&&(e?(a.style.backgroundColor="#fffcf5",s.forEach(e=>e.style.display="block"),r.forEach(e=>e.style.display="none")):(a.style.backgroundColor="transparent",s.forEach(e=>e.style.display="none"),r.forEach(e=>e.style.display="block")))},[e]),(0,r.jsx)("main",{children:(0,r.jsxs)("div",{className:"clock",children:[(0,r.jsx)(n.default,{src:"/Clock Case.png",alt:"Clock Case",className:"clockCaseImage clockCentre",width:100,height:100}),(0,r.jsxs)("div",{className:"face clockCentre",onClick:()=>a(e=>!e),children:[(0,r.jsxs)("div",{id:"alphanumerics",className:"alphanumerics",children:[(0,r.jsx)("p",{className:"twelve",children:"12"}),(0,r.jsx)("p",{className:"one",children:"1"}),(0,r.jsx)("p",{className:"two",children:"2"}),(0,r.jsx)("p",{className:"three",children:"3"}),(0,r.jsx)("p",{className:"four",children:"4"}),(0,r.jsx)("p",{className:"five",children:"5"}),(0,r.jsx)("p",{className:"six",children:"6"}),(0,r.jsx)("p",{className:"seven",children:"7"}),(0,r.jsx)("p",{className:"eight",children:"8"}),(0,r.jsx)("p",{className:"nine",children:"9"}),(0,r.jsx)("p",{className:"ten",children:"10"}),(0,r.jsx)("p",{className:"eleven",children:"11"}),(0,r.jsx)(n.default,{src:"/Signature.svg",alt:"Signature",className:"signature clockCentre",width:100,height:100}),(0,r.jsx)("div",{id:"date",className:"date",ref:s})]}),(0,r.jsxs)("div",{id:"gears",className:"gears",children:[(0,r.jsx)(n.default,{src:"/Hour Hand Gear.svg",alt:"Hour Hand Gear",className:"hourHandGearImage clockCentre",width:100,height:100,ref:g}),(0,r.jsx)(n.default,{src:"/Signed Gear 3.svg",alt:"Signed Gear Small",className:"signedGearImageSmall",width:100,height:100,ref:m}),(0,r.jsx)(n.default,{src:"/Signed Gear.svg",alt:"Signed Gear",className:"signedGearImage",width:100,height:100,ref:u}),(0,r.jsx)(n.default,{src:"/Minute Hand Gear.svg",alt:"Minute Hand Gear",className:"minuteHandGearImage clockCentre",width:100,height:100,ref:f}),(0,r.jsx)(n.default,{src:"/Signed Gear 2.svg",alt:"Signed Gear Bulkier",className:"signedGearBulkierImage",width:100,height:100,ref:h}),(0,r.jsx)(n.default,{src:"/Second Hand Gear.svg",alt:"Second Hand Gear",className:"secondHandGearImage clockCentre",width:100,height:100,ref:o}),(0,r.jsx)(n.default,{src:"/Second Hand Gear 2.svg",alt:"Second Hand Gear 2",className:"secondHandGearImage2",width:100,height:100,ref:d})]}),(0,r.jsxs)("div",{id:"hands",className:"clockCentre",children:[(0,r.jsx)("div",{className:"handBase"}),(0,r.jsxs)("div",{className:"hourHand clockCentre",ref:c,children:[(0,r.jsx)("div",{className:"hourHandInvertedPointer"}),(0,r.jsx)("div",{className:"hourHandPointer"})]}),(0,r.jsxs)("div",{className:"minuteHand clockCentre",ref:l,children:[(0,r.jsx)("div",{className:"minuteHandInvertedPointer"}),(0,r.jsx)("div",{className:"minuteHandPointer"})]}),(0,r.jsx)("div",{className:"secondHand clockCentre",ref:i,children:(0,r.jsx)("div",{className:"secondHandPointer"})})]})]})]})})}},4755:function(e,a,s){"use strict";var r=s(7437);s(2957);var t=s(6648);a.default=()=>(0,r.jsx)("main",{children:(0,r.jsxs)("div",{className:"ContactBox",children:[(0,r.jsxs)("div",{className:"ContactBoxIcons",children:[(0,r.jsx)("a",{className:"ContactBoxIconContainer",href:"mailto:kristopherpepperuk(at)@gmail.com",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(t.default,{src:"/Envelope.png",alt:"Envelope Icon",className:"contactIcon",width:100,height:100})}),(0,r.jsx)("a",{className:"ContactBoxIconContainer",href:"https://github.com/KrisHHFI",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(t.default,{src:"/GitHub.png",alt:"GitHub Icon",className:"contactIcon",width:100,height:100})}),(0,r.jsx)("a",{className:"ContactBoxIconContainer",href:"https://www.linkedin.com/in/kristopher-pepper-824184136/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(t.default,{src:"/LinkedIn.png",alt:"LinkedIn Icon",className:"contactIcon",width:100,height:100})})]}),(0,r.jsx)("div",{className:"ContactBoxText",children:"Kristopher Pepper 2024"})]})})},2957:function(){}},function(e){e.O(0,[282,648,971,23,744],function(){return e(e.s=7223)}),_N_E=e.O()}]);