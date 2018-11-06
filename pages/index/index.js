//index.js
//获取应用实例
const app = getApp()

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })


const fetch = require("../../utils/fetch")
const util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //图片链接地址
    imgUrls:[],
    //grids列表
    gridsLists:[],
    //是否显示圆点
    indicatorDots : true,
    //是否自动轮播
    autoplay : true,
    //轮播间隔
    interval :5000,
    //播放时长
    duration : 1000

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 轮播图数据渲染
    fetch("slides").then(res => {
      console.log(res.data)
      this.setData({ "imgUrls": res.data });
    })

    // // grid 列表渲染
    // fetch("categories").then(res => {
    //   this.setData({ "gridsList": res.data });
    // })
    app.getData("categories").then(res=>{
      console.log("res",res)
      this.setData({ "gridsList": res });
    }).catch(errMsg=>{
      console.log("errMsg",errMsg);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var i = 123
    console.log("int=i=",i)
    console.log("string=i2=",String(i))
    //数字转字符串 String(i)或者i.toString（）都可以
    if(i.toString() === '123'){
      console.log("转换字符串成功")
    }

    var time = new Date("2018-10-30 12:51")
    console.log("time",time.getTime())
    console.log("curTime",util.timestamp2date())
    console.log("curTime", util.getTimeStamp(util.timestamp2date()))
    console.log("curTime", util.getNowTimeStam())

    var info = wx.getSystemInfoSync()
    console.log("屏幕高度",info.windowHeight)
    console.log("屏幕宽度",info.windowWidth )
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //底部添加红点数字
    wx.setTabBarBadge({
      index: 0,
      text: '99+',
    })

    //底部添加红点，只有当当前页面点的时候，index所对应的红点才会显示
    wx.showTabBarRedDot({
      index: 2,
    })
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
     
    // console.log("返回到上一个页面")
    // var pages = getCurrentPages();
    // var currentPages = pages[pages.length - 1];
    // var prevPage = pages[pages.length - 2];
    // if(this.data.isAddSuccess === true) {
    //   prevPage.setData({
    //     needRefresh: true
    //   })
    // }else {
    //   prevPage.setData({
    //     needRefresh: false
    //   })
    // }
 
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
    wx.showToast({
      title: 'shotToast',
      icon: 'success',
      image: '../../assets/avatar.png',
      duration: 1000,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})