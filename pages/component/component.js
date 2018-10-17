Component({
  //使用多slot时，可以在组件js中声明启用options: {multipleSlots: true }，以不同的 name 来区分。
  options: {
    //在组件定义是的选项中启动多slot支持
    multipleSlots : true
  },

  properties : {
    innerText : {
      type : String,
      value : 'default value',
    },
    fromPage : String
    /*
    myProperty: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function(newVal, oldVal){} // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    }
    */
  },

  attached : function(){
    console.log(this.properties.fromPage)
    console.log(this.data.fromPage)

    this.setData({
      fromPage : '改变了'
    });

     console.log(this.properties.fromPage)
     console.log(this.dataset.other) 
    
  },

  data : {
    someData :{}
  },

  methods:{
    // customMethod : function(){}
    onTap : function(){
      var myEventDetail = {msg:'来自component的消息'}
      var myEventOption= {}//触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})