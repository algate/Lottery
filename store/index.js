import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/* 
uni-app 对部分 API 进行了 Promise 封装，返回数据的第一个参数是错误对象，第二个参数是返回数据。
// 默认方式
uni.request({
    url: 'https://www.example.com/request',
    success: (res) => {
        console.log(res.data);
    }
});

// Promise
uni.request({
        url: 'https://www.example.com/request'
    })
    .then(data => {//data为一个数组，数组第一项为错误信息，第二项为返回数据
        var [error, res]  = data;
        console.log(res.data);
    })

// Await
function async request () {
    var [error, res] = await uni.request({
        url: 'https://www.example.com/request'
    });
    console.log(res.data);
} 
 */

let lifeData = {};

try{
	// 尝试获取本地是否存在lifeData变量，第一次启动APP时是不存在的
	lifeData = uni.getStorageSync('lifeData');
}catch(e){
	
}

// 需要永久存储时，且下次APP启动需要取出的，在state中的变量名
let saveStateKeys = ['vuex_user'];

// 保存变量到本地存储中
const saveLifeData = function(key, value){
	// 判断变量名是否在需要存储的数组中
	if(saveStateKeys.indexOf(key) !== -1) {
		// 获取本地存储的lifeData对象，将变量添加到对象中
		let tmp = uni.getStorageSync('lifeData');
		// 第一次打开APP，不存在lifeData变量，故放一个{}空对象
		tmp = tmp ? tmp : {};
		tmp[key] = value;
		// 执行这一步后，所有需要存储的变量，都挂载在本地的lifeData对象中
		uni.setStorageSync('lifeData', tmp);
	}
}
const store = new Vuex.Store({
	state: {
		// 如果上面从本地获取的lifeData对象下有对应的属性，就赋值给state中对应的变量
		// 加上vuex_前缀，是防止变量名冲突，也让人一目了然
		vuex_user: lifeData.vuex_user ? lifeData.vuex_user : {name: 'Onion'},
		vuex_version: lifeData.vuex_version ? lifeData.vuex_version : '1.0.0',
		// 自定义tabbar数据
		vuex_tabbar: [
            {
            	"pagePath": "/pages/lottery-info/home",
            	"iconPath": "/static/images/tabBar/canvas-default.png",
            	"selectedIconPath": "/static/images/tabBar/canvas.png",
            	"text": "介绍"
            },
            // #ifdef MP-WEIXIN || H5
			{
				"pagePath": "/pages/lottery-canvas/home",
				"iconPath": "/static/images/tabBar/canvas-default.png",
				"selectedIconPath": "/static/images/tabBar/canvas.png",
				"text": "画板"
			}, 
            // #endif
            {
				"pagePath": "/pages/lottery-information/home",
				"iconPath": "/static/images/tabBar/basic-default.svg",
				"selectedIconPath": "/static/images/tabBar/basic.svg",
				"text": "开奖"
			}, 
            // #ifdef MP-WEIXIN || H5
            {
            	"pagePath": "/pages/lottery-forecast/home",
            	"iconPath": "/static/images/tabBar/function-default.svg",
            	"selectedIconPath": "/static/images/tabBar/function.svg",
            	"text": "预测"
            },
            // #endif
            {
				"pagePath": "/pages/personal-center/home",
				"iconPath": "/static/images/tabBar/hammer-default.svg",
				"selectedIconPath": "/static/images/tabBar/hammer.svg",
				"text": "我的"
			}
		],
		// 当前程序运行平台
		vuex_platform: '',
		isAuthorization: false,
		userInfo: {}
		
	},
	mutations: {
		$uStore(state, payload) {
			// 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
			let nameArr = payload.name.split('.');
			let saveKey = '';
			let len = nameArr.length;
			if(len >= 2) {
				let obj = state[nameArr[0]];
				for(let i = 1; i < len - 1; i ++) {
					obj = obj[nameArr[i]];
				}
				obj[nameArr[len - 1]] = payload.value;
				saveKey = nameArr[0];
			} else {
				// 单层级变量，在state就是一个普通变量的情况
				state[payload.name] = payload.value;
				saveKey = payload.name;
			}
			// 保存变量到本地，见顶部函数定义
			saveLifeData(saveKey, state[saveKey])
		},
		setPlatform(state, data) {
			state.vuex_platform = data;
		},
		setUserInfo(state, data) {
			state.userInfo = data;
			state.isAuthorization = true;
		}
	},
	/* 
	 mutations是同步操作的
	 actions是写异步操作的并且得commit到mutations 
	*/
	actions: {
		getAppInfo({commit}) {
			return new Promise((resolve, reject) => {
				let platform = '';
				// 获取系统栏高度
				uni.getSystemInfo({
					success(e) {
						Vue.prototype.StatusBar = e.statusBarHeight;
						// #ifdef H5
						let ua = window.navigator.userAgent.toLowerCase();
						let isWechat = () => {
							if (ua.match(/micromessenger/i) == 'micromessenger') {
								return true;
							} else {
								return false;
							}
						}
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
						if (isWechat()) {
							// 微信公众号
							platform = 'wxOfficialAccount';
						} else {
							platform = 'H5';
						}
						// #endif
						// #ifdef MP-WEIXIN
						platform = 'wechatdevtools';
						let custom = wx.getMenuButtonBoundingClientRect();
						Vue.prototype.Custom = custom;
						Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
						// #endif
						commit('setPlatform', platform);
						uni.setStorageSync('platform', platform);
						resolve(platform);
					},
					fail(error) {
						console.log(error);
						reject(e)
					}
				});
			})
		}
	}
})

export default store
