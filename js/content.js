define(function(){
    function content(){
        //µº∫Ωœ‘ æ
        function showMenu(){
            var $A = $(".allClassify").children("a");
            var $Ul = $(".allClassify .navList");
            $Ul.css("display","none");
            $A.mouseover(function(){
                $Ul.css("display","block");
            }).mouseout(function(){
                $Ul.css("display","none");
            });
            $(".allClassify .navList,.allClassify .on").mouseover(function(){
                $(".allClassify .navList").css("display","block");
            }).mouseout(function(){
                $(".allClassify .navList").css("display","none");
            });
        }
        showMenu();
    }
    return {
        content : content
    }
});