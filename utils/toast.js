Page({
  data: {
    //toast默认不显示  
    isShowToast: false
  },
  showToast: function () {
    var _this = this;
    // toast时间  
    _this.data.count = parseInt(_this.data.count) ? parseInt(_this.data.count) : 3000;
    // 显示toast  
    _this.setData({
      isShowToast: true,
    });
    // 定时器关闭  
    setTimeout(function () {
      _this.setData({
        isShowToast: false
      });
    }, _this.data.count);
  },
  /* 点击按钮 */
  clickBtn: function () {
    console.log("你点击了按钮")
    //设置toast时间，toast内容  
    this.setData({
      count: 1500,
      toastText: 'Michael’s　Toast'
    });
    this.showToast();
  }
})