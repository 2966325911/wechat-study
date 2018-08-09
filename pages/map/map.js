// pages/map/map.js
var urls = [];
var MAX_PIC_LENGTH = 9;
var utils = require('../../utils/util.js');
var app = getApp();
var index = 0;
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    address:"",
    name:"",
    desc:"",
    urls: [],
    imgurl:"",
    total_pics_number: MAX_PIC_LENGTH,
    img_width: app.globalData.windowWidth/3 - 25,
    img_height: app.globalData.windowWidth / 3 - 25,
    showpre : false,
    imgpreurl:""
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

  chooseLocation(){
    var that = this
    wx.chooseLocation({
      
      success: function(res) {
       
       that.setData({
          address: res.address,
          name: res.name
        })
        console.log("====chooseLocation====" + JSON.stringify(res))
      },
    })
  },

  inputAddress(res){
    console.log("==inputAddress==" + JSON.stringify(res))
    this.address = res.detail.value
  },

  inputName(res){
    console.log("==inputName==" + JSON.stringify(res))
    this.name = res.detail.value
  },

  inputDesc(res) {
    this.desc = res.detail.value
  },

  addPics(){
    if(urls.length == MAX_PIC_LENGTH) {
      utils.showToast("错误","最多添加" +  MAX_PIC_LENGTH + "张图片")
      return;
    }

    var that = this;
    wx.chooseImage({
      count: MAX_PIC_LENGTH - urls.length,
      sizeType: ['compressed'],
      sourceType :['album','camera'],
      success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        console.log('tempFilePaths==' + tempFilePaths);


        if(tempFilePaths.length > 0) {
          for(var i = 0 ; i < tempFilePaths.length;i++) {
            console.log("=tempFilePaths=" + i +"=="+tempFilePaths[i])
            urls.push(tempFilePaths[i]);
          }
          console.log("===urls==" + urls.length + "==url==" + urls)
        
          that.setData({
            showpre : true,
            imgpreurl: urls[0],
            imgurl : urls[0],
            urls : urls
          })
        }
      },
    })
  },

  preview(){
    if(urls.length == 0) {return}
    wx.previewImage({
      current : urls[0],
      urls: urls
    })
  },

  prenext(){
    if(urls.length==0){return}
    index++;
    if(index > urls.length -1 ) {
      index = index % urls.length;
    }
    
    var that = this
    that.setData({
      imgpreurl : urls[index]
    })
  }

})