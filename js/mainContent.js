require.config({
    paths : {
        "jquery" : "jquery-1.11.3",
        "cookie" : "jquery.cookie",
        "content" : "content",
        "top" : "top",
        "bottom" : "bottom"
    }
});
require(["jquery","cookie","content","top","bottom"],function($,cookie,content,top,bottom){
    $(function(){
        $(".top").load("top.html",function(){
            top.fn();
            content.content();
        });
        $(".footer").load("bottom.html",function(){
            bottom.fn();
        });
    })
});