// NProgress.start();

// NProgress.done();

// $('.navs ul').prev('a').on('click', function () {
// 	$(this).next().slideToggle();
// });

//定义了登录时一些信息 模块
define(['jquery','cookie','template'],function($,cookie,template){

if (!$.cookie('PHPSESSID') && location.pathname != '/login') {
	// console.log('123');
	location.href = 'login';
}

//渲染图片与个人信息
//  var tx_info = JSON.parse($.cookie('tc_infoStr'));
if (location.pathname != '/login') {
	// console.log("fffffff");
	var tx_info = JSON.parse($.cookie('tc_infoStr'));
	var temStr = template('img_info', tx_info);
	$('.aside>.profile').html(temStr);
}

    //退出功能
    $('#logoutBtn').on('click',function(){
       location.href='login';
    });

});

