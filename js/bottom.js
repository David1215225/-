/**
 * Created by msi-pc on 2018/1/14.
 */
define(function(){
   function fn(){
       //右侧悬浮框效果
       function toTop(){
           var $Flu = $(".flutter");
           var $A = $(".flutter .a4");
           $(window).scroll(function(){
               if($(this).scrollTop() > 600){
                   $Flu.fadeIn();
               }else{
                   $Flu.fadeOut();
               }
           });
           $A.click(function(){
               $("html,body").animate({scrollTop : "0px"},1000);
           });
       }
       toTop();
   }
    return {
        fn : fn
    }
});