define(function(){
	function register(){
		$(".siteMenuA").mouseover(function(){
			$(".siteMenu").css("display","block");
		}).mouseleave(function(){
			$(".siteMenu").css("display","none");
		})
	}
	return {
		register : register
	}
})
