const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  showToast(title,content,cb) {
    wx.showTabBar({
      title : title,
      content : content == undefined ? '' : content,
      showCancel : false,
      success : function(res) {
        if(cb) {
          cb(res)
        }
      }
    })
  },

/**得到今天零点的时间戳 */
  getToday(){
    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    return Math.floor(today.getTime()/1000);
  },

  /**
   * 得到这个月的第一天的时间戳
   */
  getThisMonth(){
    var today = new Date();
    today.setDate(0);
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    return Math.floor(today.getTime()/1000);
  },

  /**
   *  获取实时时间戳
   */
  getNowTimeStam(){
    return Math.floor(new Date().getTime()/1000);
  },

  /**
   * 时间戳转日期格式
   */
  timestamp2date(timpstamp) {
    function add0(m){
      return m < 10 ?'0' + m : m
    }

    var time = new Date(timpstamp)
    var y = time.getFullYear();
    var m = time.getMonth + 1;
    var d = time.getDay();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y+'_'+ add0(m) + '_' + add0(d) + '' + add0(h)+':' + add0(mm) + ':'+
    add0(s);
  },

  /**
   * 获取当前分钟的时间戳
   */
  getNowMinute(){
    var today = new Date();
    today.setSeconds(0);
    today.setMilliseconds(0);
    return Math.floor(today.getTime()/1000);
  },
  /**
   * 获取当前的小时数
   */
   getNowHour (){
     var today = new Date();
     today.setMilliseconds(0);
     today.setSeconds(0);
     today.setMinutes(0);
     return Math.floor(today.getTime()/1000);
   },

  getNowMinuteByTimestamp: function (timestamp) {
    var today = new Date(timestamp * 1000);
    today.setSeconds(0);
    today.setMilliseconds(0);
    return Math.floor(today.getTime() / 1000);
  }
  // 文件名
  , getFileName: function () {
    var timestamp = this.getNowTimestamp();
    function add0(m) { return m < 10 ? '0' + m : m }
    var time = new Date(timestamp * 1000);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '' + add0(m) + '' + add0(d) + '' + add0(h) + '' + add0(mm) + '' + add0(s);
  }
  , getNowTimeTag: function () {
    var timestamp = this.getNowTimestamp();
    function add0(m) { return m < 10 ? '0' + m : m }
    var time = new Date(timestamp * 1000);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '年' + add0(m) + '月' + add0(d) + '日';
  }
  //友好时间
  , dateStr: function (date) {
    //获取js 时间戳
    var time = new Date().getTime();
    //去掉 js 时间戳后三位，与php 时间戳保持一致
    time = parseInt((time - date * 1000) / 1000);

    //存储转换值 
    var s;
    if (time < 60 * 10) {//十分钟内
      return '刚刚';
    } else if ((time < 60 * 60) && (time >= 60 * 10)) {
      //超过十分钟少于1小时
      s = Math.floor(time / 60);
      return s + "分钟前";
    } else if ((time < 60 * 60 * 24) && (time >= 60 * 60)) {
      //超过1小时少于24小时
      s = Math.floor(time / 60 / 60);
      return s + "小时前";
    } else if ((time < 60 * 60 * 24 * 3) && (time >= 60 * 60 * 24)) {
      //超过1天少于3天内
      s = Math.floor(time / 60 / 60 / 24);
      return s + "天前";
    } else {
      //超过3天
      var date = new Date(parseInt(date) * 1000);
      return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    }
  
  }
}