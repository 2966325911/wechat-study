// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titlename :"地图定位",
    searchmap: "地图搜索",
    commonui:"常用组件样式测试",
    canvastest :"canvas测试",
    record : "录音功能测试",
    uimutual : "ui界面交互弹框等",
    webview : "webview测试",
    device : "设备API测试"
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
    return {
      title : '小程序study',
      path:'pages/index/index',
      success : function(res){
        console.log("转发成功" + JSON.stringify(res))
      },
      fail : function(res) {
        console.log("转发失败" + JSON.stringify(res))
      }

    }
    
  }
})