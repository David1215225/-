require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"list" : "list",
        "topB" : "top_bottom"
	}
});
require(["jquery","cookie","list","topB"],function($,cookie,list,topB){
	$(function(){
		$(".top").load("top.html",function(){
			list.list();
            topB.fn();
		});
		$(".footer").load("bottom.html");
	})
});
