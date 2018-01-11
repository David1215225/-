define(function(){
	function list(){
		$(".top").load("top.html");
		$(".footer").load("bottom.html");
	}
	function list2(){
		console.log($(".siteMenu"));
	}
	return {
		list : list,
		list2 : list2
	}
})