define(function(){
    function fn(){
        //首页banner图切换效果
        function $Broadcasting(){
            var $Li = $(".img_list li");
            var $Dots = $(".dot li");
            var nowIndex = 0;
            var timer = null;
            $($Li[0]).addClass("on");
            autoPlay();
            //设置图片轮播
            function play(){
                for(var i = 0; i < $Li.length; i ++){
                    if(nowIndex == i){
                        $($Li[nowIndex]).animate({"opacity" : 1});
                        $($Dots[nowIndex]).addClass("active");
                    }else{
                        $($Li[i]).animate({"opacity" : 0});
                        $($Dots[i]).removeClass("active");
                    }
                }
            }
            //添加鼠标滑过事件
            for(var i = 0; i < $Dots.length; i ++){
                $Dots[i].now = i;
                $($Dots[i]).mouseover(function(){
                    nowIndex = this.now;
                    $($Dots[nowIndex]).addClass("active");
                    $($Li[nowIndex]).animate({"opacity" : 1});
                    play();
                })
            }
            //设置图片自动轮播
            function autoPlay(){
                timer = setInterval(function(){
                    nowIndex ++;
                    if(nowIndex > $Li.length - 1){
                        nowIndex = 0;
                    }
                    play();
                },3000)
            }
            $(".banner").mouseover(function(){
                clearInterval(timer);
            }).mouseout(function(){
                autoPlay();
            });
        }
        $Broadcasting();

        //滚动导航效果
        function onScroll(){
            $(window).scroll(function(){
                if($(window).scrollTop() >= 766){
                    $(".scroll").fadeIn();
                }else{
                    $(".scroll").fadeOut();
                }
            })
        }
        onScroll();

        //互联网品牌生态运营集团
        (function(){
                $(".inter_group li").mouseover(function(){
                    $(this).children().children(".show").css("display","none");
                    $(this).children().children(".hidden").css("display","block");
                }).mouseout(function(){
                    $(this).children().children(".show").css("display","block");
                    $(this).children().children(".hidden").css("display","none");
                });
            })();

        //韩都动态、明星家族、媒体报道、无穷花开  选项卡
        function $Cut(){
                var $A = $(".list_news .list_column li a");
                var $Div = $(".list_news").children("div");
                //初始化
                $($Div[0]).css("display","block");
                var nowIndex = 0;
                //遍历所有的按钮
                function cut(){
                    for(var i = 0; i < $A.length; i ++){
                        $A[i].index = i;
                        if(nowIndex == $A[i].index){
                            $($Div[nowIndex]).css("display","block");
                            $($A[nowIndex]).addClass("active");
                        }else{
                            $($Div.eq(i)).css("display","none");
                            $($A.eq(i)).removeClass("active");
                        }
                    }
                }
                for(var i = 0; i < $A.length; i ++){
                    $A[i].index = i;
                    $($A[i]).mouseover(function(){
                        nowIndex = this.index;
                        cut();
                    });
                }
            }
        $Cut();

        //新品上市切换带自动轮播
        function newClose(){
                //获取页面元素
                //栏目名称
                var $column = $(".arrival h2 a");
                var $Li = $(".arrival h2 li");
                //获取区域div
                var $div = $(".arrival .arrival_list");
                //初始化
                var timer = null;
                var nowIndex = 0;
                $($column[0]).addClass("on");
                $($div[0]).css("display","block");
                autoPlay();
                function cut(){
                    for(var i = 0; i < $column.length; i ++ ) {
                        $column.eq(i).index = i;
                        if(nowIndex == $column[i].index){
                            $($column.eq(nowIndex)).addClass("on");
                            $($div.eq(nowIndex)).css("display","block");
                        }else{
                            $($column.eq(i)).removeClass("on");
                            $($div.eq(i)).css("display","none");
                        }
                    }
                }
                //鼠标滑过时停止自动播放
                $Li.mouseover(function(){
                    clearInterval(timer);
                }).mouseout(function(){
                    autoPlay();
                });
                $div.mouseover(function(){
                    clearInterval(timer);
                }).mouseout(function(){
                    autoPlay();
                });
                //设置自动切换
                function autoPlay(){
                    timer = setInterval(function(){
                        nowIndex ++;
                        if(nowIndex > $column.length - 1){
                            nowIndex = 0;
                            cut();
                        }
                        cut();
                    },2000);
                }
                //鼠标滑过时切换
                for(var i = 0; i < $column.length; i ++){
                    $column[i].index = i;
                    $($column[i]).mouseover(function(){
                        nowIndex = this.index;
                        cut();
                    });

                }
            }
        newClose();

        //热销排行榜
        function hotSell(){
                //获取页面元素
                var $Li = $(".hot_sell .hot_sell_list").children("li");
                //console.log($Li);
                var $H = $(".hot_sell .hot_sell_list h3");
                var $Ul = $(".hot_sell .hot_sell_list ul");
                var nowIndex = 0;
                function cut(){
                    for(var i = 0; i < $Li.length; i ++){
                        if(nowIndex == $Li[i].index){
                            $Li.eq(nowIndex).children("h3").css("display","none");
                            $Li.eq(nowIndex).children("ul").css("display","block");
                        }else{
                            $Li.eq(i).children("h3").css("display","block");
                            $Li.eq(i).children("ul").css("display","none");
                        }
                    }
                }
                for(var i = 0; i < $Li.length; i ++){
                    $Li[i].index = i;
                    $($Li[i]).mouseover(function(){
                        nowIndex = this.index;
                        cut();
                    });
                }
            }
        hotSell();

        //底部文字轮播
        function wordSlider(){
            var $word = $(".friendly_link ul");
            var num = 0;
            function goLeft(){
                if(num == - 1140){
                    num = 0;
                }
                num -=1;
                $word.css({
                    left : num
                });
            }
            var timer = setInterval(goLeft,40);
            $(".ok").hover(function(){
                clearInterval(timer);
            },function(){
                timer = setInterval(goLeft,40);
            });
        }
        wordSlider();
	}
	return {
		fn : fn
	}
});
