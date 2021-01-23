<template>
	<view>
		<u-navbar title-color="#fff"
			back-icon-color="#ffffff"
			:is-fixed="isFixed"
			:is-back="isBack"
			:background="background"
			:back-text-style="{ color: '#fff' }"
			:title="title"
			:back-icon-name="backIconName"
			:back-text="backText">
		</u-navbar>
		<view>
			<u-image src="/static/images/mine/wechat.png" width="100%" mode="widthFix"></u-image>
		</view>
		<view class="hammer-logo">
			<view class="logo">
				<image src="/static/images/tabBar/hammer.svg" mode="scaleToFill"></image>
			</view>
		</view>
		<view class="u-p-40">
			<view class="u-m-t-20 u-font-40 u-type-success">尊敬的开发者，欢迎体验 - 我叫白纸！</view>
			<view class="u-m-t-20 u-font-30">
				本项目是基于uView的UI搭建的【我叫白纸】小程序, Html5效果点击链接
				<!-- <text class="u-type-primary" @tap="copy('https://algate.github.io/HammerUI/')">锤子UI
				</text> -->
				<u-link href="https://algate.github.io/Lottery/" :under-line="true">Lottery</u-link>
				复制到浏览器欣赏。
			</view>
			<view class="u-m-t-20 u-font-30">
				如果您在使用过程中发现问题或者有更好的建议，可通过菜单【我的】-【反馈】提交相关信息。
			</view>
			<view class="u-m-t-20 u-font-30">
				您还可以通过以下方式联系我！
			</view>
			<!-- <view class="u-m-t-20" @tap="copy('algate@foxmail.com')">邮箱：algate@foxmail.com</view> -->
			<view class="u-m-t-20 u-font-30">
				邮箱：<u-link href="mailto:algate@foxmail.com" :under-line="true">algate@foxmail.com</u-link>
			</view>
			<view class="u-flex u-m-t-40 u-row-center">
				<u-image src="/static/images/mine/lottery.png" class="u-flex-1 u-p-20" mode="widthFix"></u-image>
				<view class="u-flex-1 u-font-30 u-p-20">QQ扫描QQ二维码，您的朋友也可以体验 - 彩测！</view>
			</view>
			<view class="u-flex u-m-t-40 u-row-center">
				<u-image src="/static/images/mine/wx.png" class="u-flex-1 u-p-20" mode="widthFix"></u-image>
				<view class="u-flex-1 u-font-30 u-p-20">微信扫描微信二维码，您的朋友也可以体验 - 锤子UI！</view>
			</view>
		</view>
	</view>
</template>
<script>
const hammerClipboard = require('@/common/libs/loadClipboard.js');
export default {
	data() {
		return {
			isFixed: true,
			isBack: true,
			backText: '返回',
			backIconName: 'nav-back',
			title: '关于',
			background: {
				// 'background': 'url(http://shp.qpic.cn/ishow/2735022611/1551150494_-695593207_2194_sProdImgNo_3.jpg/0) no-repeat',  // 设置背景图片 还可以加上其他属性，比如no-repeat，center
				// 'background-color': '' 	// 设置纯色背景
				'background-image': 'linear-gradient(45deg, #1cbbb4, #8dc63f)'
			}
		};
	},
	onLoad() {},
	methods: {
		copy(text) {
			// #ifdef MP-WEIXIN
			uni.setClipboardData({
				data: text,
				success() {
					uni.getClipboardData({
						success() {
							uni.showToast({
								title: '链接已复制',
								icon: 'none'
							});
						}
					});
				}
			});
			// #endif
			// #ifdef H5
			hammerClipboard.getClipboardData(text, res => {
				if (res) {
					uni.showToast({
						title: '链接已复制',
						icon: 'none'
					});
				} else {
					uni.showToast({
						title: '操作失败',
						icon: 'none'
					});
				}
			});
			// #endif
		}
	}
};
</script>
<style lang="scss">
@keyframes swingHammer {
	20% {
		-webkit-transform: rotate3d(0, 0, 1, 15deg);
		transform: rotate3d(0, 0, 1, 15deg);
	}

	40% {
		-webkit-transform: rotate3d(0, 0, 1, -12deg);
		transform: rotate3d(0, 0, 1, -12deg);
	}

	60% {
		-webkit-transform: rotate3d(0, 0, 1, 15deg);
		transform: rotate3d(0, 0, 1, 15deg);
	}

	80% {
		-webkit-transform: rotate3d(0, 0, 1, -12deg);
		transform: rotate3d(0, 0, 1, -12deg);
	}

	to {
		-webkit-transform: rotate3d(0, 0, 1, 15deg);
		transform: rotate3d(0, 0, 1, 15deg);
	}
}

.hammer-logo {
	text-align: center;
	.logo {
		width: 50vw;
		height: 50vw;
		transform: translateX(50%);
		animation: swingHammer 3s infinite;

		image {
			position: absolute;
			top: 30rpx;
			width: 100%;
			height: 100%;
		}
	}
}
</style>
