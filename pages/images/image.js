// pages/images/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageFile:''
  },

  buttonImagesClick(){
    console.log("选相册")
    //系统api，让用户在相册中选择或者拍照
    wx:wx.chooseImage({
      count: 0,
      sizeType: [],
      sourceType: [],
      success: (res) => {
        // (res) => 要用箭头语法才能使用this
        console.log(res)
        const path = res.tempFilePaths[0]
        console.log(path)
        this.setData({
          imageFile : path
          
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  handleImageLoad(){
    console.log('图片加载完成')
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