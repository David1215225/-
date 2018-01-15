require.config({
	paths :{
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"login" : "login",
        "top" : "top",
        "bottom" : "bottom"
	}
});
require(["jquery","cookie","login","top","bottom"],function($,cookie,login,top,bottom){
	$(function(){
		$(".top").load("top.html",function(){
			login.login();
            top.fn();
		});
		$(".footer").load("bottom.html",function(){
            bottom.fn();
        });
	})
});
