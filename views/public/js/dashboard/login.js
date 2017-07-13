// 登录功能
 $("#loginBtn").submit(function () {
            // console.log("123");
            var data = $(this).serializeArray();
            // console.log(data);
            $.ajax({
                url: '/api/login',
                type: 'post',
                data:data,
                success: function (data) {
                    if (data.code == 200) {
                        // var tc_infoStr = JSON.stringify($.cookie(data.result));
                        // console.log(tc_infoStr);  
                        $.cookie('tc_infoStr',JSON.stringify(data.result)); 
                        console.log($.cookie('tc_infoStr'));  
                        location.href = 'index';
                    }
                },
                error: function () {
                    console.log("发送数据出错");
                }
            });
            return false;
        });
         //退出功能
    // $('#logoutBtn').on('click',function(){
    //     // alert('123');
    // });
