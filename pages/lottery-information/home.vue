<template>
	<view class="u-skeleton">
		<u-navbar title-color="#fff"
			back-icon-color="#ffffff"
			:border-bottom="borderBottom"
			:is-fixed="isFixed"
			:is-back="isBack"
			:background="background"
			:back-text-style="{ color: '#fff' }"
			:title="title"
			:back-icon-name="backIconName"
			:back-text="backText">
			<view class="slot-wrap" v-if="useSlot">
				<view class="search-wrap" v-if="search">
					<!-- 如果使用u-search组件，必须要给v-model绑定一个变量 -->
					<u-search v-model="keyword" :show-action="showAction" height="56" :action-style="{ color: '#fff' }"></u-search>
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
					<text class="l-color-white u-padding-left-35">{{customTitle}}</text>
				</view>
			</view>
		</u-navbar>
		<view>
			<u-tabs v-if="control" height="100" :bg-color="bgColor" :bold="bold" :inactive-color="inactiveColor" active-text-color="#fff" :active-color="activeColor" :list="list" @change="change" :current="current" :is-scroll="isScroll" bar-width="200" bar-height="6"></u-tabs>
		</view>
		<view class="u-demo-wrap">
			<view class="u-text-center">第{{lottery.term}}期开奖号码</view>
			<u-gap height="40"></u-gap>
			<view>
				<u-row gutter="12" justify="space-between">
					<u-col span="11">
						<view class="u-flex u-row-around">
							<view
								v-for="(item, index) in lottery_dlt.codeNumber" 
								:key="index"
								class="l-lottery-data u-skeleton-circle"
								:class="{'l-lottery-data-blue': index == 5 || index == 6}">
								{{item}}
							</view>
						</view>
					</u-col>
					<u-col span="1">
						<view class="u-text-right">
							<u-icon name="arrow-right" color="#fff" size="28"></u-icon>
						</view>
					</u-col>
				</u-row>
			</view>
			<view>
				<view class="u-margin-top-60 u-flex u-row-between">
					<view class="u-light-color u-padding-10">中奖说明如下：</view>
					<view class="u-light-color u-padding-10">开奖日期：{{lottery.openTime_fmt}}</view>
				</view>
			</view>
		</view>
		<view class="l-color-white">
			<view class="u-padding-20 u-flex u-row-between">
				<view class="u-padding-10">本期销量{{lottery.totalSales}}</view>
				<view class="u-padding-10">奖池滚动{{lottery.pool}}</view>
			</view>
		</view>
		<view class="u-margin-left-10 u-margin-right-10 u-margin-bottom-10">
			<u-table class="u-skeleton-rect" :color="inactiveColor" :bg-color="tableBgColor" :border-color="bgColor">
				<u-tr v-for="(item, index) in lottery_dlt.details" :key="item.level">
					<u-td>{{item.level}}</u-td>
					<u-td>{{item.piece}}注</u-td>
					<u-td>{{item.money}}</u-td>
				</u-tr>
				<u-tr 
					v-for="(item, index) in lottery_dlt.detailsAdd" 
					:key="item.level"
					v-if="item.piece!=='0'&&item.money!=='0'">
					<u-td>{{item.level}}</u-td>
					<u-td>{{item.piece}}注</u-td>
					<u-td>{{item.money}}</u-td>
				</u-tr>
			</u-table>
		</view>
		<!-- 底部导航栏 -->
		<u-tabbar :list="vuex_tabbar" :mid-button="false" :active-color="`#2dabff`"></u-tabbar>
	</view>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import img from "@/static/title.json"
export default {
	data() {
		return {
			isFixed: true,
			isBack: false,
			backText: '返回',
			backIconName: 'nav-back',
			title: '',
			customTitle: 'Lottery信息',
			borderBottom: false,
			background: {
				// 'background': 'url(http://shp.qpic.cn/ishow/2735022611/1551150494_-695593207_2194_sProdImgNo_3.jpg/0) no-repeat',  // 设置背景图片 还可以加上其他属性，比如no-repeat，center
				// 'background-color': '' 	// 设置纯色背景
				'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
			},
			useSlot: true,	// 自定义内容
			search: false,	// useSlot - 搜索框
			custom: true,	// useSlot - 完全自定义
			rightSlot: false,	// useSlot - 右侧自定义
			keyword: '',	// search展示时，绑定值
			
			control: true,
			list: [{
				name: '大乐透'
			}, {
				name: '双色球'
			}],
			current: 0,
			isScroll: false,
			tabCountIndex: 0,
			bgColor: this.$u.color['mainColor'],
			inactiveColor: this.$u.color['lightColor'],
			activeColor: this.$u.color['error'],
			tableBgColor: this.$u.color['contentColor'],
			bold: true,
			
			lottery_dlt: {},
			lottery: {}
		}
	},
	onLoad() {
		// console.log(this.$u.route);
	},
	onShow() {
		this.getLotteryData();
	},
	methods: {
		change(index) {
			this.current = index;
			if(this.current === 1) {
				uni.showModal({
					title: 'tips',
					content: '暂未开发敬请期待！',
					showCancel: false,
					confirmColor: this.$u.color['error']
				});
				this.current = 0;
			}
		},
		getLotteryData(){
			return new Promise((resolve, reject) => {
				uni.request({
					// url: 'https://www.lottery.gov.cn/tz_kj.json'
					url: 'https://www.lottery.gov.cn/api/lottery_kj_detail_new.jspx?_ltype=4'
				}).then(res => {
					if(res[1].statusCode === 200) {
						let data = res[1].data;
						// console.log(data);
						this.lottery_dlt = data[0];
						this.lottery = data[0].lottery;
					}
				})
				/* var data = log.dlt;
				console.log(data);
				this.lottery_dlt = data[0];
				this.lottery = data[0].lottery; */
			})
		}
	}
}
</script>

<style lang="scss">
	page{
		main-height: 100%;
		background: $u-main-color;
		background-image: linear-gradient($u-main-color 40%, #e62e5f);
	}
	.l-color-white {
		color: $l-color-white;
	}
	.u-demo-wrap {
		background-color: $u-content-color;
		margin: 0 10rpx;
		padding: 40rpx 20rpx 10rpx;
		border-radius: 2px;
		color: $l-color-white;
	}
	.l-lottery-data {
		background: $u-type-error-dark;
		// background: #e62e5f;
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		text-align: center;
		line-height: 56rpx;
	}
	.l-lottery-data-blue {
		background: $u-type-primary-dark;
	}
	.u-table {
		.u-tr {
			height: 100rpx;
		}
	}
</style>
