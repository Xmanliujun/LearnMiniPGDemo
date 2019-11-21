// pages/页面跳转/navigator2/navigator2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  backNavClick(){
    console.log('返回按钮被点击')
    wx.navigateBack({
      
    })
    //控制返回层级，可以返回首页和指定界面
    wx.navigateBack({
      delta:2
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('上一个页面传递过来的数据',options)
  },
  onUnload(){
    console.log('页面退出')
    // 1、获取首页的对象
    //getCurrentPages()里是当前所有栈的页面
    const pages = getCurrentPages()
    console.log(pages)
    //根据下标位置获取页面对象
    const navigator1 = pages[pages.length - 2]
    //2、调用页面对象的setData方法，更改对象内的变量
    navigator1.setData({
      titleData:'navigation2 返回的值已接收'
    })
  },
})