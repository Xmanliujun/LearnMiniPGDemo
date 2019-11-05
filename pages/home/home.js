// pages/home/home.js
//getApp()获取App（）产生的实例对象
const app = getApp()

const aname = app.globalData.name
console.log(app.globalData.name)

const age = app.globalData.age
console.log(app.globalData.age)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'My Name',
    age:30,
    students:[
      { id: 1, name: 'a', age: 12 },
      { id: 2, name: 'b', age: 13 },
      { id: 3, name: 'c', age: 14 },
      { id: 4, name: 'd', age: 15 },
      { id: 5, name: 'e', age: 17 },
      { id: 4, name: 'd', age: 15 },
      { id: 5, name: 'e', age: 17 },
      { id: 4, name: 'd', age: 15 },
      { id: 5, name: 'e', age: 17 },
      { id: 4, name: 'd', age: 15 },
      { id: 5, name: 'e', age: 17 },
      { id: 4, name: 'd', age: 15 },
      { id: 5, name: 'e', age: 17 },
      { id: 4, name: 'd', age: 15 },
      { id: 5, name: 'e', age: 17 },
      { id: 4, name: 'd', age: 15 },
      { id: 5, name: 'e', age: 17 },
      { id: 4, name: 'd', age: 15 },
      { id: 5, name: 'e', age: 17 },
      { id: 4, name: 'd', age: 15 },
      { id: 5, name: 'e', age: 17 },
      { id: 4, name: 'd', age: 15 },
      { id: 5, name: 'e', age: 17 },
      { id: 4, name: 'd', age: 15 },
      { id: 5, name: 'e', age: 17 },
      { id: 4, name: 'd', age: 15 },
      { id: 5, name: 'e', age: 17 }
    ],
    counter:0,
    apName:"未获取",
    list:[]
  },
  //success 方法不同，与this的使用
  // wx:wx.request({
  //   url: '请求地址',
  //   success: (res) => {
  //    const data = res.data.dada.list
  //     this.setData({
  //       list:data
  //     })
  //   },
  //   fail: function(res) {},
  //   complete: function(res) {},
  // }),
  // wx:wx.request({
  //   url: '请求地址',
  //   success: function(res){
  //    const data = res.data.dada.list
  //     _this.setData({
  //       list:data
  //     })
  //   },
  //   fail: function(res) {},
  //   complete: function(res) {},
  // }),

  handleBtnClick(){
    this.setData({
      counter:this.data.counter + 1
    })
    console.log('btn 点击'+this.data.counter)
  },
  handleSubClick(){
    this.setData({

      counter: this.data.counter -1
    })
    console.log('sub 点击'+this.data.counter)
  },

  buttongetMyUserInfo(event){
    console.log("获取授权")
    console.log(event)
  },
  buttonGetappData(){
    this.setData({
      apName: aname
    })
  },
  // 界面滑动监听事件
  onPageScroll(obj){
    console.log(obj)
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
    console.log("下拉刷新事件")

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("界面滚动到底部事件")

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})