require.config({
    paths : {
        "jquery" : "jquery-1.11.3",
        "cookie" : "jquery.cookie",
        "cart" : "cart",
        "top" : "top",
        "bottom" : "bottom"
   }
});
require(["jquery","cookie","cart","top","bottom"],function($,cookie,cart,top,bottom){
    $(function(){
        $(".top").load("top.html",function(){
            top.fn();
            cart.cart();
        });
        $(".footer").load("bottom.html",function(){
            bottom.fn();
        })
    })
});