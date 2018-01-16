define(function(){
    function cart(){
        //导航显示
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
        //韩都官网为您推荐
        function select(){
            var $Recommend = $(".recommend_link a");
            var $Select = $(".select");
            $Recommend.click(function(){
                var index = $Recommend.index(this);
                $Recommend.removeClass("on");
                $Select.removeClass("show");
                $(this).addClass("on");
                $Select.eq(index).addClass("show");
            });
        }
        select();
    }
    return {
        cart : cart
    }
});
