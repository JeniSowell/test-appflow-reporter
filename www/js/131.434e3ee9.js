"use strict";(self["webpackChunkreporter"]=self["webpackChunkreporter"]||[]).push([[131],{60131:(e,s,t)=>{t.r(s),t.d(s,{default:()=>He});var a=t(83673),i=t(98880);const l={key:0},o={"infinite-scroll-disabled":"busy","infinite-scroll-distance":"10"},n={key:0,class:"q-subheading q-pa-md"},r=(0,a.Uk)(" Chargement en cours ... "),c={key:0,class:"q-subheading q-pt-lg q-px-md"},u={key:1,class:"q-subheading q-pt-lg q-px-md"},d={key:2,class:"q-subheading q-pt-lg q-px-md"},p={key:3,class:"q-pa-md"},m={key:1};function h(e,s,t,h,g,w){const y=(0,a.up)("q-tab"),f=(0,a.up)("q-tabs"),I=(0,a.up)("q-icon"),k=(0,a.up)("q-input"),b=(0,a.up)("issues-by-place"),_=(0,a.up)("q-spinner-ios"),v=(0,a.up)("existing-issue"),q=(0,a.up)("q-dialog"),$=(0,a.up)("q-btn"),W=(0,a.up)("q-page-scroller"),x=(0,a.up)("filter-issues-history"),Z=(0,a.up)("q-page"),S=(0,a.Q2)("infinite-scroll");return(0,a.wg)(),(0,a.j4)(Z,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(f,{modelValue:g.selectedTab,"onUpdate:modelValue":s[0]||(s[0]=e=>g.selectedTab=e),inverted:"",class:"q-pb-lg text-primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{name:"myScope",icon:"person_pin_circle",label:w.checkUser},null,8,["label"]),(0,a.Wm)(y,{name:"other",icon:"add_circle_outline",onClick:w.resetPlaceId,label:"Autre"},null,8,["onClick"])])),_:1},8,["modelValue"]),[[i.F8,e.company.showUnscopedHistory]]),"myScope"===g.selectedTab?((0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(k,{disable:g.opened,borderless:"",dense:"",modelValue:g.search,"onUpdate:modelValue":s[1]||(s[1]=e=>g.search=e),debounce:600,placeholder:"Rechercher",class:"q-px-md"},{append:(0,a.w5)((()=>[""!==g.search?((0,a.wg)(),(0,a.j4)(I,{key:0,name:"close",onClick:w.clearSearch},null,8,["onClick"])):(0,a.kq)("",!0)])),_:1},8,["disable","modelValue"]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(b,{issues:w.initializedIssues},null,8,["issues"]),g.busy?((0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(_,{size:"30",color:"primary"}),r])):(0,a.kq)("",!0)])),[[S,w.loadMore]]),g.busy||g.issues.length||g.search.length?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",c," Aucun signalement à afficher pour le moment ")),g.search.length&&g.search.length<3?((0,a.wg)(),(0,a.iD)("div",u," La recherche nécessite au minimum 3 charactères ")):(0,a.kq)("",!0),!g.issues.length&&g.search.length>2?((0,a.wg)(),(0,a.iD)("div",d," Aucun signalement ne correspond à votre recherche ")):(0,a.kq)("",!0),g.loaded?((0,a.wg)(),(0,a.iD)("div",p)):(0,a.kq)("",!0),(0,a.Wm)(q,{modelValue:g.opened,"onUpdate:modelValue":s[2]||(s[2]=e=>g.opened=e),maximized:"",ref:"modalRef"},{default:(0,a.w5)((()=>[g.opened?((0,a.wg)(),(0,a.j4)(v,{key:0,issueId:g.currentIssue._id},null,8,["issueId"])):(0,a.kq)("",!0)])),_:1},8,["modelValue"]),(0,a.Wm)(W,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:(0,a.w5)((()=>[(0,a.Wm)($,{round:"",icon:"keyboard_arrow_up",color:"accent"})])),_:1})])):((0,a.wg)(),(0,a.iD)("div",m,[(0,a.Wm)(x,{placeId:g.placeId,"onUpdate:placeId":s[3]||(s[3]=e=>g.placeId=e)},null,8,["placeId"]),g.placeId?((0,a.wg)(),(0,a.j4)(b,{key:0,issues:g.issuesByPlaceId},null,8,["issues"])):(0,a.kq)("",!0)]))])),_:1})}t(65363),t(19544);var g=t(93617),w=t(36826),y=t.n(w),f=t(81833),I=t.n(f),k=t(62323);const b={class:"sw-title-secondary"},_={class:"col-xs-12 col-sm-10 col-md-auto",style:{"overflow-x":"hidden"}},v={key:0},q=["href"],$={key:1},W={class:"row q-pt-sm full-width q-pr-md"},x={class:"col text-center",ref:"imgContainer"},Z=["src"],S=["src"],P=(0,a._)("div",{class:"text-h6"},"Patientez s'il vous plaît.",-1),A=(0,a._)("p",{class:"q-mt-lg"}," Téléchargement en cours ... ",-1),C={class:"window-width"},Q={class:"row justify-between no-wrap"},D={style:{height:"fit-content","margin-top":"auto"}},T={style:{width:"100%"}},j={style:{height:"fit-content","margin-top":"auto"}},U={ref:"bottom"};function B(e,s,t,l,o,n){const r=(0,a.up)("q-toolbar-title"),c=(0,a.up)("q-btn"),u=(0,a.up)("q-item"),d=(0,a.up)("q-list"),p=(0,a.up)("q-menu"),m=(0,a.up)("q-toolbar"),h=(0,a.up)("q-header"),g=(0,a.up)("q-icon"),w=(0,a.up)("q-field"),y=(0,a.up)("q-carousel-slide"),f=(0,a.up)("q-carousel"),I=(0,a.up)("q-chat-message"),B=(0,a.up)("q-space"),R=(0,a.up)("q-card-section"),M=(0,a.up)("q-linear-progress"),z=(0,a.up)("q-card"),V=(0,a.up)("q-dialog"),E=(0,a.up)("q-input"),N=(0,a.up)("q-scroll-area"),F=(0,a.up)("q-page"),O=(0,a.up)("q-page-container"),L=(0,a.up)("q-layout"),H=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(L,{view:"lHh Lpr lFf",container:""},{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r,{class:"text-center q-pl-md"},{default:(0,a.w5)((()=>[(0,a._)("span",b,"Signalement N°"+(0,k.zw)(o.issue.meta.id),1)])),_:1}),(0,a.Wm)(c,{class:"absolute-left",flat:"",icon:"close",onClick:n.closeModal},null,8,["onClick"]),(o.issue.meta.isPrivate||n.isManageable)&&["pending","ongoing"].includes(o.issue.tracking.status)||n.showForwardIssueButton(o.issue)?((0,a.wg)(),(0,a.j4)(c,{key:0,unelevated:"",color:"primary",icon:"more_vert"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{style:{"min-width":"160px"}},{default:(0,a.w5)((()=>[(o.issue.meta.isPrivate||n.isManageable)&&["pending","ongoing"].includes(o.issue.tracking.status)?(0,a.wy)(((0,a.wg)(),(0,a.j4)(u,{key:0,clickable:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{class:"block",dense:"",flat:"",icon:"done",color:"positive",label:"Cloturer",onClick:s[0]||(s[0]=e=>n.closeIssue())})])),_:1})),[[H]]):(0,a.kq)("",!0),n.showForwardIssueButton(o.issue)?(0,a.wy)(((0,a.wg)(),(0,a.j4)(u,{key:1,clickable:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{dense:"",flat:"",disable:o.issueBeingTransferred,color:"primary",label:n.forwardIssueHasAttribute("message")?e.company.forwardIssues.message:"Envoyer à l'ERP",size:"sm","icon-right":n.forwardIssueHasAttribute("icon")?e.company.forwardIssues.icon:"send",onClick:s[1]||(s[1]=e=>n.forwardIssue(o.issue.meta.id))},null,8,["disable","label","icon-right"])])),_:1})),[[H]]):(0,a.kq)("",!0)])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0)])),_:1})])),_:1}),(0,a.Wm)(O,null,{default:(0,a.w5)((()=>[(0,a.Wm)(F,{class:"bg-white",style:(0,k.j5)("width:"+o.calcWidth+"px;")},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"row justify-center",style:(0,k.j5)("width:"+o.calcWidth+"px;")},[(0,a.Wm)(N,{style:(0,k.j5)("width:100%; height:"+o.calcHeight+"px;")},{default:(0,a.w5)((()=>[(0,a._)("div",_,[(0,a.Wm)(w,{label:"Date de création","stack-label":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"today",color:"primary"})])),control:(0,a.w5)((()=>[(0,a._)("div",null," Le "+(0,k.zw)(e.$helpers.stringToDateTime(o.issue.meta.createdAt)),1)])),_:1}),(0,a.Wm)(w,{label:"Type","stack-label":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"label",color:"primary"})])),control:(0,a.w5)((()=>[(0,a._)("div",null,(0,k.zw)(o.issue.category.name),1)])),_:1}),(0,a.Wm)(w,{label:"Statut","stack-label":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"flag",color:"primary"})])),control:(0,a.w5)((()=>[o.issue.tracking.status?((0,a.wg)(),(0,a.iD)("div",v,(0,k.zw)(e.$helpers.statusTranslation(o.issue.tracking.status).label),1)):(0,a.kq)("",!0)])),_:1}),(0,a.wy)((0,a.Wm)(w,{label:"Priorité","stack-label":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"report_problem",color:"primary"})])),control:(0,a.w5)((()=>[(0,a._)("div",null,(0,k.zw)(e.$helpers.priorityApiIdToFrench(o.issue.meta.disturbance)),1)])),_:1},512),[[i.F8,"disturbance"in o.issue&&null===!o.issue.meta.disturbance]]),"residence"in o.issue.location?((0,a.wg)(),(0,a.j4)(w,{key:0,label:"Résidence","stack-label":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"location_city",color:"primary"})])),control:(0,a.w5)((()=>[(0,a._)("div",null,(0,k.zw)(o.issue.location.residence.name),1)])),_:1})):(0,a.kq)("",!0),"place"in o.issue.location?((0,a.wg)(),(0,a.j4)(w,{key:1,label:"Adresse","stack-label":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"edit_location",color:"primary"})])),control:(0,a.w5)((()=>[(0,a._)("div",null,(0,k.zw)(o.issue.location.place.name),1)])),_:1})):(0,a.kq)("",!0),"spot"in o.issue.location?((0,a.wg)(),(0,a.j4)(w,{key:2,label:"Localisation","stack-label":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"my_location",color:"primary"})])),control:(0,a.w5)((()=>[(0,a._)("div",null,(0,k.zw)(o.issue.location.spot.name),1)])),_:1})):(0,a.kq)("",!0),"reason"in o.issue.category&&Object.keys(o.issue.category.reason).length>0?((0,a.wg)(),(0,a.j4)(w,{key:3,label:"Motif","stack-label":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"apps",color:"primary"})])),control:(0,a.w5)((()=>[(0,a._)("div",null,(0,k.zw)(o.issue.category.reason.name),1)])),_:1})):(0,a.kq)("",!0),n.issueHasCode(o.issue)?((0,a.wg)(),(0,a.j4)(w,{key:4,label:e.company.externalIssuesUrl?"Lien vers le signalement":"Numéro de réclamation","stack-label":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(g,{color:"primary",name:e.company.externalIssuesUrl?"east":"list_alt"},null,8,["name"])])),control:(0,a.w5)((()=>[e.company.externalIssuesUrl?((0,a.wg)(),(0,a.iD)("a",{key:0,class:"text-primary",target:"_blank",href:n.externalIssuesUrl(o.issue.tracking.code)},"Ouvrir",8,q)):((0,a.wg)(),(0,a.iD)("div",$,(0,k.zw)(o.issue.tracking.code),1))])),_:1},8,["label"])):(0,a.kq)("",!0),"report"in o.issue.tracking&&"checklist"in o.issue.tracking.report?((0,a.wg)(),(0,a.j4)(w,{key:5,label:"Audit","stack-label":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"assignment_late",color:"warning"})])),control:(0,a.w5)((()=>[(0,a.Uk)((0,k.zw)(o.issue.tracking.report.checklist.name)+" > "+(0,k.zw)(o.issue.tracking.report.checkpoint.name),1)])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(w,{label:"Détails","stack-label":"",borderless:null===o.issue.content.img&&!o.issue.tracking.talks.length},{prepend:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"list",color:"primary"})])),control:(0,a.w5)((()=>[(0,a._)("div",null,(0,k.zw)(o.issue.content.message),1)])),_:1},8,["borderless"]),null!==o.issue.content.img||o.issue.content.imgsUrls&&o.issue.content.imgsUrls.length>0?((0,a.wg)(),(0,a.j4)(w,{key:6,label:"Photo","stack-label":"",borderless:""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"camera_alt",color:"primary"})])),control:(0,a.w5)((()=>[(0,a._)("div",W,[(0,a._)("div",x,[o.issue.content.imgsUrls&&Array.isArray(o.issue.content.imgsUrls)&&o.issue.content.imgsUrls.length>1?((0,a.wg)(),(0,a.j4)(f,{key:0,class:"sw-c-carousel",animated:"",modelValue:o.slide,"onUpdate:modelValue":s[2]||(s[2]=e=>o.slide=e),arrows:"",navigation:"",infinite:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.issue.content.imgsUrls,((e,s)=>((0,a.wg)(),(0,a.j4)(y,{key:s,name:s,"img-src":e},null,8,["name","img-src"])))),128))])),_:1},8,["modelValue"])):((0,a.wg)(),(0,a.iD)("img",{key:1,src:o.issue.content.img,style:{"max-width":"100%"}},null,8,Z))],512)])])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(w,{label:"Messagerie","stack-label":"",borderless:"",class:"chat-messages-wrapper"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"forum",color:"primary"})])),control:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.issue.tracking.talks,(s=>((0,a.wg)(),(0,a.iD)("div",{class:"full-width q-pr-xl",key:"chat-"+o.issue.tracking.talks.indexOf(s)},[s.message.startsWith("data:image/")?((0,a.wg)(),(0,a.j4)(I,{key:1,name:s.author.id===o.issue.author.id?"Moi":s.author.name,avatar:n.avatarURL(s.author.id),stamp:e.$helpers.stringToDateTime(s["created_at"]),"bg-color":s.author.id===o.issue.author.id?"grey-4":"blue-5",sent:s.author.id===o.issue.author.id},{default:(0,a.w5)((()=>[(0,a._)("img",{src:s.message,style:{height:"200px","border-radius":"10px","margin-bottom":"5px"}},null,8,S)])),_:2},1032,["name","avatar","stamp","bg-color","sent"])):((0,a.wg)(),(0,a.j4)(I,{key:0,class:"chat-message",name:s.author.id===o.issue.author.id?"Moi":s.author.name,avatar:n.avatarURL(s.author.id),text:[s.message],stamp:e.$helpers.stringToDateTime(s["created_at"]),"bg-color":s.author.id===o.issue.author.id?"grey-4":"blue-5",sent:s.author.id===o.issue.author.id},null,8,["name","avatar","text","stamp","bg-color","sent"]))])))),128)),(0,a.Wm)(V,{modelValue:o.onDownload,"onUpdate:modelValue":s[3]||(s[3]=e=>o.onDownload=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{style:{"min-width":"300px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(R,{class:"row items-center q-pb-none"},{default:(0,a.w5)((()=>[P,(0,a.Wm)(B),(0,a.wy)((0,a.Wm)(c,{icon:"visibility_off",flat:"",round:"",dense:""},null,512),[[H]])])),_:1}),(0,a.Wm)(R,{style:{"text-align":"center"}},{default:(0,a.w5)((()=>[(0,a.Wm)(M,{stripe:"",size:"10px",value:parseFloat(o.progressValue),color:"warning"},null,8,["value"]),A])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a._)("form",C,[(0,a._)("div",Q,[(0,a._)("div",D,[(0,a.wy)((0,a.Wm)(c,{onClick:s[4]||(s[4]=e=>n.openActionSheet()),color:"primary",round:"",size:"sm",icon:"camera_alt",class:"buttonHover q-mr-md",disabled:0!==o.message.length},null,8,["disabled"]),[[i.F8,o.isCameraSupported]])]),(0,a._)("div",T,[(0,a.Wm)(E,{modelValue:o.message,"onUpdate:modelValue":s[5]||(s[5]=e=>o.message=e),autogrow:"",dense:"",onBlur:s[6]||(s[6]=(0,i.iM)((s=>e.$helpers.scrollToElement(e.$refs.bottom)),["stop"]))},null,8,["modelValue"])]),(0,a._)("div",j,[(0,a.Wm)(c,{round:"",class:"q-ml-md",dense:"",flat:"",icon:"send",color:"primary",onClick:s[7]||(s[7]=e=>n.sendTalk()),disabled:!o.message.length},null,8,["disabled"])])])])])),_:1})]),(0,a._)("div",U," ",512)])),_:1},8,["style"])],4)])),_:1},8,["style"])])),_:1})])),_:1})}var R=t(22012),M=(t(64434),t(86310)),z=t(514),V=t(40019);const{height:E,width:N}=R.ZP,F={props:["issueId","opened","currentIssue"],inject:["$DB"],data(){return{calcHeight:0,calcWidth:0,onDownload:!1,progressValue:0,issue:{meta:{},tracking:{status:""},category:{},location:{},content:{}},message:"",img:"",isCameraSupported:!1,slide:0,issueBeingTransferred:!1,isIssueForwarded:!1,actionSheetConfig:{actions:[{label:"Ouvrir la galerie",icon:"add_photo_alternate",color:"primary",handler:()=>{this.openGallery()}},{label:"Prendre une photo",icon:"add_a_photo",color:"primary",handler:()=>{this.shootPhoto()}}],dismissLabel:"Annuler"}}},created(){M.Z.$on("localIssueChange",this.loadIssue)},mounted(){this.loadIssue(),window.addEventListener("deviceready",this.deviceReady(),!1)},updated(){this.opened&&setTimeout((()=>{this.$helpers.scrollToElement(this.$refs.bottom)}),0)},watch:{issueId:function(){this.loadIssue()}},computed:{...(0,g.Se)({reporter:"reporter/attributes",company:"company/attributes"}),isManageable(){return this.reporter.canCloseIssues}},methods:{externalIssuesUrl(e){return this.company.externalIssuesUrl.replace("%code%",e)},issueHasCode(e){return"code"in e.tracking&&e.tracking.code},forwardIssueHasAttribute(e){return this.company.forwardIssues&&e in this.company.forwardIssues&&this.company.forwardIssues[e]},showForwardIssueButton(e){return!this.issueHasCode(e)&&this.forwardIssueHasAttribute("url")&&!this.isIssueForwarded},forwardIssue(e){this.issueBeingTransferred=!0,this.$SowellProxy.forwardIssue(e,{data:{type:"issues"}}).then((()=>{this.isIssueForwarded=!0,this.issueBeingTransferred=!1,this.$q.notify({message:"Signalement transmis avec succès",color:"info",position:"top"})}),(()=>{this.isIssueForwarded=!1,this.issueBeingTransferred=!1,this.$q.notify({message:"Le transfert du signalement a échoué, une erreur est survenue",color:"warning",position:"top"})}))},closeModal(){M.Z.$emit("closeIssueModal")},loadIssue(){var e=this;e.message="",e.issue=e.currentIssue,e.currentIssue.fromApi?(e.issue=e.currentIssue,e.$store.dispatch("reporter/clearIssueNotifications",e.issue),e.calcHeight=E(window)-50,e.calcWidth=N(window)):e.$DB.localIssues().get(e.issueId).then((function(s){e.issue=s,e.$store.dispatch("reporter/clearIssueNotifications",e.issue),e.calcHeight=E(window)-50,e.calcWidth=N(window)}))},async findOrCreateTmpIssue(){var e=this;let s={};return await e.$DB.tmpIssues().get(e.issueId).then((function(e){s=e})).catch((function(){s={_id:e.issue._id,tracking:{status:e.issue.tracking.status,talks:[]}}})),s},closeIssue(){var e=this;e.issue.tracking.status="done",e.issue.fromApi?e.$SowellProxy.update("issue",{id:e.issue.meta.id,status:e.issue.tracking.status}).then((e=>{V.log("response status",e)})).catch((e=>{V.log("status issue not to update",e)})):e.$DB.localIssues().put(e.issue).then((function(){e.findOrCreateTmpIssue().then((s=>{s.tracking.status="done",s.event="close",e.$DB.tmpIssues().put(s).then((()=>{M.Z.$emit("processQueue"),e.closeModal()}))}))})).catch((function(e){V.info("closeIssue error"),V.log(e)}))},sendTalk(){var e=this;if(e.message.replace(/\s/g,"").length||e.img.length){var s={author:{id:e.reporter.id,img:e.reporter.img,name:e.reporter.firstName+" "+e.reporter.lastName},created_at:(new Date).toISOString(),message:e.message||e.img};e.issue.tracking.talks.push(s),e.$DB.localIssues().put(e.issue).then((function(){e.findOrCreateTmpIssue().then((t=>{t.event="talk",t.tracking.talks.push(s),e.$DB.tmpIssues().put(t).then((()=>e.$root.$emit("processQueue")))}))})).catch((function(t){e.issue.fromApi?e.$SowellProxy.createTalk(e.issue.meta.id,s.message).then((()=>{V.log("talk sending to API")})):(V.info("sendTalk error"),V.log(t))})),this.message=""}},avatarURL(e){return"https://res.cloudinary.com/sowell/image/upload/v1552407985/ua/"+e+".png"},deviceReady(){this.$q.platform.is.capacitor&&(this.isCameraSupported=!0,this.camera=z.V1)},openActionSheet(){this.$q.bottomSheet({actions:[{label:"Ouvrir la galerie",icon:"add_photo_alternate",color:"primary",id:"photoGalery"},{label:"Prendre une photo",icon:"add_a_photo",color:"primary",id:"takePhoto"}]}).onOk((e=>{this.handleActionSheetEvent(e.id)})).onCancel((()=>{})).onDismiss((()=>{}))},handleActionSheetEvent(e){switch(e){case"photoGalery":this.openGallery();break;case"takePhoto":this.shootPhoto();break}},async shootPhoto(){const e=await this.camera.getPhoto({quality:50,allowEditing:!0,width:350,height:350,allowEditing:!1,source:z.oK.Camera,resultType:z.dk.Base64});this.shootSuccess(e.base64String)},async openGallery(){const e=await this.camera.getPhoto({quality:50,allowEditing:!0,width:350,height:350,allowEditing:!1,source:z.oK.Photos,resultType:z.dk.Base64});this.shootSuccess(e.base64String)},shootSuccess(e){this.img="data:image/jpeg;base64,"+e,this.sendTalk()}}};var O=t(74260),L=t(19214),H=t(53812),G=t(39570),K=t(13747),Y=t(48240),J=t(20811),X=t(27011),ee=t(83414),se=t(72652),te=t(24379),ae=t(47704),ie=t(86115),le=t(24554),oe=t(31277),ne=t(34593),re=t(40629),ce=t(24390),ue=t(10151),de=t(25589),pe=t(62025),me=t(51598),he=t(34842),ge=t(60677),we=t(7518),ye=t.n(we);const fe=(0,O.Z)(F,[["render",B]]),Ie=fe;function ke(e,s,t,l,o,n){const r=(0,a.up)("q-icon"),c=(0,a.up)("q-select"),u=(0,a.up)("q-field");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(u,{borderless:""},{before:(0,a.w5)((()=>[(0,a.Wm)(r,{name:"store_mall_directory",color:"primary"})])),control:(0,a.w5)((()=>[(0,a.Wm)(c,{outlined:"",onInput:s[0]||(s[0]=s=>e.$refs["topZone"].$el.childNodes[2].blur()),modelValue:o.selectedAgencyId,"onUpdate:modelValue":s[1]||(s[1]=e=>o.selectedAgencyId=e),"option-value":"value","option-label":"label",options:n.sortList(n.$helpers.resourcesToFormOptions(o.agencies)),behavior:"menu",label:"Agence",ref:"topZone",dense:"",class:"qSelect","emit-value":"","display-value":n.$helpers.findOptionName(o.agencies,o.selectedAgencyId)},null,8,["modelValue","options","display-value"])])),_:1}),(0,a.wy)((0,a.Wm)(u,{borderless:""},{before:(0,a.w5)((()=>[(0,a.Wm)(r,{name:"location_city",color:"primary"})])),control:(0,a.w5)((()=>[(0,a.Wm)(c,{outlined:"",onInput:s[2]||(s[2]=s=>e.$refs["zone"].$el.childNodes[2].blur()),modelValue:o.selectedResidenceId,"onUpdate:modelValue":s[3]||(s[3]=e=>o.selectedResidenceId=e),"option-value":"value","option-label":"label",options:n.sortList(n.$helpers.resourcesToFormOptions(o.residences)),behavior:"menu",label:"Résidence",ref:"zone",dense:"",class:"qSelect","emit-value":"","display-value":n.$helpers.findOptionName(o.residences,o.selectedResidenceId)},null,8,["modelValue","options","display-value"])])),_:1},512),[[i.F8,o.selectedAgencyId]]),(0,a.wy)((0,a.Wm)(u,{borderless:""},{before:(0,a.w5)((()=>[(0,a.Wm)(r,{name:"place",color:"primary"})])),control:(0,a.w5)((()=>[(0,a.Wm)(c,{outlined:"",onInput:n.getPlaceId,modelValue:o.selectedPlaceId,"onUpdate:modelValue":s[4]||(s[4]=e=>o.selectedPlaceId=e),"option-value":"value","option-label":"label",options:n.sortList(n.$helpers.resourcesToFormOptions(o.places)),behavior:"menu",label:"Adresse",ref:"place",dense:"",class:"qSelect","emit-value":"","display-value":n.$helpers.findOptionName(o.places,o.selectedPlaceId)},null,8,["onInput","modelValue","options","display-value"])])),_:1},512),[[i.F8,o.selectedResidenceId]])])}ye()(F,"components",{QLayout:L.Z,QHeader:H.Z,QToolbar:G.Z,QToolbarTitle:K.Z,QBtn:Y.Z,QMenu:J.Z,QList:X.Z,QItem:ee.Z,QPageContainer:se.Z,QPage:te.Z,QScrollArea:ae.Z,QField:ie.Z,QIcon:le.Z,QCarousel:oe.Z,QCarouselSlide:ne.Z,QChatMessage:re.Z,QDialog:ce.Z,QCard:ue.Z,QCardSection:de.Z,QSpace:pe.Z,QLinearProgress:me.Z,QInput:he.Z}),ye()(F,"directives",{ClosePopup:ge.Z});const be={inject:["$helpers"],data(){return{selectedId:"",agencies:[],residences:[],places:[],selectedAgencyId:null,selectedResidenceId:null,selectedPlaceId:null}},mounted(){this.$q.loading.hide(),this.$SowellProxy.loadCompanyAgencies(this.company.id).then((e=>{this.agencies=e.data.map((e=>({id:e.id,name:e.name})))}))},watch:{agencies(){this.agencies&&1===this.agencies.length&&this.selectAgency(this.agencies[0].id)},residences(){1===this.residences.length&&this.selectResidence(this.residences[0].id)},selectedAgencyId(e){this.selectAgency(e)},selectedResidenceId(e){this.selectResidence(e)},selectedPlaceId(e){this.$emit("update:placeId",e)}},computed:{...(0,g.Se)({company:"company/attributes",zones:"audits/reduceResidences",reducedAudits:"audits/byPlace"})},methods:{sortList(e){return e.sort(((e,s)=>null===e.label||e.label.toString().localeCompare(s.label.toString(),"fr",{ignorePunctuation:!0})))},selectAgency(e){this.resetSelection(["agencies"]),null!==e&&void 0!==e&&(this.selectedAgencyId=e,this.$q.loading.show(),this.residences=[],this.$SowellProxy.loadAgencyResidences(this.selectedAgencyId,!0).then((e=>{e.data.forEach((e=>{!0===e["has-audits"]&&this.residences.push({id:e.id,name:e.name})})),this.$q.loading.hide()})))},selectResidence(e){this.resetSelection(["agencies","selectedAgencyId","residences"]),null!==e&&void 0!==e&&(this.selectedResidenceId=e,this.$q.loading.show(),this.places=[],this.$SowellProxy.loadResidencePlaces(this.selectedResidenceId,!0).then((e=>{e.data.map((e=>{!0===e["has-audits"]&&this.places.push({id:+e.id,name:e.name})})),this.$q.loading.hide()})))},async selectPlace(e){this.reset(["agencies","selectedAgencyId","residences","selectedResidenceId","places"])},resetSelection(e=[]){switch(e){case!e.includes("agencies"):this.agencies=[];break;case!e.includes("residences"):this.residences=[];break;case!e.includes("selectedAgencyId"):this.selectedAgencyId=null;break;case!e.includes("selectedResidenceId"):this.selectedResidenceId=null;break}},getPlaceId(){this.$refs["place"].$el.childNodes[2].blur()}}};var _e=t(72448);const ve=(0,O.Z)(be,[["render",ke],["__scopeId","data-v-17598394"]]),qe=ve;ye()(be,"components",{QField:ie.Z,QIcon:le.Z,QSelect:_e.Z});const $e=["src"],We={key:1},xe=(0,a.Uk)('"'),Ze=(0,a.Uk)('"'),Se=(0,a.Uk)(" : "),Pe={key:1};function Ae(e,s,t,i,l,o){const n=(0,a.up)("q-avatar"),r=(0,a.up)("q-badge"),c=(0,a.up)("q-btn"),u=(0,a.up)("q-item-section"),d=(0,a.up)("q-item-label"),p=(0,a.up)("q-icon"),m=(0,a.up)("q-chip"),h=(0,a.up)("q-item"),g=(0,a.up)("q-list"),w=(0,a.up)("existing-issue"),y=(0,a.up)("q-dialog"),f=(0,a.up)("q-page-scroller"),I=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.iD)("div",null,[t.issues?((0,a.wg)(),(0,a.j4)(g,{key:0,bordered:"",separator:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.issues,(s=>(0,a.wy)(((0,a.wg)(),(0,a.j4)(h,{clickable:"",key:"issue"+s.meta.id,onClick:e=>o.openModal(s.meta.id)},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{round:"",color:"primary"},{default:(0,a.w5)((()=>[o.issueCategory(s.category.id).img?((0,a.wg)(),(0,a.j4)(n,{key:0},{default:(0,a.w5)((()=>[(0,a._)("img",{class:"q-pa-sm",src:o.issueCategory(s.category.id).img,width:"40px"},null,8,$e)])),_:2},1024)):(0,a.kq)("",!0),o.issueNotificationsCount(s.meta.id)>0?((0,a.wg)(),(0,a.j4)(r,{key:1,floating:"",color:"negative"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,k.zw)(o.issueNotificationsCount(s.meta.id)),1)])),_:2},1024)):(0,a.kq)("",!0)])),_:2},1024)])),_:2},1024),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,k.zw)(s.location.place.name),1)])),_:2},1024),(0,a.Wm)(d,{caption:"",lines:"2"},{default:(0,a.w5)((()=>[s.meta.isPrivate?((0,a.wg)(),(0,a.j4)(p,{key:0,name:"person_pin",color:"warning",style:{"font-size":"20px","padding-right":"5px"}})):(0,a.kq)("",!0),s.author.id!=e.user.id?((0,a.wg)(),(0,a.iD)("span",We,[(0,a._)("i",null,[xe,(0,a._)("u",null,(0,k.zw)(s.author.firstName)+" a écrit",1),Ze]),Se])):(0,a.kq)("",!0),(0,a.Uk)(" "+(0,k.zw)(s.content.message),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(u,{side:"",top:"",class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,k.zw)(e.$helpers.stringToDate(s.meta.createdAt)),1)])),_:2},1024),(0,a.Wm)(m,{dense:"",outline:"",color:o.translateStatus(s.tracking.status).color,class:"q-mx-none",style:{"font-size":"11px"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,k.zw)(o.translateStatus(s.tracking.status).label),1)])),_:2},1032,["color"])])),_:2},1024)])),_:2},1032,["onClick"])),[[I]]))),128))])),_:1})):((0,a.wg)(),(0,a.iD)("div",Pe," Aucun signalement à afficher pour le moment ")),(0,a.Wm)(y,{modelValue:l.opened,"onUpdate:modelValue":s[0]||(s[0]=e=>l.opened=e),maximized:"",ref:"modalRef"},{default:(0,a.w5)((()=>[l.opened?((0,a.wg)(),(0,a.j4)(w,{key:0,currentIssue:l.currentIssue,issueId:l.currentIssue._id},null,8,["currentIssue","issueId"])):(0,a.kq)("",!0)])),_:1},8,["modelValue"]),(0,a.Wm)(f,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{round:"",icon:"keyboard_arrow_up",color:"accent"})])),_:1})])}const Ce={name:"IssuesByPlace",props:["issues"],components:{ExistingIssue:Ie},inject:["$DB"],data(){return{currentIssue:null,opened:!1}},created(){M.Z.$on("openModal",this.openModal),M.Z.$on("closeIssueModal",this.closeModal)},mounted(){"id"in this.$route.params&&this.openModal(this.$route.params.id)},computed:{...(0,g.Se)({categories:"company/categories",user:"reporter/attributes",notifications:"reporter/notifications"})},methods:{openModal(e){let s=this.issues.find((s=>{if(!s.hasOwnProperty("fromApi")){const e={fromApi:!1};return{...s,...e}}if(s.id===e)return s}));s.fromApi?(this.currentIssue=s,this.opened=!0):this.$DB.localIssues().get(e.toString()).then((e=>{this.currentIssue=e,this.currentIssue={...this.currentIssue,fromApi:!1},this.opened=!0}))},closeModal(){this.opened&&(this.opened=!1),this.currentIssue=null},issueCategory(e){let s={img:null};return this.categories.forEach((t=>{t.childs.forEach((t=>{t.id===Number(e)&&(s=t)}))})),s},issueNotificationsCount(e){return this.notifications.filter((s=>parseInt(s.id)===parseInt(e))).length},translateStatus(e){return this.$helpers.statusTranslation(e)}}};var Qe=t(52035),De=t(75096),Te=t(69721),je=t(2350),Ue=t(67030),Be=t(84710),Re=t(46489);const Me=(0,O.Z)(Ce,[["render",Ae]]),ze=Me;ye()(Ce,"components",{QList:X.Z,QItem:ee.Z,QItemSection:Qe.Z,QBtn:Y.Z,QAvatar:De.Z,QBadge:Te.Z,QItemLabel:je.Z,QIcon:le.Z,QChip:Ue.Z,QDialog:ce.Z,QPageScroller:Be.Z}),ye()(Ce,"directives",{Ripple:Re.Z});var Ve=t(40019);const Ee={inject:["$DB"],directives:{infiniteScroll:y()},components:{ExistingIssue:Ie,FilterIssuesHistory:qe,IssuesByPlace:ze},created(){M.Z.$on("localIssueChange",this.reflectIssueChanges),M.Z.$on("openModal",this.openModal),M.Z.$on("closeIssueModal",this.closeModal)},mounted(){this.initIssues(),"id"in this.$route.params&&this.openModal(this.$route.params.id)},data(){return{selectedTab:"myScope",issues:[],currentIssue:null,opened:!1,options:{},busy:!1,loaded:!1,search:"",placeId:null,issuesByPlaceId:[]}},computed:{...(0,g.Se)({company:"company/attributes",categories:"company/categories",user:"reporter/attributes",notifications:"reporter/notifications"}),initializedIssues(){return this.issues.filter((e=>(e.author.id==this.user.id||0==e.meta.isPrivate)&&"meta"in e))},checkUser(){const e=this.$helpers.decodeToken(this.$store.getters["reporter/token"]);return e.roles.includes("reporter")?"Mon secteur":"Mes signalements"}},methods:{clearSearch(){this.search=""},resetPlaceId(){this.placeId=null},openModal(e){this.$DB.localIssues().get(e.toString()).then((e=>{this.currentIssue=e,this.opened=!0}))},closeModal(){this.opened&&(this.opend=!1),0!==this.search.length&&this.filterIssues(this.search),this.currentIssue=null},initIssues(){0===this.search.length&&this.loadMore(!0)},reflectIssueChanges(e){var s=!1;this.issues.forEach(((t,a)=>{t._id===e.id&&(s=!0,t.tracking=e.doc.tracking,this.issues=this.issues.filter((s=>s._id!==e.id)),this.issues.unshift(t))})),s||this.issues.unshift(e.doc),0!==this.search.length&&this.filterIssues(this.search)},resetIssues(){this.issues=[],this.loaded=!1,this.options={limit:20,skip:0}},async loadMore(e=!1){var s=this;if(e&&this.resetIssues(),!this.loaded){var t=[];this.busy=!0,await this.$DB.localIssues().find({selector:{"meta.updatedAt":{$gt:0}},sort:[{"meta.updatedAt":"desc"}],skip:this.options.skip,limit:this.options.limit}).then((e=>{t=e.docs,t.length>0?(this.options.skip+=this.options.limit,t.forEach((e=>{s.issues.some((s=>s._id===e._id))||s.issues.push(e)}))):this.loaded=!0,this.busy=!1,this.$q.loading.hide()}))}},issueCategory(e){let s={img:null};return this.categories.forEach((t=>{t.childs.forEach((t=>{t.id===e&&(s=t)}))})),s},issueNotificationsCount(e){return this.notifications.filter((s=>parseInt(s.id)===parseInt(e))).length},translateStatus(e){return this.$helpers.statusTranslation(e)},filterIssues(e){if(e.length>2){let s=RegExp(I()(".*attente.*"),"gi"),t=RegExp(I()(".*cour.*"),"gi"),a=RegExp(I()(".*traité.*"),"gi"),i=RegExp(I()(".*rejeté.*"),"gi"),l=RegExp(I()(".*annulé.*"),"gi");e=e.replace(s,"pending"),e=e.replace(t,"ongoing"),e=e.replace(a,"done"),e=e.replace(i,"rejected"),e=e.replace(l,"canceled");let o=e.match("\\d{1,2}/\\d{1,2}/\\d{4}"),n=null,r=null;if(null!==o){let e=o[0].split("/");n=new Date(parseInt(e[2],10),parseInt(e[1],10)-1,parseInt(e[0],10)),r=new Date(parseInt(e[2],10),parseInt(e[1],10)-1,parseInt(e[0],10)),r.setDate(r.getDate()+1),n=n.toISOString(),r=r.toISOString()}let c=RegExp(I()(".*"+e+".*"),"gi"),u={$or:[{_id:{$regex:c}},{"author.firstName":{$regex:c}},{"author.lastName":{$regex:c}},{"content.message":{$regex:c}},{"category.name":{$regex:c}},{"category.parent.name":{$regex:c}},{"location.agency.name":{$regex:c}},{"location.place.name":{$regex:c}},{"location.place.code":{$regex:c}},{"location.residence.name":{$regex:c}},{"location.spot.name":{$regex:c}},{"location.spot.code":{$regex:c}},{"meta.agency.name":{$regex:c}},{"tracking.status":{$regex:c}}]};null!==n&&(u.$and=[{"meta.createdAt":{$gt:n}},{"meta.createdAt":{$lt:r}}]),this.$DB.localIssues().find({selector:u}).then((e=>{this.issues=e.docs}))}else 0===e.length?this.initIssues():0===this.issues.length&&this.resetIssues()},async getIssuesByPlaceId(e){return this.$SowellProxy.issuesByPlaceId(e).then((e=>{Ve.log("response api",e),this.issuesByPlaceId=this.formatObjectIssues(e)})).catch((e=>{Ve.log(e)})).finally((()=>{this.$q.loading.hide()}))},formatObjectIssues(e){return e.map((e=>{let s={meta:{id:e["id"],isPrivate:e["is-private"],createdAt:e["created-at"]},location:{place:{name:e["location"]["place"]}},content:{message:e["message"],img:e["img"]},tracking:{status:e["status"],talks:e["talks"]},author:{id:Number(e["author"]["id"]),firstName:e["author"]["first-name"]},fromApi:!0};return{...e,...s}}))}},watch:{search:function(e){this.filterIssues(e)},placeId:function(e){e&&(this.$q.loading.show(),this.getIssuesByPlaceId(e))}}};var Ne=t(57547),Fe=t(58408),Oe=t(18506);const Le=(0,O.Z)(Ee,[["render",h],["__scopeId","data-v-f12f5778"]]),He=Le;ye()(Ee,"components",{QPage:te.Z,QTabs:Ne.Z,QTab:Fe.Z,QInput:he.Z,QIcon:le.Z,QSpinnerIos:Oe.Z,QDialog:ce.Z,QPageScroller:Be.Z,QBtn:Y.Z,QItem:ee.Z,QChip:Ue.Z})}}]);