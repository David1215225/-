require.config({
	paths :{
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"login" : "login"
	}
})
require(["jquery","cookie","login"],function($,cookie,login){
	$(function(){
		$(".top").load("top.html",function(){
			login.login()
		});
		$(".footer").load("bottom.html");
	})
})
