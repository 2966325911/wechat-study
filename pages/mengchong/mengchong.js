// pages/mengchong/mengchong.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:"",
    latitude:"",
    controls: [{
      id: 1,
      iconPath: '/assets/location.png',
      position: {
        left: (app.globalData.windowWidth/2) - 11,
        top: (app.globalData.windowHeight-80)/2 + 16,
        width: 22,
        height: 32
      },
      clickable: true
    }],
    circles: [],
    polyline:[],
    markers:[],
    covers:[],

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
    this.getLocation();
    
  },

  getLocation(){
    wx.getLocation({
      type: 'gcj02',
      success : this.handleGetLocationSucc.bind(this)
    })
  },

  handleGetLocationSucc(res) {
    this.setData({
      latitude : res.latitude,
      longitude : res.longitude,
      circles : [{
        latitude: res.latitude,
        longitude: res.longitude,
        color: '#FF0000DD',
        fillColor: '#7cb5ec88',
        radius: 1000,
        strokeWidth: 1
      }],

      polyline: [{
        points: [{
          longitude: res.longitude,
          latitude: res.latitude
        }, {
          longitude: res.longitude-10,
          latitude: res.latitude-10
        }],
        color: "#FF0000DD",
        width: 2,
        dottedLine: true
      }],
      markers: [{
        latitude: res.latitude,
        longitude: res.longitude,
        name: 'T.I.T 创意园',
        desc: '我现在的位置'
      }],

      covers: [{
        latitude: res.latitude,
        longitude: res.longitude,
        iconPath: '/assets/location.png',
        rotate: 10
      },
      {
        latitude: res.latitude,
        longitude: res.longitude,
        iconPath: '/assets/location.png',
        rotate: 90
      }]
    })

    
    console.log(res)
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
    return {
      title: '萌宠交易平台',
      path:'/pages/mengchong/mengchong'
    }
  },

  searchposition(){
    wx.chooseLocation({
      success: function (res) {
        console.log("==chooseLocation==" + res)

      },
    })
  },
})