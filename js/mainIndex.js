require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"index" : "index",
        "topB" : "top_bottom"
	}
});
require(["jquery","cookie","index","topB"],function($,cookie,index,topB){
	$(function(){
		$(".top").load("html/top.html",function(){
			index.fn();
            topB.fn();
		});
		$(".footer").load("html/bottom.html");
	})
});
