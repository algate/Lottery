(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-lottery-canvas-canvas-countdown"],{"05ed":function(t,e,i){var a=i("f1e6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("32e18ab4",a,!0,{sourceMap:!1,shadowMode:!1})},1696:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync(),n={},s={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:n,statusBarHeight:a.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=s},"2b21":function(t,e,i){"use strict";i.r(e);var a=i("43c3"),n=i("4a88");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("8cfe");var r,l=i("f0c5"),c=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"3d3727e7",null,!1,a["a"],r);e["default"]=c.exports},3805:function(t,e,i){"use strict";i.r(e);var a=i("4586"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"43c3":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uIcon:i("8c6e").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[i("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),i("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?i("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?i("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?i("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[i("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx"}},[t._v(t._s(t.title))])],1):t._e(),i("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),i("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?i("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},s=[]},4586:function(t,e,i){"use strict";var a=i("4ea4");i("cb29"),i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("cbd2")),s={data:function(){return{isFixed:!0,isBack:!0,backText:"返回",backIconName:"nav-back",title:"Canvas",background:{"background-image":"linear-gradient(45deg, #1cbbb4, #8dc63f)"},systemInfo:{},canvas:null,ctx:null,stop:null,WINDOW_WIDTH:375,WINDOW_HEIGHT:250,MARGIN_LEFT:20,MARGIN_TOP:10,RADIUS:2,balls:[],currentDate:0,newDate:0,colors:["#57a3e5","#7e93cc","#b785cc","#cc69c7","#becc7c","#99ff87","#ffd75c","#ffBB00","#ff9f79","#cc6767"]}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(e){t.systemInfo=e}}),this.currentDate=new Date},onReady:function(){this.setup()},onUnload:function(){console.log("监听页面卸载"),clearInterval(this.stop),this.canvas=null,this.ctx=null},methods:{setup:function(){this.canvas=document.querySelector("#countdown canvas");var t=uni.getSystemInfoSync().pixelRatio;this.canvas.width=this.systemInfo.windowWidth*t,this.canvas.height=this.systemInfo.windowWidth/2*t,this.WINDOW_WIDTH=this.systemInfo.windowWidth,this.WINDOW_HEIGHT=this.systemInfo.windowWidth/2,this.ctx=this.canvas.getContext("2d"),this.stop=setInterval(this.animation,100)},animation:function(){this.clear(this.ctx),this.render(this.ctx),this.update(this.ctx)},clear:function(t){t.clearRect(0,0,this.WINDOW_WIDTH,this.WINDOW_HEIGHT)},render:function(t){this.newDate=new Date;var e=this.newDate.getHours(),i=this.newDate.getMinutes(),a=this.newDate.getSeconds();this.renderDigit(this.MARGIN_LEFT,this.MARGIN_TOP,parseInt(e/10),t),this.renderDigit(this.MARGIN_LEFT+15*(this.RADIUS+1),this.MARGIN_TOP,parseInt(e%10),t),this.renderDigit(this.MARGIN_LEFT+30*(this.RADIUS+1),this.MARGIN_TOP,10,t),this.renderDigit(this.MARGIN_LEFT+39*(this.RADIUS+1),this.MARGIN_TOP,parseInt(i/10),t),this.renderDigit(this.MARGIN_LEFT+54*(this.RADIUS+1),this.MARGIN_TOP,parseInt(i%10),t),this.renderDigit(this.MARGIN_LEFT+69*(this.RADIUS+1),this.MARGIN_TOP,10,t),this.renderDigit(this.MARGIN_LEFT+78*(this.RADIUS+1),this.MARGIN_TOP,parseInt(a/10),t),this.renderDigit(this.MARGIN_LEFT+93*(this.RADIUS+1),this.MARGIN_TOP,parseInt(a%10),t);for(var n=0;n<this.balls.length;n++)t.fillStyle=this.balls[n].color,t.beginPath(),t.arc(this.balls[n].x,this.balls[n].y,this.RADIUS,0,2*Math.PI,!0),t.closePath(),t.fill()},renderDigit:function(t,e,i,a){a.fillStyle="#cf3d61";for(var s=0;s<n.default[i].length;s++)for(var r=0;r<n.default[i][s].length;r++)1==n.default[i][s][r]&&(a.beginPath(),a.arc(t+2*r*(this.RADIUS+1)+(this.RADIUS+1),e+2*s*(this.RADIUS+1)+(this.RADIUS+1),this.RADIUS,0,2*Math.PI),a.closePath(),a.fill())},update:function(t){this.newDate=new Date;var e=this.newDate.getHours(),i=this.newDate.getMinutes(),a=this.newDate.getSeconds(),n=this.currentDate.getHours(),s=this.currentDate.getMinutes(),r=this.currentDate.getSeconds();this.currentDate.getTime()!=this.newDate.getTime()&&(parseInt(n/10)!=parseInt(e/10)&&this.addBalls(this.MARGIN_LEFT+0,this.MARGIN_TOP,parseInt(n/10)),parseInt(n%10)!=parseInt(e%10)&&this.addBalls(this.MARGIN_LEFT+15*(this.RADIUS+1),this.MARGIN_TOP,parseInt(n%10)),parseInt(s/10)!=parseInt(i/10)&&this.addBalls(this.MARGIN_LEFT+39*(this.RADIUS+1),this.MARGIN_TOP,parseInt(s/10)),parseInt(s%10)!=parseInt(i%10)&&this.addBalls(this.MARGIN_LEFT+54*(this.RADIUS+1),this.MARGIN_TOP,parseInt(s%10)),parseInt(r/10)!=parseInt(a/10)&&this.addBalls(this.MARGIN_LEFT+78*(this.RADIUS+1),this.MARGIN_TOP,parseInt(r/10)),parseInt(r%10)!=parseInt(a%10)&&this.addBalls(this.MARGIN_LEFT+93*(this.RADIUS+1),this.MARGIN_TOP,parseInt(r%10)),this.currentDate=this.newDate),this.updateBalls()},addBalls:function(t,e,i){for(var a=0;a<n.default[i].length;a++)for(var s=0;s<n.default[i][a].length;s++)if(1==n.default[i][a][s]){var r={x:t+2*s*(this.RADIUS+1)+(this.RADIUS+1),y:e+2*a*(this.RADIUS+1)+(this.RADIUS+1),g:1.5+Math.random(),vx:6*Math.pow(-1,Math.ceil(500*Math.random())),vy:-3,color:this.colors[Math.floor(Math.random()*this.colors.length)]};this.balls.push(r)}},updateBalls:function(){for(var t=0;t<this.balls.length;t++)this.balls[t].x+=this.balls[t].vx,this.balls[t].y+=this.balls[t].vy,this.balls[t].vy+=this.balls[t].g,this.balls[t].y>=this.WINDOW_HEIGHT-this.RADIUS&&(this.balls[t].y=this.WINDOW_HEIGHT-this.RADIUS,this.balls[t].vy=.25*-this.balls[t].vy)}}};e.default=s},4693:function(t,e,i){"use strict";var a=i("b960"),n=i.n(a);n.a},"4a88":function(t,e,i){"use strict";i.r(e);var a=i("1696"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"8cfe":function(t,e,i){"use strict";var a=i("05ed"),n=i.n(a);n.a},9411:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-canvas[data-v-3c162a01]{border:1px solid #2dabff}',""]),t.exports=e},a665:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uNavbar:i("2b21").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[i("u-navbar",{attrs:{"title-color":"#fff","back-icon-color":"#ffffff","is-fixed":t.isFixed,"is-back":t.isBack,background:t.background,"back-text-style":{color:"#fff"},title:t.title,"back-icon-name":t.backIconName,"back-text":t.backText}}),i("v-uni-view",[i("v-uni-canvas",{staticStyle:{width:"100vw",height:"50vw"},attrs:{type:"2d","canvas-id":"countdown",id:"countdown"}})],1)],1)},s=[]},b960:function(t,e,i){var a=i("9411");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("23c3be15",a,!0,{sourceMap:!1,shadowMode:!1})},c839:function(t,e,i){"use strict";i.r(e);var a=i("a665"),n=i("3805");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("4693");var r,l=i("f0c5"),c=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"3c162a01",null,!1,a["a"],r);e["default"]=c.exports},cb29:function(t,e,i){var a=i("23e7"),n=i("81d5"),s=i("44d2");a({target:"Array",proto:!0},{fill:n}),s("fill")},cbd2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=[[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]],[[0,0,0,1,1,0,0],[0,1,1,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[1,1,1,1,1,1,1]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,0,1,1,1,0],[0,0,1,1,1,1,0],[0,1,1,0,1,1,0],[1,1,0,0,1,1,0],[1,1,1,1,1,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,1,1]],[[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,1,1,0,0,0,0]],[[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]],n=a;e.default=n},f1e6:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-navbar[data-v-3d3727e7]{width:100%}.u-navbar-fixed[data-v-3d3727e7]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-3d3727e7]{width:100%}.u-navbar-inner[data-v-3d3727e7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-back-wrap[data-v-3d3727e7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-3d3727e7]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-3d3727e7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;-webkit-flex-shrink:0;flex-shrink:0}.u-navbar-centent-slot[data-v-3d3727e7]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-title[data-v-3d3727e7]{line-height:%?60?%;font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-navbar-right[data-v-3d3727e7]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.u-slot-content[data-v-3d3727e7]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e}}]);