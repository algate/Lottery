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
			<u-swiper
				:height="400"
				:list="list"
				:title="swipertitle"
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
        <view>
            <view class="u-m-t-40 u-text-center">
                <u-image width="100%" :src="src_official" mode="widthFix"></u-image>
                <view class="u-flex u-m-t-40 u-row-center">👇扫码 公众号 - <text @tap="clip" class="official">[我叫白纸]</text> ☜搜索点我</view>
            </view>            
            <view class="u-flex u-m-t-40 u-row-center">
                <u-image src="/static/images/mine/wx.jpg" class="u-flex-1 u-p-20" mode="widthFix"></u-image>
                <view class="u-flex-1 u-font-30 u-p-20">
                    <!-- <u-link href="我叫白纸" :under-line="true">公众号 - 我叫白纸</u-link> -->
                    <text>公众号 - 我叫白纸</text>
                </view>
            </view>
            <view class="u-flex u-m-t-40 u-row-center">
            	<u-image src="/static/images/mine/lottery.png" class="u-flex-1 u-p-20" mode="widthFix"></u-image>
            	<view class="u-flex-1 u-font-30 u-p-20">QQ扫描QQ二维码，您的朋友也可以体验 - 彩测！</view>
            </view>
            <view class="u-flex u-m-t-40 u-row-center">
            	<u-image src="/static/images/mine/wx.png" class="u-flex-1 u-p-20" mode="widthFix"></u-image>
            	<view class="u-flex-1 u-font-30 u-p-20">微信扫描WX二维码，您的朋友也可以体验 - 锤子UI！</view>
            </view>
            <view class="u-flex u-m-t-40 u-row-center">
                <u-image src="/static/images/logo.svg" class="u-flex-1 u-p-20" mode="widthFix"></u-image>
                <view class="u-flex-1 u-font-30 u-p-20">
                    <u-link href="https://algate.github.io/HammerUI/" :under-line="true">
                        🔨UI-H5
                    </u-link><br/>👆 点击复制到浏览器
                </view>
            </view>
            <view class="u-flex u-m-t-40 u-row-center">
                <u-image src="/static/images/tabBar/hammer.png" class="u-flex-1 u-p-20" mode="widthFix"></u-image>
                <view class="u-flex-1 u-font-30 u-p-20">
                    <u-link href="https://algate.github.io/Lottery/" :under-line="true">
                        彩测-H5
                    </u-link><br/>👆 点击复制到浏览器
                </view>
            </view>
            <view class="u-flex u-m-t-40 u-row-center">
                <u-image src="/static/images/logo.png" class="u-flex-1 u-p-20" mode="widthFix"></u-image>
            	<view class="u-flex-1 u-font-30 u-p-20">
                    <u-link href="https://algate.github.io" :under-line="true">博客 - 笔墨纸砚</u-link>
                    <br/>👆 点击复制到浏览器
                </view>
            </view>
            <view class="u-flex u-m-t-40 u-row-center">
                <u-image src="/static/images/mine/hexo.png" class="u-flex-1 u-p-20" mode="widthFix"></u-image>
            	<view class="u-flex-1 u-font-30 u-p-20">
                    <u-link href="https://algate.github.io" :under-line="true">
                        博客 - 白纸驿站 v2.0
                    </u-link><br/>👆 点击复制到浏览器
                </view>
            </view>
            <view class="u-flex u-m-t-40 u-row-center">
                <u-image src="/static/images/mine/jekyll.png" class="u-flex-1 u-p-20" mode="widthFix"></u-image>
                <view class="u-flex-1 u-font-30 u-p-20">
                    <u-link href="https://algate.github.io/hexo.pure/" :under-line="true">
                        博客 - 白纸驿站 v1.0
                    </u-link><br/>👆 点击复制到浏览器
                </view>
            </view>
        </view>
	</view>
</template>

    
<script>
    import img from "@/static/title.json"
    // #ifdef H5
    const hammerClipboard = require('@/common/libs/loadClipboard.js');
    // #endif
	export default {
		data() {
			return {
                isFixed: true,
                isBack: true,
                backText: '返回',
                backIconName: 'nav-back',
                title: '我叫路飞',
                background: {
                	// 'background': 'url(http://shp.qpic.cn/ishow/2735022611/1551150494_-695593207_2194_sProdImgNo_3.jpg/0) no-repeat',  // 设置背景图片 还可以加上其他属性，比如no-repeat，center
                	// 'background-color': '' 	// 设置纯色背景
                	'background-image': 'linear-gradient(45deg, #1cbbb4, #8dc63f)'
                },
                
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
				swipertitle: true,
				// mode: 'rect',
				mode: 'none',
				indicatorPos: 'bottomRight',
				effect3d: false,
                
                // src: 'https://cdn.uviewui.com/uview/example/fade.jpg'
                src_official: '/static/images/mine/wechat.png',
                src_wxApplet: '/static/images/mine/wx.png'
			}
		},
		methods: {
			clip() {
                let that = this;
                // #ifndef H5
                uni.setClipboardData({
                	data: '我叫白纸',
                	success() {
                		uni.getClipboardData({
                			success() {
                				that.$u.toast('内容已复制，到微信搜索粘贴即可', 2000);
                			}
                		});
                	}
                });
                // #endif
                // #ifdef H5
                hammerClipboard.getClipboardData('我叫白纸', res => {
                	if (res) {
                		that.$u.toast('内容已复制，到微信搜索粘贴即可', 2000);
                	} else {
                		that.$u.toast('sorry，复制失败', 2000);
                	}
                });
                // #endif
            }
		}
	}
</script>

<style scoped>
.official {
    color: #2b85e4;
}
</style>
