require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"index" : "index",
        "top" : "top",
        "bottom" : "bottom"
	}
});
require(["jquery","cookie","index","top","bottom"],function($,cookie,index,top,bottom){
	$(function(){
		$(".top").load("html/top.html",function(){
			index.fn();
            top.fn();
		});
		$(".footer").load("html/bottom.html",function(){
            bottom.fn();
        });
	})
});
