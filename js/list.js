define(function(){
	function list(){
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
        //三级导航联动
        function threeMenu(){
            //获取一级栏目的a
            var $parentMenu = $(".asideMenu .first_floor .first_floorLi").children("a");
            var $bgImg = $(".asideMenu .first_floor .first_floorLi i");
            //获取二级栏目和链接
            var $sonMenu = $(".asideMenu .first_floor .first_floorLi .second_floor");
            var $sonA = $(".asideMenu .first_floor .first_floorLi .second_floor").children("li").children("a");
            //获取三级栏目
            var $threeMenu = $(".asideMenu .first_floor .first_floorLi .second_floor .three_floor");
            for(var i = 0; i < $parentMenu.length; i ++){
                $parentMenu[i].index = i;
                $parentMenu.eq(i).attr("on","1");
            }
            $parentMenu.click(function(){
                $parentMenu.children("i").removeClass("on");
                $sonMenu.removeClass("show");
                if(Number($(this).attr("on")) > 0){
                    $(this).siblings("ul").addClass("show");
                    $(this).children("i").addClass("on");
                }else{
                    $(this).siblings("ul").removeClass("show");
                    $(this).children("i").removeClass("on");
                }
                var str = String(-Number($(this).attr("on")));
                $(this).attr("on",str);
            });
            for(var j = 0; j < $sonA.length; j ++){
                $sonA[j].index = i;
                $sonA.eq(j).attr("on","1");
            }
            $sonA.click(function(){
                $sonA.siblings("ul").css("display","none");
                if(Number($(this).attr("on")) > 0){
                    $(this).siblings("ul").css("display","block");
                    $(this).css("background-image","url(../images/minus.png)");
                }else{
                    $(this).siblings("ul").css("display","none");
                    $(this).css("background-image","url(../images/plus.png)");
                }
                var str = String(-Number($(this).attr("on")));
                $(this).attr("on",str);
            })
        }
        threeMenu();
        //列表页鼠标滑过时效果
        (function(){
            var $cloth = $(".clothing_list .list li div");
            $cloth.hover(function(){
                $(this).css({"position" : "absolute","border" : "2px solid red","background" : "#ffffff"});
                $(this).children(".name").css({"height" : "32px"});
            },function(){
                $(this).css({"position" : "static","border" : "1px solid #E7E7E7","background" : "#ffffff"});
                $(this).children(".name").css({"height" : "18px"});
            })
        })()
	}
	return {
		list : list
	}
});