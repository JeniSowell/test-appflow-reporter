"use strict";(self["webpackChunkreporter"]=self["webpackChunkreporter"]||[]).push([[70],{6070:(e,s,t)=>{t.r(s),t.d(s,{default:()=>v});var l=t(83673),c=t(62323);const a={key:0,class:"text-center text-grey-7"},n=(0,l.Uk)(" Aucun contrôle en attente "),o=(0,l._)("br",null,null,-1),r=(0,l.Uk)("cette semaine "),i=[n,o,r],p=["onClick"],u={class:"col-xs-2 col-sm-3 col-md-4 col-lg-5"},d={class:"col-xs-10 col-sm-9 col-md-8 col-lg-7 q-pl-sm"},m={class:"uppercase"},h={class:"q-caption"},g=(0,l._)("br",null,null,-1);function k(e,s,t,n,o,r){const k=(0,l.up)("q-icon"),w=(0,l.up)("q-btn"),y=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(y,{class:"q-px-md"},{default:(0,l.w5)((()=>[0===o.places.length?((0,l.wg)(),(0,l.iD)("h4",a,i)):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.places,(s=>((0,l.wg)(),(0,l.iD)("div",{key:s.id,class:"row q-py-md",onClick:t=>e.$router.push(`/zones/${s.zone.id}/places/${s.id}?tab=myScope`)},[(0,l._)("div",u,[((0,l.wg)(),(0,l.j4)(w,{round:"",color:"primary",size:"15px",key:"btn"+s.id,class:"float-right"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{name:"place",size:"30px"})])),_:2},1024))]),(0,l._)("div",d,[(0,l._)("span",m,(0,c.zw)(s.name),1),(0,l._)("span",h,[g,(0,l._)("i",null,"( "+(0,c.zw)(r.displayNbControls(s.auditsCount))+" )",1)])])],8,p)))),128))])),_:1})}var w=t(93617);const y={data(){return{places:[]}},mounted(){this.setPlaces()},computed:{...(0,w.Se)({categories:"company/categories",reducedPlaces:"audits/reducePlacesByResidence"})},methods:{setPlaces(){this.places=this.reducedPlaces(this.$route.params.id),0===this.places.length?this.$router.go(-1):this.$emit("title",this.places[0].zone.name)},displayNbControls(e){return e>1?e+" contrôles":e+" contrôle"}}};var b=t(74260),_=t(24379),q=t(48240),f=t(24554),x=t(7518),z=t.n(x);const C=(0,b.Z)(y,[["render",k]]),v=C;z()(y,"components",{QPage:_.Z,QBtn:q.Z,QIcon:f.Z})}}]);