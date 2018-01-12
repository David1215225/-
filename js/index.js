define(function(){
	function fn(){$(function(){
//网站导航下拉
			$(".siteMenuA").mouseenter(function(){
				$(".siteMenu").css("display","block");
			}).mouseleave(function(){
				$(".siteMenu").css("display","none");
			});
			$(".siteMenu").mouseover(function(){
				$(this).css("display","block");
			}).mouseout(function(){
				$(this).css("display","none");
			});
//全部商品导航效果
//鼠标移入事件
			function $mouseOver(m1,m2,m3){
				m1.toggleClass("on");
				m2.css("display","block");
				var tag = new Image();
				tag.src = m3.src;
				m3.src = m3.alt;
				m3.alt = tag.src;
			}
//鼠标移出事件
			function $mouseOut(m1,m2,m3){
				m1.toggleClass("on");
				m2.css("display","none");
				var tag = new Image();
				tag.src = m3.src;
				m3.src = m3.alt;
				m3.alt = tag.src;
			}
//将鼠标的移入事件和移出事件封装
			function $show($ele1,$ele2,$ele3){
				$ele1.mouseover(function(){
					$mouseOver($ele1,$ele2,$ele3);
				}).mouseout(function(){
					$mouseOut($ele1,$ele2,$ele3);
				});
				$ele2.mouseover(function(){
					$mouseOver($ele1,$ele2,$ele3);
				}).mouseout(function(){
					$mouseOut($ele1,$ele2,$ele3);
				})
			}
//定义变量并调用show方法
//1
			var $fir = $(".firShow");
			var $first = $(".first_show");
			var $img1 = $(".firShow .listNav1 img")[0];
			$show($fir,$first,$img1);
//2
			var $sec = $(".secShow");
			var $second = $(".second_show");
			var $img2 = $(".secShow .listNav1 img")[0];
			$show($sec,$second,$img2);
//3
			var $thr = $(".thrShow");
			var $three = $(".three_show");
			var $img3 = $(".thrShow .listNav1 img")[0];
			$show($thr,$three,$img3);
//4
			var $fou = $(".fouShow");
			var $four = $(".four_show");
			var $img4 = $(".fouShow .listNav1 img")[0];
			$show($fou,$four,$img4);
//5
			var $fiv = $(".fivShow");
			var $five = $(".five_show");
			var $img5 = $(".fivShow .listNav1 img")[0];
			$show($fiv,$five,$img5);
//6
			function $cutImg($ele1,$ele2){
				$ele1.mouseover(function(){
					$(this).toggleClass("on");
					var tag = new Image();
					tag.src = $ele2.src;
					$ele2.src = $ele2.alt;
					$ele2.alt = tag.src;
				}).mouseout(function(){
					$(this).toggleClass("on");
					var tag = new Image();
					tag.src = $ele2.src;
					$ele2.src = $ele2.alt;
					$ele2.alt = tag.src;
				})
			}
			var $six = $(".sixShow");
			var $img6 = $(".sixShow .listNav1 img")[0];
			$cutImg($six,$img6);
//7
			var $sev = $(".sevenShow");
			var $img7 = $(".sevenShow .listNav1 img")[0];
			$cutImg($sev,$img7);

//首页banner图切换效果
            function $Broadcasting(){
                var $Li = $(".img_list li");
                var $Dots = $(".dot li");
                //console.log($Li.length);
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
        (function(){
            var $Li = $(".list_news ul").children("li");
            var $Div = $(".list_news").children("div");
            console.log($Li);
        })()
		})
	}
	return {
		fn : fn
	}
});
