import{C as k}from"./ContentLayout-766c51ae.js";import{_ as L}from"./ContentTitle-83a7bbf5.js";import{r as a,j as $,d as I,a as N,o as x,c as z,w as _,g as C,h as S,b as e,t as p,e as y,k as g}from"./index-98a08bd1.js";const E=e("h3",{class:"flex items-center"},[e("span",{class:"w-6 h-6 mr-1"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-lightning-charge-fill",viewBox:"0 0 16 16"},[e("path",{d:"M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"})])]),S(" 閃電戰 ")],-1),A=e("h3",{class:"text-3xl mb-3"},"遊玩方式",-1),D=e("ul",{class:"max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 mb-3"},[e("li",null," 遊玩人數為2 "),e("li",null," 雙方先決定本次比賽的指定招式 "),e("li",null," 雙方有相同的時間 "),e("li",null," 比賽開始時會有一方的時間開始倒數計時， 倒數計時的那方要將指定招式做成功， 然後點擊螢幕上的區塊， 接下來換成對方時間開始倒數然後做招(依此類推) "),e("li",null," 最後有一方時間倒數為零的時候，那方就輸了(End) ")],-1),H=e("h3",{class:"text-3xl"},"準備開始時，請將手機改為橫幅",-1),P={class:"w-full h-auto my-5"},M=e("h3",{class:"text-3xl mb-2"},"選擇時間",-1),R=e("span",{class:"w-10 h-10 cursor-pointer"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-box-arrow-in-left",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"}),e("path",{"fill-rule":"evenodd",d:"M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"})])],-1),G=e("h3",{class:"text-4xl"},"退出",-1),U=[R,G],W={class:"w-full h-full flex text-black"},O={class:"text-center"},q={class:"text-center"},F={key:0,class:"w-full h-auto flex justify-center"},J=e("div",{class:"flex absolute bottom-7"},[e("h3",{class:"text-3xl animate-bounce"},"請幫起手的玩家點擊自己的時間開始遊戲")],-1),K=[J],Q={class:"w-full h-full flex justify-center items-center text-9xl"},X={key:0,class:"animate-neon-dark"},Y={key:1,class:"animate-neon-dark"},Z=e("h5",{class:"text-gray-500 text-3xl absolute bottom-7 animate-bounce"},"點擊畫面任意處退出",-1),ae={__name:"LightningBattle",setup(ee){const o=a(),c=a(),m=a(),w=a(),d=a(!1),h=a(!1),u=a(!1),r=a(!1),v=a(),i=a({min:"0",sec:"0"}),n=a({min:"0",sec:"0"}),T=a({hours:0,minutes:0}),V=()=>{if(typeof v.value<"u"){let s=v.value.hours,t=v.value.minutes;s<10?s=`0${s}`:s=s.toString(),t<10?t=`0${t}`:t=t.toString(),i.value.min=s,i.value.sec=t,n.value.min=s,n.value.sec=t,m.value.classList.remove("hidden")}},B=async()=>{const s=async()=>{let t=parseInt(i.value.min),l=parseInt(i.value.sec);return l===0&t===0?h.value=!0:l>0?l-=1:l===0&t>0&&(t-=1,l=59),t<10?t=`0${t}`:t=t.toString(),l<10?l=`0${l}`:l=l.toString(),i.value.min=t,i.value.sec=l,new Promise(f=>setTimeout(f,1e3))};if(u.value===!1)for(d.value=!0,r.value=!1,u.value=!0,o.value.classList.add("animate-bounce"),o.value.classList.add("text-white"),c.value.classList.remove("animate-bounce"),c.value.classList.remove("text-white");u.value;)await s()},j=async()=>{const s=async()=>{let t=parseInt(n.value.min),l=parseInt(n.value.sec);return l===0&t===0?h.value=!0:l>0?l-=1:l===0&t>0&&(t-=1,l=59),t<10?t=`0${t}`:t=t.toString(),l<10?l=`0${l}`:l=l.toString(),n.value.min=t,n.value.sec=l,new Promise(f=>setTimeout(f,1e3))};if(r.value===!1)for(d.value=!0,u.value=!1,r.value=!0,c.value.classList.add("animate-bounce"),c.value.classList.add("text-white"),o.value.classList.remove("animate-bounce"),o.value.classList.remove("text-white");r.value;)await s()},b=()=>{d.value=!1,h.value=!1,u.value=!1,r.value=!1,o.value.classList.remove("animate-bounce"),c.value.classList.remove("animate-bounce"),o.value.classList.remove("text-white"),c.value.classList.remove("text-white"),m.value.classList.add("hidden"),w.value.classList.add("hidden")};return $(h,(s,t)=>{d.value===!0&s===!0&&(m.value.classList.add("hidden"),w.value.classList.remove("hidden"))}),I({components:{ContentLayout:k,ContentTitle:L}}),(s,t)=>{const l=N("VueDatePicker");return x(),z(k,null,{default:_(()=>[C(L,null,{title:_(()=>[E]),modalTitle:_(()=>[S(" 閃電戰 ")]),modalContent:_(()=>[A,D,H]),_:1}),e("div",P,[M,C(l,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=f=>v.value=f),"time-picker":"","start-time":T.value,placeholder:"請選擇時間",dark:""},null,8,["modelValue","start-time"])]),e("div",{class:"w-full h-auto flex justify-end"},[e("button",{onClick:V,type:"button",class:"text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}," 準備開始 ")]),e("div",{ref_key:"playGround",ref:m,class:"w-full h-full text-white fixed top-0 left-0 hidden bg-gradient-to-r from-red-700 to-blue-700 z-50"},[e("div",{class:"w-full h-auto flex justify-center"},[e("div",{onClick:b,class:"flex absolute top-4"},U)]),e("div",W,[e("div",{onClick:j,class:"w-1/2 h-full text-8xl flex justify-center items-center"},[e("div",O,[e("p",{ref_key:"play1Time",ref:o},p(i.value.min)+":"+p(i.value.sec),513)])]),e("div",{onClick:B,class:"w-1/2 h-full text-8xl flex justify-center items-center"},[e("div",q,[e("p",{ref_key:"play2Time",ref:c},p(n.value.min)+":"+p(n.value.sec),513)])])]),d.value==!1?(x(),y("div",F,K)):g("",!0)],512),e("div",{onClick:b,ref_key:"awards",ref:w,class:"w-full h-full fixed top-0 left-0 hidden text-white bg-gray-900 z-50"},[e("div",Q,[u.value?(x(),y("h1",X,"BLUE WIN!")):g("",!0),r.value?(x(),y("h1",Y,"RED WIN!")):g("",!0),Z])],512)]),_:1})}}};export{ae as default};
