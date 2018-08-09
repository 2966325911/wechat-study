// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    const messages = this.data.messages
    for(var i = 0; i < 18;i++) {
      messages.push({
        title :"免费送票，超有内涵的门票",
        date : i + " September",
        image: 'https://unsplash.it/400/300',
        summary:'越努力，越幸运'
      })
    }

    this.setData({ messages})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const query = wx.createSelectorQuery()
    query.select('#bottom').boundingClientRect()
    query.exec(rec =>wx.pageScrollTo({
      scrollTop: res[0].top + 200,
    }))
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