// pages/http/HttpHome/httphome.js

import request from '../service/network.js'

//获取token方法一 ，这种方法在用户关系小程序的时候 对象就会被回收，下次进来还得登录
const app = getApp()
const token = app.globalData.token

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    request({
      url:"https://shouyin.520face.cn/test.php?tpye=2"
    }).then(res => {
      console.log('封装http回调', res)
    }).catch(err =>{
      console.log('封装http报错', err)    
    })
    
    //1、原生发送网络请求代码
    // this.get_Data_Http()
  },

  get_Data_Http(){
    
    wx.request({
      url: 'https://shouyin.520face.cn/test.php',
      data: {
        // 接口传参 post 必须这样传
        tpye: 2
      },
      //接口请求形式
      method: 'post',
      success: function (res) {
        console.log('返回值', res)
        const code = res.data.code
        if (code == "1") {
          console.log('返回值code', code)
        }
      }
    })
  },

  onToastClick(){
    wx.showToast({
      title: '提示窗口',
      duration:3000,
      icon:'loading',
      mask:true,
      success:function(){
        console.log('展示成功')
      },
      fail:function(){
        console.log('展示失败')
      },
      complete : function(){
        console.log('展示完成')
      }
      
    })
  },
  onModalClick(){
    wx.showModal({
      title: '标题',
      content: '提示的内容',
      showCancel:true,
      cancelText:'返回',
      cancelColor:'#ff8800',
      success:function(res){
        if(res.confirm){
          console.log('用户点击了确定')
        }
        if(res.cancel){
          console.log('用户点击了取消')
        }
      }
    })
  },
  onLoadingClick(){
    wx.showLoading({
      title: '加载ing',
      mask:true
    })
    setTimeout(()=>{
      wx.hideLoading()
    },2000)
  },
  onActionSheetClick(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor:'#ff0000',
      success:function(res){
        console.log('onActionSheetClick被点击 ',res)
      }
    })

  },
  // 转发功能api
  onShareAppMessage:function(options){
    return{
      title:'自定义标题和指定界面',
      path:'pages/scrollview/scrollview',
      imageUrl:'https://img.tukuppt.com//png_preview/00/07/42/QOtyroosl6.jpg'
    }
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