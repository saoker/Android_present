webpackJsonp([21],{cjP8:function(e,a){},"iIc+":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("Dd8w"),s=t.n(i),n=t("NYxO"),r=t("6kks"),o=t("ipgl"),c=t("aM/G"),l={components:{accountNav:r.a},data:function(){return{pageTitle:"",phonePhd:"",areaVal:"",areaValParse:"",areaRemind:"",mobile:"",hintText:"",isMain:!0,areaList:[],dataNull:!1,areaIsTrue:!1,accountIsTrue:!1}},computed:s()({},Object(n.mapState)({bindPhone:function(e){return e.lang.language.bindPhone},register:function(e){return e.lang.language.register}})),created:function(){this.pageTitle=this.bindPhone.title[0],this.phonePhd=this.bindPhone.placeholder[3],this.areaVal=this.register.title[3],this.countryList()},methods:{countryList:function(){var e=this;Object(c.I)().then(function(a){200===a.code&&a.data&&""!=a.data?e.areaList=a.data:e.dataNull=!0})},ereaSelect:function(){this.isMain=!1},onSomething:function(e){var a=e.currentTarget;this.areaVal=a.innerText,this.isMain=!0,this.areaRemind=!1},areaTest:function(){parseInt(this.areaVal.replace(/[^+0-9]/gi,""),10)?(this.areaIsTrue=!0,this.areaValParse=parseInt(this.areaVal.replace(/[^+0-9]/gi,""),10)):(this.areaRemind=!0,this.areaIsTrue=!1)},accountBlur:function(){""!=this.accountVal?o.g.test(this.mobile)?(this.accountIsTrue=!0,this.accountRemind=!1):(this.hintText=this.bindPhone.remind[7],this.accountIsTrue=!1,this.accountRemind=!1):(this.accountType=this.accountTest(this.accountVal),this.accountIsTrue=!1,this.accountRemind=!1,this.accountRemindText=this.register.remind[3])},nextStep:function(){var e=this;this.areaTest(),this.accountBlur(),this.areaIsTrue||(this.areaRemind=!0),this.accountIsTrue||(this.accountRemind=!0),this.areaIsTrue&&this.accountIsTrue&&Object(c._36)([this.mobile]).then(function(a){200===a.code&&a.data?a.data.result?(e.$vn.toast.show(e.bindPhone.alertMessage[2]),e.mobile="",e.accountRemind=!1):e.$f7router.navigate("/alterPhone?mobile="+e.mobile+"&countryCode="+e.areaValParse):e.$vn.toast.show(e.bindPhone.alertMessage[3])})}}},u={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("f7-page",{staticClass:"main-body"},[t("account-nav",{attrs:{pageTitle:e.pageTitle}}),e._v(" "),t("div",{staticClass:"scroll-body"},[t("div",{staticClass:"main-place"},[t("p",{staticClass:"title"},[e._v(e._s(e.bindPhone.title[2]))]),e._v(" "),t("div",{staticClass:"message-box"},[t("div",{class:["area-btn",{"error-red":e.areaRemind}],on:{click:e.ereaSelect}},[e._v(e._s(e.areaVal))]),e._v(" "),t("div",{staticClass:"error-remind"},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.areaRemind,expression:"areaRemind"}]},[e._v(e._s(e.register.remind[0]))])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],class:{"error-red":e.hintText},attrs:{type:"tel",oninput:"this.value=this.value.replace(/[^\\d]/g,'')",placeholder:e.phonePhd},domProps:{value:e.mobile},on:{bulr:e.accountBlur,input:function(a){a.target.composing||(e.mobile=a.target.value)}}}),e._v(" "),t("div",{staticClass:"error-remind"},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.hintText,expression:"hintText"}],staticClass:"red"},[e._v(e._s(e.hintText))])])]),e._v(" "),t("span",{staticClass:"button",attrs:{href:"/bindPhone/1?mobile="+e.mobile},on:{click:e.nextStep}},[e._v(e._s(e.bindPhone.remind[8])+"\n                ")])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isMain,expression:"!isMain"}],staticClass:"area-main scroll-body"},[e._l(e.areaList,function(a){return t("ul",{staticClass:"area-list"},[t("li",{on:{click:e.onSomething}},[t("span",[e._v(e._s(a.name))]),e._v(" "),t("span",{staticClass:"area-code"},[e._v("+"+e._s(a.areaCode))])])])}),e._v(" "),e.dataNull?t("ul",{staticClass:"area-list"},[t("li",{on:{click:e.onSomething}},[t("span",[e._v("越南")]),e._v(" "),t("span",{staticClass:"area-code"},[e._v("+84")])]),e._v(" "),t("li",{on:{click:e.onSomething}},[t("span",[e._v("美国")]),e._v(" "),t("span",{staticClass:"area-code"},[e._v("+1")])]),e._v(" "),t("li",{on:{click:e.onSomething}},[t("span",[e._v("中国")]),e._v(" "),t("span",{staticClass:"area-code"},[e._v("+86")])])]):e._e()],2)],1)},staticRenderFns:[]};var h=t("VU/8")(l,u,!1,function(e){t("cjP8")},"data-v-ca7abe68",null);a.default=h.exports}});