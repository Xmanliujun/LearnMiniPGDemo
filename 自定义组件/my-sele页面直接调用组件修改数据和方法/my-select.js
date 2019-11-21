// 自定义组件/my-sele页面直接调用组件修改数据和方法/my-select.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    counter:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    incrementCoun(num){
      this.setData({
        counter:this.data.counter+num
        
      })
      console.log("调用组件内部暴露的方法")
    }
  }
})
