/*
 * 
 * 微慕小程序开源版
 * author: jianbo
 * organization: 微慕  www.minapper.com
 * github:    https://github.com/iamxjb/winxin-app-watch-life.net
 * 技术支持微信号：iamxjb
 * 开源协议：MIT
 * Copyright (c) 2017  微慕 https://www.minapper.com All rights reserved.
 */



//配置域名,域名只修改此处。
//如果wordpress没有安装在网站根目录请加上目录路径,例如："www.watch-life.net/blog"
var DOMAIN = "www.watch-life.net";
var WEBSITENAME="守望轩"; //网站名称
var PAGECOUNT='10'; //每页文章数目
var WECHAT='微信号:iamxjb'; //客服联系方式,如 微信号：iamxjb 或 邮箱：iamxjb@sina.com

//是否启用小程序扫描二维码登录网站,  true 启用  false  不启用
//未安装微慕登录插件不要启用,插件下载地址：https://shops.minapper.com/2167.html
const enableScanLogin =true 
//////////////////////////////////////////////////////

//是否启用微慕视频号插件,  true 启用  false  不启用
//未安装微慕视频号插件不要启用,插件下载地址：https://shops.minapper.com/2192.html
const enableChannels =true 
//////////////////////////////////////////////////////

//是否在列表显示文章评论数量,  true 启用  false  不启用
const enableCommentCount =true 
//////////////////////////////////////////////////////

//是否在列表显示文章浏览数量,  true 启用  false  不启用
const enablePageviewsCount =true 
//////////////////////////////////////////////////////

//是否在列表显示文章点赞,  true 启用  false  不启用
const enableLikeCount =true 
//////////////////////////////////////////////////////

//是否绑定微信开放平台,  true 绑定  false  未绑定
//无微信开放平台不要开启
const enableWeixinOpen =true 

//是否启用微信小店,  true 启用  false  不启用
//未安装微信小店插件不要启用,插件下载地址：https://www.minapper.com/shops/
const enableWechatshop =true 
//////////////////////////////////////////////////////

// 上传图片的最大文件大小,单位是m,必须填整数,
// 同时必须修改php.ini文件 post_max_size 和 upload_max_filesize 具体修改请自行搜索
const uploadImageSize=1
// 默认文章列表样式：1 左图 2 右图 3 大图 4 多图 5 瀑布流 6 无图
const articleStyle = 3

//小程序原始id
const appghId ='gh_e49213784fae'
//////////////////////////////////////////////////////

//微慕小程序端版本,请勿修改
const minapperVersion=5.12
const minapperSource="free"
//////////////////////////////////////////////////////

export default {
  getDomain: DOMAIN,
  getWebsiteName: WEBSITENAME,  
  getPageCount: PAGECOUNT,
  getWecat: WECHAT,
  enableScanLogin,
  minapperVersion,
  minapperSource,
  enableChannels,
  appghId,
  articleStyle,
  enableCommentCount,
  enablePageviewsCount,
  enableLikeCount,
  enableWeixinOpen,
  enableWechatshop
}