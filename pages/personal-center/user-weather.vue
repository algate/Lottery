<template>
	<view>
		<u-navbar
			title-color="#fff"
			back-icon-color="#ffffff"
			:border-bottom="borderBottom"
			:is-fixed="isFixed"
			:is-back="isBack"
			:background="background"
			:back-text-style="{ color: '#fff' }"
			:title="title"
			:back-icon-name="backIconName"
			:back-text="backText"
		>
			<view class="slot-wrap" v-if="useSlot">
				<view class="search-wrap" v-if="search">
					<!-- 如果使用u-search组件，必须要给v-model绑定一个变量 -->
					<u-search
						v-model="inputVal"
						placeholder="日照香炉生紫烟"
						shape="square"
						:show-action="true"
						action-text="搜索"
						:animation="true"
						input-align="center"
						height="54"
						:action-style="{ color: '#fff' }"
						@search="enterInput"
						@custom="customInput"
					></u-search>
				</view>
				<view class="navbar-right" v-if="rightSlot">
					<view class="message-box right-item">
						<u-icon name="chat" size="38"></u-icon>
						<u-badge count="18" size="mini" :offset="[-15, -15]"></u-badge>
					</view>
					<view class="dot-box right-item">
						<u-icon name="calendar-fill" size="38"></u-icon>
						<u-badge size="mini" :is-dot="true" :offset="[-6, -6]"></u-badge>
					</view>
				</view>
				<view v-if="custom">
					<text class="l-color-white u-padding-left-35">{{ title }}</text>
				</view>
			</view>
			<view class="navbar-right u-margin-right-20" slot="right" v-if="slotRight"><u-icon name="share" size="38" color="#fff"></u-icon></view>
		</u-navbar>
		<view class="u-text-center l-color-white">
			<view class="u-m-t-30">
				<u-icon name="map-fill" size="24"></u-icon>
				{{amapWeather.city?amapWeather.city.data:''}}
			</view>
			<view class="u-m-t-80"><text style="font-size:150rpx;">
				{{amapWeather.temperature?amapWeather.temperature.data:''}}</text>℃
			</view>
			<view>
				{{amapWeather.weather?amapWeather.weather.data:''}}
				<image class="u-m-l-20 u-m-r-20" :src="futureWeather.length?futureWeather[0].dayPictureUrl:''" style="heigh:30rpx;width:44rpx;" mode="widthFix"></image>
			</view>
			<view class="u-padding-20 u-flex u-row-between">
				<view class="u-padding-10">PM2.5：{{bmapWeather.pm25}}</view>
				<view class="u-padding-10">湿度：{{amapWeather.humidity?amapWeather.humidity.data:''}}</view>
			</view>
			<view class="u-padding-20 u-flex u-row-between">
				<view class="u-padding-10">风速：{{bmapWeather.wind}}</view>
				<view class="u-padding-10">温差：{{bmapWeather.temperature}}</view>
			</view>
		</view>
		<view class="u-abso l-color-white" style="bottom:0;width: 100%;">
			<view class="u-padding-20 u-flex u-row-between u-col-center" 
				v-for="(item, index) in futureWeather" 
				:key="item.date" v-if="index !== 0">
				<view class="u-padding-10">
					{{item.date}}：{{item.weather}}
					<image class="u-m-l-20 u-m-r-20" :src="item.dayPictureUrl" style="heigh:30rpx;width:44rpx;" mode="widthFix"></image>
				</view>
				<view class="u-padding-10">
					{{item.wind}} 
					{{item.temperature}}
					<image class="u-m-l-20" :src="item.nightPictureUrl" style="heigh:30rpx;width:44rpx;" mode="widthFix"></image>
					</view>
			</view>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
const amap = require('@/common/libs/amap-wx.min.js');
const bmap = require('@/common/libs/bmap-wx.min.js');
export default {
	data() {
		return {
			isFixed: true,
			isBack: true,
			backText: '返回',
			backIconName: 'nav-back',
			title: 'weather',
			borderBottom: false,
			background: {
				// 'background': 'url(http://shp.qpic.cn/ishow/2735022611/1551150494_-695593207_2194_sProdImgNo_3.jpg/0) no-repeat',  // 设置背景图片 还可以加上其他属性，比如no-repeat，center
				// 'background-color': '' 	// 设置纯色背景
				// 'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
			},
			useSlot: true, // 自定义内容
			search: false, // useSlot - 搜索框
			custom: false, // useSlot - 完全自定义
			rightSlot: false, // useSlot - 右侧自定义
			keyword: '', // search展示时，绑定值
			slotRight: false,

			inputVal: '',
			// map 经纬度
			lat: 39.9776,
			lng: 116.35231,
			
			amapPlugin: null,
			bmapPlugin: null,
			// 高德ak
			key: this.$lottery.$constant.amapWxKey,
			// 百度ak
			ak: this.$lottery.$constant.bmapWxKey,			
			amapWeather: {},
			bmapWeather: {},
			futureWeather: [],
			weatherPic: '/static/images/lottery/weather.jpg'
		};
	},
	onLoad(options) {
		// 高德
		this.amapPlugin = new amap.AMapWX({
			key: this.key
		});
		// 百度
		this.bmapPlugin = new bmap.BMapWX({ 
            ak: this.ak
        });
		setTimeout(() => {
			let winHeight = uni.getSystemInfoSync().windowHeight;
			this.scrollH = winHeight - 44 - uni.upx2px(600);
			/* this.getLocation(() => {
				this.getWeather()
			}); */
			this.getAmapWeather()
			this.getBmapWeather();
		}, 300);
	},
	methods: {
		enterInput(value) {
			// console.log('回车或者搜索触发：', value);	
			this.getAmapWeather(value);
			this.getBmapWeather(value);
		},
		customInput(value) {
			// console.log('搜索右边控件触发：', value);
			this.getAmapWeather(value);
			this.getBmapWeather(value);
		},
		/* getLocation(callback) {
			const that = this;
			this.amapPlugin.getRegeo({
				success: data => {
					console.log('地址', data)
					that.lng = data[0].longitude;
					that.lat = data[0].latitude;
					callback();
				},
				fail: info => {
					callback();
				}
			});
		}, */
		//amap: POI天气检索
		getAmapWeather(keywords) {
			uni.showLoading({
				title: '加载中...'
			});
			// let data = log.weatherInfo;
			// this.amapWeather = data;			
			this.amapPlugin.getWeather({
				location: '', //location： 经纬度坐标。 为空时， 基于当前位置进行地址解析。 格式： '经度,纬度'
				success: data => {
					console.log('amap：', data);
					this.amapWeather = data;
					uni.hideLoading();
				},
				fail: info => {
					console.log('amap:', info);
					let data = info.errMsg.split(' ');
					this.$refs.uToast.show({
						title: JSON.parse(data[1]).message,
						type: 'error',
						icon: false,
						position: 'center',
						duration: 3000
					});
					uni.hideLoading();
				}
			});
		},
		// 百度POI天气检索
		getBmapWeather() {
			uni.showLoading({
				title: '获取中...'
			});
			// var data = log.weather;			
			uni.hideLoading();
			let fail = info => { 
				uni.hideLoading();
				console.log('bmap:', info);
				let data = info.errMsg.split(' ');
				this.$refs.uToast.show({
					title: JSON.parse(data[1]).message,
					type: 'error',
					icon: false,
					position: 'center',
					duration: 3000
				});
			};
			let success = data => { 
				uni.hideLoading();
				console.log('bmap:', data);
				this.bmapWeather = data.currentWeather[0];
				this.bmapWeatherInfo = data.originalData;
				this.title = this.bmapWeather.currentCity;
				this.futureWeather = this.bmapWeatherInfo.results[0].weather_data;
			} 
			this.bmapPlugin.weather({
				fail: fail, 
				success: success
			})
		}
	}
};
</script>

<style lang="scss">
.l-color-white {
	color: $l-color-white;
}
page {
	height: 100%;
	background-image: linear-gradient( #3f7cd3, #91a6d1, #cebdb4, #efa75c);
}
map {
	width: 100%;
	height: 600rpx;
}
.box.weather {
	height: calc(100vh - 600rpx - 46px);
	background: #00ab98;
	color: #fff;
	padding-top: 80rpx;
	padding-left: 100rpx;
	line-height: 60rpx;
	text {
		display: block;
	}
}

/* .scrollView {
	width: 100%;
	background: #fff;
	height: calc(100vh - 46px - 600rpx);
} */
</style>
