define(function(){
	function login(){
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
        //登陆验证
        (function() {
            //获取元素
            var $submit = $(".login_right .log .login_in");
            var $user = $(".login_right .log .user input");
            var $pwd = $(".login_right .log .password input");
            var $ver = $(".login_right .log .verifyP input");
            var $verA = $(".login_right .log .verifyP a");
            var $err = $(".login_right .log .error_msg");
            //设置正则
            var $Tel = /^1[34578]\d{9}$/;//手机
            var $Email = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
            var $Tel1 = /\d+/g;
            //验证码
            var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];//35
            //生成随机数的函数
            function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
            //从数组中找到四个随机数
            var str = "";
            //生成验证码并放入页面中
            function verify(){
                str = "";
                for(var i = 0; i < 4; i ++){
                    str+= arr[random(1,35)];
                }
                $verA.html(str);
            }
            verify();
            $submit.click(function(){
                //获取input中的value值
                var $userV = $user.val();//请输入正确的email地址   请输入正确的手机号
                var $pwdV = $pwd.val();//请输入正确的密码  6-24
                var $verV = $ver.val().toLowerCase();//验证码错误  验证码不能为空
                //验证
                if($userV == ""){
                    $err.css("display","block").html("请输入正确的E-mail");
                }else if( $Email.test($userV) || $Tel.test($userV) ){
                    $err.html("").css("display","none");
                    //密码验证
                    if($pwdV == "" || ($pwdV.length < 6 || $pwdV.length > 24)){
                        $err.css("display","block").html("请输入正确的密码");
                    }else{
                        $err.html("").css("display","none");
                        //console.log($verV);
                        //验证码验证
                        if($verV == ""){
                            $err.css("display","block").html("请输入验证码");
                        }else if($verV != str){
                            $err.css("display","block").html("验证码输入错误");
                        }else{
                            $err.html("").css("display","none");
                            window.open("/handu/index.html");
                        }
                    }
                }else{
                    if($Tel1.test($userV)){
                        $err.css("display","block").html("请输入正确的手机号");
                    }else{
                        $err.css("display","block").html("请输入正确的E-mail");
                    }
                }
            });
            $verA.click(function(){
                verify();
            });
        })()
	}
	return {
		login : login
	}
});
