// pages/页面跳转/navigator1/navigator1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleData:"接收返回的数据"
  },
  navClick(){
    console.log('按钮被点击')
    wx.navigateTo({
      url: '/pages/页面跳转/navigator2/navigator2',
    })
    //对应的属性都有api方法
    // wx.redirectTo({
    //   url: '/pages/页面跳转/navigator2/navigator2',
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})