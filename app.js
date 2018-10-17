//app.js

App({

  globalData : {

  },

  onLaunch: function () {
    wx.setNavigationBarTitle({
      title: '本地生活',
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    try {
      try {
        const res = wx.getSystemInfoSync()
        this.globalData.windowHeight = res.windowHeight;
        this.globalData.windowWidth = res.windowWidth;
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
        
      } catch (e) {
        // Do something when catch error
      }
    }catch(e){

    }
    
  },
  globalData: {
    userInfo: null
  },

   /** 
   * 自定义post函数，返回Promise
   * +-------------------
   * @param {String}      url 接口网址
   * @param {arrayObject} data 要传的数组对象 例如: {name: 'xxx', age: 32}
   * @return {Promise}    promise 返回promise供后续操作
   */
  post: function (url, data) {
    wx.showLoading({
      title: '加载中...',
    })
    var promise = new Promise((resolve, reject) => {
      //init
      var that = this;
      var postData = data;
      //网络请求
      wx.request({
        url: this.globalData.baseUrl + "/api/" + url,
        data: postData,
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) { //服务器返回数据
          if (res.data.status == 1) { //res.data 为 后台返回数据，格式为{"data":{...}, "info":"成功", "status":1}, 后台规定：如果status为1,既是正确结果。可以根据自己业务逻辑来设定判断条件
            resolve(res.data.data);
            wx.hideLoading()
          } else { //返回错误提示信息
            reject(res.data.info);
            wx.hideLoading()
          }
        },
        error: function (e) {
          reject('网络出错');
          wx.hideLoading()
        }
      })
    });
    return promise;
  },

  getData: function (url, data) {
    wx.showLoading({
      title: '加载中...',
    })
    var promise = new Promise((resolve, reject) => {
      //init
      var that = this;
      var getData = data;
      //网络请求
      wx.request({
        url: `https://locally.uieee.com/${url}`,
        data: getData,
        method: 'GET',
      
        success: function (res) { 
          console.log("res==",res)
          console.log("res.data.statusCode", res.data.statusCode)
          resolve(res.data);
          wx.hideLoading()
          // //服务器返回数据
          // if (res.data.statusCode == 200) { //res.data 为 后台返回数据，格式为{"data":{...}, "info":"成功", "status":1}, 后台规定：如果status为1,既是正确结果。可以根据自己业务逻辑来设定判断条件
          //   resolve(res.data.data);
          //   wx.hideLoading()
          // } else { //返回错误提示信息
          //   reject(res.data.info);
          //   wx.hideLoading()
          // }
        },
        error: function (e) {
          reject('网络出错');
          wx.hideLoading()
        }
      })
    });
    return promise;
  },
})