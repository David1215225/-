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
                        $(".show_right_top").append('<h2 link="' + data1.link + '">' + data1.name + '</h2><p class="discounts"><a href="#" target="_blank">' + data1.discounts + '</a></p><ul><li class="num"><span class="name">商品货号：</span><em>' + data1.no + '</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name old">售价：</span><i>￥' + data1.oldPrice + '</i></li><li class="price"><span class="name">促 销 价：</span><em>￥<i>' + data1.newPrice + '</i></em></li><li class="sales"><span class="name">销　　量：</span><em>' + data1.pending +'</em></li><li class="eval clearfix"><span class="name">用户评分：</span><em class="star"></em><i>(共有&nbsp;<em>0</em>&nbsp;条评论)</i></li></ul>');
                        $("title").html(data1.name);
                        $.each(data1.listImg,function(index2,data2){
                        //'<ul class="clearfix"><li class="on"><img src="../' + data2.img1 + '" alt=""/><i></i></li><li><img src="../' + data2.img2 + '" alt=""/><i></i></li><li><img src="../' + data2.img3 + '" alt=""/><i></i></li><li><img src="../' + data2.img4 + '" alt=""/><i></i></li><li><img src="../' + data2.img5 + '" alt=""/><i></i></li></ul>'
                            $(".show_left_center").append('<ul class="clearfix"><li class="on"><img src="../' + data2.img1 + '" alt=""/><i></i></li><li><img src="../' + data2.img2 + '" alt=""/><i></i></li><li><img src="../' + data2.img3 + '" alt=""/><i></i></li><li><img src="../' + data2.img4 + '" alt=""/><i></i></li><li><img src="../' + data2.img5 + '" alt=""/><i></i></li></ul>');
                            $(".show_left_top").append('<img src="../' + data2.img1 + '" alt=""/>');
                            $(".show_big").append('<img src="../' + data2.img1 + '" alt=""/>');
                        });
                    }
                });
            });
            //放大镜效果
            function imgBig(){
                //获取所有的小图
                var $SmallLi = $(".show_left_center ul li");
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
             * 添加商品到购物车
             * 1、鼠标点击事件，获取当前商品的信息
             * 2、创建value值，将所有的商品信息存入value中
             * 3、判断cookie中是否有购物车信息,没有的话直接添加，有的话cookie中num的值+1
             * 4、创建cookie，将value放入cookie中，并设置有效期
             * */
            //鼠标点击事件
            $(".addCart").delegate(".car","click",function(){
                //获取商品信息
                //商品ID
                var goodId1 = $.cookie("goodId");
                //console.log(goodId1);
                //图片
                var proImg = $(".show_left_top img").attr("src");
                //商品名字
                var proName = $(".show_right_top h2").html();
                //获取商品链接地址
                var proLink = $(".show_right_top h2").attr("link");
                //获取商品售价
                var proSalePrice = $(".show_right_top ul .num i").html();
                //获取商品促销价
                var proNewPrice = $(".show_right_top ul .price em i").html();
                //获取备注信息
                var proDis = $(".show_right_top .discounts a").html();
                //console.log(goodId1 + "..." + proImg + ".."+ proLink + "..." + proName + "..." + proOldPrice + "..." + proNewPrice + "..." + proDis);
                var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
                //$.cookie("cart",goodId1 + ":" + proImg + "," + proLink + "," + proName + "," + proSalePrice + "," + proNewPrice + "," + proDis,{expires : 7, path : "/"});
                //console.log(cartStr);
                ////将字符串转换为对象
                var cartObj = convertCartStrToObj(cartStr);
                //console.log(cartObj);
                //console.log(cartObj);
                if(goodId1 in cartObj){
                    //商品存在proNum+1
                    cartObj[goodId1].num ++;
                }else{
                    //不存在的话proNum=1
                    cartObj[goodId1] = {
                        "id" : goodId1,
                        "name" : proName,
                        "img" : proImg,
                        "link" : proLink,
                        "oldPrice" : proSalePrice,
                        "newPrice" : proNewPrice,
                        "dis" : proDis,
                        "num" : 1
                    };
                }
                //将对象转换为字符串，并放入cookie中
                $.cookie("cart",JSON.stringify(cartObj),{expires : 7, path : "/"});
                //将字符串转为对象  方法
                function convertCartStrToObj(cartStr){
                    if(!cartStr){
                        return {};
                    }
                    return JSON.parse(cartStr);
                }
            });
        }
        getCookie();
    }
    return {
        content : content
    }
});