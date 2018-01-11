define(function(){
	function fn(){
		$(function(){
			//网站导航下拉
			$(".siteMenuA").mouseenter(function(){
				$(".siteMenu").css("display","block");
			}).mouseleave(function(){
				$(".siteMenu").css("display","none");
			})
		})
	}
	return {
		fn : fn
	}
})
