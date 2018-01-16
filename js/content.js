/**
 * Created by msi-pc on 2018/1/16.
 */
define(function(){
    function content(){
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
        //选项卡及吸顶效果
        function select(){
            var $Li = $(".details .menu li");
            var $Show = $(".details .show");
            $Li.click(function(){
                var index = $Li.index(this);
                $Show.css("display","none");
                $Li.removeClass("on");
                $(this).parents(".details_name").siblings(".show").eq(index).css("display","block");
                $(this).addClass("on");
            });
            $(window).scroll(function(){
                if($(window).scrollTop() >= 950){
                    $(".details_name").css({"position": "fixed"});
                }else{
                    $(".details_name").css({"position": "static"});
                }
            })
        }
        select();

        //获取cookie，根据cookie中的值获取当前稿件的属性
        function getCookie(){
            //获取当前稿件的id及其父元素的ID
            var parentId = $.cookie("id");
            var proId = $.cookie("goodId");
            var file = $.cookie("file");
            $.ajaxSettings.async = false;//将异步修改为同步
            $.getJSON("../" + file,function(data){
                $.each(data,function(index,data1){
                    if(data1.goodid == proId){
                        //'<h2>' + data1.name + '</h2><p class="discounts"><a href="#" target="_blank">' + data1.discounts + '</a></p><ul><li class="num"><span class="name">商品货号：</span><em>' + data1.no + '</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name old">售价：</span><i>' + data1.oldPrice + '</i></li><li class="price"><span class="name">促 销 价：</span><em>' + data1.newPrice + '</em></li><li class="sales"><span class="name">销　　量：</span><em>' + data1.pending +'</em></li><li class="eval clearfix"><span class="name">用户评分：</span><em class="star"></em><i>(共有&nbsp;<em>0</em>&nbsp;条评论)</i></li></ul>'
                        $(".show_right_top").append('<h2>' + data1.name + '</h2><p class="discounts"><a href="#" target="_blank">' + data1.discounts + '</a></p><ul><li class="num"><span class="name">商品货号：</span><em>' + data1.no + '</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name old">售价：</span><i>' + data1.oldPrice + '</i></li><li class="price"><span class="name">促 销 价：</span><em>' + data1.newPrice + '</em></li><li class="sales"><span class="name">销　　量：</span><em>' + data1.pending +'</em></li><li class="eval clearfix"><span class="name">用户评分：</span><em class="star"></em><i>(共有&nbsp;<em>0</em>&nbsp;条评论)</i></li></ul>');
                        $("title").html(data1.name);
                        console.log(data1);
                        $.each(data1.listImg,function(index2,data2){
                        //'<ul class="clearfix"><li class="on"><img src="../' + data2.img1 + '" alt=""/><i></i></li><li><img src="../' + data2.img2 + '" alt=""/><i></i></li><li><img src="../' + data2.img3 + '" alt=""/><i></i></li><li><img src="../' + data2.img4 + '" alt=""/><i></i></li><li><img src="../' + data2.img5 + '" alt=""/><i></i></li></ul>'
                            $(".show_left_center").append('<ul class="clearfix"><li class="on"><img src="../' + data2.img1 + '" alt=""/><i></i></li><li><img src="../' + data2.img2 + '" alt=""/><i></i></li><li><img src="../' + data2.img3 + '" alt=""/><i></i></li><li><img src="../' + data2.img4 + '" alt=""/><i></i></li><li><img src="../' + data2.img5 + '" alt=""/><i></i></li></ul>');
                            $(".show_left_top").append('<img src="../' + data2.img1 + '" alt=""/>');
                            $(".show_big").append('<img src="../' + data2.img1 + '" alt=""/>');
                        });
                        //console.log(data1);
                    }
                });
            });
            //放大镜效果
            function imgBig(){
                //获取所有的小图
                var $SmallLi = $(".show_left_center ul li");
                //console.log($SmallLi);
                //大图位置
                var $BigDiv = $(".show_left_top");
                var $BigImg = $(".show_big");
                //点击小图大图切换
                $SmallLi.click(function(){
                    $SmallLi.removeClass("on");
                    $BigDiv.children("img")[0].src = $(this).children("img")[0].src;
                    $BigImg.children("img")[0].src = $(this).children("img")[0].src;
                    $(this).addClass("on");
                });
                var $Mark = $(".mark");
                var $Layer = $(".float_layer");
                //鼠标滑过show_big显示，并进行放大图像
                $Mark.mouseenter(function(){
                    $Mark.show();
                    $Layer.show();
                    $BigImg.show();
                    var disX = 0;
                    var disY = 0;
                    $(this).mousemove(function(){
                        disX = event.pageX - $(this).offset().left / 2;
                        disY = event.pageY - $(this).offset().top / 2;
                        var left = disX - $Layer.width();
                        var top  = disY - $Layer.height();
                        if(left < 0){
                            left = 0;
                        }else if(left >= $(this).width() - $Layer.width()){
                            left = $(this).width() - $Layer.width();
                        }
                        if(top < 0 ){
                            top = 0;
                        }else if(top >= $(this).width() - $Layer.width()){
                            top = $(this).width() - $Layer.width();
                        }
                        $Layer.css({"left" : left + "px","top" : top + "px"});
                        //比例计算
                        var $Px = left / ($Mark.width() - $Layer.width());
                        var $Py = top / ($Mark.height() - $Layer.width());
                        var $Bx = - $Px * ($($BigImg.children("img")[0]).width() - $BigImg.width());
                        var $By = - $Py * ($($BigImg.children("img")[0]).height() - $BigImg.height());
                        $($BigImg.children("img")[0]).css({"left" : $Bx + "px" ,"top" : $By + "px"});
                    });
                }).mouseleave(function(){
                    $Layer.hide();
                    $BigImg.hide();
                });
            }
            imgBig();
        }
        getCookie();
    }
    return {
        content : content
    }
});