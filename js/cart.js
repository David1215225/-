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

        //获取cookie
        function getCookie(){
            var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
            var parentName = $.cookie("parentName");
            if(!cartStr){
            }else{
                $(".shopping_none").hide();
                $(".shopping_have").show();
                var cartObj = covertStrToObj(cartStr);
                var count = 0;//商品总数
                var amount = 0;//总价格
                for(var id in cartObj){
                    var goodId = cartObj[id];
                    //'<h3>品牌：' + parentName + '</h3><ul><li><div class="product_img"><a href="' + goodId.link + '"><img src="../' + goodId.img + '" alt="' + goodId.name + '"/></a></div><div class="product_details"><div class="product_name"><a href="' + goodId.link + '">' + goodId.name + '</a></div><div class="details"><span class="color">颜色：<i>蓝色</i></span><span class="size">尺码：<i>S</i> </span></div></div><div class="price"><p class="price_old">' + goodId.oldPrice + '</p><p class="price_new">' + goodId.newPrice + '</p></div><div class="number clearfix"><span class="minus">-</span><input class="import_num" type="text" value="' + goodId.num + '"/><span class="add">+</span></div><div class="subtotal"><p>' + goodId.newPrice + '</p></div><div class="handle"><a class="collect" href="#">移入收藏夹</a><br/><a class="delete" href="javascript:;">删除</a></div><div class="remark"><a href="#">' + goodId.dis + '</a></div></li></ul>'
                    $(".shopping_have .goodsList").append('<div id="' + goodId.id + '" class="shoppingDel"><h3>品牌：' + parentName + '</h3><ul><li><div class="product_img"><a href="' + goodId.link + '"><img src="' + goodId.img + '" alt="' + goodId.name + '"/></a></div><div class="product_details"><div class="product_name"><a href="' + goodId.link + '">' + goodId.name + '</a></div><div class="details"><span class="color">颜色：<i>蓝色</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="size">尺码：<i>S</i> </span></div></div><div class="price"><p class="price_old">' + goodId.oldPrice + '</p><p class="price_new">￥<i>' + goodId.newPrice + '</i></p></div><div class="number clearfix"><a class="minus" href="javascript:;">-</a><input class="import_num" type="text" value="' + goodId.num + '"/><a href="javascript:;" class="add">+</a></div><div class="subtotal"><p>￥<i>' + goodId.newPrice * goodId.num + '</i>.00</p></div><div class="handle"><a class="collect" href="#">移入收藏夹</a><br/><a class="delete" href="javascript:;">删除</a></div><div class="remark"><a href="#">' + goodId.dis + '</a></div></li></ul></div>');
                    count += parseInt(goodId.num);
                    amount += parseFloat(goodId.num) * parseFloat(goodId.newPrice);
                }
                //将商品数量和总价计算放入页面中
                $(".total_right .pro_total i").html(count);
                $(".total_right .pro_price em").html("￥" + amount);
                $(".total .total_price em").html("￥" + amount);
                //删除
                $(".handle .delete").click(function(){
                    //删除当前的商品，并获取商品的ID
                    var id = $(this).parents(".shoppingDel").remove().attr("id");
                    var cartObj = JSON.parse($.cookie("cart"));
                    delete cartObj[id];
                    $.cookie("cart",JSON.stringify(cartObj),{expires : 7,path : "/"});
                    //获取当前商品的数量及单价，以及总价格
                    var numD = $(this).parents(".handle").siblings(".number").children("input").val();
                    var priceD = $(this).parents(".handle").siblings(".price").children(".price_new").children("i").html();
                    amount -= numD * priceD;
                    $(".total_right .pro_price em").html("￥" + amount);
                    $(".total .total_price em").html("￥" + amount);
                });
                //减法
                $(".number .minus").click(function(){
                    var price = parseFloat($(this).parents(".number").siblings(".price").children(".price_new").children("i").html());//价格
                    var id = $(this).parents(".shoppingDel").attr("id");
                    var cartObj = JSON.parse($.cookie("cart"));
                    if(cartObj[id].num  > 1){
                        cartObj[id].num  --;
                        count --;
                        amount -=parseFloat(price);
                    }
                    //将商品数量和总价计算放入页面中
                    $(".total_right .pro_total i").html(count);
                    $(".total_right .pro_price em").html("￥" + amount);
                    $(".total .total_price em").html("￥" + amount);
                    $(this).siblings("input").val(cartObj[id].num);
                    $(this).parents(".number").siblings(".subtotal").children("p").children("i").html(cartObj[id].num * price);
                    $.cookie("cart",JSON.stringify(cartObj),{expires : 7,path : "/"});
                });
                //增加
                $(".number .add").click(function(){
                    var price = $(this).parents(".number").siblings(".price").children(".price_new").children("i").html();//价格
                    var id = $(this).parents(".shoppingDel").attr("id");
                    var cartObj = JSON.parse($.cookie("cart"));
                    cartObj[id].num ++;
                    count ++;
                    amount += parseFloat(price);
                    //将商品数量和总价计算放入页面中
                    $(".total_right .pro_total i").html(count);
                    $(".total_right .pro_price em").html("￥" + amount);
                    $(".total .total_price em").html("￥" + amount);
                    $(this).siblings("input").val(cartObj[id].num);
                    $(this).parents(".number").siblings(".subtotal").children("p").children("i").html(cartObj[id].num * price);
                    $.cookie("cart",JSON.stringify(cartObj),{expires : 7,path : "/"});
                });
                //失焦事件
                $(".import_num").blur(function(){
                    var text = $(this).val();
                    var re = /^\d+$/;
                    var count1 = 0;
                    var amount1 = 0;
                    var proId = $(this).parents(".shoppingDel").attr("id");
                    if(re.test(text) && parseInt(text) > 0){
                        cartObj[proId].num = text;
                        $.cookie("cart",JSON.stringify(cartObj),{expires : 7, path : "/"});
                        for(var id in cartObj){
                            count1 += parseInt(cartObj[id].num);
                            amount1 += parseFloat(cartObj[id].num) * parseFloat(cartObj[id].newPrice);
                        }
                        $(".total_right .pro_total i").html(count1);
                        $(this).parents(".number").siblings(".subtotal").children("p").children("i").html(cartObj[proId].num * cartObj[proId].newPrice);
                        $(".total_right .pro_price em").html("￥" + amount1);
                        $(".total .total_price em").html("￥" + amount1);
                        $.cookie("cart",JSON.stringify(cartObj),{expires: 7, path : "/"});
                    }else{
                        if(parseInt(text) <= 0){
                            $(this).val(cartObj[proId].num);
                        }else{
                            $(this).val(cartObj[proId].num);
                        }
                    }
                });
                //内容页稿件链接跳转
                $(".shoppingDel .product_img a ,.shoppingDel .product_name a").click(function(){
                    var id = $(this).parents(".shoppingDel").attr("id");
                    $.cookie("goodId",id ,{expires : 7,path : "/"});
                });
            }
            //将字符串转为对象
            function covertStrToObj(str){
                if(!str){
                    return {};
                }
                return JSON.parse(str);
            }
        }
        getCookie();

    }
    return {
        cart : cart
    }
});
