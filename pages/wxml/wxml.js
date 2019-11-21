// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Msg:"语法细节",
    firstName:"kobe",
    lastName:"bryant",
    age:12,
    nowTime:new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    score:65,
    isHidden:false,
    movies:['数据1','数据2','数据3'],
    arrays:[
      [1,2,3],[4,5,6],[7,8,9]
    ],
    buttontext:"动态按钮名称"


  },
  buttonClick(){
    this.setData({
      isActive: !this.data.isActive
    })
  },
  buttonIfCilck(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  buttonUpCilck(){
    this.setData({
      score:this.data.score+10
    })
  },
  buttonHiddenClick(){
    this.setData({
      isHidden: !this.data.isHidden
    })
  },

  numberToFixed(value){
    return value.toFixed(2)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 定时器，监听时间变化，并且赋值
    setInterval(()=>{
      this.setData({
        nowTime:new Date().toLocaleString()
      })
    },1000)
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