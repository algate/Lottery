(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-lottery-canvas-canvas-touchmove-bubble"],{"0a08":function(t,e,i){"use strict";var n=i("cd85"),a=i.n(n);a.a},"391c":function(t,e,i){"use strict";var n=i("4ea4");i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("d4ec")),s=n(i("bee2")),o=function(){function t(e,i,n,s){(0,a.default)(this,t),this.character=s,this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/10),y:-1*Math.random()-.4},this.color=n,this.position={x:e,y:i},this.fontSize=12,this.alpha=1}return(0,s.default)(t,[{key:"update",value:function(t){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.velocity.x+=2*(Math.random()<.5?-1:1)/75,this.velocity.y-=Math.random()/600,this.fontSize+=.1,t.textAlign="center",t.textBaseline="middle",t.fillStyle=this.color,t.globalAlpha=this.alpha-.1,t.font=this.fontSize+"px Arial, Helvetica, sans-serif",this.position.y>0&&this.alpha>0&&t.fillText(this.character,this.position.x,this.position.y)}}]),t}(),c={data:function(){return{isFixed:!0,isBack:!0,backText:"返回",backIconName:"nav-back",title:"Canvas",background:{"background-image":"linear-gradient(45deg, #1cbbb4, #8dc63f)"},systemInfo:{},emojis:["o"],colors:["#f37b1d","#8dc63f","#1cbbb4","#e03997","#8799a3"],canvas:null,ctx:null,stop:null,particles:[]}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(e){t.systemInfo=e}})},onReady:function(){this.setup()},onUnload:function(){window&&this.stop?window.cancelAnimationFrame(this.stop):clearTimeout(this.stop),this.canvas=null,this.ctx=null},methods:{setup:function(){this.canvas=document.querySelector("#move-effect canvas");var t=uni.getSystemInfoSync().pixelRatio;this.canvas.width=this.systemInfo.windowWidth*t,this.canvas.height=this.systemInfo.windowHeight*t,this.ctx=this.canvas.getContext("2d"),document.addEventListener("mousemove",this.onMouseMove),this.animation()},animation:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.updateParticles(),this.stop=window?window.requestAnimationFrame(this.animation):setTimeout(this.animation,1e3/60)},onMouseMove:function(t){var e=t.clientX,i=t.clientY;this.addParticle(e,i,this.colors[Math.floor(Math.random()*this.colors.length)],this.emojis[Math.floor(Math.random()*this.emojis.length)])},tapEvent:function(t){this.addParticle(t.changedTouches[0].clientX,t.changedTouches[0].clientY,this.colors[Math.floor(Math.random()*this.colors.length)],this.emojis[Math.floor(Math.random()*this.emojis.length)])},updateParticles:function(){if(0!==this.particles.length){for(var t=0;t<this.particles.length;t++)this.particles[t].update(this.ctx);for(var e=this.particles.length-1;e>=0;e--)(this.particles[e].position.y<0||this.particles[e].alpha<=0)&&this.particles.splice(e,1)}},addParticle:function(t,e,i,n){var a=new o(t,e,i,n);this.particles.push(a)}}};e.default=c},"511e":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync(),a={},s={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleSize:{type:[String,Number],default:24},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:a,statusBarHeight:n.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=s},"5fb9":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-navbar[data-v-17e49238]{width:100%}.u-navbar-fixed[data-v-17e49238]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-17e49238]{width:100%}.u-navbar-inner[data-v-17e49238]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-back-wrap[data-v-17e49238]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-17e49238]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-17e49238]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;-webkit-flex-shrink:0;flex-shrink:0}.u-navbar-centent-slot[data-v-17e49238]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-title[data-v-17e49238]{line-height:%?60?%;font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-navbar-right[data-v-17e49238]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.u-slot-content[data-v-17e49238]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},"731b":function(t,e,i){"use strict";i.r(e);var n=i("391c"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"77c5":function(t,e,i){"use strict";i.r(e);var n=i("880b"),a=i("731b");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var o,c=i("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"15685308",null,!1,n["a"],o);e["default"]=l.exports},"880b":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uNavbar:i("d98b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[i("u-navbar",{attrs:{"title-color":"#fff","back-icon-color":"#ffffff","is-fixed":t.isFixed,"is-back":t.isBack,background:t.background,"back-text-style":{color:"#fff"},title:t.title,"back-icon-name":t.backIconName,"back-text":t.backText}}),i("v-uni-view",{on:{touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.tapEvent.apply(void 0,arguments)}}},[i("v-uni-canvas",{staticStyle:{width:"100vw",height:"100vh"},attrs:{type:"2d","canvas-id":"move-effect",id:"move-effect"}})],1)],1)},s=[]},9803:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uIcon:i("b2af").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[i("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),i("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?i("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?i("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?i("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[i("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx"}},[t._v(t._s(t.title))])],1):t._e(),i("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),i("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?i("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},s=[]},cd85:function(t,e,i){var n=i("5fb9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("05b8fcac",n,!0,{sourceMap:!1,shadowMode:!1})},d98b:function(t,e,i){"use strict";i.r(e);var n=i("9803"),a=i("f1a3");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("0a08");var o,c=i("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"17e49238",null,!1,n["a"],o);e["default"]=l.exports},f1a3:function(t,e,i){"use strict";i.r(e);var n=i("511e"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a}}]);