// 自定义组件/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   * 
   * 外界传递的数组
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleActive(event){
      console.log("handleActive",event)
      const index = event.currentTarget.dataset.indexqq
      this.setData({
        currentIndex:index
      })
      this.triggerEvent('itemData', { indexaa:index,titlebb:this.properties.titles[index] }, {})


    }
  }
})
