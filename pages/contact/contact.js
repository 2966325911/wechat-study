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
    device : "设备API测试",
    customcomponent :"自定义组件",
    animation : '动画测试',
    calendar : "日历",
    calendar2 : "日历2完善",
    showmodal:"模拟弹出框",
    compentuitest:"三方自定义UI样式展示",
    cssstyle: 'css会绘制常用小图标'
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
    
  },

  payTest(){
    //支付具体参见https://blog.csdn.net/sinat_35861727/article/details/73692794
    //支付所具备的1.开通了微信支付，并且小程序绑定了微信支付；
    //2.准备好小程序的appid，微信支付的商户号，支付秘钥。
    var  date = new Date()
    console.log("date.getDate=" + date.getDay() + "=date.getFullYear" + date.getFullYear() + "=date.getMonth" + date.getMonth() + "=date.getDate()=" + date.getDate() + "=date.getHours=" + date.getHours() + "=date.getMinutes=" + date.getMinutes() + "=date.getMilliseconds" + date.getMilliseconds() + "=毫秒数==" + Date.parse(date) )
    //支付设置
    wx.requestPayment({
      timeStamp: '1475009090',
      nonceStr: '1122',
      package: 'prepay_id=',
      signType: 'MD5',
      paySign: '',
      success : function(res){

      },
      fail : function(res) {

      },

      complete : function(res){

      }
    })
  }
})