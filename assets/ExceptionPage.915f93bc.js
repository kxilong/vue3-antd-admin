import{p as s,n as t,e as o,r as e,o as c,c as a,b as i,t as n,v as p,m}from"./vendor.a43a2890.js";const l={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或仍在开发中"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}};const r={name:"ExceptionPage",props:["type","homeRoute"],emits:["backHome"],setup(s,t){const e=o();return{config:l,backHome:function(){s.homeRoute&&e.push(s.homeRoute),t.$emit("backHome",s.type)}}}},g=p();s("data-v-b26347c6");const d={class:"exception-page"},b={class:"img"},u={class:"content"},v={class:"desc"},y={class:"action"},h=m("返回首页");t();const f=g(((s,t,o,p,m,l)=>{const r=e("a-button");return c(),a("div",d,[i("div",b,[i("img",{src:p.config[o.type].img},null,8,["src"])]),i("div",u,[i("h1",null,n(p.config[o.type].title),1),i("div",v,n(p.config[o.type].desc),1),i("div",y,[i(r,{type:"primary",onClick:p.backHome},{default:g((()=>[h])),_:1},8,["onClick"])])])])}));r.render=f,r.__scopeId="data-v-b26347c6";export{r as _};