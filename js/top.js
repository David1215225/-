/**
 * Created by msi-pc on 2018/1/13.
 */
define(function(){
    function fn(){
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
            m1.addClass("on");
            m2.css("display","block");
            var tag = new Image();
            tag.src = m3.src;
            m3.src = m3.alt;
            m3.alt = tag.src;
        }
        //鼠标移出事件
        function $mouseOut(m1,m2,m3){
            m1.removeClass("on");
            m2.css("display","none");
            var tag = new Image();
            tag.src = m3.src;
            m3.src = m3.alt;
            m3.alt = tag.src;
        }
        //将鼠标的移入事件和移出事件封装
        function $show($ele1,$ele2,$ele3){
            $ele1.mouseenter(function(){
                $mouseOver($ele1,$ele2,$ele3);
            }).mouseleave(function(){
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
    }
    return {
        fn : fn
    }
});
