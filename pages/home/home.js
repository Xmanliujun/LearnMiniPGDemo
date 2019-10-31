// pages/home/home.js
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
      { id: 5, name: 'e', age: 17 }
    ],
    counter:0
  },

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