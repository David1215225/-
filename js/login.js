define(function(){
	function login(){
		$(".siteMenuA").mouseenter(function(){
			$(".siteMenu").css("display","block");
		}).mouseleave(function(){
			$(".siteMenu").css("display","none");
		})
	}
	return {
		login : login
	}
})
