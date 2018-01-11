require({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"list" : "list",
	}
})
require(["jquery","cookie","list"],function($,cookie,list){
	$(function(){
		list.list();
		list.list2();
	})
})
