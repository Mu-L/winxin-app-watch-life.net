import config from '../../utils/config.js'
var webSiteName = config.getWebsiteName;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topic: config.officialAccountPublishTopic,
    

  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) { 
    // 设置系统分享菜单
    wx.showShareMenu({
      withShareTicket: false,
      menus: ['shareAppMessage', 'shareTimeline']
    })

  },
  // 自定义分享朋友圈
  onShareTimeline: function () {   
    let name = webSiteName
    let imageUrl=wx.getStorageSync('postImageUrl');   
    return {
      title: name + '-公众号图文',
      imageUrl
    }
  },
  // 自定义分享给好友
  onShareAppMessage: function () {
    let imageUrl = wx.getStorageSync('postImageUrl');
    return {
      title: '公众号图文',
      path: '/pages/official-account-publish/official-account-publish',
      imageUrl
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

})