
// pages/list/list.js
const fetch = require("../../utils/fetch")
Page({

  go(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../detail/detail'
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    //当期页面
    currentPage : 0,
    pageSize : 10,
    category :{},
    shops:[],
    isMoreToLoad:true,
    queryString:""
  },

  search(){
    this.setData({currentPage:0,shops:[],isMoreToLoad:true})
    this.loadingMore()
  },


  inputChangeHandle(e){
    this.setData({queryString:e.detail.value})
  },

  loadingMore() {
    this.setData({currentPage: ++this.data.currentPage})
    let queryObj ={};
    queryObj._page  = this.data.currentPage
    queryObj._limit = this.data.pageSize

    if(this.data.queryString) {
      queryObj.q = this.data.queryString
    }

    // 请求列表信息, 进行渲染
    return fetch(`categories/${this.data.category.id}/shops`, queryObj).then(res => {
      // 获取当前一共多少条数据, 计算出下次是否有更多的数据进行进行渲染了
      let { currentPage, pageSize } = this.data
      let totalLength = res.header["X-Total-Count"]
      let isMoreToLoad = currentPage < Math.ceil((totalLength / pageSize)) ? true : false

      // 将计算出来是否下次可以加载更多内容同步到数据源中
      this.setData({ isMoreToLoad: isMoreToLoad })

      // 将请求到的数据拼接渲染到页面中
      let shops = res.data
      shops = shops.concat(this.data.shops)

      // 动态更新商品列表信息
      this.setData({ shops })

    })
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let cat = options.cat || 1;
    console.log("===options==" + JSON.stringify(options))
    this.setData({'category.id':cat})
    let title = options.title;
    console.log("===options.item-name==" + options.title)
    //这里设置标题有两种方式，一种是从上个页面传值过来，另外一种是网络请求标题进行渲染
    wx.setNavigationBarTitle({
      title : title
    })
    // // 请求标题, 进行渲染
    // fetch(`categories/${cat}`).then(res => {
    //   console.log("===list==res==" + JSON.stringify(res))
    //   // 拿到标题栏数据, 设置给标题
    //   let title = res.data.name

    //   // 动态更新到data中
    //   this.setData({ 'category.title': title })

    //   // 动态设置当前页面的标题
    //   wx.setNavigationBarTitle({
    //     title: title
    //   })
    // })

    this.loadingMore()
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
   console.log("上拉事件触发")
   this.setData({currentPage : 0,shops:[],isMoreToLoad : true})
   this.loadingMore().then(() =>{
     wx.stopPullDownRefresh()
   })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.isMoreToLoad) {
      this.loadingMore()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})