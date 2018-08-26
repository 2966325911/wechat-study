// pages/record/record.js
const recorderManager = wx.getRecorderManager()

const innerAudioContext = wx.createInnerAudioContext();
var recordPath = ""
const options = {
  duration: 10000,
  sampleRate: 44100,
  numberOfChannels: 1,
  encodeBitRate: 192000,
  format: 'mp3',
  frameSize: 50
}
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
  startRecord(){
    recorderManager.start(options);
    recorderManager.onStart(() => {
      console.log('recorder start')
    })

  },
  pauseRecord(){
    recorderManager.pause();
    recorderManager.onPause(() => {
      console.log('recorder pause')
    })
  },
  resuemeRecord(){
    recorderManager.resume();
  },
  stopRecord(){
    var that = this
    recorderManager.stop()
    recorderManager.onStop((res) => {
      console.log("==res.tempFilePath==" + res.tempFilePath);
      // that.setData({
      //   recordPath : res.tempFilePath
      // })
      recordPath = res.tempFilePath
    })
    
    recorderManager.onFrameRecorded((res) => {
      const { frameBuffer } = res
      console.log('frameBuffer.byteLength', frameBuffer.byteLength)
    })
  },
  playRecord(){
  
    console.log('==playRecord===' + recordPath )
    innerAudioContext.autoplay = true
    innerAudioContext.src = recordPath
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  }

})