// pages/组件使用/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0
  },
  /**
   * 
   * 监听其他类的事件 my-evevt.js 传过来的事件 和值
  */
  handleaddNum(event){
    console.log('-----',event)
    const name = event.detail.name
    console.log('--name--', name)
    this.setData({
      counter:this.data.counter+1
    })
  },
/**
 * 监听其他类事件 w-tab-control 传过来的事件和值
 * 
*/
  handleTabitemData(event){
    console.log('-----', event)
    const index= event.detail.indexaa
    const title= event.detail.titlebb
    console.log('--tab传过来的内容--', index," --- ",title)

  },
  /**
   * 
   * 界面直接调用组件修改内部数据
  */
  handleSelect(){
    console.log('-----界面直接调用组件修改内部数据-----')
    //最终目标：获取组件对象，修改组件内部数据
    
    const myselect = this.selectComponent('.myselect-class')
    console.log("获取组件对象", myselect)
    //但是这种方法不推荐使用 不规范
    // myselect.setData({
    //   counter: myselect.data.counter+1
    // })
    //通过组件js中暴露的方法incrementCoun 进行修改
    myselect.incrementCoun(1)

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