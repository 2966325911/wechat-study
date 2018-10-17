module.exports = {
  requestLoading(url, params, message, success, fail) {
    console.log(params)
    wx.showLoading({
      title: message,
    })
    wx.request({
      url: url,
      data: params,
      header: {
        'content-type': 'application/json'
      },
      method: 'post',
      success: function(res) {
        //console.log(res.data)
        wx.hideLoading()
        if (res.statusCode == 200) {
          success(res.data)
        } else {
          fail()
        }

      },
      fail: function(res) {
        wx.hideLoading()
        fail()
      },
      complete: function(res) {

      },
    })
  }
}