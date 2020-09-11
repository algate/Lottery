import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

// 此处为演示vuex使用，非uView的功能部分
import store from '@/store'
// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/store/$u.mixin.js')
Vue.mixin(vuexStore)

/* 这里说的小程序，指的是"微信小程序、百度小程序、头条小程序、QQ小程序，支付宝小程序等"。

由于小程序的分享(微信、头条平台)，需要监听页面的onShareAppMessage生命周期，小程序需要在页面声明了此生命周期，点击右上角的"胶囊"才会有分享功能， 而一般情况下，我们希望每个页面都可以分享，那就需要每个页面都写一遍这个生命周期，是很繁琐的。

基于以上，uView通过mixin的形式，给每一个页面注入了onShareAppMessage生命周期，让您简单引入，无需任何后续操作，即可让每一个页面都有分享功能(仅针对小程序)。 */
// 引入uView对小程序分享的mixin封装
let mpShare = require('uview-ui/libs/mixin/mpShare.js');
Vue.mixin(mpShare)
// 引入uView对小程序分享到朋友圈的mixin封装
let wxShareTimeline = require('uview-ui/libs/mixin/wxShareTimeline.js');
Vue.mixin(wxShareTimeline)

// #ifdef H5
let jweixin = require('@/common/libs/jweixin.js');
// #endif
import * as loadAMap from '@/common/libs/loadAMap.js';
// import * as loadBMap from '@/common/libs/loadBMap.js';
import constant from '@/common/libs/constant.js';

Vue.prototype.$lottery = {
    $constant: constant,
    $loadAMap: loadAMap,
    // $loadBMap: loadBMap,
    // #ifdef H5
    $weixin: jweixin
    // #endif
};

// i18n部分的配置
// 引入语言包，注意路径
import Chinese from '@/common/locales/zh.js';
import English from '@/common/locales/en.js';

// VueI18n
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
	// 默认语言
	locale: 'zh',
	// 引入语言文件
	messages: {
		'zh': Chinese,
		'en': English,
	}
})
// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n

const app = new Vue({
	i18n,
	store,
    ...App
})
app.$mount()
