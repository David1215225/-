require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"index" : "index"
	}
})
require(["jquery","cookie","index"],function($,cookie,index){
	$(function(){
		$(".top").load("html/top.html",function(){
			index.fn()
		});
		$(".footer").load("html/bottom.html");
	})
})
