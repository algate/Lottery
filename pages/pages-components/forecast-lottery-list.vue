<template>
	<view @touchmove.stop.prevent>
		<u-navbar 
			title-color="#fff"
			back-icon-color="#ffffff"
			:is-fixed="isFixed"
			:is-back="isBack"
			:background="background"
			:back-text-style="{ color: '#fff' }"
			:title="title"
			:back-icon-name="backIconName"
			:back-text="backText">
			<view class="slot-wrap" v-if="useSlot">
				<view class="map-wrap" v-if="custom">
					<view @click="closeMask">
						<u-icon class="u-m-l-20" name="arrow-left" color="#fff" size="20"></u-icon>
						<u-icon name="edit-pen-fill" color="#fff" size="40"></u-icon>
						<text class="l-color-white" >{{customTitle}}</text>
					</view>
				</view>
			</view>
		</u-navbar>
		<u-notice-bar :autoplay="autoplay" :playState="playState" :speed="speed" :mode="mode" :show="show" :type="type" :list="noticeLists" :moreIcon="moreIcon" :volumeIcon="volumeIcon" :duration="duration" :isCircular="isCircular">
		</u-notice-bar>
		<view class="bg-white u-p-l-20">
			<u-collapse :arrow-color="warningColor">
				<u-collapse-item :title="item.head" :open="item.open" :disabled="item.disabled" align="left" v-for="(item, index) in itemList" :key="index">
					{{item.body}}
					<view class="collapse-item">
						<view v-for="(rule, index) in item.rules" :key="rule">{{rule}}</view>
					</view>
				</u-collapse-item>
			</u-collapse>
		</view>
		<view class="u-demo-wrap">
			<scroll-view class="l-lottery-list-box" scroll-y="true">
				<u-swipe-action :show="item.show" :index="index" v-for="(item, index) in list" :key="index" @click="click" @open="open" :options="options" :btn-width="btnWidth">
					<view class="u-flex u-row-around u-p-20 u-border-bottom">
						<view
							v-for="(value, key) in item.list" 
							:key="key"
							class="l-lottery-data u-skeleton-circle"
							:class="{'l-lottery-data-blue': key == 5 || key == 6}">
							{{value}}
						</view>
					</view>
				</u-swipe-action>
			</scroll-view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		lotteryList: Array
	},
	data() {
		return {
			// cacheList: this.lotteryList,
			list: [],
			isFixed: true,
			isBack: false,
			backText: '返回',
			backIconName: 'nav-back',
			title: '',
			customTitle: 'lottery数据',
			background: {
				'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
			},
			useSlot: true,
			custom: true,
			
			show: true,
			autoplay: false,
			type: 'success', //'primary', 'success', 'error', 'warning', 'none'
			noticeLists: [
				'0.每一行向左👈滑动可以删除',
				'1.点击导航的编辑图标重新选择',
				'2.此工具为辅助工具，不存储任何信息',
				'3.旨在选球的过程中快速选出自己中意的号码',
			],
			mode: 'horizontal',
			playState: 'play',
			speed: 160,
			duration: 2000,
			moreIcon: false,
			volumeIcon: true,
			isCircular: false, // 是否衔接-连续滚动
			current: 0,
			
			itemList: [{
				head: "规则说明如下：",
				body: "仔细阅读",
				rules: [
					'0.每一行向左👈滑动可以删除',
					'1.点击导航的编辑图标重新选择',
					'2.此工具为辅助工具，不存储任何信息',
					'3.旨在选球的过程中快速选出自己中意的号码',
				],
				open: false,
				disabled: false
			}],
			warningColor: this.$u.color['warning'],
			
			btnWidth: 180,
			options: [
				{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				},
				{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			]
		};
	},
	/* computed: {
		// 不管怎么调试，视图就是不变化
		list: {
			get() {
				let cache = this.lotteryList.map(item => ({
					show: false,
					list: item
				}));
				return cache
			}
		}
	}, */
	created() {
	},
	mounted() {
		console.log(this.lotteryList);
		let cache = this.lotteryList.map(item => ({
			show: false,
			list: item
		}));
		this.list = cache;},
	methods: {
		click(index, btnIndex) {
			if (btnIndex == 1) {
				this.list.splice(index, 1);
				// this.$u.toast(`删除了第${index+1}个cell`);
			} else {
				this.list[index].show = false;
				// this.$set(this.list[index], 'show', false);
				// this.$u.toast(`您取消了！`);
			}
		},
		// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
		open(index) {
			// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
			// 原本为'false'，再次设置为'false'会无效
			this.list[index].show = true;
			this.list.map((val, idx) => {
				if (index != idx) this.list[idx].show = false;
			});
		},
		closeMask() {
			this.$emit('click', false);
		}
	}
};
</script>

<style lang="scss" scoped>
	.l-color-white {
		color: $l-color-white;
	}
	.u-demo-wrap {
		border-width: 1px;
		border-color: #ddd;
		border-style: dashed;
		background-color: $l-color-white;
		border-radius: 2px;
		height: calc(100vh - 60rpx - 62rpx - 80rpx - 32rpx);
	}
	.l-lottery-data {
		background: $u-type-error-dark;
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		text-align: center;
		line-height: 56rpx;
		color: $l-color-white;
		box-sizing: border-box;
	}
	.l-lottery-data-blue {
		background: $u-type-primary-dark;
	}
	.l-lottery-list-box {
		height: 100%;
	}
</style>
