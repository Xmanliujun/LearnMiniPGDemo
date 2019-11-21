// 自定义组件/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   * 外界传数据使用
   * heard、contentText 随便起的节点名，在对应的wxml中使用赋值
   */
  properties: {
    // heard:String,
    // contentText:String
    heard:{
      type:String,
      value:'我是默认标题',
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal)
      }
    },
    contentText:{
      type:String,
      value:"我是默认内容",
      observer: function (newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }

  },
// 传递样式
  externalClasses: ['titlecolor']
  

})
