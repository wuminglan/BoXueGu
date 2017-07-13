<?php
header("content-type:text/html;charset=utf8");

 
// include '/views/dashboard/index.html';
// include 'http://www.bxg.com/index.php/views/dashboard/index.html';
// var_dump($_SERVER); 
$path='';
if(array_key_exists('PATH_INFO',$_SERVER)){
 $path = $_SERVER['PATH_INFO'];
//   var_dump($path);
    $path=substr($path,1);
    // http://www.bxg.com/index.php/views/dashboard/index.html
    $arr=explode('/',$path);
    if(count($arr)==2){
        $path='views/'.$arr[0].'/'.$arr[1];
    }else if(count($arr)==1){
        $path='views/dashboard/'.$arr[0];
}
    }else{
        // http://www.bxg.com/index.php访问
        $path='views/dashboard/index';
    }
      include $path.'.html';
?>
