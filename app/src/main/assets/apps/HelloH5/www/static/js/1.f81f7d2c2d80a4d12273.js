webpackJsonp([1],{PmIv:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Dd8w"),n=a.n(s),i=a("NYxO"),c=a("HKXE"),r=a("aM/G"),o=a("pWFc"),u={components:{IndexHead:c.a},computed:n()({},Object(i.mapState)({register:function(e){return e.lang.language.register}})),data:function(){return{dataNull:!1,isMain:!0,areaList:[],areaRemind:!1,accountRemind:!1,accountRemindText:"",areaVal:"--",areaValParse:"",accountPholder:"--",accountVal:"",accountType:!1,areaIsTrue:!1,accountIsTrue:!1,isGoNext:!0,resultMessage:"---",resultMessageOk:"---",resultMessageGo:"---",invite:""}},created:function(){this.resultMessage=this.register.alertMessage[2],this.resultMessageOk=this.register.alertMessage[3],this.resultMessageGo=this.register.alertMessage[4],this.areaVal=this.register.title[3],this.accountPholder=this.register.placeholder[0],this.countryList()},mounted:function(){var e=this;this.exitLogin(),setTimeout(function(){var t=e.$f7router.currentRoute.query;e.invite=t.invite||""},50)},methods:{countryList:function(){var e=this;Object(r.K)().then(function(t){200===t.code&&t.data&&""!=t.data?e.areaList=t.data:e.dataNull=!0})},ereaSelect:function(){this.isMain=!1},onSomething:function(e){var t=e.currentTarget;this.areaVal=t.innerText,this.isMain=!0,this.areaRemind=!1},areaTest:function(){parseInt(this.areaVal.replace(/[^+0-9]/gi,""),10)?(this.areaIsTrue=!0,this.areaValParse=parseInt(this.areaVal.replace(/[^+0-9]/gi,""),10)):(this.areaRemind=!0,this.areaIsTrue=!1)},accountBlur:function(){""!=this.accountVal?"_0"==this.accountTest(this.accountVal)?(this.accountIsTrue=!0,this.accountType=this.accountTest(this.accountVal)):"_1"==this.accountTest(this.accountVal)?(this.accountIsTrue=!0,this.accountType=this.accountTest(this.accountVal)):(this.accountType=this.accountTest(this.accountVal),this.accountIsTrue=!1,this.accountRemind=!0,this.accountRemindText=this.register.remind[1]):(this.accountType=this.accountTest(this.accountVal),this.accountIsTrue=!1,this.accountRemind=!1,this.accountRemindText=this.register.remind[3])},accountInput:function(){this.accountRemind=!1,this.accountVal=this.accountVal.replace(/\s+/g,"")},goNext:function(){var e=this,t=this;this.areaTest(),this.accountBlur(),t.accountIsTrue||(t.accountRemind=!0),t.areaIsTrue||(t.areaRemind=!0),t.accountIsTrue&&t.areaIsTrue&&(o.f.set("registerType",this.accountType),"_0"==t.accountType?Object(r._41)([t.accountVal],t.$refs.next).then(function(a){200===a.code&&a.data?a.data.result?e.$vn.confirm.show({text:t.resultMessage,btnCancel:t.resultMessageOk,btnOK:t.resultMessageGo,onCancel:function(){t.accountVal="",t.$refs.accountInp.focus()},onConfirm:function(){t.$f7router.navigate("/login")}}):(o.f.set("registerCode",t.areaValParse),o.f.set("registerAccount",t.accountVal),t.goOk(t)):t.$vn.toast.show(a.message)}):Object(r._40)([t.accountVal]).then(function(a){200===a.code&&a.data?a.data.result?e.$vn.confirm.show({text:t.resultMessage,btnCancel:t.resultMessageOk,btnOK:t.resultMessageGo,onConfirm:function(){t.$f7router.navigate("/login")}}):(o.f.set("registerCode",t.areaValParse),o.f.set("registerAccount",t.accountVal),t.goOk(t)):t.$vn.toast.show(a.message)}))},goOk:function(e){e.invite?e.$f7router.navigate("/register/1?invite="+e.invite):e.$f7router.navigate("/register/1")}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("f7-page",{staticClass:"register-body"},[a("index-head"),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isMain,expression:"isMain"}],staticClass:"scroll-body"},[a("div",{staticClass:"main-place"},[a("f7-block",{staticClass:"register-link"},[a("f7-link",{attrs:{href:"/login"}},[e._v(e._s(e.register.title[0]))])],1),e._v(" "),a("h1",{staticClass:"title"},[e._v(e._s(e.register.title[1]))]),e._v(" "),a("div",{staticClass:"message-box"},[a("div",{class:["area-btn",{"error-red":e.areaRemind}],on:{click:e.ereaSelect}},[e._v(e._s(e.areaVal))]),e._v(" "),a("div",{staticClass:"error-remind"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.areaRemind,expression:"areaRemind"}]},[e._v(e._s(e.register.remind[0]))])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.accountVal,expression:"accountVal"}],ref:"accountInp",class:["register-inp","input-margin",{"error-red":e.accountRemind}],attrs:{type:"text",placeholder:e.accountPholder},domProps:{value:e.accountVal},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.goNext(t)},blur:e.accountBlur,input:[function(t){t.target.composing||(e.accountVal=t.target.value)},e.accountInput]}}),e._v(" "),a("div",{staticClass:"error-remind"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.accountRemind,expression:"accountRemind"}]},[e._v(e._s(e.accountRemindText))])])]),e._v(" "),a("div",{ref:"next",staticClass:"button",on:{click:e.goNext}},[e._v(e._s(e.register.title[2]))])],1)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isMain,expression:"!isMain"}],staticClass:"area-main scroll-body"},[e._l(e.areaList,function(t){return a("ul",{staticClass:"area-list"},[a("li",{on:{click:e.onSomething}},[a("span",[e._v(e._s(t.name))]),e._v(" "),a("span",{staticClass:"area-code"},[e._v("+"+e._s(t.areaCode))])])])}),e._v(" "),e.dataNull?a("ul",{staticClass:"area-list"},[a("li",{on:{click:e.onSomething}},[a("span",[e._v("越南")]),e._v(" "),a("span",{staticClass:"area-code"},[e._v("+84")])]),e._v(" "),a("li",{on:{click:e.onSomething}},[a("span",[e._v("美国")]),e._v(" "),a("span",{staticClass:"area-code"},[e._v("+1")])]),e._v(" "),a("li",{on:{click:e.onSomething}},[a("span",[e._v("中国")]),e._v(" "),a("span",{staticClass:"area-code"},[e._v("+86")])])]):e._e()],2)],1)},staticRenderFns:[]};var h=a("VU/8")(u,l,!1,function(e){a("nqb1")},"data-v-d0b3a1f2",null);t.default=h.exports},nqb1:function(e,t){}});