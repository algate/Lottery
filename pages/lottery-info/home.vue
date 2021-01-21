<template>
	<view>
		<view>
			<u-swiper
				:height="400"
				:list="list"
				:title="title"
				:effect3d="effect3d"
				:indicator-pos="indicatorPos"
				:mode="mode"
				:interval="3000"
				@click="click"
			></u-swiper>
			<view v-if="setSwiper">
				<u-subsection vibrateShort :list="['round', 'rect', 'number', 'none']" @change="modeChange"></u-subsection>
				<u-subsection vibrateShort current="1" :list="['显示', '隐藏']" @change="titleChange"></u-subsection>
				<u-subsection vibrateShort current="3" :list="['上左', '上右', '下左', '下中', '下右']" @change="indicatorPosChange"></u-subsection>
				<u-subsection vibrateShort current="1" :list="['开启', '关闭']" @change="effect3dChange"></u-subsection>
			</view>
		</view>
        <!-- title 未转义：page-nav 为获取$T('')对应的语言对象 -->
        <page-nav :desc="desc" title="nav.info"></page-nav>
        <scroll-view scroll-y>
        	<view class="nav-list">
                <!-- navigator的跳转属性 :url="'/pages/lottery-info/' + item.name"  -->
        		<view hover-class="none" class="nav-li bg-img" open-type="navigate" :class="item.bgColor" :style="[{animation: 'bounceInDown ' + ((index+1)*0.2+1) + 's ' + ((index)*0.4) + 's 1 backwards', backgroundImage:'url('+item.img+')'}]" v-for="(item,index) in elements" :key="index">
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
        		</view>
        	</view>
        </scroll-view>
        <!-- 底部导航栏 -->
        <u-tabbar :list="vuex_tabbar" :mid-button="false" :active-color="`#2dabff`"></u-tabbar>
	</view>
</template>

    
<script>
    import img from "@/static/title.json"
    // #ifdef H5
    const hammerClipboard = require('@/common/libs/loadClipboard.js');
    // #endif
	export default {
        computed: {
        	desc() {
        		return this.$t('canvas.desc');
        	}
        },
		data() {
			return {
				list: [
					{
						image: img.onePieces[0].url,
						title: '香克斯让小小的路飞心中萌生了要出海的念头'
					},
					{
						image: img.onePieces[1].url,
						title: '成长的路飞，越挫越勇，越战越强'
					},
					{
						image: img.onePieces[2].url,
						title: '为了朋友，敢于冒险'
					},
					{
						image: img.onePieces[3].url,
						title: '此刻，他是自由的，他是快乐的'
					},
					{
						image: img.onePieces[4].url,
						title: '为了承诺，敢于挑战'
					},
					{
						image: img.onePieces[5].url,
						title: '支撑他的，是背后有一群伙伴在守护'
					},
					{
						image: img.onePieces[6].url,
						title: '不管风雨，不管失败，终究能战胜空难，笑看世界'
					},
					{
						// image: '/static/images/onePiece/onePiece7.gif',
						image: img.onePieces[7].url,
						title: '为了心中的目标，前方道路，继续向前'
					}
				],
				setSwiper: false,
				title: true,
				// mode: 'rect',
				mode: 'none',
				indicatorPos: 'bottomRight',
				effect3d: false,
                
                elements: [
                	// #ifdef H5
                	/* 此特效在小程序端效果不佳，仅在H5端展示 */
                	{
                		title: '白纸驿站',
                		name: 'info-blogHexo',
                		icon: 'chrome-circle-fill',
                		size: 30,
                		bgColor : 'bg-orange',
                		img: img.imgs[0].url
                	},
                	// #endif
                	{
                		title: '白纸旧站',
                		name: 'info-blogJekell',
                		icon: 'ie',
                		size: 30,
                		bgColor : 'bg-yellow',
                		img: img.imgs[1].url
                	},
                	{
                		title: '笔墨纸砚',
                		name: 'info-blogDocusaurus',
                		icon: 'github-circle-fill',
                		size: 30,
                		bgColor : 'bg-olive',
                		img: img.imgs[2].url
                	},
                	{
                		title: '彩测⚽球',
                		name: 'info-h5Lottery',
                		icon: 'android-fill',
                		size: 30,
                		bgColor : 'bg-purple',
                		img: img.imgs[3].url
                	},
                	{
                		title: '锤子程序',
                		name: 'info-h5Hammer',
                		icon: 'twitter',
                		size: 30,
                		bgColor : 'bg-mauve',
                		img: img.imgs[4].url
                	},
                	{
                		title: '我叫白纸',
                		name: 'info-official',
                		icon: 'apple-fill',
                		size: 30,
                		bgColor : 'bg-cyan',
                		img: img.imgs[5].url
                	}
                ]
			}
		},
		methods: {
            
		}
	}
</script>

<style scoped>
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
