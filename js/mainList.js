require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"list" : "list",
        "top" : "top",
        "bottom" : "bottom"
	}
});
require(["jquery","cookie","list","top","bottom"],function($,cookie,list,top,bottom){
	$(function(){
		$(".top").load("top.html",function(){
			list.list();
            top.fn();
		});
		$(".footer").load("bottom.html",function(){
            bottom.fn();
        });
	})
});
