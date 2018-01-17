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

        //获取json文件
        function getJson(){
            $.getJSON("../json/column.json",function(result){
                //console.log(result);
                //console.log(result[1]);
                //console.log(result[2]);
                //console.log(result[1].name,result[1].link);
                //console.log(result[1].ColumnList);
                //全部商品分类
                $.each(result[1].ColumnList,function(index1,result1){
                    //console.log(result1.link);
                    //<li><a href="#"><img src="./images/nana.png" alt=""/></a></li>
                    //console.log('<li><a href="' + result1.link +'"><img src="' + result1.path + ' alt="' + result1.name + '"/></a></li>');
                    $(".first_show1 ul").append('<li><a href="' + result1.link +'"><img src="' + result1.path + '" alt="' + result1.name + '"/></a></li>');
                });
                //精选推荐
                var secondColumn = result[2].ColumnList;
                //console.log(secondColumn[0]);
                $.each(secondColumn,function(index,result){
                    //console.log(result.name);
                    //获取二级子栏目
                    $(".second_show1").append('<ul class="clearfix"> <h3>' + result.name + '</h3></ul>');
                });
                for(var num = 0; num < secondColumn.length; num ++){
                    $.each(secondColumn[num].ColumnList,function(index2,result2){//获取三级栏目
                        //console.log("--" + result2.name + "--" + result2.link);
                        //<ul class="clearfix"> <h3>特惠精选</h3> <li><a href="#">清仓特惠</a></li> </ul>
                        $(".second_show1 ul").eq(num).append('<li><a href="' + result2.link + '">' + result2.name + '</a></li>');
                    })
                }
            })
        }
        getJson();

        /*
         * 点击栏目链接跳转到列表页，获取当前栏目的json稿件库，并放入列表页中
         * 思路：
         * 1、找到所有的a,添加点击事件
         * 2、创建cookie,将当前点击的a的id放入cookie中。同时页面跳转到列表页中
         * 3、在列表页中获取当前cookie的id值
         * 4、根据id值遍历json获取到file的值，找到对应的json文件
         * 5、遍历json文件，将稿件放入列表页中
         * */
        //获取cookie，并遍历column.json中的栏目，找到对应的id，获取file的值
        function getCookie(){
            var result ;
            //获取cookie
            var id = $.cookie("id");
            //遍历column.json，获取file值
            $.ajaxSettings.async = false;//将异步修改为同步
            $.getJSON("../json/column.json",function(data){
                //console.log(data);
                $.each(data,function(index,data1){
                    //console.log(data1);
                    if(data1.id == id){
                        result =  data1.file;
                        $.cookie("file",data1.file,{ expires : 7, path : "/"});
                        return false;
                    }else{
                        if(data1.ColumnList != null){
                            $.each(data1.ColumnList,function(index1,data2){
                                //console.log(data2);
                                if(data2.id == id){
                                    result = data2.file;
                                    $.cookie("file",data2.file,{ expires : 7, path : "/"});
                                    return false;
                                }else{
                                    if(data2.ColumnList != null){
                                        $.each(data2.ColumnList,function(index2,data3){
                                            if(data3.id == id){
                                                $.cookie("file",data3.file,{ expires : 7, path : "/"});
                                                result =  data3.file;
                                                return false;
                                            }
                                        })
                                    }
                                }
                            })
                        }
                    }
                })
            });
            return result;
        }
        //console.log(getCookie());

        //遍历json文件，放入列表页中
        function setList(){
            $.getJSON("../" + getCookie(),function(data){
                $.each(data,function(index,data1){
                    //'<li class="clearfix"><div><a href="' + data1.link + '" title= "' + data1.name + '"><img src="../' + data1.imgsrc + '" alt="' + data1.name + '" /></a><p class="img"><img src="../' + data1.imgsrc + '"/></p><p class="price"><span class="price_new">' + data1.newPrice + '</span><span class="price_old">' + data1.oldPrice + '</span></p><p class="name"><a href="' + data1.link + '">' + data1.name + '</a></p><p class="month_eval"><span class="month">' + data1.pending + '<br /><i>月销量</i></span><span class="eval">' + data1.app + '<br /><i>累计评价</i></span></p></div></li>'
                    $("title").html(data1.name);
                    $(".list ul").append('<li id ="' + data1.goodid + '" class="clearfix"><div><a target="_blank" href="' + data1.link + '" title="' + data1.name + '"><img src="../' + data1.imgsrc + '" alt="' + data1.name + '" /></a><p class="img"><img src="../' + data1.imgsrc + '"/></p><p class="price"><span class="price_new">￥' + data1.newPrice + '</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="price_old">￥' + data1.oldPrice + '</span></p><p class="name"><a  target="_blank" href="' + data1.link + '" title= "' + data1.name + '">' + data1.name + '</a></p><p class="month_eval"><span class="month">' + data1.pending + '<br /><i>月销量</i></span><span class="eval">' + data1.app + '<br /><i>累计评价</i></span></p></div></li>');
                    //console.log(data1.goodid);
                });
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
                })();
            });
            //遍历li，添加点击事件，创建cookie
            function createCookie(){
                //点击稿件将稿件ID放入到cookie中
                $(".list ul").delegate("li","click",function(){
                    var id = $(this).attr("id");
                    $.cookie("goodId",id,{path : "/" });
                })
            }
            createCookie();
        }
        setList();
	}
	return {
		list : list
	}
});