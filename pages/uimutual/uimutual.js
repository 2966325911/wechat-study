// pages/uimutual/uimutual.js
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

  showToast : function(){
    wx.showToast({
      title: '成功',
      //图标，有效值 "success", "loading", 默认文字显示成功图标，此时 title 文本最多显示 7 个汉字长度。默认值 "none",image 自定义图标的本地路径，image 的优先级高于 icon
      icon: 'success',
      duration: 2000,
      //是否显示透明蒙层，防止触摸穿透，默认：false
      //success	接口调用成功的回调函数
      //fail	接口调用失败的回调函数
      //complete 接口调用结束的回调函数（调用成功、失败都会执行）
    })
  },
  showLoading : function(){
    wx.showLoading({
      title: '正在拼命加载中...',
      //success fail complete同toast的函数
    }),

    setTimeout(function(){
      wx.hideLoading();
    },3000)
  },
  showModal: function(){
    wx.showModal({
      title: '退出提示',
      content: '确认是否退出该页面',
      //showCancel 是否显示取消按钮，默认true
      //cancelText 消按钮的文字，默认为"取消"，最多 4 个字符
      //cancelColor 取消按钮的文字颜色，默认为"#000000"
      //confirmText 确定按钮的文字，默认为"确定"，最多 4 个字符
      //confirmColor  	确定按钮的文字颜色，默认为"#3CC51F"
      //success fail complete 回调函数对应不同的状态
      //  success返回参数说明：confirm 为 true 时，表示用户点击了确定按钮
      // cancel 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）
      success : function(res) {
        if(res.confirm) {
          console.log("用户点击了确认")
          //退出当前页面
          wx.navigateBack({
            delta: 1
          })
        } else if(res.cancel) {
          console.log("用户点击了取消")
        }
      }
    })
  },
  showActionSheet : function (){
    wx.showActionSheet({
      //按钮的文字数组，数组长度最大为6个
      //itemColor 按钮的文字颜色，默认为"#000000"
      //success fail complete 
      //success tapIndex返回参数 用户点击的按钮，从上到下的顺序，从0开始
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        //显示最后的取消
        console.log(res.errMsg)
      }
    })
  }
})