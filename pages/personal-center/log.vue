<template>
	<view>
		<u-navbar
			title-color="#fff"
			back-icon-color="#ffffff"
			:is-fixed="isFixed"
			:is-back="isBack"
			:background="background"
			:back-text-style="{ color: '#fff' }"
			:title="title"
			:back-icon-name="backIconName"
			:back-text="backText"
		></u-navbar>
		<view>
			<u-notice-bar
				type="primary"
				mode="horizontal"
				:duration="2000"
				:speed="300"
				:is-circular="false"
				:list="list"
				:moreIcon="false"
				:volumeIcon="true"
				playState="play"
			></u-notice-bar>
		</view>
		<view class="u-p-40">
			<view>平台为：{{ vuex_platform }}</view>
			<view class="u-m-t-20">globalData版本号为：{{ global_version }}</view>
			<view class="u-m-t-20">vuex存储的版本号：{{ vuex_version }}</view>
			<view class="u-m-t-20">vuex存储[lottery]的作者为：{{ vuex_user.name }}</view>
			<u-button class="u-m-t-20" size="mini" type="success" plain @click="modifyVuex">修改变量</u-button>
		</view>
		<view class="u-m-30">
			<u-time-line>
				<u-time-line-item nodeTop="2">
					<template v-slot:node>
						<view class="u-node" style="background: #19be6b;"><u-icon name="volume-up-fill" color="#fff" :size="24"></u-icon></view>
					</template>
					<template v-slot:content>
						<view>
							<view class="u-order-title">1.0.0</view>
							<view class="u-order-desc">
								<view>
									【开发】底部导航栏、头部tabbar、uView框架
								</view>
								<view>1.canvas特效展示；</view>
								<view>2.lottery信息展示；</view>
								<view>3.lottery功能预测；</view>
								<view>4.个人功能导航；</view>
							</view>
							<view class="u-order-time">2020-08-08 08:08</view>
						</view>
					</template>
				</u-time-line-item>
				<u-time-line-item nodeTop="2">
					<template v-slot:node>
						<view class="u-node"><u-icon name="man-add" color="#fff" :size="24"></u-icon></view>
					</template>
					<template v-slot:content>
						<view>
							<view class="u-order-title unacive">0.8.0</view>
							<view class="u-order-desc">
								【交互】需求确认，原型设计，环境工具搭建
							</view>
							<view class="u-order-time">2019-05-12 09:25</view>
						</view>
					</template>
				</u-time-line-item>
				<u-time-line-item>
					<template v-slot:node>
						<view class="u-node">
							<u-icon name="more-dot-fill" color="#fff" size="24"></u-icon>
						</view>
					</template>
					<template v-slot:content>
						<view>
							<view class="u-order-title unacive">0.1.1 ~ 0.2.0</view>
							<view class="u-order-desc">
								【工具】开发框架，技术选型，UI框架，数据依赖
							</view>
							<view class="u-order-time">2020-05-08 08:08</view>
						</view>
					</template>
				</u-time-line-item>
				<u-time-line-item>
					<template v-slot:content>
						<view>
							<view class="u-order-title unacive">0.1.0</view>
							<view class="u-order-desc">【构思】做一个人人都喜爱的lottery工具</view>
							<view class="u-order-time">2020-05-07 00:00</view>
						</view>
					</template>
				</u-time-line-item>
			</u-time-line>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isFixed: true,
			isBack: true,
			backText: '返回',
			backIconName: 'nav-back',
			title: '日志',
			background: {
				'background-image': 'linear-gradient(45deg, #1cbbb4, #8dc63f)'
			},

			list: ['lottery给你最完美的体验！', 'lottery 1.0.0发布，给你最完美的体验！', 'canvas画板特效、天气、地图等信息展示！', 'lottery信息展示，lottery预测'],
			global_version: ''
		};
	},
	onShow() {
		this.global_version = getApp().globalData.global_version;
	},
	methods: {
		modifyVuex() {
			/* 此处为globalData修改
			// 修改userName后，本页的author依然不会自动刷新，因为globalData不是响应式的
			// 我们仍然需要手动刷新本页的author值，由此可见globalData的弊端
			 */
			getApp().globalData.global_version = '1.0.1';
			this.global_version = getApp().globalData.global_version;

			/* 此处为uView封装的vuex修改 
			// 修改对象的形式，中间用"."分隔
			// store中saveStateKeys = ['vuex_user'];定义本地要存储的修改之后刷新页面不会变为原来值的数据
			 */
			this.$u.vuex('vuex_version', '1.0.1');
			this.$u.vuex('vuex_user.name', 'Lottery');
		}
	}
};
</script>

<style>
.u-node {
	width: 44rpx;
	height: 44rpx;
	border-radius: 100rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #d0d0d0;
}

.u-order-title {
	color: #333333;
	font-weight: bold;
	font-size: 32rpx;
}
.u-order-title.unacive {
	color: rgb(150, 150, 150);
}

.u-order-desc {
	color: rgb(150, 150, 150);
	font-size: 28rpx;
	margin-bottom: 6rpx;
}

.u-order-time {
	color: rgb(200, 200, 200);
	font-size: 26rpx;
}
</style>
