// 自定义组件/my-event/my-event.js
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

  },

  /**
   * 组件的方法列表
   * 事件方法 要写到 methods 中
   * 传递事件 this.triggerEvent('key',{数据},{其他内容看文档})
   */
  methods: {
    handleaddClick() {
      console.log("组件的点击事件")
      this.triggerEvent('addNum',{name:"传值",age:20},{})
    }

  }
})
