 - 本项目已经提交QQ小程序进行审核，起名 【彩测】(如果发布第一时间通知并更新)
 - 提供lottery信息展示、lottery多种预测功能等
 - 后续将支持微信小程序，暂时未发布。
 - 本项目已放在uniapp项目模板插件市场，欢迎下载使用；
 - github文件不全可以去uniapp下载使用;
 - Web浏览器访问地址：![](https://algate.github.io/Lottery/)

## 说明

本项目是基于uView的UI框架开发的项目，并在此基础上做了部分修改，要引用请看最后相关说明，如果使用原框架请移步管网或者uniapp插件市场进行下载和使用

uView UI，是[uni-app](https://uniapp.dcloud.io/)生态优秀的UI框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水

[本项目在原来的组件基础上做了部分修改，如果想使用原组件请移步管网，点击上方链接]


<h3 align="center" style="margin: 30px 0 30px;font-weight: bold;font-size:40px;">uView</h3>
<h3 align="center">多平台快速开发的UI框架</h3>
## 特性

- 兼容安卓，iOS，微信小程序，H5，QQ小程序，百度小程序，支付宝小程序，头条小程序
- 60+精选组件，功能丰富，多端兼容，让您快速集成，开箱即用
- 众多贴心的JS利器，让您飞镖在手，召之即来，百步穿杨
- 众多的常用页面和布局，让您专注逻辑，事半功倍
- 详尽的文档支持，现代化的演示效果
- 按需引入，精简打包体积

## 安装

```bash
# npm方式安装
npm i uview-ui
```

## 快速上手

1. `main.js`引入uView库
```js
// main.js
import uView from 'uview-ui';
Vue.use(uView);
```

2. `App.vue`引入基础样式(注意style标签需声明scss属性支持)
```css
/* App.vue */
<style lang="scss">
@import "uview-ui/index.scss";
</style>
```

3. `uni.scss`引入全局scss变量文件
```css
/* uni.scss */
@import "uview-ui/theme.scss";
```

4. `pages.json`配置easycom规则(按需引入)

```js
// pages.json
{
	"easycom": {
		"^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
	},
	// 此为本身已有的内容
	"pages": [
		// ......
	]
}
```

请通过[快速上手](https://uviewui.com/components/quickstart.html)了解更详细的内容 

## 使用方法
配置easycom规则后，自动按需引入，无需`import`组件，直接引用即可。

```html
<template>
	<u-button>按钮</u-button>
</template>
```

请通过[快速上手](https://uviewui.com/components/quickstart.html)了解更详细的内容 

## 链接

- [官方文档](https://uviewui.com/)
- [更新日志](https://uviewui.com/components/changelog.html)
- [升级指南](https://uviewui.com/components/changelog.html)
- [关于我们](https://uviewui.com/cooperation/about.html)


## 版权信息
uView遵循[MIT](https://en.wikipedia.org/wiki/MIT_License)开源协议，意味着您无需支付任何费用，也无需授权，即可将uView应用到您的产品中。

# 优化：

## 1.增加分享到朋友圈
libs/mixin/wxShareTimeline
this.$u.wxShareTimeline

// main.js引入uView对小程序分享到朋友圈的mixin封装
let wxShareTimeline = require('uview-ui/libs/mixin/wxShareTimeline.js');
Vue.mixin(wxShareTimeline)

## 2.swipe-action组件
 - 获取元素的宽度: this.right - this.left
 - 由于left为负，导致宽度多加了两个left，结果使得width计算错误，页面样式错乱；
引入组件u-swiper-action内部做了修改和调整

## 3.u-avatar组件
修改u-avatar组件的图片error地址：

申明：[项目启动可能报错]文件缺失
`App.vue`,
`pages/personal-center/home.vue`,
`common/libs/constant.js`,
`common/libs/loadAMap.js`,
`common/libs/loadBMap.js`,
`pages/lottery-forecast/home.vue`
五个文件涉及个人隐私，请各位随便下载别的项目文件进行替换
对于项目中应用的js可以进行注释，把逻辑暂时屏蔽进行预览
给您带来的不便敬请谅解！🌹
