<template>
	<view>
		<u-navbar title-color="#fff"
			back-icon-color="#ffffff"
			:is-fixed="isFixed"
			:border-bottom="borderBottom"
			:is-back="isBack"
			:background="background"
			:back-text-style="{ color: '#fff' }"
			:title="title"
			:back-icon-name="backIconName"
			:back-text="backText">
		</u-navbar>
		<!-- title 未转义：page-nav 为获取$T('')对应的语言对象 -->
		<page-nav :desc="desc" title="nav.canvas"></page-nav>
		<scroll-view scroll-y>
			<view class="nav-list">
				<navigator hover-class="none" :url="'/pages/lottery-canvas/' + item.name" class="nav-li bg-img" open-type="navigate" :class="item.bgColor" :style="[{animation: 'bounceInDown ' + ((index+1)*0.2+1) + 's ' + ((index)*0.4) + 's 1 backwards', backgroundImage:'url('+item.img+')'}]" v-for="(item,index) in elements" :key="index">
					<!-- backwards/both;
					设置animate状态：
					none：默认值。不设置对象动画之外的状态，DOM未进行动画前状态
					forwards：设置对象状态为动画结束时的状态，100%或to时，当设置animation-direcdtion为reverse时动画结束后显示为keyframes第一帧
					backwards：设置对象状态为动画开始时的状态,（测试显示DOM未进行动画前状态）
					both：设置对象状态为动画结束或开始的状态，结束时状态优先 -->
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<view class="nav-icon">
						<u-icon :name="item.icon"></u-icon>
					</view>
				</navigator>
			</view>
		</scroll-view>
		<!-- 底部导航栏 -->
		<u-tabbar :list="vuex_tabbar" :mid-button="false" :active-color="`#2dabff`"></u-tabbar>
	</view>
</template>

<script>
	import img from "@/static/title.json"
	export default {
		computed: {
			desc() {
				return this.$t('canvas.desc');
			}
		},
		data() {
			return {
				isFixed: true,
				isBack: false,
				backText: '返回',
				backIconName: 'nav-back',
				title: '画板',
				borderBottom: false,
				background: {
					// 'background': 'url(http://shp.qpic.cn/ishow/2735022611/1551150494_-695593207_2194_sProdImgNo_3.jpg/0) no-repeat',  // 设置背景图片 还可以加上其他属性，比如no-repeat，center
					// 'background-color': '' 	// 设置纯色背景
					'background-image': 'linear-gradient(45deg, #1cbbb4, #8dc63f)'
				},
				
				elements: [
					// #ifdef H5
					/* 此特效在小程序端效果不佳，仅在H5端展示 */
					{
						title: 'Vector.js',
						name: 'canvas-vectorJs',
						icon: 'chrome-circle-fill',
						size: 30,
						bgColor : 'bg-orange',
						img: img.imgs[0].url
					},
					// #endif
					{
						title: 'Tangram.js',
						name: 'canvas-tangram',
						icon: 'ie',
						size: 30,
						bgColor : 'bg-yellow',
						img: img.imgs[1].url
					},
					{
						title: 'Countdown',
						name: 'canvas-countdown',
						icon: 'github-circle-fill',
						size: 30,
						bgColor : 'bg-olive',
						img: img.imgs[2].url
					},
					{
						title: 'Mouseclick-effect',
						name: 'canvas-click-effect',
						icon: 'android-fill',
						size: 30,
						bgColor : 'bg-purple',
						img: img.imgs[3].url
					},
					{
						title: 'Touchmove-snow',
						name: 'canvas-touchmove-snow',
						icon: 'twitter',
						size: 30,
						bgColor : 'bg-mauve',
						img: img.imgs[4].url
					},
					{
						title: 'Particle',
						name: 'canvas-particle',
						icon: 'apple-fill',
						size: 30,
						bgColor : 'bg-cyan',
						img: img.imgs[5].url
					},
					{
						title: 'Favorite',
						name: 'canvas-favorite',
						icon: 'zhihu-circle-fill',
						size: 30,
						bgColor : 'bg-green',
						img: img.imgs[6].url
					},
					{
						title: 'Grids',
						name: 'canvas-grids',
						icon: 'zhifubao',
						size: 30,
						bgColor : 'bg-blue',
						img: img.imgs[7].url
					},
					{
						title: 'Touchmove-bubble',
						name: 'canvas-touchmove-bubble',
						icon: 'weixin-fill',
						size: 30,
						bgColor : 'bg-pink',
						img: img.imgs[8].url
					}
				]
			}
		},
		onLoad() {
			console.log(this.$u);
		},
		// 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
		onShow() {
			// 该对象已集成到this.$u中，内部属性如下
			/* this.$u.mpShare = {
				title: '', // 默认为小程序名称，可自定义
				path: '', // 默认为当前页面路径，一般无需修改，QQ小程序不支持
				// 分享图标，路径可以是本地文件路径、代码包文件路径或者网络图片路径。
				// 支持PNG及JPG，默认为当前页面的截图
				imageUrl: '' 
			} */
			this.$u.mpShare.title = '天苍苍野茫茫，风吹草低见牛羊';
			this.$u.wxShareTimeline = {
				title: '不要跟我谈理想，我的理想是不上班'
			};
		},
		updated() {
			this.title = this.$t('nav.canvas');
		},
		// 监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
		onReady() {
			// ...
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.nav-list {
	    display: flex;
	    flex-wrap: wrap;
	    justify-content: space-between;
	}
	
	.nav-li {
	    padding: 30rpx;
	    border-radius: 12rpx;
	    width: 100%;
	    background-size: cover;
	    background-position: center;
	    position: relative;
	    margin-bottom: 40rpx;
		color: #fff;
	}
	.nav-li:first-child {
	    margin-top: 20rpx;
	}
	.nav-li:before,
	.nav-li:after {
	    content: "";
	    position: absolute;
	    top: 20rpx;
	    height: 50%;
	    left: 20rpx;
	    width: 40%;
	    box-shadow: -20rpx 20rpx 30rpx rgba(0, 0, 0, 0.1);
	}
	
	.nav-title {
	    font-size: 32rpx;
	    font-weight: 400;
	    animation: bounceInDown 2s 1;
	}
	
	.nav-title::first-letter {
	    font-size: 50rpx;
	    margin-right: 4rpx;
	}
	
	.nav-name {
	    font-size: 28rpx;
	    text-transform: Capitalize;
	    margin-top: 20rpx;
	    position: relative;
	    animation: slideInLeft 2s infinite;
	}
	
	.nav-name::before {
	    content: "";
	    position: absolute;
	    display: block;
	    width: 60rpx;
	    height: 6rpx;
	    background: #fff;
	    bottom: 0;
	    right: 0;
	    opacity: 0.8;
	    animation: bounce 2s infinite;
	}
	
	.nav-name::after {
	    content: "";
	    position: absolute;
	    display: block;
	    width: 50%;
	    height: 1px;
	    background: #fff;
	    bottom: 0;
	    right: 0;
	    opacity: 0.5;
	}
	
	.nav-name::first-letter {
	    font-weight: 800;
	    font-size: 36rpx;
	    margin-right: 1px;
	}
	
	.nav-li .nav-icon {
	    position: absolute;
	    right: 50rpx;
	    top: 30rpx;
	    font-size: 50rpx;
	    width: 60rpx;
	    height: 60rpx;
	    text-align: center;
	    line-height: 60rpx;
	    animation: rollIn 2s infinite;
	}
</style>
