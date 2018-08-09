// pages/detail/detail.js
const fetch = require("../../utils/fetch")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let shopid = options.item
    console.log("===opitons=detail=" + JSON.stringify(options))
    let title = options.name
    wx.setNavigationBarTitle({
      title : title
    })
    fetch(`shops/${shopid}`).then(res => {
      console.log("===res.data===" + res)
      this.setData({ shop: res.data })
    })
  },

  //该方法用于预览图片
  preview(e) {
    wx.previewImage({
      //当前显示图片的http链接
      current : e.currentTarget.dataset.src,
      //需要预览的图片http链接列表
      urls:this.data.shop.images
    })
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
  
  }
})