<template>
	<view @touchmove.stop.prevent>
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
		<canvas style="width: 100vw;height: 100vw;" type="2d" canvas-id="tangram" id="tangram"></canvas>
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
			title: 'tangram',
			background: {
				// 'background': 'url(http://shp.qpic.cn/ishow/2735022611/1551150494_-695593207_2194_sProdImgNo_3.jpg/0) no-repeat',  // 设置背景图片 还可以加上其他属性，比如no-repeat，center
				// 'background-color': '' 	// 设置纯色背景
				'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
			},
			
			systemInfo: {},
			canvas: null,
			ctx: null,
			tangram: [
				{ p: [{ x: 0, y: 0 }, { x: 800, y: 0 }, { x: 400, y: 400 }], color: '#caff67' },
				{ p: [{ x: 0, y: 0 }, { x: 400, y: 400 }, { x: 0, y: 800 }], color: '#67bccf' },
				{ p: [{ x: 800, y: 0 }, { x: 800, y: 400 }, { x: 600, y: 600 }, { x: 600, y: 200 }], color: '#cf3d61' },
				{ p: [{ x: 600, y: 200 }, { x: 600, y: 600 }, { x: 400, y: 400 }], color: '#f9f51a' },
				{ p: [{ x: 400, y: 400 }, { x: 600, y: 600 }, { x: 400, y: 800 }, { x: 200, y: 600 }], color: '#a594c0' },
				{ p: [{ x: 200, y: 600 }, { x: 400, y: 800 }, { x: 0, y: 800 }], color: '#fa8ccc' },
				{ p: [{ x: 800, y: 400 }, { x: 800, y: 800 }, { x: 400, y: 800 }], color: '#f6ca29' }
			]
		};
	},
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				this.systemInfo = res;
			}
		});
	},
	onReady() {
		this.setup();
	},
	onUnload() {
		this.canvas = null;
		this.ctx = null;
	},
	methods: {
		setup() {
			// #ifdef H5
			this.canvas = document.querySelector('#tangram canvas');
			const dpr = uni.getSystemInfoSync().pixelRatio;
			this.canvas.width = this.systemInfo.windowWidth * dpr;
			this.canvas.height = this.systemInfo.windowWidth * dpr;
			this.ctx = this.canvas.getContext('2d');
			// this.ctx.scale(dpr, dpr);
			this.applyData(this.ctx);
			// #endif
			// #ifdef MP-WEIXIN || MP-QQ
			const query = uni.createSelectorQuery();
			query
				.select('#tangram')
				.fields({ node: true, size: true })
				.exec(res => {
					this.canvas = res[0].node;
					const dpr = uni.getSystemInfoSync().pixelRatio;
					this.canvas.width = res[0].width * dpr;
					this.canvas.height = res[0].width * dpr;
					this.ctx = this.canvas.getContext('2d');
					this.ctx.scale(dpr, dpr);
					this.applyData(this.ctx);
				});
			// #endif
		},
		applyData(ctx) {
			this.tangram.map(plece => {
				return plece.p.map(coordinate => {
					if (coordinate.x === 200) {
						coordinate.x = this.systemInfo.windowWidth / 4;
					} else if (coordinate.x === 400) {
						coordinate.x = this.systemInfo.windowWidth / 2;
					} else if (coordinate.x === 600) {
						coordinate.x = (this.systemInfo.windowWidth / 4) * 3;
					} else if (coordinate.x === 800) {
						coordinate.x = this.systemInfo.windowWidth;
					}
					if (coordinate.y === 200) {
						coordinate.y = this.systemInfo.windowWidth / 4;
					} else if (coordinate.y === 400) {
						coordinate.y = this.systemInfo.windowWidth / 2;
					} else if (coordinate.y === 600) {
						coordinate.y = (this.systemInfo.windowWidth / 4) * 3;
					} else if (coordinate.y === 800) {
						coordinate.y = this.systemInfo.windowWidth;
					}
				});
			});
			for (var i = 0; i < this.tangram.length; i++) {
				this.draw(this.tangram[i], ctx);
			}
		},
		draw(plece, cxt) {
			cxt.beginPath();
			cxt.moveTo(plece.p[0].x, plece.p[0].y);
			for (var i = 1; i < plece.p.length; i++) {
				cxt.lineTo(plece.p[i].x, plece.p[i].y);
			}
			cxt.closePath();
			cxt.fillStyle = plece.color;
			cxt.fill();
		}
	}
};
</script>

<style></style>
