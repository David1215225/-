define(function(){
	function list(){
        //������ʾ
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
        //������������
        function threeMenu(){
            //��ȡһ����Ŀ��a
            var $parentMenu = $(".asideMenu .first_floor .first_floorLi").children("a");
            var $bgImg = $(".asideMenu .first_floor .first_floorLi i");
            //��ȡ������Ŀ������
            var $sonMenu = $(".asideMenu .first_floor .first_floorLi .second_floor");
            var $sonA = $(".asideMenu .first_floor .first_floorLi .second_floor").children("li").children("a");
            //��ȡ������Ŀ
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
	}
	return {
		list : list
	}
});