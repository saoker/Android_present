webpackJsonp([8],{"7Xep":function(t,e){},Y7KH:function(t,e){},b1Z8:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACwBAMAAACiO9yPAAAAElBMVEUAAABf2/1b2/9d2v1b2/9b2/90P0vyAAAABXRSTlMAM5Zu2KodiXMAAAE8SURBVHja7dYxb4MwEAXgZwI7aeSdpmUnTdnpwB5j7v//laZSU2gtNr9KSO+bmGzjx92BGmQHiIiIiIiIiIiIiIiI7NzxeqlB9W53DYi8zedXsw40BwsA3DiBpo/44mwAiXvckJ/AsazsrAZHO6yeOJazVwEUbsZDQQqjiKvgQVGG/9wCBop1xvu9qI24d/bRMksvbRv9AA4f6W3wsNnM9zSSCvserDbX4LDgbX45m13GAApvNXq7e0bFydvZDcDp7VoDaAMIygmLIv9rJAcfB+SVllsVkV0Zkx3zSttS2yC3v6f2AdmkQ2gZGZQoiIMvHULZ8/ZDUicdfYu+QV7pgn7Y3xbEi9quNMsddzknUxaZOQtYc21Ebv7XP8HTSOi0rrUbfph9gODUrZ6PEBERERERERERERERkU3uE+awLUaMrgSNAAAAAElFTkSuQmCC"},fXfK:function(t,e){},lv8h:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACwBAMAAACiO9yPAAAAFVBMVEUAAABb2v9c2/9d2/5f3Pxc2/9j4f8Nzr29AAAAB3RSTlMA/bhYJ4wNBuN/mAAAARdJREFUeNrt00FugzAQQNFJSbLOQM0a0qjrgOkelAsQVd2TqPc/QwFHaiVYeqS2+u8A/vKMLa0YSwQAAAAAAAAAAAD49RJdcZaYqvS4UGYSkw6ysFeJKZUVJYl/m9j6SWuZuOnkYJlIwi3++C5+2Hs/WCQ2GuQiV9XMIrE7Br106t+0MB1UeRa5O8tE4mSkrc2gTjLa5DLqepOvF5Z8K+bQwXBQXW+csL9FOHzUFYaJnQsv1zCx1/PYSU2/Xpc2F81NE9tS1Q22iePHe30yTVRp81mr5bp32k6dzDBR5fO0tLVLaBtKhVkicTJ7eo6c0O9VZI9UJioxXV/8Q535wNVOYrrrileJ6uIXGgEAAAAAAAAAAAAgyRdm6SjRn+8nEAAAAABJRU5ErkJggg=="},q0nx:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),s=a.n(i),n=a("NYxO"),o=a("6kks"),c={props:{isShow:{type:Boolean,default:!1},chooseText:{type:Object,default:""},chooseList:{type:Object},type:{type:String}},data:function(){return{chooseCenter:""}},created:function(){},methods:{checkOption:function(t,e){this.$emit("chooseData",t,e),this.$emit("isShow",!1)},cancelChoose:function(){this.$emit("isShow",!1)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide-up"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"choose-list"},[a("div",{staticClass:"mask",on:{touchstart:t.cancelChoose}}),t._v(" "),a("div",{staticClass:"content"},[a("p",{staticClass:"hander-hint"},[a("span",[t._v(t._s(t.chooseText.title))]),t._v(" "),a("span",{staticClass:"cancel",on:{click:function(e){t.cancelChoose()}}},[t._v("\n                        "+t._s(t.chooseText.btn))])]),t._v(" "),a("div",{staticClass:"card-container"},t._l(t.chooseList,function(e,i){return a("div",{staticClass:"bank-item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.chooseCenter,expression:"chooseCenter"}],attrs:{type:"radio"},domProps:{checked:t._q(t.chooseCenter,null)},on:{click:function(a){t.checkOption(e,i)},change:function(e){t.chooseCenter=null}}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.type==i,expression:"type == key"}],staticClass:"check"}),t._v(" "),a("span",[t._v(t._s(e))])])}))])])])},staticRenderFns:[]};var h=a("VU/8")(c,r,!1,function(t){a("fXfK")},"data-v-15a21fdf",null).exports,l=a("NxGh"),d=a("ipgl"),u=a("zBFv"),p=a("pWFc"),m={name:"uploadImg",props:{action:{type:String,default:""},disabled:{type:Boolean,default:!1},limit:{type:Number,default:3670016},limitTip:{type:String,default:""}},components:{Loading:l.a},data:function(){return{showIframe:!1,isLoading:!1}},methods:{change:function(t){var e=this,a=t.target.files||t.dataTransfer.files;if(a.length)if(a[0].size>e.limit)e.$vn.toast.show(e.limitTip);else{e.isLoading=!0,e.showIframe=!0;var i=e.$refs.form,s=new FormData(i),n=new XMLHttpRequest;n.onload=function(){if(e.isLoading=!1,200==n.status||304==n.status){var t=n.responseText;try{t=JSON.parse(t)}catch(e){t=[{}]}t=t[0]||{},e.$refs.input.value="",e.$emit("on-change",t)}else e.$emit("on-change",{})},n.open("POST",i.action),n.setRequestHeader("authorization",Object(u.a)(p.a.get(d.a))),n.send(s)}},upload:function(){var t=this.$refs.iframe.contentDocument.body.innerText;try{t=JSON.parse(t)}catch(e){t=[]}t=t[0]||{},this.$refs.input.value="",this.$emit("on-change",t),this.showIframe=!1}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload"},[a("form",{ref:"form",attrs:{action:t.action,method:"post",enctype:"multipart/form-data",target:"upload"}},[a("input",{ref:"input",staticClass:"upload-input",attrs:{type:"file",name:"file",disabled:t.disabled,accept:"image/png, image/gif, image/jpeg"},on:{change:function(e){t.change(e)}}})]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"loading-box"},[a("loading")],1),t._v(" "),t.showIframe?a("iframe",{ref:"iframe",staticStyle:{width:"1px",height:"1px",display:"none"},attrs:{frameborder:"0",name:"upload"}}):t._e()])},staticRenderFns:[]};var f=a("VU/8")(m,v,!1,function(t){a("Y7KH")},"data-v-a5899f04",null).exports,g=a("aM/G"),A={components:{Upload:f,accountNav:o.a,chooseList:h},data:function(){return{pageTitle:"",name:"",typeCenter:"",type:"",cardId:"",frontPic:"",backPic:"",holdPic:"",namePass:!0,typePass:!0,cardIdPass:!0,isReal:!1,isSubmit:!1,action:g._32,limitTip:"",chooseShow:!1,chooseText:{title:"",btn:""},chooseList:{}}},created:function(){var t=this;this.setTitle(this.authentication.title),this.pageTitle=this.authentication.title,this.limitTip=this.authentication.alertMessage[0],this.chooseText.title=this.authentication.htmlContent[9],this.chooseText.btn=this.authentication.htmlContent[13],this.showLoading(),this.getTypeList(),setTimeout(function(){t.pageInit()},50)},computed:s()({},Object(n.mapState)({authentication:function(t){return t.lang.language.authentication}})),watch:{name:function(){this.name&&(this.namePass=!0)},typeCenter:function(){this.typeCenter&&(this.typePass=!0)},cardId:function(){this.cardId&&(this.cardIdPass=!0)}},methods:{pageInit:function(){var t=this.$f7router.currentRoute.query;this.isReal="true"===t.is},typeClick:function(){this.chooseShow=!this.chooseShow},changeCooseShow:function(t){this.chooseShow=t},chooseData:function(t,e){this.typeCenter=t,this.type=e},change:function(t,e){e.path?this[t+"Pic"]=e.path:this.$vn.toast.show(this.authentication.alertMessage[1])},checkInput:function(t){this[t]?this[t+"Pass"]=!0:this[t+"Pass"]=!1},check:function(){if(this.name||(this.namePass=!1),this.typeCenter||(this.typePass=!1),this.cardId||(this.cardIdPass=!1),this.namePass&&this.typeCenter&&this.cardId)if(this.frontPic)if(this.backPic){if(this.holdPic)return!0;this.$vn.toast.show(this.authentication.alertMessage[4])}else this.$vn.toast.show(this.authentication.alertMessage[3]);else this.$vn.toast.show(this.authentication.alertMessage[2])},getRealName:function(){var t=this;Object(g.V)().then(function(e){if(200===e.code)try{t.hideLoading();var a=JSON.parse(e.data.val);t.type=a.cardType,t.name=a.name,t.typeCenter=t.chooseList[t.type];var i=a.card.replace(/(\w{4})(.+)(\w{3})/,function(t,e,a,i){return e+new Array(a.length+1).join("*")+i});t.cardId=a.card,setTimeout(function(){t.$refs.cardId.value=i},20),t.frontPic=a.front,t.backPic=a.back,t.holdPic=a.hold,t.isSubmit=!t.isReal}catch(t){}else t.$vn.toast.show(e.message)})},getTypeList:function(){var t=this;Object(g.X)([]).then(function(e){200===e.code&&e.data?(t.chooseList=JSON.parse(e.data.val),t.getRealName()):t.$vn.toast.show(e.message)})},submit:function(){var t=this,e=this;this.check()&&Object(g._43)(e.$refs.btn,{name:e.name,card:e.cardId,cardType:this.type,front:e.frontPic,back:e.backPic,hold:e.holdPic}).then(function(a){200===a.code?(e.$vn.toast.show({text:e.authentication.alertMessage[5],onHide:function(){e.isSubmit=!0,e.getRealName()}}),setTimeout(function(){t.$f7router.navigate("/accountSet")},2e3)):e.$vn.toast.show(a.message)})}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("f7-page",{staticClass:"main-body"},[i("account-nav",{attrs:{pageTitle:t.pageTitle}}),t._v(" "),i("div",{staticClass:"scroll-body"},[i("div",{staticClass:"person-mess"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],class:{"error-input":!t.namePass},attrs:{type:"text",disabled:t.isReal,placeholder:t.authentication.htmlContent[0],maxlength:"128"},domProps:{value:t.name},on:{blur:function(e){t.checkInput("name")},input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),i("div",{staticClass:"error-tip",class:{hidden:t.namePass}},[t._v(t._s(t.authentication.htmlContent[10])+"\n                ")]),t._v(" "),i("div",{staticClass:"papers-type"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typeCenter,expression:"typeCenter"}],class:{"error-input":!t.typePass},attrs:{type:"text",disabled:t.isReal,placeholder:t.authentication.htmlContent[9],readonly:"readonly"},domProps:{value:t.typeCenter},on:{blur:function(e){t.checkInput("type")},click:t.typeClick,input:function(e){e.target.composing||(t.typeCenter=e.target.value)}}}),t._v(" "),i("i",{class:{choose:this.chooseShow}})]),t._v(" "),i("div",{staticClass:"error-tip",class:{hidden:t.typePass}},[t._v(t._s(t.authentication.htmlContent[11])+"\n                ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.cardId,expression:"cardId"}],ref:"cardId",class:{"error-input":!t.cardIdPass},attrs:{type:"text",disabled:t.isReal,placeholder:t.authentication.htmlContent[1],maxlength:"32"},domProps:{value:t.cardId},on:{blur:function(e){t.checkInput("cardId")},click:function(e){t.chooseShow},input:function(e){e.target.composing||(t.cardId=e.target.value)}}}),t._v(" "),i("div",{staticClass:"error-tip",class:{hidden:t.cardIdPass}},[t._v(t._s(t.authentication.htmlContent[12])+"\n                ")])]),t._v(" "),i("div",{staticClass:"upload-img"},[i("p",{staticClass:"title"},[t._v(t._s(t.authentication.htmlContent[2]))]),t._v(" "),i("div",{staticClass:"input-content"},[i("div",{staticClass:"show-img"},[i("upload",{attrs:{action:t.action,disabled:t.isReal,limitTip:t.limitTip},on:{"on-change":function(e){t.change("front",e)}}}),t._v(" "),t.frontPic?i("img",{attrs:{src:t.frontPic}}):i("img",{attrs:{src:a("lv8h")}})],1),t._v(" "),i("p",[t._v(t._s(t.authentication.htmlContent[3]))])]),t._v(" "),i("div",{staticClass:"input-content middle"},[i("div",{staticClass:"show-img"},[i("upload",{attrs:{action:t.action,disabled:t.isReal,limitTip:t.limitTip},on:{"on-change":function(e){t.change("back",e)}}}),t._v(" "),t.backPic?i("img",{attrs:{src:t.backPic}}):i("img",{attrs:{src:a("lv8h")}})],1),t._v(" "),i("p",[t._v(t._s(t.authentication.htmlContent[4]))])]),t._v(" "),i("div",{staticClass:"input-content"},[i("div",{staticClass:"show-img"},[i("upload",{attrs:{action:t.action,disabled:t.isReal,limitTip:t.limitTip},on:{"on-change":function(e){t.change("hold",e)}}}),t._v(" "),t.holdPic?i("img",{attrs:{src:t.holdPic}}):i("img",{attrs:{src:a("b1Z8")}})],1),t._v(" "),i("p",[t._v(t._s(t.authentication.htmlContent[5]))])])]),t._v(" "),i("div",{staticClass:"upload-message"},[i("div",{staticClass:"change-message",domProps:{innerHTML:t._s(t.authentication.message)}})]),t._v(" "),i("button",{ref:"btn",staticClass:"btn-submit",attrs:{disabled:t.isReal},on:{click:t.submit}},[t.isSubmit?i("span",[t._v(t._s(t.authentication.htmlContent[7]))]):i("span",[t._v(t._s(t.authentication.htmlContent[6]))])]),t._v(" "),i("div",{staticClass:"hint"},[t._v("\n            "+t._s(t.authentication.htmlContent[8]))])]),t._v(" "),i("choose-list",{attrs:{isShow:t.chooseShow,chooseText:t.chooseText,chooseList:t.chooseList,type:t.type},on:{chooseData:t.chooseData,isShow:t.changeCooseShow}})],1)},staticRenderFns:[]};var w=a("VU/8")(A,C,!1,function(t){a("7Xep")},"data-v-90ddf094",null);e.default=w.exports}});