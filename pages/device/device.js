// pages/device/device.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  
  },

  getSystemInfo : function(){
    wx.getSystemInfo({
      success: function(res) {
        console.log("设备型号" + res.model)
        console.log("设备像素比" + res.pixelRatio)
        console.log("设备高度" +　res.screenHeight)
        console.log("设备宽度"+ res.screenWidth)
        console.log("可使用窗口宽度" +res.windowWidth)
        console.log("可使用窗口高度" +res.windowHeight)
        console.log("微信设置的语言" +res.language)
        console.log("微信版本号" +res.version)
        console.log("客户端平台" +res.platform)
        console.log("操作系统平台" + res.system)
        console.log("用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位：px" + res.fontSizeSetting)
      },

      //wx.canIUse(String) 判断当前API是否在在当前版本可以使用
    })

//获取系统信息同步接口
    try {
      var res = wx.getSystemInfoSync()
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
  },

  getNetworkstate : function(){
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        var networkType = res.networkType
        console.log("网络状态getNetworkType=="  + networkType)
      }
    })

//监听网络状态变化
    wx.onNetworkStatusChange(function (res) {
      console.log("网络是否连接onNetworkStatusChange=" + res.isConnected)
      console.log("网络状态onNetworkStatusChange=" + res.networkType)
    })

  },

  callphone(){
    wx.makePhoneCall({
      phoneNumber: '18393812379',
      //success  fail complete回调函数 
    })
  },
  scancode(){
    // 允许从相机和相册扫码 优先打开相册
    wx.scanCode({
      success: (res) => {
        console.log("扫码成功=" + res)
      }
    })

    // 只允许从相机扫码 扫码成功 success 返回的参数
    
    //result	所扫码的内容
    //scanType	所扫码的类型
    //charSet	所扫码的字符集
    //path	当所扫的码为当前小程序的合法二维码时，会返回此字段，内容为二维码携带的 path
    wx.scanCode({
      onlyFromCamera: true,
      //success fail complete 
      success: (res) => {
        console.log("扫码成功=" + res)
      }
    })
  },

/**
 * 屏幕亮度控制
 */
  screenon(){
    //设置屏幕亮度 value 屏幕亮度值，范围 0~1，0 最暗，1 最亮
    // wx.setScreenBrightness(OBJECT)
    //wx.getScreenBrightness(OBJECT) 获取屏幕亮度。
    //wx.setKeepScreenOn(OBJECT) 保持屏幕常亮 keepScreenOn 是否保持屏幕常亮
    // success fail complete
    wx.setKeepScreenOn({
      keepScreenOn: true,
    })
  },

  userCaptureScreen(){
    wx.onUserCaptureScreen(function(res){
      //监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件
      console.log(res)
    })
  },

  addPhoneContact(){
    //API 具体太多 详见文档
    wx.addPhoneContact({
      //名字
      firstName: 'yandong',
      //姓氏
      lastName : 'yu',
      mobilePhoneNumber:'18393812379'

    })
  }
})