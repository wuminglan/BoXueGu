
$("#loginBtn").submit(function(){
   
    var data =$(this).serializeArray();
    $.ajax({
        url:'/api/login',
        type:'post',
        success:function(data){
            if(data.code==200){
                // console.log(data);
               location.href='index';
            }
        },
        error:function(){
            console.log("发送错误");
        }
    });
    return false;
});