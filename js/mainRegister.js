require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"register" : "register"
	}
})
require(["jquery","cookie","register"],function($,cookie,register){
	$(function(){
		$(".top").load("top.html",function(){
			register.register()
		});
		$(".footer").load("bottom.html");
	})
})
