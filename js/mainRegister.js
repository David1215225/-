require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"register" : "register",
        "top" : "top",
        "bottom" : "bottom"
	}
});
require(["jquery","cookie","register","top","bottom"],function($,cookie,register,top,bottom){
	$(function(){
		$(".top").load("top.html",function(){
			register.register();
            top.fn();
		});
		$(".footer").load("bottom.html",function(){
            bottom.fn();
        });
	})
});
