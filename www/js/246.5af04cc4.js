"use strict";(self["webpackChunkreporter"]=self["webpackChunkreporter"]||[]).push([[246],{61246:(e,t,i)=>{i.r(t),i.d(t,{default:()=>N});i(90246);var s=i(83673),r=i(62323);const o=e=>((0,s.dD)("data-v-37f6dbf5"),e=e(),(0,s.Cn)(),e),n={class:"row text-subtitle1 text-grey-6 q-pt-md"},a={class:"row"},d={class:"col-xs-5 q-px-sm"},l={key:0},c={key:1},u={class:"col-xs-5 q-px-sm"},p={key:0},h={key:1},m={class:"col-xs-2 q-px-sm"},g={key:0},k={key:1},f={class:"row q-pt-md"},w={class:"col text-center"},y=(0,s.Uk)(" Archiver "),C=o((()=>(0,s._)("div",{class:"text-h6"},"Précisions :",-1))),q=["innerHTML"];function _(e,t,i,o,_,b){const $=(0,s.up)("q-icon"),v=(0,s.up)("q-btn"),D=(0,s.up)("q-spinner"),I=(0,s.up)("q-card-section"),R=(0,s.up)("q-card-actions"),x=(0,s.up)("q-card"),W=(0,s.up)("q-dialog"),O=(0,s.up)("q-page");return _.ready?((0,s.wg)(),(0,s.j4)(O,{key:0,padding:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(_.report.checkpoints,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.id,ref_for:!0,ref:`${e.id}`},[(0,s._)("div",n,[b.hasDetails(e)?((0,s.wg)(),(0,s.j4)($,{key:0,name:"info_outline",size:"20px",class:"q-mr-xs q-pt-sm",color:"primary",onClick:t=>b.showDetails(e)},null,8,["onClick"])):(0,s.kq)("",!0),(0,s.Uk)(" "+(0,r.zw)(e.question),1)]),(0,s._)("div",a,[(0,s._)("div",d,[(0,s.Wm)(v,{class:"full-width",dense:"",outline:!0!==e.asserted,disable:!0===e.asserted||null!=b.isIssuePresent(e.id),color:!0===e.asserted?"positive":"grey-7",onClick:t=>b.toggleAsserted(e,!0)},{default:(0,s.w5)((()=>[!0===e.asserted?((0,s.wg)(),(0,s.iD)("span",l,[(0,s.Wm)($,{name:"assignment_turned_in"})])):((0,s.wg)(),(0,s.iD)("span",c,"Ok"))])),_:2},1032,["outline","disable","color","onClick"])]),(0,s._)("div",u,[(0,s.Wm)(v,{class:"full-width",dense:"",outline:!b.isIssuePresent(e.id),color:!1===e.asserted&&b.isIssuePresent(e.id)?"negative":"grey-7",onClick:t=>b.toggleAsserted(e,!1)},{default:(0,s.w5)((()=>[b.isIssuePresent(e.id)?((0,s.wg)(),(0,s.iD)("span",p,[(0,s.Wm)($,{name:"assignment_late"})])):((0,s.wg)(),(0,s.iD)("span",h,"Anomalie"))])),_:2},1032,["outline","color","onClick"])]),(0,s._)("div",m,[(0,s.Wm)(v,{class:"full-width",dense:"",outline:!0!==e.missing,disable:!0===e.missing||null!=b.isIssuePresent(e.id),color:"warning",onClick:t=>b.toggleMissing(e,!0)},{default:(0,s.w5)((()=>[!0===e.missing?((0,s.wg)(),(0,s.iD)("span",g,[(0,s.Wm)($,{name:"visibility_off"})])):((0,s.wg)(),(0,s.iD)("span",k,[(0,s.Wm)($,{name:"clear"})]))])),_:2},1032,["outline","disable","onClick"])])])],512)))),128)),(0,s._)("div",f,[(0,s._)("div",w,[b.reportComplete?((0,s.wg)(),(0,s.j4)(v,{key:0,small:"",color:"primary",disable:_.isLoading,onClick:t[0]||(t[0]=e=>b.sendReport())},{default:(0,s.w5)((()=>[(0,s.Wm)($,{left:"",size:"sm",name:"archive"}),y,_.isLoading?((0,s.wg)(),(0,s.j4)(D,{key:0,size:"20",color:"white"})):(0,s.kq)("",!0)])),_:1},8,["disable"])):(0,s.kq)("",!0)])]),(0,s.Wm)(W,{modelValue:_.dialogOpened,"onUpdate:modelValue":t[2]||(t[2]=e=>_.dialogOpened=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(x,null,{default:(0,s.w5)((()=>[(0,s.Wm)(I,null,{default:(0,s.w5)((()=>[C])),_:1}),(0,s.Wm)(I,null,{default:(0,s.w5)((()=>[(0,s._)("span",{innerHTML:_.currentCheckpoint.description},null,8,q)])),_:1}),(0,s.Wm)(R,{align:"right"},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{flat:"",label:"OK",color:"primary",onClick:t[1]||(t[1]=e=>_.dialogOpened=!1)})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})):(0,s.kq)("",!0)}var b=i(93617),$=i(38400),v=i(86310);const D=i(73629),{getScrollTarget:I,setVerticalScrollPosition:R}=$.ZP,x={name:"Checklist",mounted(){if(this.setAudit().then((()=>{this.findOrCreateReport().then((()=>{this.$q.loading.hide(),this.ready=!0}))})),this.checkedReports){let e=this.checkedReports.find((e=>e.auditId===Number(this.$route.params.auditId)));void 0!==e&&setTimeout((()=>{this.scrollToElement(e.id)}),500)}},data(){return{ready:!1,dialogOpened:!1,currentCheckpoint:{},report:{},audit:{id:this.$route.params.auditId,checklist:{checkpoints:{}}},isLoading:!1}},methods:{scrollToElement(e){const t=this.$refs[e][0],i=I(t),s=t.offsetTop,r=300;setTimeout((()=>{t.style.backgroundColor="rgba(64, 196, 255, 0.15)"}),400),setTimeout((()=>{t.style.backgroundColor="white"}),1e3),R(i,s,r)},isIssuePresent(e){return this.report.issues.find((t=>Number(t.checkpoint.id)===Number(e)))},async setAudit(){let e=this.audits.find((e=>e.id===Math.trunc(this.$route.params.auditId)));e?(this.audit=e,this.$emit("title",e.checklist.name)):await this.$SowellProxy.loadCheckpoints(this.audit.id).then((e=>{this.audit.checklist.checkpoints=e.data}))},async findOrCreateReport(){let e=this;await e.$DB.tmpReports().find({selector:{"audit.id":e.audit.id}}).then((async t=>{if(t.docs.length)e.report=t.docs[0];else{let t=[];e.audit.checklist.checkpoints.forEach((e=>{t.push({id:e.id,question:e.question,asserted:null,missing:null})}));let i={_id:D(),audit:{id:e.audit.id},checkpoints:t,issues:[],ready:!1};await e.$DB.tmpReports().put(i).then((async t=>{await e.findOrCreateReport()})).catch((function(e){}))}}))},findCheckpoint(e){return this.report.checkpoints.find((t=>t.id===e.id))},toggleAsserted(e,t){let i={id:Number(e.id),auditId:Number(this.$route.params.auditId)};this.$store.dispatch("report/setcheckedReport",i);let s=this.findCheckpoint(e);s.asserted=t,null!==t&&(this.toggleMissing(e,null),this.$DB.tmpReports().put(this.report).then((()=>{this.findOrCreateReport()})),!1===t&&this.$router.push({path:"/zones/"+this.$route.params.zoneId+"/places/"+this.$route.params.placeId+"/audits/"+this.audit.id+"/issue",query:{checkpoint:e.id,report:this.report._id,tab:this.$route.query.tab?this.$route.query.tab:"myScope"}}))},toggleMissing(e,t){let i=this.findCheckpoint(e);i.missing=t,null!==t&&(this.$q.dialog({title:"Contrôle impossible",message:"Vous venez d'indiquer que l'élément à contrôler n'existe pas. Cette question sera supprimée après validation de vos responsables."}),this.toggleAsserted(e,null),this.$DB.tmpReports().put(this.report).then((()=>{this.findOrCreateReport()})))},sendReport(){this.report.ready=!0,this.isLoading=!0,this.$DB.tmpReports().put(this.report).then((()=>{this.$store.dispatch("report/reset",Number(this.$route.params.auditId)),this.$store.dispatch("audits/close",this.report.audit),v.Z.$emit("processQueue"),this.isLoading=!1,this.$router.go(-1)})).catch((()=>{this.isLoading=!1,this.$q.notify({message:"Une erreur s'est produite veuillez résssayez",color:"warning",position:"top"})}))},hasDetails(e){let t=this.audit.checklist.checkpoints.find((t=>t.id===e.id));return"description"in t&&null!==t.description&&t.description.length},showDetails(e){this.currentCheckpoint=this.audit.checklist.checkpoints.find((t=>t.id===e.id)),this.dialogOpened=!0}},computed:{...(0,b.Se)({audits:"audits/all",categories:"company/categories",checkedReports:"report/checkedReports"}),reportComplete(){let e=this.report.checkpoints.filter((e=>null===e.asserted&&null===e.missing||!1===e.asserted&&!this.isIssuePresent(e.id)));return 0===e.length}}};var W=i(74260),O=i(24379),P=i(24554),Z=i(48240),z=i(6833),A=i(24390),Q=i(10151),T=i(25589),L=i(99367),S=i(7518),B=i.n(S);const M=(0,W.Z)(x,[["render",_],["__scopeId","data-v-37f6dbf5"]]),N=M;B()(x,"components",{QPage:O.Z,QIcon:P.Z,QBtn:Z.Z,QSpinner:z.Z,QDialog:A.Z,QCard:Q.Z,QCardSection:T.Z,QCardActions:L.Z})}}]);