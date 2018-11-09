// pages/animation/animation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    needShow : false,
    hideModal: true, //模态框的状态  true-隐藏  false-显示 
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

    this.animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })


    this.animation.scale(2, 2).rotate(45).step();
    this.setData({
      animationData: this.animation.export()
    })

    setTimeout(function() {
      this.animation.translate(30).step();
      this.setData({
        animationData: this.animation.export()
      })
    }.bind(this), 1000)
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

  rotateAndScale: function() {
    this.animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateThenScale: function() {
    this.animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    // 先旋转后放大
    this.animation.rotate(45).step()
    this.animation.scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateAndScaleThenTranslate: function() {
    this.animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({
      duration: 1000
    })
    this.setData({
      animationData: this.animation.export()
    })
  },

  /**
   * 从底部弹出浮层
   */
  bottomTranslate: function() {
    var that = this
    var animation = wx.createAnimation({
      duration : 1000,
      timingFunction: 'linear',
      delay : 0
    })
    that.animation = animation
    // 先在y轴偏移，然后用step()完成一个动画
    animation.translateY(750).step()
    that.setData({
      animationMask :animation.export(),
      needShow: true,
    })
    //设置setTimeout来改变y轴偏移量，实现有感觉的滑动
    setTimeout(function(){
      animation.translateY(0).step()
      that.setData({
        animationMask: animation.export(),
      })
    },200)
  },

/**
 * 点击遮罩层隐藏动画
 */
  hideModalMask : function(){
    var that = this
    var animation = wx.createAnimation({
      duration : 1000,
      timingFunction : 'linear'
    })

    that.animation = animation
    animation.translateY(750).step()
    that.setData({
      animationMask: animation.export()
    })

    setTimeout(function(){
      animation.translateY(0).step()
      that.setData({
        animationMask: animation.export(),
        needShow : false
      })
    },1000)
  },

  // 显示遮罩层
  showModal: function () {
    var that = this;
    that.setData({
      hideModal: false
    })
    var animation = wx.createAnimation({
      duration: 600,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation
    setTimeout(function () {
      that.fadeIn();//调用显示动画
    }, 200)
  },

  // 隐藏遮罩层
  hideModal: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 800,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation
    that.fadeDown();//调用隐藏动画   
    setTimeout(function () {
      that.setData({
        hideModal: true
      })
    }, 720)//先执行下滑动画，再隐藏模块

  },

  //动画集
  fadeIn: function () {
    this.animation.translateY(0).step()
    this.setData({
      animationMask2: this.animation.export()//动画实例的export方法导出动画数据传递给组件的animation属性
    })
  },
  fadeDown: function () {
    this.animation.translateY(300).step()
    this.setData({
      animationMask2: this.animation.export(),
    })
  },

})