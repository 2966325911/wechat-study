// pages/setting/setting.js
const profile = "profile-data"
const youhuiquan = "youhuiquan"
const commonquestion = "common-question"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    profileSwitch: wx.getStorageSync(profile),
    youhuiquanSwitch: wx.getStorageSync(youhuiquan),
    commomQuestionSwitch: wx.getStorageSync(commonquestion),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '设置',
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
  
  },

  listenerSwitch : function(e) {
    console.log("===e===" + JSON.stringify(e));
    console.log("===e.data.value==" + e.detail.value);
    console.log("===e.data-id==" + e.currentTarget.dataset.id);
    switch(e.currentTarget.dataset.id) {
      case "1":
        wx.setStorageSync(profile, e.detail.value)
        console.log("==profile==" + wx.getStorageSync(profile))
      break;
      case "2":
        wx.setStorageSync(youhuiquan, e.detail.value)
    
      break
      case "3" :
        wx.setStorageSync(commonquestion, e.detail.value)
      break;

      case "4":

      break;
      case "5":

      break;

      case "6":

      break;
    }
  },

  storagedata : function (key,data) {
    try {
      wx.setStorageSync(key, data);
    } catch(e ){

    }
  },
  getStoragedata : function (key) {
    try{
      var value = wx.getStorageSync(key)
      return value;
    }catch(e) {

    }
    return false;
  }
})