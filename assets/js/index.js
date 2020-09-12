$(function(){
    var layer = layui.layer
    getuserinfo()
    function getuserinfo (){
        $.ajax({
            url:'/my/userinfo',
            type:'GET',
             
             success:function(res){
               renderData(res.data)
            }
            
        })
    }

    function renderData(user){
        //获取用户名
        var name = user.nickname || user.username
        $("#welcome").html('欢迎'+ name)

        //获取头像 判断若有头像则显示头像 没有则显示注册名
        if(user.user_pic){
            $('.layui-nav-img').attr('src',user.user_pic).show()
            $('.text-avatar').hide()
        }else{
            $('.layui-nav-img').hide()
            $('.text-avatar').html(name[0]).show()
        }
    }
    
    //退出功能
    $(".tuichu").on('click',function(){
        layer.confirm('确定退出登录?', {icon: 3, title:'提示'}, function(index){
            //清除浏览器中的token
            //页面切换到登录页面
            localStorage.removeItem('token')
            location.href = '/login.html'
            
            layer.close(index);
          })
    })
})