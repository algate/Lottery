(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-personal-center-log"],{"0674":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uNavbar:i("a8ac").default,uNoticeBar:i("dd34").default,uButton:i("79b5").default,uTimeLine:i("30ba").default,uTimeLineItem:i("2eb9").default,uIcon:i("d087").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("u-navbar",{attrs:{"title-color":"#fff","back-icon-color":"#ffffff","is-fixed":t.isFixed,"is-back":t.isBack,background:t.background,"back-text-style":{color:"#fff"},title:t.title,"back-icon-name":t.backIconName,"back-text":t.backText}}),i("v-uni-view",[i("u-notice-bar",{attrs:{type:"primary",mode:"horizontal",duration:2e3,speed:300,"is-circular":!1,list:t.list,moreIcon:!1,volumeIcon:!0,playState:"play"}})],1),i("v-uni-view",{staticClass:"u-p-40"},[i("v-uni-view",[t._v("平台为："+t._s(t.vuex_platform))]),i("v-uni-view",{staticClass:"u-m-t-20"},[t._v("globalData版本号为："+t._s(t.global_version))]),i("v-uni-view",{staticClass:"u-m-t-20"},[t._v("vuex存储的版本号："+t._s(t.vuex_version))]),i("v-uni-view",{staticClass:"u-m-t-20"},[t._v("vuex存储[lottery]的作者为："+t._s(t.vuex_user.name))]),i("u-button",{staticClass:"u-m-t-20",attrs:{size:"mini",type:"success",plain:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.modifyVuex.apply(void 0,arguments)}}},[t._v("修改变量")])],1),i("v-uni-view",{staticClass:"u-m-30"},[i("u-time-line",[i("u-time-line-item",{attrs:{nodeTop:"2"},scopedSlots:t._u([{key:"node",fn:function(){return[i("v-uni-view",{staticClass:"u-node",staticStyle:{background:"#19be6b"}},[i("u-icon",{attrs:{name:"volume-up-fill",color:"#fff",size:24}})],1)]},proxy:!0},{key:"content",fn:function(){return[i("v-uni-view",[i("v-uni-view",{staticClass:"u-order-title"},[t._v("1.0.0")]),i("v-uni-view",{staticClass:"u-order-desc"},[i("v-uni-view",[t._v("【开发】底部导航栏、头部tabbar、uView框架")]),i("v-uni-view",[t._v("1.canvas特效展示；")]),i("v-uni-view",[t._v("2.lottery信息展示；")]),i("v-uni-view",[t._v("3.lottery功能预测；")]),i("v-uni-view",[t._v("4.个人功能导航；")])],1),i("v-uni-view",{staticClass:"u-order-time"},[t._v("2020-08-08 08:08")])],1)]},proxy:!0}])}),i("u-time-line-item",{attrs:{nodeTop:"2"},scopedSlots:t._u([{key:"node",fn:function(){return[i("v-uni-view",{staticClass:"u-node"},[i("u-icon",{attrs:{name:"man-add",color:"#fff",size:24}})],1)]},proxy:!0},{key:"content",fn:function(){return[i("v-uni-view",[i("v-uni-view",{staticClass:"u-order-title unacive"},[t._v("0.8.0")]),i("v-uni-view",{staticClass:"u-order-desc"},[t._v("【交互】需求确认，原型设计，环境工具搭建")]),i("v-uni-view",{staticClass:"u-order-time"},[t._v("2019-05-12 09:25")])],1)]},proxy:!0}])}),i("u-time-line-item",{scopedSlots:t._u([{key:"node",fn:function(){return[i("v-uni-view",{staticClass:"u-node"},[i("u-icon",{attrs:{name:"more-dot-fill",color:"#fff",size:"24"}})],1)]},proxy:!0},{key:"content",fn:function(){return[i("v-uni-view",[i("v-uni-view",{staticClass:"u-order-title unacive"},[t._v("0.1.1 ~ 0.2.0")]),i("v-uni-view",{staticClass:"u-order-desc"},[t._v("【工具】开发框架，技术选型，UI框架，数据依赖")]),i("v-uni-view",{staticClass:"u-order-time"},[t._v("2020-05-08 08:08")])],1)]},proxy:!0}])}),i("u-time-line-item",{scopedSlots:t._u([{key:"content",fn:function(){return[i("v-uni-view",[i("v-uni-view",{staticClass:"u-order-title unacive"},[t._v("0.1.0")]),i("v-uni-view",{staticClass:"u-order-desc"},[t._v("【构思】做一个人人都喜爱的lottery工具")]),i("v-uni-view",{staticClass:"u-order-time"},[t._v("2020-05-07 00:00")])],1)]},proxy:!0}])})],1)],1)],1)},o=[]},"1a32":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-time-axis"},[t._t("default")],2)},o=[]},"2cc3":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-time-line-item",props:{bgColor:{type:String,default:"#ffffff"},nodeTop:{type:[String,Number],default:""}},data:function(){return{}},computed:{nodeStyle:function(){var t={backgroundColor:this.bgColor};return""!=this.nodeTop&&(t.top=this.nodeTop+"rpx"),t}}};e.default=n},"2d54":function(t,e,i){"use strict";var n=i("f4a0"),a=i.n(n);a.a},"2e4b":function(t,e,i){"use strict";i.r(e);var n=i("0674"),a=i("3294");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("4118");var r,u=i("f0c5"),s=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"787df569",null,!1,n["a"],r);e["default"]=s.exports},"2eb9":function(t,e,i){"use strict";i.r(e);var n=i("7cd6"),a=i("cd5b");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("2d54");var r,u=i("f0c5"),s=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"5ad2fd68",null,!1,n["a"],r);e["default"]=s.exports},"303c":function(t,e,i){var n=i("99d1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("134485e5",n,!0,{sourceMap:!1,shadowMode:!1})},"30ba":function(t,e,i){"use strict";i.r(e);var n=i("1a32"),a=i("ba2d");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("d8e5");var r,u=i("f0c5"),s=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"7b7e6576",null,!1,n["a"],r);e["default"]=s.exports},3294:function(t,e,i){"use strict";i.r(e);var n=i("c192"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},4118:function(t,e,i){"use strict";var n=i("303c"),a=i.n(n);a.a},"547c":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-time-axis-item[data-v-5ad2fd68]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%;position:relative;margin-bottom:%?32?%}.u-time-axis-node[data-v-5ad2fd68]{position:absolute;top:%?12?%;left:%?-40?%;-webkit-transform-origin:0;transform-origin:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:1;font-size:%?24?%}.u-dot[data-v-5ad2fd68]{height:%?16?%;width:%?16?%;border-radius:%?100?%;background:#ddd}',""]),t.exports=e},"7cd6":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-time-axis-item"},[t._t("content"),i("v-uni-view",{staticClass:"u-time-axis-node",style:[t.nodeStyle]},[t._t("node",[i("v-uni-view",{staticClass:"u-dot"})])],2)],2)},o=[]},"91a6":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-time-line",data:function(){return{}}};e.default=n},"99d1":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".u-node[data-v-787df569]{width:%?44?%;height:%?44?%;border-radius:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#d0d0d0}.u-order-title[data-v-787df569]{color:#333;font-weight:700;font-size:%?32?%}.u-order-title.unacive[data-v-787df569]{color:#969696}.u-order-desc[data-v-787df569]{color:#969696;font-size:%?28?%;margin-bottom:%?6?%}.u-order-time[data-v-787df569]{color:#c8c8c8;font-size:%?26?%}",""]),t.exports=e},b45e:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-time-axis[data-v-7b7e6576]{padding-left:%?40?%;position:relative}.u-time-axis[data-v-7b7e6576]::before{content:" ";position:absolute;left:0;top:%?12?%;width:1px;bottom:0;border-left:1px solid #ddd;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}',""]),t.exports=e},ba2d:function(t,e,i){"use strict";i.r(e);var n=i("91a6"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},c192:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{isFixed:!0,isBack:!0,backText:"返回",backIconName:"nav-back",title:"日志",background:{"background-image":"linear-gradient(45deg, #1cbbb4, #8dc63f)"},list:["lottery给你最完美的体验！","lottery 1.0.0发布，给你最完美的体验！","canvas画板特效、天气、地图等信息展示！","lottery信息展示，lottery预测"],global_version:""}},onShow:function(){this.global_version=getApp().globalData.global_version},methods:{modifyVuex:function(){getApp().globalData.global_version="1.0.1",this.global_version=getApp().globalData.global_version,this.$u.vuex("vuex_version","1.0.1"),this.$u.vuex("vuex_user.name","Lottery")}}};e.default=n},cd5b:function(t,e,i){"use strict";i.r(e);var n=i("2cc3"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},d8e5:function(t,e,i){"use strict";var n=i("ff0e"),a=i.n(n);a.a},f4a0:function(t,e,i){var n=i("547c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("22f3e49d",n,!0,{sourceMap:!1,shadowMode:!1})},ff0e:function(t,e,i){var n=i("b45e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("20048ae8",n,!0,{sourceMap:!1,shadowMode:!1})}}]);