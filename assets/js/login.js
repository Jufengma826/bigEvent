$(function(){
 $("#login_box").on("click",function(){
     $(".login-box").hide()
     $(".reg-box").show()

 })


 $("#reg_box").on("click",function(){
    $(".login-box").show()
    $(".reg-box").hide()

})

//密码框校验
  var form = layui.form
  form.verify({
    username: function(value, item){ //value：表单的值、item：表单的DOM对象
        if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
          return '用户名不能有特殊字符';
        }
        if(/(^\_)|(\__)|(\_+$)/.test(value)){
          return '用户名首尾不能出现下划线\'_\'';
        }
        if(/^\d+\d+\d$/.test(value)){
          return '用户名不能全为数字';
        }
      }
      
      //我们既支持上述函数式的方式，也支持下述数组的形式
      //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
      ,pass: [
        /^[\S]{6,12}$/
        ,'密码必须6到12位，且不能出现空格'
      ] ,
      repass:function(value){
         var repwd = $(".reg-box [name=password]").val()
         if(repwd !== value){
             return '两次输入的密码不一致'
         }
      }
  })

})