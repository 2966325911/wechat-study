// pages/componentui/componentui.js
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'red',
    scrollTop: 100,

    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indictorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 2000,
    activecolor: "#ffffff",
    circular: true,

    data: {
      x: 0,
      y: 0
    },
    tap: function(e) {
      this.setData({
        x: 30,
        y: 30
      });
    },
    onChange: function(e) {
      console.log(e.detail)
    },
    onScale: function(e) {
      console.log(e.detail)
    },
    /**
     * movable-view是否带有惯性
     */
    inertia: true,
    /**
     * out-of-bounds超过可移动区域后，movable-view是否还可以移动
     */
    outofbounds: true,
    /**
     * 阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快
     */
    damping: 20,
    /**
     * 摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；
     * 必须大于0，否则会被设置成默认值
     */
    firction: 2,
    /**
     * 是否支持双指缩放，默认缩放手势生效区域是在movable-view内
     */
    scale: true,
    /**
     * 定义缩放倍数最小值
     */
    scalemin: 0.5,
    /**
     * 最大缩放系数
     */
    scalemax: 3,
    /**
     * 定义缩放倍数，取值范围为 0.5 - 10
     */
    scalevalue: 2,
    animation: true,

    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],

  /**
   * show-info在进度条右侧显示百分比
   */
    showinfo : true,
    //进度条线的宽度，单位px
    strokewidth : 6,
    color: "#0000ff",
    //已选择的进度条的颜色
    activeColor: "#0000ff",
    //backgroundColor未选择的进度条的颜色
    backgroundColor: "#ccccc",
    //进度条从左往右的动画
    active : true,
    //active-mode backwards: 动画从头播；forwards：动画从上次结束点接着播
    activemode : "forwards",

// button相关设置
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },

  setDisabled: function (e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },
})