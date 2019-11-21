
const TOKEN = 'token'

App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //1、先从本地获取token，如果没有就进行登录操作
    const token = wx.getStorageSync(TOKEN)
    if(token && token.length !== 0){
      console.log('本地中获取到了token')
      this.check_token(token)
    }else{
      //没有在本地获取到token ，就执行登录函数
      this.login()
    }

    
  },
  check_token(token){
    console.log('执行了验证操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },success:(res)=>{
        console.log('验证toke回调',res)
        if(!res.data.errCode){
          console.log('token有效')
          this.globalData.token = token
        }else{
          console.log('token无效，重新调用登录')
          this.login()
        }

      },fail:(err)=>{
        console.log('验证token报错',err)
      }
    })
  },

  globalData: {
    name: 'myName',
    age: 20,
    token: ''
  },

  login() {
    console.log('执行了登录操作')
    //登录操作
    wx.login({
      success: (res) => {
        //1、获取登录code
        console.log('微信登录获取code', res.code)
        const code = res.code;
        //2、将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code: code
          },
          // ** this的使用 必须使用箭头语法(res)=>
          success: (res) => {
            console.log('code传给服务器，获取返回的taken', res.data.token)
            const token = res.data.token;
            this.globalData.token = token;
            console.log('检查是否保存', this.globalData.token)

            //3、token 的使用在网络请求界面 httphome中提现和说明
            // pages / http / HttpHome / httphome.wxml

            //4、token 保存到本地,这样用户再次启动小程序就可以在本地中先获取
            //   是否有这个token，避免重复登录
            //同步方法
            wx.setStorageSync(TOKEN, token)
            //异步方法
            wx.setStorage({
              key: 'token1',
              data: token,
            })
          }
        })
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow  每次启动小程序都会执行
   * 如果想就执行一次 可以选择onLaunch方法
   */
  onShow: function (options) {
    //1.获取小程序的进入场景options.secen
    console.log(options)
    //2.获取用户信息
    wx.getUserInfo({
      success:function(res){
        console.log('获取用户信息',res)
      }
    })

   

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }


})
