<template>
	<view class="u-avatar" :style="[wrapStyle]" @tap="click">
		<image
			@error="loadError"
			:style="[imgStyle]"
			class="u-avatar__img"
			v-if="!uText && avatar"
			:src="avatar" 
			:mode="imgMode"
		></image>
		<text class="u-line-1" v-else-if="uText" :style="{
			fontSize: '38rpx'
		}">{{uText}}</text>
		<slot v-else></slot>
		<view class="u-avatar__sex" v-if="showSex" :class="['u-avatar__sex--' + sexIcon]" :style="[uSexStyle]">
			<u-icon :name="sexIcon" size="20"></u-icon>
		</view>
		<view class="u-avatar__level" v-if="showLevel" :style="[uLevelStyle]">
			<u-icon :name="levelIcon" size="20"></u-icon>
		</view>
	</view>
</template>

<script>
	let base64Avatar = '/static/images/logo.svg';
	/**
	 * avatar 头像
	 * @description 本组件一般用于展示头像的地方，如个人中心，或者评论列表页的用户头像展示等场所。
	 * @tutorial https://www.uviewui.com/components/avatar.html
	 * @property {String} bg-color 背景颜色，一般显示文字时用（默认#ffffff）
	 * @property {String} src 头像路径，如加载失败，将会显示默认头像
	 * @property {String Number} size 头像尺寸，可以为指定字符串(large, default, mini)，或者数值，单位rpx（默认default）
	 * @property {String} mode 显示类型，见上方说明（默认circle）
	 * @property {String} sex-icon 性别图标，man-男，woman-女（默认man）
	 * @property {String} level-icon 等级图标（默认level）
	 * @property {String} sex-bg-color 性别图标背景颜色
	 * @property {String} level-bg-color 等级图标背景颜色
	 * @property {String} show-sex 是否显示性别图标（默认false）
	 * @property {String} show-level 是否显示等级图标（默认false）
	 * @property {String} img-mode 头像图片的裁剪类型，与uni的image组件的mode参数一致，如效果达不到需求，可尝试传widthFix值（默认aspectFill）
	 * @property {String} index 用户传递的标识符值，如果是列表循环，可穿v-for的index值
	 * @event {Function} click 头像被点击
	 * @example <u-avatar :src="src"></u-avatar>
	 */
	export default {
		name: 'u-avatar',
		props: {
			// 背景颜色
			bgColor: {
				type: String,
				default: 'transparent'
			},
			// 头像路径
			src: {
				type: String,
				default: ''
			},
			// 尺寸，large-大，default-中等，mini-小，如果为数值，则单位为rpx
			// 宽度等于高度
			size: {
				type: [String, Number],
				default: 'default'
			},
			// 头像模型，square-带圆角方形，circle-圆形
			mode: {
				type: String,
				default: 'circle'
			},
			// 文字内容
			text: {
				type: String,
				default: ''
			},
			// 图片的裁剪模型
			imgMode: {
				type: String,
				default: 'aspectFill'
			},
			// 标识符
			index: {
				type: [String, Number],
				default: ''
			},
			// 右上角性别角标，man-男，woman-女
			sexIcon: {
				type: String,
				default: 'man'
			},
			// 右下角的等级图标
			levelIcon: {
				type: String,
				default: 'level'
			},
			// 右下角等级图标背景颜色
			levelBgColor: {
				type: String,
				default: ''
			},
			// 右上角性别图标的背景颜色
			sexBgColor: {
				type: String,
				default: ''
			},
			// 是否显示性别图标
			showSex: {
				type: Boolean,
				default: false
			},
			// 是否显示等级图标
			showLevel: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				error: false,
				// 头像的地址，因为如果加载错误，需要赋值为默认图片，props值无法修改，所以需要一个中间值
                avatar: this.src ? this.src : base64Avatar, 
			}
		},
        watch: {
            src(n) {
				console.log(n);
                // 用户可能会在头像加载失败时，再次修改头像值，所以需要重新赋值
                if(!n) {
					// 如果传入null或者''，或者undefined，显示默认头像
					this.error = true;
				} else {
					this.avatar = n;
					this.error = false;
				}
            }
        },
		computed: {
			wrapStyle() {
				let style = {};
				style.height = this.size == 'large' ? '120rpx' : this.size == 'default' ?
				'90rpx' : this.size == 'mini' ? '70rpx' : this.size + 'rpx';
				style.width = style.height;
				style.flex = `0 0 ${style.height}`;
				style.backgroundColor = this.bgColor;
				style.borderRadius = this.mode == 'circle' ? '500px' : '5px';
				if(this.text) style.padding = `0 6rpx`;
				return style;
			},
			imgStyle() {
				let style = {};
				style.borderRadius = this.mode == 'circle' ? '500px' : '5px';
				return style;
			},
			// 取字符串的第一个字符
			uText() {
				return String(this.text)[0];
			},
			// 性别图标的自定义样式
			uSexStyle() {
				let style = {};
				if(this.sexBgColor) style.backgroundColor = this.sexBgColor;
				return style;
			},
			// 等级图标的自定义样式
			uLevelStyle() {
				let style = {};
				if(this.levelBgColor) style.backgroundColor = this.levelBgColor;
				return style;
			}
		},
		methods: {
			// 图片加载错误时，显示默认头像
			loadError() {
				this.error = true;
                this.avatar = base64Avatar;
			},
			click() {
				this.$emit('click', this.index);
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";

	.u-avatar {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
		color: $u-content-color;
		border-radius: 10px;
		position: relative;
		
		&__img {
			width: 100%;
			height: 100%;
		}
		
		&__sex {
			position: absolute;
			width: 32rpx;
			color: #ffffff;
			height: 32rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 100rpx;
			top: 5%;
			z-index: 1;
			right: -7%;
			border: 1px #ffffff solid;
			
			&--man {
				background-color: $u-type-primary;
			}
			
			&--woman {
				background-color: $u-type-error;
			}
			
			&--none {
				background-color: $u-type-warning;
			}
		}
		
		&__level {
			position: absolute;
			width: 32rpx;
			color: #ffffff;
			height: 32rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 100rpx;
			bottom: 5%; 
			z-index: 1;
			right: -7%;
			border: 1px #ffffff solid;
			background-color: $u-type-warning;
		}
	}
</style>
