webpackJsonp([43],{UarO:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),n=s.n(a),i=s("NYxO"),o=s("6kks"),c=s("zfDY"),g=s("sqAx"),l=s("aM/G"),r={components:{AccountNav:o.a,Scroller:c.a,NoData:g.a},computed:n()({},Object(i.mapState)({systemMsg:function(t){return t.lang.language.systemMsg}})),data:function(){return{pageTitle:"",messageList:[],pageIndex:0,pageTotal:1,isEmpty:!1}},created:function(){this.pageTitle=this.systemMsg.title,this.setTitle(this.pageTitle),this.getMessageList()},methods:{getMessageList:function(){var t=this;Object(l._13)([this.pageIndex+"-10"]).then(function(e){if(200===e.code&&e.data){if(""==e.data.content&&0===t.pageIndex)return void(t.isEmpty=!0);t.pageTotal=e.data.totalPages-1,e.data.content=e.data.content||[],t.messageList=t.messageList.concat(e.data.content)}else t.$vn.toast.show(e.message)})},msgLoad:function(){this.pageIndex+=1,this.pageIndex>this.pageTotal?this.$refs.msgScroll.noMoreChange(!0):(this.$refs.msgScroll.noMoreChange(!1),this.getMessageList())}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("f7-page",{staticClass:"main-body"},[s("account-nav",{attrs:{pageTitle:t.pageTitle}}),t._v(" "),s("div",{staticClass:"message-box"},[s("no-data",{directives:[{name:"show",rawName:"v-show",value:t.isEmpty,expression:"isEmpty"}]}),t._v(" "),s("scroller",{ref:"msgScroll",attrs:{loadMore:!0,data:t.messageList},on:{pullup:t.msgLoad}},[s("div",{staticClass:"message-content"},t._l(t.messageList,function(e){return s("div",{staticClass:"message-list"},[s("div",{staticClass:"content"},[s("i"),t._v(" "),s("span",[t._v("\n                            "+t._s(e.content)+"\n                        ")])]),t._v(" "),s("div",{staticClass:"data-time"},[t._v("\n                        "+t._s(t.timeFormat(e.cd))+"\n                    ")])])}))])],1)],1)},staticRenderFns:[]};var m=s("VU/8")(r,d,!1,function(t){s("cjj4")},"data-v-48eb12fc",null);e.default=m.exports},cjj4:function(t,e){}});