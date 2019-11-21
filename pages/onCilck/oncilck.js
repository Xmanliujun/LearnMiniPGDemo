// pages/onCilck/oncilck.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:["数据1","数据2","数据3","数据4"]

  },
  handlebtnOnClick(){
    console.log("点击事件处理回顾")
  },
  handletouchstart(){
    console.log("handletouchstart---touchstart 	手指触摸动作开始")
  },
  handletouchmove(){
    console.log("handletouchmove---touchmove 	手指触摸后移动")
  },
  handletouchend(){
    console.log("handletouchend---touchend 	手指触摸动作结束")

  },
  handletap(){
    console.log("handletap---tap 	手指触摸后马上离开")

  },
  handlelongpress(){
    console.log("handlelongpress---longpress 	手指触摸后，超过350ms再离开")

  },
  handleEventClick(event){
    console.log(event)
  },
  handleouter(){
    console.log("handleouter")
  },
  handleinner(){
    console.log("handleinner")
  },
  // 事件传值
  handleItemClick(event){
    console.log("+++++",event)
    const dataset = event.currentTarget.dataset
    const item = dataset.item
    const index = dataset.index
    console.log("dataset传值数据--- ",dataset)
    console.log("item传值数据--- ", item)
    console.log("index传值数据--- ", index)

  },

  // 监听事件冒泡捕获
  handlecaptureview1(){ 
    console.log("handlecaptureview1")
  },
  handleview1(){
    console.log("handleview1")

  },

  handlecaptureview2() { 
    console.log("handlecaptureview2")

  },
  handleview2() {
    console.log("handleview2")

  },
  handlecaptureview3() { 
    console.log("handlecaptureview3")

  },
  handleview3() {
    console.log("handleview3")

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