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
			title=""
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
			<view class="navbar-right u-margin-right-20" slot="right" v-if="slotRight">
				<u-icon name="share" size="38" color="#fff"></u-icon>
			</view>
		</u-navbar>
        <map :latitude="lat" :longitude="lng" :markers="covers" @markertap="marker" :scale="12"></map>
        <scroll-view scroll-y class="scrollView">
            <view class="tui-list">
                <view class="tui-list-cell" :class="[index==address.length-1?'tui-cell-last':'']" v-for="(item,index) in address"
                 :key="index">
                    <view class="addr-title">{{item.title}}</view>
                    <view class="addr-box">
                        <view class="addr-detail">
                            <text class="distance">{{item.distance}}m</text>
                            {{item.address}}
                        </view>
                        <view class="addr-opera">
                            <view class="opera-box" hover-class="opcity " :hover-stay-time="150 " @tap="call " :data-id="item.id" v-if="item.tel">
                                <u-icon name="phone" :size="40" ></u-icon>
                                <view class=""></view>
                                <view class="text">打电话</view>
                            </view>
                            <view class="opera-box" hover-class="opcity" :hover-stay-time="150" @tap="go" :data-id="item.id">
                                <u-icon name="map" :size="40" ></u-icon>
                                <view class="text">到这里</view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </scroll-view>
		<u-toast ref="uToast" />
    </view>
</template>

<script>
    const amap = require('@/common/libs/amap-wx.min.js')
    export default {
        data() {
            return {
				isFixed: true,
				isBack: true,
				backText: '返回',
				backIconName: 'nav-back',
				title: 'Lottery信息',
				borderBottom: false,
				background: {
					// 'background': 'url(http://shp.qpic.cn/ishow/2735022611/1551150494_-695593207_2194_sProdImgNo_3.jpg/0) no-repeat',  // 设置背景图片 还可以加上其他属性，比如no-repeat，center
					// 'background-color': '' 	// 设置纯色背景
					'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				},
				useSlot: true, // 自定义内容
				search: true, // useSlot - 搜索框
				custom: false, // useSlot - 完全自定义
				rightSlot: false, // useSlot - 右侧自定义
				keyword: '', // search展示时，绑定值
				// #ifdef MP
				slotRight: false,
				// #endif
				// #ifndef MP
				slotRight: false,
				// #endif
				
                inputVal: "",
                amapPlugin: null,
                key: this.$lottery.$constant.amapWxKey,
                lat: 39.9776,
                lng: 116.35231,
                covers: [],
                address: [],
                scrollH: 256
            }
        },
        onLoad(options) {
            this.amapPlugin = new amap.AMapWX({
                key: this.key
            });
            setTimeout(() => {
                this.getLocation(() => {
                    this.getPoiAround(options.key || "加油站")
                });
            }, 300)
        },
        methods: {
            trim: function(value) {
                return value ? value.toString().replace(/(^\s*)|(\s*$)/g, "") : value;
            },
			enterInput(value) {
				// console.log('回车或者搜索触发：', value);	
				this.getPoiAround(value);
			},
			customInput(value) {
				// console.log('搜索右边控件触发：', value);
				this.getPoiAround(value);
			},
            getLocation(callback) {
                const that = this
                this.amapPlugin.getRegeo({
                    success: (data) => {
                        that.lng = data[0].longitude;
                        that.lat = data[0].latitude;
                        callback();
                    },
                    fail: (info) => {
                        callback();
                    }
                })
            },
            getPoiAround(keywords) {
                //检索周边的POI
                uni.showLoading({
                    title: "加载中..."
                })
                const that = this;
                setTimeout(() => {
                    this.amapPlugin.getPoiAround({
                        querykeywords: keywords,
                        location: '', //location： 经纬度坐标。 为空时， 基于当前位置进行地址解析。 格式： '经度,纬度'
                        success: (data) => {
                            let arr = [];
                            let addr = [];
                            for (let i = 0; i < data.markers.length; i++) {
                                arr.push({
                                    id: i,
                                    latitude: data.markers[i].latitude,
                                    longitude: data.markers[i].longitude,
                                    title: data.markers[i].name
                                })
                                let tel = that.trim(data.poisData[i].tel);
								// let tel = that.$u.trim(data.poisData[i].tel, 'all');
                                if (~tel.indexOf(";")) {
                                    tel = tel.split(";")[0]
                                }
                                addr.push({
                                    id: i,
                                    latitude: data.markers[i].latitude,
                                    longitude: data.markers[i].longitude,
                                    title: data.markers[i].name,
                                    address: data.markers[i].address,
                                    tel: tel,
                                    distance: data.poisData[i].distance
                                })
                            }

                            this.address = addr;
                            this.covers = arr;
                            uni.hideLoading()
                        },
                        fail: (info) => {
							console.log(info);
							let data = info.errMsg.split(' ');
							this.$refs.uToast.show({
								title: JSON.parse(data[1]).message,
								type: 'error',
								icon: false,
								position: 'center',
								duration: 3000
							})
                            uni.hideLoading()
                        }
                    })
                }, 0);

            },
            marker: function(e) {
                const that = this
                const item = that.address[e.markerId || 0];
                const menu = item.tel ? ["打电话", "到这里"] : ["到这里"];
                uni.showActionSheet({
                    itemList: menu,
                    success(res) {
                        if (res.tapIndex == 0 && item.tel) {
                            uni.makePhoneCall({
                                phoneNumber: item.tel
                            })
                        } else {
                            const latitude = Number(item.latitude)
                            const longitude = Number(item.longitude)
                            uni.openLocation({
                                name: item.title,
                                address: item.address,
                                latitude,
                                longitude,
                                scale: 18
                            })
                        }
                    },
                    fail(res) {
                        console.log(res.errMsg)
                    }
                })

            },
            call(event) {
                const index = Number(event.currentTarget.dataset.id);
                const tel = this.address[index].tel;
                if (tel) {
                    uni.makePhoneCall({
                        phoneNumber: tel
                    })
                }

            },
            go(event) {
                const index = Number(event.currentTarget.dataset.id)
                const item = this.address[index];
                const latitude = Number(item.latitude)
                const longitude = Number(item.longitude)
                uni.openLocation({
                    name: item.title,
                    address: item.address,
                    latitude,
                    longitude,
                    scale: 18
                })
            }
        }
    }
</script>

<style>
    page {
        height: 100%;
    }
    .tui-list {
        background-color: #fff;
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: env(safe-area-inset-bottom);
    }

    .tui-list-cell {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .tui-list-cell::after {
        content: '';
        position: absolute;
        border-bottom: 1upx solid #eaeef1;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        bottom: 0;
        right: 0;
        left: 30upx;
    }

    .tui-cell-last::after {
        border-bottom: 0;
    }

    .maps-container {
        height: 100%;
        overflow: hidden;
    }

    map {
        width: 100%;
        height: 600rpx;
    }

    .opcity {
        opacity: 0.5;
    }

    /* .scrollView {
        width: 100%;
        background: #fff;
        height: calc(100vh - 46px - 600upx);
    } */

    .search-bar {
        position: relative;
        padding: 8px 10px;
        display: -webkit-flex;
        display: flex;
        box-sizing: border-box;
        align-items: center;
        background-color: #fff;
    }

    .icon-search {
        margin-right: 8px;
        font-size: inherit;
        height: 18px;
        position: relative;
        top: 3px;
    }

    .icon-search-in-box {
        position: absolute;
        left: 10px;
        top: 6px;
    }

    .search-bar-form {
        position: relative;
        -webkit-box-flex: 1;
        -webkit-flex: auto;
        flex: auto;
        border-radius: 5px;
        background: #f0f0f0;
    }

    .search-bar-text {
        display: inline-block;
        font-size: 14px;
    }

    .search-bar-box {
        position: relative;
        padding-left: 30px;
        padding-right: 30px;
        width: 100%;
        box-sizing: border-box;
        z-index: 1;
    }

    .search-bar-input {
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        display: inline-block;
    }

    .icon-clear {
        position: absolute;
        top: 0;
        right: 0;
        padding: 7px 8px;
        font-size: 0;
    }

    .search-bar-label {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        border-radius: 3px;
        text-align: center;
        color: #9b9b9b;
        background: #f0f0f0;
        line-height: 30px;
    }

    .cancel-btn {
        margin-left: 10px;
        line-height: 30px;
        color: #5982fd;
        white-space: nowrap;
        font-size: 15px;
    }

    .tui-list-cell {
        display: initial;
        padding: 30upx;
    }

    .addr-title {
        font-size: 30upx;
        line-height: 40upx;
        color: #000;
        font-weight: bold;
        width: 100%;
        padding-bottom: 20upx;
    }

    .addr-box {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    .addr-detail {
        width: 450upx;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        /*! autoprefixer: ignore next */
        -webkit-box-orient: vertical;
        font-size: 24upx;
        color: #999;
    }

    .distance {
        color: #5982fd;
        padding-right: 6upx;
    }

    .addr-opera {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .opera-box {
        text-align: center;
        margin-left: 26upx;
    }

    .mini-img {
        width: 44upx;
        height: 44upx;
    }

    .text {
        color: #333;
        font-size: 24upx;
        line-height: 30upx;
    }
</style>
