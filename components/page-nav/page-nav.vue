<template>
	<view class="nav-wrap">
		<view class="nav-title">
			<image class="logo" src="/static/images/logo.png" mode="widthFix"></image>
			<view class="nav-info">
				<view class="nav-title__text">
					{{$t('common.title')}}
				</view>
				<view class="nav-slogan">
					 {{$t('common.intro')}}
				</view>
			</view>
		</view>
        <view @tap="goDetail" class="nav-desc">
			我叫梦奇·D·路飞，{{desc}}。
            <u-icon name="arrow-right" color="#2dabff" size="28"></u-icon>
		</view>
		<view class="lang" @tap="switchLang">
			<u-icon size="46" color="warning" :name="lang"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			desc: String,
			title: String,
            url: String
		},
		computed: {
			lang() {
				return this.$i18n.locale == 'zh' ? 'zh' : 'en';
			}
		},
		methods: {
			switchLang() {
				this.$i18n.locale = this.$i18n.locale == 'en' ? 'zh' : 'en';
                // #ifdef MP-WEIXIN || H5
                this.vuex_tabbar[0].text = this.$t('nav.info');
                this.vuex_tabbar[1].text = this.$t('nav.canvas');
                // this.$u.vuex(this.vuex_tabbar[0].text, this.$t('nav.canvas'));
                this.vuex_tabbar[2].text = this.$t('nav.basic');
                this.vuex_tabbar[3].text = this.$t('nav.function');
                this.vuex_tabbar[4].text = this.$t('nav.mine');
                // #endif
                // #ifndef MP-QQ
                this.vuex_tabbar[0].text = this.$t('nav.info');
                this.vuex_tabbar[1].text = this.$t('nav.basic');
                this.vuex_tabbar[2].text = this.$t('nav.mine');
                // #endif
				uni.setNavigationBarTitle({
					title: this.$t(this.title)
				});
			},
            goDetail(e) {
                uni.navigateTo({
                	url: '/pages/lottery-info/info-mine'
                });
            }
		}
	}
</script>

<style lang="scss" scoped>
	.nav-wrap {
		padding: 30rpx;
		position: relative;
		// box-shadow: 0 10rpx 60rpx 20rpx #18B566;
		/* box-shadow:inset x-offset y-offset blur-radius spread-radius color;
		 box-shadow:投影方式 X轴偏移量 Y轴偏移量 阴影模糊半径 阴影扩展半径 阴影颜色
		 1.inset 此参数是一个可选值，如果不设值，其默认的投影方式是外阴影；如果取其唯一值“inset”,就是将外阴影变成内阴影，也就是说设置阴影类型为“inset”时，其投影就是内阴影;
		 2.X-offset:是指阴影水平偏移量其值可以是正负值可以取正负值，如果值为正值，则阴影在对象的右边，反之其值为负值时，阴影在对象的左边；
		 3.Y-offset:是指阴影的垂直偏移量，其值也可以是正负值，如果为正值，阴影在对象的底部，反之其值为负值时，阴影在对象的顶部；
		 4.阴影模糊半径：此参数是可选，，但其值只能是为正值，如果其值为0时，表示阴影不具有模糊效果，其值越大阴影的边缘就越模糊；

		 5.阴影扩展半径：此参数可选，其值可以是正负值，如果值为正，则整个阴影都延展扩大，反之值为负值是，则缩小

		 6.阴影颜色：此参数可选，如果不设定任何颜色时，浏览器会取默认色，但各浏览器默认色不一样，特别是在webkit内核下的safari和chrome浏览器将无色，也就是透明，建议不要省略此参数。
		 */
	}
	
	.lang {
		position: absolute;
		top: 30rpx;
		right: 30rpx;
	}
	
	.nav-title {
		display: flex;
		align-items: center;
	}
	
	.nav-info {
		margin-left: 30rpx;
	}
	
	.nav-title__text {
		display: flex;
		color: $u-type-primary-dark;
		font-size: 40rpx;
		font-weight: 400;
	}
	
	.logo {
		width: 140rpx;
		flex: 0 0 140rpx;
		height: auto;
	}
	
	.nav-slogan {
		color: $u-tips-color;
		font-size: 28rpx;
	}
	
	.nav-desc {
		margin-top: 20rpx;
		font-size: 28rpx;
		// color: $u-content-color;
        color: $u-type-primary-dark;
	}
</style>
