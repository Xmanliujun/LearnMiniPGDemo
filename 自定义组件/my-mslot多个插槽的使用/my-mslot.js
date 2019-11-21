// 自定义组件/my-mslot多个插槽的使用/my-mslot.js
Component({
  /**
   * 组件的属性列表
   * 让使用者可以给组件传入一些数据
   */
  properties: {
      titledata:{
        type:String,
        value:'',
        observer:function(newVal,oldVal){
            console.log("监听属性的改变")
        }
      }

  },

  /**
   * 组件的初始数据
   * 定义组件内部的初始化数据
   */
  data: {
    counter:0
  },

  /**
   * 组件的方法列表
   * 用于定义组件内部的函数
   */
  methods: {
    handlebuttonOnClick(){

      console.log("按钮的点击事件")
    }
  },
  /**
   * 
   * multipleSlots: 在使用多插槽的时 需要设置为ture 
   * styleIsolation: 设置样式的隔离方式
   *
  */
  options:{
    multipleSlots:true
  },

/**
 * 外界给组件传入额外的样式
 * 
*/
  externalClasses:[],

/**
 * 可以监听 properties: / data: 中属性的改变
 * 这里只能拿到newVal
*/
observers:{
  counter:function(newVal){
    console.log("",newVal)
  }
},

/**
 * 组件中监听生命周期函数
 * 1、监听所在页面的生命周期
 * 
*/
pageLifetimes:{

  show(){
    console.log("监听组件所在页面的显示出来时")
  },
  hide(){
    console.log("监听组件所在页面隐藏起来时")
  },
  resize(){
    console.log("监听页面尺寸的改变")
  }

},
//2、监听组件本身的生命周期
lifetimes:{
  created(){
    console.log("组件被创建出来")

  },
  attached(){
    console.log("组件被添加到页面")

  },
  ready(){
    console.log("组件被渲染出来")

  },
  moved(){
    console.log("组件被移动到另外一个节点")

  },
  detached(){
    console.log("组件被移除掉")

  }
}

})
