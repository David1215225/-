define(function(){
	function fn(){
		$(function(){
			//网站导航下拉
			$(".siteMenuA").hover(function(){
				$(".siteMenu").css("display","block");
			},function(){
				$(".siteMenu").css("display","none");
			})
		})
	}
	return {
		fn : fn
	}
})
