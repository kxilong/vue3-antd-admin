import{_ as e}from"./pageLayout.00166ff2.js";import{g as a,r as t,o as s,c as o,w as r,b as u,t as p}from"./vendor.a43a2890.js";const n={components:{PageLayout:e},setup:()=>({user:a((()=>JSON.parse(localStorage.getItem("userInfo")).user))})};n.render=function(e,a,n,f,g,l){const m=t("page-layout");return s(),o(m,{"page-title":"super admin 可见页","page-type":"white"},{default:r((()=>[u("p",null,'当前用户角色： "'+p(f.user)+'"',1)])),_:1})};export{n as default};