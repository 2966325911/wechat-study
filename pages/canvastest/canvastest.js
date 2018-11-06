// pages/canvastest/canvastest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canvasWidth : 700,
    canvasHeight : 500,
    x: 0,
    y: 0,   
    hidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    const ctx = wx.createCanvasContext("myCanvas")
    // ctx.setFillStyle('red')
    // ctx.fillRect(10,10,120,40)
    // //arc(x,y,radius,startAngle,endAngle)画一个圆
    // ctx.arc(100, 100, 50, 0, 2 * Math.PI)
    // ctx.setFillStyle('yellow')
    // //阴影 setShadow（，offsetX ，offsetY,blur,color） blur0~100	阴影的模糊级别，数值越大越模糊
    // ctx.setShadow(10,10,10,'blue')
    // ctx.fill()

    // ctx.beginPath()
    // // moveTo(x,y)
    // ctx.moveTo(50, 100)
    // // lineTo(endX,endY) 从moveTo的点绘制直线到endX，endY
    // ctx.lineTo(150, 100)
    // ctx.moveTo(100, 50)
    // ctx.lineTo(100, 160)
    // ctx.setStrokeStyle('#ff0000')
    // // setLineWidth设置线条的宽度
    // ctx.setLineWidth(2)
    // // //setLineDash线条的结束端点样式 	'butt'、'round'、'square'
    // // ctx.setLineDash('square')
    // //setLineJoin设置线条的交点样式 'bevel' 'round' 'miter'
    // // ctx.setLineJoin('round')
    // //设置虚线 pattern 一组描述交替绘制线段和间距（坐标空间单位）长度的数字 offset 虚线偏移量
    // ctx.setLineDash([10,20],5)
    // ctx.stroke()

    // //绘制文字
    // ctx.setFontSize(12)
    // ctx.setFillStyle('black')
    // ctx.fillText('0', 100, 50)
    // ctx.fillText('0.5*PI', 150, 110)
    // ctx.fillText('1*PI', 100, 170)
    // ctx.fillText('1.5*PI', 40, 110)

    // // Draw points 相当于圆心
    // ctx.beginPath()
    // ctx.arc(100, 100, 5, 0, 2 * Math.PI)
    // ctx.setFillStyle('lightgreen')
    // ctx.fill()

    // ctx.beginPath()
    // ctx.arc(100, 25, 2, 0, 2 * Math.PI)
    // ctx.setFillStyle('blue')
    // ctx.fill()



    // // Draw arc storke 区别于前面的FIll
    // ctx.beginPath()
    // ctx.arc(100, 100, 50, 0, 1.5 * Math.PI)
    // ctx.setStrokeStyle('#333333')
    // ctx.stroke()

    // // Create linear gradient
    // const grd = ctx.createLinearGradient(120, 0, 200, 0)
    // grd.addColorStop(0, 'red')
    // grd.addColorStop(1, 'white')

    // // Fill with gradient
    // ctx.setFillStyle(grd)
    // ctx.fillRect(120, 10, 200, 30)

    // const grd1 = ctx.createCircularGradient(75, 50, 50)
    // grd1.addColorStop(0, 'red')
    // grd1.addColorStop(1, 'white')

    // // Fill with gradient
    // ctx.setFillStyle(grd1)
    // ctx.fillRect(10, 10, 150, 80)
    // //clearRect(x,y,widht,height) 并非画一个白色的矩形在地址区域，而是清空
    // ctx.clearRect(10,10,700,500)

// 创建三次方贝塞尔曲线路径
    // ctx.beginPath()
    // ctx.moveTo(20,20)
    // //bezierCureTo(cp1x,cp1y,cp2x,cp2y,x,y) 参数 第一个贝塞尔控制点x,y
    // //第二个贝塞尔控制点x y, 结束点  x,y 
    // ctx.bezierCurveTo(20,100,200,100,200,20)
    // ctx.setStrokeStyle('black')
    // ctx.stroke()

//创建二阶贝塞尔曲线 
    // ctx.beginPath()
    // ctx.moveTo(20,20)
    // ctx.quadraticCurveTo(20,100,200,20)
    // ctx.setStrokeStyle('black')
    // ctx.stroke()

    // ctx.beginPath()
    // ctx.moveTo(20,200)

    // ctx.strokeRect(20,200,40,220)
    // ctx.scale(2,2)
    // ctx.strokeRect(20, 200, 40, 220)
    // ctx.scale(2,2)
    // ctx.stroke(20, 200, 40, 220)

    //rotate	Number	旋转角度，以弧度计(degrees * Math.PI/180；degrees范围为0~360)
    //以原点为中心，原点可以用 translate方法修改。顺时针旋转当前坐标轴。多次调用rotate，旋转的角度会叠加。
    // ctx.strokeRect(100,10,150,100)
    // ctx.rotate(20*Math.PI/180)
    // ctx.strokeRect(100, 10, 150, 100)
    // ctx.rotate(20*Math.PI/180)
    // ctx.strokeRect(100,10,150,100)

    //translate (x,y) x 水平方向平移 y 垂直方向平移
    // ctx.strokeRect(10,10,150,100)
    // ctx.translate(20,20)
    // ctx.strokeRect(10,10,150,100)
    // ctx.translate(20,20)
    // ctx.strokeRect(10,10,150,100)

    // ctx.draw()

//clip() 测试
    // wx.downloadFile({
    //   url: 'http://is5.mzstatic.com/image/thumb/Purple128/v4/75/3b/90/753b907c-b7fb-5877-215a-759bd73691a4/source/50x50bb.jpg',
    //   success: function (res) {
    //     ctx.save()
    //     ctx.beginPath()
    //     ctx.arc(50, 50, 25, 0, 2 * Math.PI)
    //     ctx.clip()
    //     ctx.drawImage(res.tempFilePath, 25, 25)
    //     ctx.restore()
    //     ctx.draw()
        
    //   }
    // })

    //setTextAling = left center right 设置文字的对齐方式

    // ctx.setStrokeStyle('red')
    // ctx.moveTo(150,20)
    // ctx.lineTo(150,170)
    // ctx.stroke()

    // ctx.setFontSize(15)
    // ctx.setTextAlign('left')
    // ctx.fillText('textAlign=left',150,60)

    // ctx.setFontSize(20)
    // ctx.setTextAlign('center')
    // ctx.fillText('textAlign=center',150,80)

    // ctx.setFontSize(25)
    // ctx.setTextAlign('right')
    // ctx.fillText('textAlign=right', 150, 100)

  //setTextBaseline 设置文字的水平对齐
  //textBaseline	String	可选值 'top'、'bottom'、'middle'、'normal'
    // ctx.setStrokeStyle('red')
    // ctx.moveTo(5, 75)
    // ctx.lineTo(295, 75)
    // ctx.stroke()

    // ctx.setFontSize(20)

    // ctx.setTextBaseline('top')
    // ctx.fillText('top', 5, 75)

    // ctx.setTextBaseline('middle')
    // ctx.fillText('middle', 50, 75)

    // ctx.setTextBaseline('bottom')
    // ctx.fillText('bottom', 120, 75)

    // ctx.setTextBaseline('normal')
    // ctx.fillText('normal',200,75)

    // ctx.setFillStyle('red')
    // ctx.fillRect(10,10,150,100)
    // //设置全局画笔透明度（0~1）
    // ctx.setGlobalAlpha(0.2)
    // ctx.setFillStyle('blue')
    // ctx.fillRect(50, 50, 150, 100)
    // ctx.setFillStyle('yellow')
    // ctx.fillRect(100, 100, 150, 100)

    // //保存当前绘图的上下文
    // ctx.save()  
    // ctx.setFillStyle('red')
    // ctx.fillRect(10,10,150,100)

    // //恢复之前保存的绘图上下文
    // ctx.restore()
    // ctx.fillRect(50,50,150,100)

    // ctx.setFillStyle('red')
    // ctx.setFontSize(20)
    // //fillText(String,x,y) x绘制文字左上角的x y绘制文字左上角的y坐标 
    // ctx.fillText("hello world",20,20)
    // //measureText(String)  测量文字的宽度
    // const metrics = ctx.measureText('hello world')
    // console.log("hello world.width==" + metrics.width )

    //根据控制点和绘制圆路径 x1,y1 第一个控制点  x2.y2第二个控制点  radius半径
    // ctx.arcTo(x1, y1, x2, y2, radius)

    //给定的 (x, y) 位置绘制文本描边的方法 maxWidth要绘制的最大宽度(可选）
    // ctx.strokeText(text,x,y,maxWidth)

// createPattern(path,repetition) path 重复的资源路径  repetition支持如何重复图//像，有效值 repeat repeat-x, repeat-y,no-repeat
    // const pattern = ctx.createPattern('../../assets/avatar.png','repeat-y')
    // ctx.fillStyle = pattern
    // ctx.fillRect(0,0,300,150)
    
    // value  string支持的属性有style字体样式 italic oblique normal weight字体粗细，仅支持normal ，bold  size字体大小
    // ctx.font = value
    // ctx.font = 'italic bold 20px cursive'
    
    // ctx.draw()

    
    // ctx.save()
    // wx.chooseImage({
    //   success: function(res){
    //     console.log("res",res.tempFilePaths[0])
    //     ctx.drawImage(res.tempFilePaths[0],0,0,150,100)
    //     // ctx.draw()

    //     // ctx.restore()

    //     ctx.setFillStyle('red')
    //     ctx.fillRect(10, 10, 50, 30)
    //     // ctx.save()

    //     ctx.setFillStyle('white')
    //     ctx.setFontSize(20)
    //     ctx.setTextAlign('center')
    //     ctx.setTextBaseline('middle')
    //     ctx.fillText("乖",30,22)
    //     const metrics = ctx.measureText('乖')
    //     console.log("乖.width==" + metrics.width)
    //     ctx.draw()
    //   },
    // })

    //drawImage可能出现的渲染慢的问题，把图片单独用image src渲染上去，然后用canvas去画文字
    //去合理控制css的样式即可
    ctx.setFillStyle('red')
    ctx.fillRect(10, 10, 50, 30)
    // ctx.save()


    const str1 = ctx.measureText('孙子孙子')
    console.log("孙子孙子.width==", str1.width)
    const str2 = ctx.measureText('丈夫丈夫')
    console.log("丈夫丈夫.width==", str2.width)
    
    ctx.setFillStyle('white')
    ctx.setFontSize(16)
    ctx.setTextAlign('center')
    ctx.setTextBaseline('middle')
    ctx.fillText("乖", 30, 22)
    const metrics = ctx.measureText('乖')
    console.log("乖.width==" + metrics.width)
    ctx.draw()

   
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

  tapClick(){
    wx.showToast({
      title: '被点击了',
      icon : 'success'
    })
  },
  start : function(e){
    this.setData({
      hidden : false,
      x : e.touches[0].x,
      y : e.touches[0].y
    })
  },

  move : function(e) {
    this.setData({
      hidden : false,
      x : e.touches[0].x,
      y : e.touches[0].y
    })
  },
  end : function(e){
    console.log("==end==" + e)
    this.setData({
      hidden : true
    })
  }

})