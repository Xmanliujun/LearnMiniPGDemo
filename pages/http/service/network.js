// https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
export default function request(options){
//方法1
// return new Promise((resolve,reject)=> {
//   wx.request({
//     url: options.url,
//     method: options.method || 'get',
//     data: options.data || {},
//     success: function (res) {
//       resolve(res)
//       // console.log('封装http回调', res)
//     },
//     fail: function (err) {
//       reject(err)
//       // console.log('封装http报错', err)
//     }
//   })
// })

//方法2
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })


}