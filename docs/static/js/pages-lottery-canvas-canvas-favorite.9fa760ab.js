(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-lottery-canvas-canvas-favorite"],{"0a08":function(t,e,i){"use strict";var n=i("cd85"),a=i.n(n);a.a},"3bd9":function(t,e,i){"use strict";i.r(e);var n=i("8cb3"),a=i("df1c");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var s,c=i("f0c5"),u=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"c74fb2fe",null,!1,n["a"],s);e["default"]=u.exports},4502:function(t,e,i){"use strict";i("99af"),i("4160"),i("c975"),i("a434"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{isFixed:!0,isBack:!0,backText:"返回",backIconName:"nav-back",title:"Canvas",background:{"background-image":"linear-gradient(45deg, #1cbbb4, #8dc63f)"},systemInfo:{},canvas:null,ctx:null,stop:null,dots:[],warea:{x:null,y:null,max:2e4}}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(e){t.systemInfo=e}})},onReady:function(){this.setup()},onUnload:function(){window&&this.stop?window.cancelAnimationFrame(this.stop)||window.webkitCancelAnimationFrame(this.stop):clearTimeout(this.stop),this.canvas=null,this.ctx=null},methods:{setup:function(){var t=this;this.canvas=document.querySelector("#favorite canvas");var e=uni.getSystemInfoSync().pixelRatio;this.canvas.width=this.systemInfo.windowWidth*e,this.canvas.height=this.systemInfo.windowHeight*e,this.ctx=this.canvas.getContext("2d");for(var i=0;i<300;i++){var n=Math.random()*this.systemInfo.windowWidth,a=Math.random()*this.systemInfo.windowHeight,o=2*Math.random()-1,s=2*Math.random()-1;this.dots.push({x:n,y:a,xa:o,ya:s,max:3e3})}setTimeout((function(){t.animate()}),100)},wareaTap:function(t){},touchstart:function(t){this.warea.x=t.changedTouches[0].clientX,this.warea.y=t.changedTouches[0].clientY},touchmove:function(t){this.warea.x=t.changedTouches[0].clientX,this.warea.y=t.changedTouches[0].clientY},touchend:function(t){this.warea.x=null,this.warea.y=null},animate:function(){var t=this;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);var e=[this.warea].concat(this.dots);this.dots.forEach((function(i){i.x+=i.xa,i.y+=i.ya,i.xa*=i.x>t.systemInfo.windowWidth||i.x<0?-1:1,i.ya*=i.y>t.systemInfo.windowHeight||i.y<0?-1:1,t.ctx.fillRect(i.x-.5,i.y-.5,1,1);for(var n=0;n<e.length;n++){var a=e[n];if(i!==a&&null!==a.x&&null!==a.y){var o,s=i.x-a.x,c=i.y-a.y,u=s*s+c*c;u<a.max&&(a===t.warea&&u>a.max/2&&(i.x-=.03*s,i.y-=.03*c),o=(a.max-u)/a.max,t.ctx.beginPath(),t.ctx.lineWidth=o/2,t.ctx.strokeStyle="rgba(0,171,152,"+(o+.5)+")",t.ctx.moveTo(i.x,i.y),t.ctx.lineTo(a.x,a.y),t.ctx.stroke())}}e.splice(e.indexOf(i),1)})),this.stop=window&&(window.requestAnimationFrame(this.animate)||window.webkitRequestAnimationFrame(this.animate)||window.mozRequestAnimationFrame(this.animate)||window.oRequestAnimationFrame(this.animate)||window.msRequestAnimationFrame(this.animate))||setTimeout(this.animate,1e3/60)}}};e.default=n},"511e":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync(),a={},o={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleSize:{type:[String,Number],default:24},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:a,statusBarHeight:n.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=o},"5fb9":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-navbar[data-v-17e49238]{width:100%}.u-navbar-fixed[data-v-17e49238]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-17e49238]{width:100%}.u-navbar-inner[data-v-17e49238]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-back-wrap[data-v-17e49238]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-17e49238]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-17e49238]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;-webkit-flex-shrink:0;flex-shrink:0}.u-navbar-centent-slot[data-v-17e49238]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-title[data-v-17e49238]{line-height:%?60?%;font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-navbar-right[data-v-17e49238]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.u-slot-content[data-v-17e49238]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},"8cb3":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uNavbar:i("d98b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[i("u-navbar",{attrs:{"title-color":"#fff","back-icon-color":"#ffffff","is-fixed":t.isFixed,"is-back":t.isBack,background:t.background,"back-text-style":{color:"#fff"},title:t.title,"back-icon-name":t.backIconName,"back-text":t.backText}}),i("v-uni-view",{on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchend.apply(void 0,arguments)},touchcancel:function(e){arguments[0]=e=t.$handleEvent(e),t.touchend.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.wareaTap.apply(void 0,arguments)}}},[i("v-uni-canvas",{staticStyle:{width:"100vw",height:"100vh"},attrs:{type:"2d","canvas-id":"favorite",id:"favorite"}})],1)],1)},o=[]},9803:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("b2af").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[i("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),i("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?i("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?i("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?i("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[i("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx"}},[t._v(t._s(t.title))])],1):t._e(),i("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),i("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?i("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},o=[]},cd85:function(t,e,i){var n=i("5fb9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("05b8fcac",n,!0,{sourceMap:!1,shadowMode:!1})},d98b:function(t,e,i){"use strict";i.r(e);var n=i("9803"),a=i("f1a3");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("0a08");var s,c=i("f0c5"),u=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"17e49238",null,!1,n["a"],s);e["default"]=u.exports},df1c:function(t,e,i){"use strict";i.r(e);var n=i("4502"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},f1a3:function(t,e,i){"use strict";i.r(e);var n=i("511e"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}}]);