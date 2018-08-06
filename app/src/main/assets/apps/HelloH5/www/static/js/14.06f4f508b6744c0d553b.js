webpackJsonp([14],{"+X9N":function(t,e,i){"use strict";var s=i("mvHQ"),n=i.n(s),a=i("SbtJ"),o=i("pWFc"),c=i("g5qD"),r={name:"tradeHeader",components:{IndexMenu:a.a},props:{value:{type:Boolean,default:!1},coinSelected:{type:String,default:""},showRecord:{type:Boolean,default:!1}},data:function(){return{showValue:!1,menuShow:!1,unit:"",showUnit:"",coinName:"",baseList:[],coinListData:[],code:""}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}},mounted:function(){var t=this;setTimeout(function(){t.getBaseList()},50)},methods:{coinMenu:function(){this.showValue=!this.showValue,this.menuShow=!1,this.$emit("menu-show",this.showValue)},toggleMenu:function(){this.menuShow=!this.menuShow,this.showValue=!1,this.$emit("on-menu",this.menuShow)},getBaseList:function(){var t=this;Object(c.e)().then(function(e){t.baseList=e,t.getCoinDeal(),t.getDealList()})},getDealList:function(){var t=this;this.unit=this.unit||this.baseList[0],this.showUnit=this.unit,Object(c.f)(this.unit).then(function(e){t.coinListData=e,t.defaultDeal()})},coinTab:function(t){this.unit=t,this.getDealList()},getCoinDeal:function(){var t=this.$f7router.currentRoute.query,e={};t.coinName?(e={coinName:t.coinName,exchange:t.exchange,unit:t.unit},this.coinName=e.coinName,this.unit=e.unit,this.showUnit=this.unit,this.code=e.code=e.exchange+"_"+e.unit+"_"+e.coinName,o.f.set("coinDeal3",n()(e)),this.$emit("coin-change",e)):this.defaultDeal()},defaultDeal:function(){if(!this.coinName&&""!=this.coinListData&&""!=this.baseList){this.unit=this.baseList[0];var t=this.coinListData[0],e={coinName:this.coinType(t.code,2),exchange:this.coinType(t.code,0),code:t.code,unit:this.unit};this.coinName=e.coinName,this.code=e.code,this.$emit("coin-change",e)}},dealChange:function(t){var e={coinName:this.coinType(t.code,2),exchange:this.coinType(t.code,0),code:t.code,unit:this.unit};this.coinName=e.coinName,this.code=e.code,o.f.set("coinDeal3",n()(e)),this.showValue=!1,this.$emit("menu-show",this.showValue);var i=Object(o.e)({coinName:this.coinName,exchange:e.exchange,unit:this.unit},this.$f7router.currentRoute.url);this.$f7router.navigate(i,{history:!1,animate:!1})},coinType:function(t,e){return(t=t||"").split("_")[e]||""},goRecord:function(){this.$emit("go-record")}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"trade-header-body"},[i("div",{staticClass:"trade-header"},[i("div",{staticClass:"coin",on:{click:t.coinMenu}},[i("span",{staticClass:"title"},[t._v(t._s(t.coinName)+"/"+t._s(t.showUnit))]),t._v(" "),i("i",{class:{up:t.showValue}})]),t._v(" "),t.showRecord?i("span",{staticClass:"go-record",on:{click:t.goRecord}},[i("i")]):t._e(),t._v(" "),i("div",{staticClass:"menu-box",on:{click:t.toggleMenu}},[i("i",{staticClass:"icon-menu"})])]),t._v(" "),i("index-menu",{model:{value:t.menuShow,callback:function(e){t.menuShow=e},expression:"menuShow"}}),t._v(" "),i("transition",{attrs:{name:"slide-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showValue,expression:"showValue"}],staticClass:"coin-menu"},[i("div",{staticClass:"mask",on:{touchstart:function(e){t.showValue=!1}}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"tab"},t._l(t.baseList,function(e){return i("span",{staticClass:"tab-list",class:{on:t.unit===e},on:{click:function(i){t.coinTab(e)}}},[t._v(t._s(e)),i("i",{staticClass:"line"})])})),t._v(" "),i("ul",{staticClass:"coin-list-box"},t._l(t.coinListData,function(e){return i("li",{staticClass:"coin-list",class:{on:t.code===e.code},on:{click:function(i){t.dealChange(e)}}},[i("i",{staticClass:"coin-icon",class:"coin-"+t.coinType(e.code,2).toLocaleLowerCase()}),t._v("\n                        "+t._s(t.coinType(e.code,2))+"/"+t._s(t.unit)+"\n                    ")])}))])])])],1)},staticRenderFns:[]};var l=i("VU/8")(r,h,!1,function(t){i("gFIV")},"data-v-33ecc224",null);e.a=l.exports},KhFO:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),n=i.n(s),a=i("NYxO"),o=i("+X9N"),c=i("SbtJ"),r=i("ipgl"),h=i("g5qD"),l=i("aM/G"),u={zh:"CNY",ct:"USD",en:"USD",vi:"USD"},d={components:{TradeHead:o.a,IndexMenu:c.a},computed:n()({},Object(a.mapState)({tradeList:function(t){return t.lang.language.tradeList},searchPhd:function(t){return t.lang.language.tradeList.html[4]},textUint:function(t){return t.lang.language.tradeList.html[1]},market:function(t){return t.lang.language.common.market}})),data:function(){return{menuShow:!1,baseShow:!1,hasLogin:"",unit:"",marketList:[],markObj:{},markList:[],coinList:[],myOptList:[],searchVal:"",indexofVal:"",moneyRate:1,baseList:[],baseCoinList:[],tradePrecis:{},zones:{},zone:"global",moneyPrecis:r.e,moneyUnit:"",searchTimer:null}},watch:{menuShow:function(){this.menuShow&&(this.baseShow=!1)}},filters:{codeFist:function(t){return t?(t=t.split("_"))[2]:"---"},codeNext:function(t){return t?(t=t.split("_"))[1]:"---"}},created:function(){this.moneyUnit=u[this.langType],this.getPoint();var t=this.isLogin();this.hasLogin=!!t,this.hasLogin&&(this.userCode=t.code,this.getOptList())},mounted:function(){this.timedTask()},methods:{codeFist:function(t){return t?(t=t.split("_"))[2]:"---"},searchChange:function(){this.searchVal=this.$refs.searchBox.value.replace(/\s+/gi,""),this.$refs.searchBox.value=this.searchVal,this.searchCoin()},searchCoin:function(){var t=this;this.searchVal?(clearTimeout(this.searchTimer),this.searchTimer=setTimeout(function(){t.indexofVal=t.searchVal.toLocaleUpperCase()},300)):this.indexofVal=""},toggleMenu:function(){this.menuShow=!this.menuShow},changeBaseShow:function(){this.baseShow=!this.baseShow,this.menuShow=!1},zoneChange:function(t){this.zone!==t&&(this.zone=t,this.searchVal="",this.indexofVal="",this.$refs.searchBox.value="",this.coinList=this.markObj[this.zone][this.unit]||[])},changeBase:function(t){this.unit!==t&&(this.unit=t,this.searchVal="",this.indexofVal="",this.$refs.searchBox.value="",this.coinList=this.markObj[this.zone][this.unit]||[])},getOptList:function(){var t=this;Object(l.U)({userCode:this.userCode}).then(function(e){200===e.code&&e.data&&(t.myOptList=e.data,t.marketGroup(t.markList))})},coinType:function(t,e){return(t=t||"").split("_")[e]||""},getBaseCoinList:function(){var t=this;Object(h.e)().then(function(e){t.baseList=e,t.unit=t.baseList[0],t.getMoneyRate(),t.getAllcoin()}).catch(function(){})},marketGroup:function(t){var e=this;this.markList=t,this.markObj={global:{my:[]},asia:{my:[]}},this.baseList.forEach(function(t){e.markObj.global[t]=[],e.markObj.asia[t]=[]}),t.forEach(function(t){e.myOptList.indexOf(t.code)>=0?t.isMyOpt=!0:t.isMyOpt=!1,e.preventError(e.tradePrecis,t.code),t.precis=e.tradePrecis[t.code].price,t.rising=e.floatNum(100*e.div(e.minus(t.price,t.refPrice),t.refPrice),2);var i=e.coinType(t.code,1);e.zones.asia&&e.zones.asia.indexOf(t.code)>=0?t.zone="asia":t.zone="global",e.markObj[t.zone][i]&&e.markObj[t.zone][i].push(t),e.myOptList.indexOf(t.code)>=0&&e.markObj[t.zone].my.push(t)}),this.coinList=this.markObj[this.zone][this.unit]||[],this.isMyOpt=this.myOptList.indexOf(this.code)>=0},getAllcoin:function(){var t=this;Object(l._6)().then(function(e){200===e.code&&""!=e.data&&t.marketGroup(e.data)})},getPoint:function(){var t=this;Object(h.c)().then(function(e){t.tradePrecis=e||{},t.zones=e.zones,t.getBaseCoinList()})},getMoneyRate:function(){var t=this;Object(l.R)().then(function(e){200===e.code&&e.data&&(t.moneyRate=e.data[t.unit+"_"+t.moneyUnit]||1)})},linkUrl:function(t){var e=t.code.split("_");return"/tradeChart?coinName="+e[2]+"&exchange="+e[0]+"&unit="+e[1]+"&my="+this.unit},timedTask:function(){var t=this;r.k&&(clearInterval(this.timer),this.timer=setInterval(function(){t.getMoneyRate(),t.getAllcoin()},r.l))}},beforeDestroy:function(){clearInterval(this.timer),this.timer=""}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("f7-page",{staticClass:"trade-body"},[i("header",{staticClass:"tradeList-header"},[i("div",{staticClass:"trade-back",on:{click:function(e){t.goBack()}}},[i("i",{staticClass:"icon-back-up"})]),t._v(" "),i("div",{staticClass:"base-List",on:{click:t.changeBaseShow}},[i("span",{staticClass:"base-text",domProps:{textContent:t._s("my"===t.unit?"+"+t.textUint:t.unit)}}),t._v(" "),i("i",{class:{up:t.baseShow}})]),t._v(" "),i("div",{staticClass:"menu-box",on:{click:t.toggleMenu}},[i("i",{staticClass:"icon-menu"})]),t._v(" "),i("index-menu",{model:{value:t.menuShow,callback:function(e){t.menuShow=e},expression:"menuShow"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.baseShow,expression:"baseShow"}],staticClass:"basemark",on:{click:t.changeBaseShow}},[i("div",{staticClass:"trade-base-list"},[i("h6",{staticClass:"base-title"},[t._v("\n                    "+t._s(t.tradeList.html[0]))]),t._v(" "),i("div",{staticClass:"base-listes"},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.hasLogin,expression:"hasLogin"}],staticClass:"base-list-text base-first",class:{"base-on":"my"===t.unit},on:{click:function(e){t.changeBase("my")}}},[t._v("\n                        +"+t._s(t.textUint)+" ")]),t._v(" "),t._l(t.baseList,function(e){return i("span",{staticClass:"base-list-text",class:{"base-on":t.unit===e},on:{click:function(i){t.changeBase(e)}}},[t._v("\n                        "+t._s(e))])})],2)])])],1),t._v(" "),i("div",{staticClass:"scroll-body"},[i("div",{staticClass:"trade-List"},[i("div",{staticClass:"search-content"},[i("input",{ref:"searchBox",staticClass:"search",attrs:{type:"text",placeholder:t.searchPhd},on:{input:t.searchChange}}),t._v(" "),i("i",{staticClass:"icon-search"})]),t._v(" "),i("div",{staticClass:"two-tabs"},[i("div",{staticClass:"item",on:{click:function(e){t.zoneChange("global")}}},[i("span",{staticClass:"text",class:{on:"global"===t.zone}},[t._v(t._s(t.market[0]))]),t._v(" "),i("span",{staticClass:"line"})]),t._v(" "),i("div",{staticClass:"item",on:{click:function(e){t.zoneChange("asia")}}},[i("span",{staticClass:"text",class:{on:"asia"===t.zone}},[t._v(t._s(t.market[1]))])])]),t._v(" "),i("ul",{staticClass:"gains-item"},t._l(t.coinList,function(e){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.codeFist(e.code).indexOf(t.indexofVal)>=0,expression:"codeFist(item.code).indexOf(indexofVal) >= 0"}],key:e.code},[i("a",{attrs:{href:t.linkUrl(e)}},[i("div",{staticClass:"left"},[i("div",{staticClass:"title-box"},[i("i",{staticClass:"coin-icon",class:"coin-"+t.codeFist(e.code).toLocaleLowerCase()}),t._v(" "),i("div",{staticClass:"bb"},[t._v(t._s(t._f("codeFist")(e.code)))]),t._v(" "),i("div",{staticClass:"slash"},[t._v("/")]),t._v(" "),i("div",{staticClass:"fb"},[t._v(t._s(t._f("codeNext")(e.code)))])]),t._v(" "),i("p",{staticClass:"max-price"},[i("span",[t._v(t._s(t.tradeList.html[2]))]),t._v(" "),i("span",[t._v(t._s(t.moneyFormat(e.volume,e.precis2)))])])]),t._v(" "),i("div",{staticClass:"center"},[i("div",{staticClass:"all-number"},[t._v(t._s(t.moneyFormat(e.price,e.precis)))]),t._v(" "),i("p",{staticClass:"min-price"},[i("span",[t._v("≈"+t._s(t.moneyFormat(t.times(e.price,t.moneyRate),t.moneyPrecis))+" "+t._s(t.moneyUnit))])])]),t._v(" "),i("div",{staticClass:"right"},[i("div",{staticClass:"all-text"},[t._v(t._s(t.tradeList.html[3]))]),t._v(" "),i("span",{class:{rise:e.rising>0,drop:e.rising<0}},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.rising>0,expression:"item.rising > 0"}]},[t._v("+")]),t._v("\n                                "+t._s(e.rising||"0.00%")+"\n                            "),i("span",{directives:[{name:"show",rawName:"v-show",value:1*e.rising!=0,expression:"item.rising * 1 !== 0"}]},[t._v("%")])])])])])}))])])])},staticRenderFns:[]};var v=i("VU/8")(d,m,!1,function(t){i("eJ/r")},"data-v-298a04cd",null);e.default=v.exports},"eJ/r":function(t,e){},gFIV:function(t,e){}});