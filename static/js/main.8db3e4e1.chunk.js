(this["webpackJsonpjust-a-clock"]=this["webpackJsonpjust-a-clock"]||[]).push([[0],{13:function(t,e,n){t.exports={settings:"Settings_settings__9n2Qz",header:"Settings_header__2idjU",button:"Settings_button__2ig43"}},15:function(t,e,n){t.exports={buttons:"SettingButtons_buttons__1387T",button:"SettingButtons_button__YFfYo"}},16:function(t,e,n){t.exports={clock:"Clock_clock__XW7O4",mainTime:"Clock_mainTime__z6Wcy",mainTimeMore:"Clock_mainTimeMore__-m_A2",mainDate:"Clock_mainDate__3n2D5"}},18:function(t,e,n){t.exports={Swapper:"Swapper_Swapper__29YKf",label:"Swapper_label__BdCkL",selections:"Swapper_selections__9Uq6I"}},23:function(t,e,n){t.exports={clock:"Subclock_clock__1bYmY"}},29:function(t,e,n){t.exports={subclocks:"ClockLayout_subclocks__uL59x"}},36:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n(2),c=n.n(a),i=n(24),s=n.n(i),m=(n(36),n(11)),l=n(27),u=n(26),r=n(0),d=n(15),j=n.n(d),b=function(){return Object(o.jsx)("div",{className:j.a.buttons,children:Object(o.jsxs)(r.b.Provider,{value:{color:"white",size:"4vw",className:j.a.icon},children:[Object(o.jsx)(m.b,{to:"/setting",children:Object(o.jsx)("div",{className:j.a.button,children:Object(o.jsx)(u.a,{})})}),Object(o.jsx)("div",{className:j.a.button,onClick:function(){document.fullscreenElement?document.exitFullscreen():document.body.requestFullscreen()},children:Object(o.jsx)(l.a,{})})]})})},p=n(3),h=n(10),k=n(5),f=n.n(k),O=n(28),x="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_",v={year:{1:{token:"YY",output:"70 71 ... 29 30"},2:{token:"YYYY",output:"1970 1971 ... 2029 2030"}},month:{1:{token:"M",output:"1 2 ... 11 12"},2:{token:"Mo",output:"1st 2nd ... 11th 12th"},3:{token:"MM",output:"01 02 ... 11 12"},4:{token:"MMM",output:"Jan Feb ... Nov Dec"},5:{token:"MMMM",output:"January February ... November December"}},day:{1:{token:"D",output:"1 2 ... 30 31"},2:{token:"Do",output:"1st 2nd ... 30th 31st"},3:{token:"DD",output:"01 02 ... 30 31"}},week:{1:{token:"d",output:"0 1 ... 5 6"},2:{token:"do",output:"0th 1st ... 5th 6th"},3:{token:"dd",output:"Su Mo ... Fr Sa"},4:{token:"ddd",output:"Sun Mon ... Fri Sat"},5:{token:"dddd",output:"Sunday Monday ... Friday Saturday"}},hour:{1:{token:"H",output:"0 1 ... 22 23"},2:{token:"HH",output:"00 01 ... 22 23"},3:{token:"h",output:"1 2 ... 11 12"},4:{token:"hh",output:"01 02 ... 11 12"},5:{token:"k",output:"1 2 ... 23 24"},6:{token:"kk",output:"01 02 ... 23 24"}},minute:{1:{token:"m",output:"0 1 ... 58 59"},2:{token:"mm",output:"00 01 ... 58 59"}},second:{1:{token:"s",output:"0 1 ... 58 59"},2:{token:"ss",output:"00 01 ... 58 59"}},millisecond:{1:{token:"S",output:"0 1 ... 8 9"},2:{token:"SS",output:"00 01 ... 98 99"},3:{token:"SSS",output:"000 001 ... 998 999"}},ampm:{1:{token:"a",output:"AM PM"},2:{token:"A",output:"am pm"}}},z=function(t){var e=function(t){var e,n=t.split("").reverse(),o=0,a=0n,c=Object(O.a)(n);try{for(c.s();!(e=c.n()).done;){for(var i=e.value,s=BigInt(x.indexOf(i)),m=0;m<o;m++)s*=64n;a+=s,o++}}catch(l){c.e(l)}finally{c.f()}return a.toString()}(t),n=e.slice(0,9).split(""),o=parseInt(e.slice(9,12)),a=e.slice(12,21).split(""),c=e.slice(21,e.length).match(/.{1,3}/g);return{clockConfigs:{main:{year:"9"!==n[0]&&v.year[n[0]].token,month:"9"!==n[1]&&v.month[n[1]].token,day:"9"!==n[2]&&v.day[n[2]].token,week:"9"!==n[3]&&v.week[n[3]].token,hour:"9"!==n[4]&&v.hour[n[4]].token,minute:"9"!==n[5]&&v.minute[n[5]].token,second:"9"!==n[6]&&v.second[n[6]].token,millisecond:"9"!==n[7]&&v.millisecond[n[7]].token,ampm:"9"!==n[8]&&v.ampm[n[8]].token},sub:{year:"9"!==n[0]&&v.year[a[0]].token,month:"9"!==n[1]&&v.month[a[1]].token,day:"9"!==n[2]&&v.day[a[2]].token,week:"9"!==n[3]&&v.week[a[3]].token,hour:"9"!==n[4]&&v.hour[a[4]].token,minute:"9"!==n[5]&&v.minute[a[5]].token,second:"9"!==n[6]&&v.second[a[6]].token,millisecond:"9"!==n[7]&&v.millisecond[a[7]].token,ampm:"9"!==n[8]&&v.ampm[a[8]].token}},tz:{main:f.a.tz.names()[o],sub:c.map((function(t){return f.a.tz.names()[parseInt(t)]}))}}},y=n(8),g=n.n(y),F=n(16),M=n.n(F),_=function(t){var e=t.yearFmt,n=void 0===e?"YY":e,c=t.monthFmt,i=void 0===c?"MMMM":c,s=t.dayFmt,m=void 0===s?"Do":s,l=t.weekFmt,u=void 0===l?"dddd":l,r=t.hourFmt,d=void 0===r?"hh":r,j=t.minuteFmt,b=void 0===j?"m":j,p=t.secondFmt,k=void 0===p?"s":p,f=t.msFmt,O=void 0===f?"SS":f,x=t.ampmFmt,v=void 0===x?"a":x,z=Object(a.useState)({year:0,month:0,day:0,week:0,hour:0,minute:0,second:0,millisecond:0,ampm:0}),y=Object(h.a)(z,2),F=y[0],_=y[1];Object(a.useEffect)((function(){var t=setInterval((function(){_({year:g()().format(n),month:g()().format(i),day:g()().format(m),week:g()().format(u),hour:g()().format(d),minute:g()().format(b),second:g()().format(k),millisecond:g()().format(O),ampm:g()().format(v)})}),1);return function(){return clearInterval(t)}}),[v,m,d,b,i,O,k,u,n]);var S=Object(o.jsx)("span",{children:":"}),w=Object(o.jsx)("span",{children:"."});return Object(o.jsxs)("div",{className:M.a.clock,children:[Object(o.jsxs)("p",{className:M.a.mainTime,children:[Object(o.jsx)("span",{children:F.hour}),S,Object(o.jsx)("span",{children:F.minute}),S,Object(o.jsx)("span",{children:F.second}),w,Object(o.jsxs)("span",{className:M.a.mainTimeMore,children:[Object(o.jsx)("span",{children:F.ampm}),Object(o.jsx)("span",{children:F.millisecond})]})]}),Object(o.jsxs)("p",{className:M.a.mainDate,children:[Object(o.jsx)("span",{children:"".concat(F.month," ").concat(F.day,", ").concat(F.year)}),Object(o.jsx)("span",{children:F.week})]})]})},S=n(23),w=n.n(S),C=function(t){var e=t.yearFmt,n=void 0===e?"YY":e,c=t.monthFmt,i=void 0===c?"MMMM":c,s=t.dayFmt,m=void 0===s?"Do":s,l=t.weekFmt,u=void 0===l?"dddd":l,r=t.hourFmt,d=void 0===r?"hh":r,j=t.minuteFmt,b=void 0===j?"m":j,p=t.secondFmt,k=void 0===p?"s":p,O=t.msFmt,x=void 0===O?"SS":O,v=t.ampmFmt,z=void 0===v?"a":v,y=t.tz,g=void 0===y?"":y,F=Object(a.useState)({year:0,month:0,day:0,week:0,hour:0,minute:0,second:0,millisecond:0,ampm:0}),M=Object(h.a)(F,2),_=M[0],S=M[1];Object(a.useEffect)((function(){var t=setInterval((function(){S({year:f()().tz(g).format(n),month:f()().tz(g).format(i),day:f()().tz(g).format(m),week:f()().tz(g).format(u),hour:f()().tz(g).format(d),minute:f()().tz(g).format(b),second:f()().tz(g).format(k),millisecond:f()().tz(g).format(x),ampm:f()().tz(g).format(z)})}),1);return function(){return clearInterval(t)}}),[z,m,d,b,i,x,k,g,u,n]);var C;return Object(o.jsx)("div",{className:w.a.clock,children:Object(o.jsx)("p",{className:w.a.clockText,children:"".concat(g).concat((C=g,"\t".repeat(Math.ceil((32-C.length)/4)))).concat(_.hour,":").concat(_.minute," | ").concat(_.month," ").concat(_.day,", ").concat(_.year," | ").concat(_.week)})})},T=n(29),N=n.n(T),D=function(){var t=Object(p.f)().config,e=Object(a.useState)({clockConfigs:{main:{year:"",month:"",day:"",week:"",hour:"",minute:"",second:"",millisecond:"",ampm:""},sub:{year:"",month:"",day:"",week:"",hour:"",minute:"",second:"",millisecond:"",ampm:""}},tz:{main:"",sub:[]}}),n=Object(h.a)(e,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){i(z(t))}),[t]),Object(o.jsxs)("div",{children:[Object(o.jsx)(_,{yearFmt:c.clockConfigs.main.year,monthFmt:c.clockConfigs.main.month,dayFmt:c.clockConfigs.main.day,weekFmt:c.clockConfigs.main.week,hourFmt:c.clockConfigs.main.hour,minuteFmt:c.clockConfigs.main.minute,secondFmt:c.clockConfigs.main.second,msFmt:c.clockConfigs.main.millisecond,ampmFmt:c.clockConfigs.main.ampm}),Object(o.jsx)("div",{className:N.a.subclocks,children:c.tz.sub.map((function(t){return Object(o.jsx)(C,{tz:t,yearFmt:c.clockConfigs.sub.year,monthFmt:c.clockConfigs.sub.month,dayFmt:c.clockConfigs.sub.day,weekFmt:c.clockConfigs.sub.week,hourFmt:c.clockConfigs.sub.hour,minuteFmt:c.clockConfigs.sub.minute,secondFmt:c.clockConfigs.sub.second,msFmt:c.clockConfigs.sub.millisecond,ampmFmt:c.clockConfigs.sub.ampm},t)}))})]})},Y=n(30),I=n(18),P=n.n(I),A=function(t){return Object(o.jsxs)("div",{className:P.a.Swapper,children:[Object(o.jsxs)("label",{className:P.a.label,children:[t.title,": "]}),Object(o.jsx)("select",{className:P.a.selections,onChange:function(e){return t.update(e,t.tz,t.local,t.title)},children:t.tz?Object(o.jsx)(a.Fragment,{children:t.meta.map((function(t,e){return Object(o.jsx)("option",{value:e,children:t},t)}))}):Object(o.jsx)(a.Fragment,{children:Object.keys(t.meta).map((function(e){return Object(o.jsx)("option",{value:e,children:t.meta[e].output},e)}))})})]})},B=n(13),H=n.n(B),W=function(){var t=Object(a.useState)({local:{Year:"1",Month:"1",Day:"1",Week:"1",Hour:"1",Minute:"1",Second:"1",Millisecond:"1","AM/PM":"1"},world:{Year:"1",Month:"1",Day:"1",Week:"1",Hour:"1",Minute:"1",Second:"1",Millisecond:"1","AM/PM":"1"},tz:{"Main Timezone":"000","Timezone 1":"000","Timezone 2":"000","Timezone 3":"000","Timezone 4":"000"}}),e=Object(h.a)(t,2),n=e[0],c=e[1],i=Object(p.e)(),s=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=Object(Y.a)({},n);if(e)i.tz[a]=("00"+t.target.value).slice(-3);else{var s=o?"local":"world";i[s][a]=t.target.value}c(i)};return Object(o.jsxs)("div",{className:H.a.settings,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:H.a.header,children:"Main Date and Clock Format"}),Object(o.jsx)(A,{tz:!1,local:!0,update:s,title:"Year",meta:v.year}),Object(o.jsx)(A,{tz:!1,local:!0,update:s,title:"Month",meta:v.month}),Object(o.jsx)(A,{tz:!1,local:!0,update:s,title:"Day",meta:v.day}),Object(o.jsx)(A,{tz:!1,local:!0,update:s,title:"Week",meta:v.week}),Object(o.jsx)(A,{tz:!1,local:!0,update:s,title:"Hour",meta:v.hour}),Object(o.jsx)(A,{tz:!1,local:!0,update:s,title:"Minute",meta:v.minute}),Object(o.jsx)(A,{tz:!1,local:!0,update:s,title:"Second",meta:v.second}),Object(o.jsx)(A,{tz:!1,local:!0,update:s,title:"Millisecond",meta:v.millisecond}),Object(o.jsx)(A,{tz:!1,local:!0,update:s,title:"AP/PM",meta:v.ampm})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:H.a.header,children:"World Date and Clock Format"}),Object(o.jsx)(A,{tz:!1,local:!1,update:s,title:"Year",meta:v.year}),Object(o.jsx)(A,{tz:!1,local:!1,update:s,title:"Month",meta:v.month}),Object(o.jsx)(A,{tz:!1,local:!1,update:s,title:"Day",meta:v.day}),Object(o.jsx)(A,{tz:!1,local:!1,update:s,title:"Week",meta:v.week}),Object(o.jsx)(A,{tz:!1,local:!1,update:s,title:"Hour",meta:v.hour}),Object(o.jsx)(A,{tz:!1,local:!1,update:s,title:"Minute",meta:v.minute}),Object(o.jsx)(A,{tz:!1,local:!1,update:s,title:"Second",meta:v.second}),Object(o.jsx)(A,{tz:!1,local:!1,update:s,title:"Millisecond",meta:v.millisecond}),Object(o.jsx)(A,{tz:!1,local:!1,update:s,title:"AP/PM",meta:v.ampm})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:H.a.header,children:"Timezones"}),Object(o.jsx)(A,{tz:!0,update:s,title:"Main Timezone",meta:f.a.tz.names()}),Object(o.jsx)(A,{tz:!0,update:s,title:"Timezone 1",meta:f.a.tz.names()}),Object(o.jsx)(A,{tz:!0,update:s,title:"Timezone 2",meta:f.a.tz.names()}),Object(o.jsx)(A,{tz:!0,update:s,title:"Timezone 3",meta:f.a.tz.names()}),Object(o.jsx)(A,{tz:!0,update:s,title:"Timezone 4",meta:f.a.tz.names()})]}),Object(o.jsx)("div",{className:H.a.button,onClick:function(){var t=function(t){for(var e=BigInt(t),n=[];0n!==e;){var o=e%64n;n.unshift(x.charAt(parseInt(o))),e/=64n}return n.join("")}(Object.values(n.local).join("")+n.tz["Main Timezone"]+Object.values(n.world).join("")+Object.values(n.tz).slice(1).join(""));i.push("/set/".concat(t))},children:"Apply"})]})},E=function(t){return Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(p.a,{path:"/",exact:!0,component:null}),Object(o.jsx)(p.a,{path:"/set/:config",exact:!0,component:D}),Object(o.jsx)(p.a,{path:"/setting",exact:!0,component:W})]})};var L=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(E,{}),Object(o.jsx)(b,{})]})},J=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),o(t),a(t),c(t),i(t)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m.a,{basename:"",children:Object(o.jsx)(L,{})})}),document.getElementById("root")),J()}},[[48,1,2]]]);
//# sourceMappingURL=main.8db3e4e1.chunk.js.map