define(function(){
	function register(){
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
        //注册方式切换
        (function(){
            var $A = $(".cut a");
            //var $email = $(".register_email");
            //var $form = $(".register_list form");
            //var $emailForm = $(".email_form");
            //var on = false;
            $A.click(function(){
                var index = $A.index(this);
                //console.log(index);
                $A.removeClass("on");
                $(this).parents(".cut").siblings(".register_list").children("form").hide();
                $(this).addClass("on");
                $(this).parents(".cut").siblings(".register_list").children("form").eq(index).show();
            });
        })();
        //手机注册验证
        function mobileVerify(){
            //手机号码
            var $MobileNum = $(".mobile_text");
            var $ErrorMobile = $(".mobile_error");
            //验证码
            var $AuthNum = $(".auth_text");
            var $ErrorAuth = $(".auth_error");
            //密码
            var $PwdNum = $(".password_text");
            var $ErrorPwd = $(".password_error");
            //确认密码
            var $SubPwd = $(".password_two_text");
            var $ErrorSub = $(".submitP_error");
            //提交按钮
            var $SubmitMobile = $(".submit_mobile");
            //获取所有的input
            var $Text = $(".mobile_form input[type=text],.mobile_form input[type=password]");
            var ok1 = false;
            var ok2 = false;
            var ok3 = false;
            var ok4 = false;
            //console.log($Text);
            var $Tel = /^1[34578]\d{9}$/;//手机
            var $Auth = /^\d{4}$/;//验证码
            var $Password = /(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,16}/;//密码
            $MobileNum.blur(function(){
                if($MobileNum.val() == "" || !$Tel.test($MobileNum.val())){
                    $ErrorMobile.html("手机格式错误");
                }else{
                    $ErrorMobile.html("<img src=../images/keyizhuce.gif>");
                    ok1 = true;
                }
            });
            //验证码
            //$AuthNum.blur(function(){
            //    if($AuthNum.val() == "" || !$Auth.test($AuthNum.val())){
            //        $ErrorAuth.html("验证码输入错误");
            //    }else{ok2 = true;}
            //})
            //密码验证
            var str = "";
            $PwdNum.blur(function(){
                if($PwdNum.val() == "" || $PwdNum.val().length < 6){
                    $ErrorPwd.html("密码长度不能小于6位");
                }else if($PwdNum.val().length > 16){
                    $ErrorPwd.html("密码长度不能大于16位");
                }else if(!$Password.test($PwdNum.val())){
                    $ErrorPwd.html("密码必须为6-16位字母与数字组合");
                }else{
                    $ErrorPwd.html("<img src=../images/keyizhuce.gif>");
                    str = $PwdNum.val();
                    ok3 = true;
                }
            });
            //确认密码
            $SubPwd.blur(function(){
                if($SubPwd.val() == "" || $SubPwd.val().length < 6){
                    $ErrorSub.html("密码长度不能小于6位");
                }else if($SubPwd.val() != str){
                    $ErrorSub.html("两次输入的密码不一致");
                }else{
                    $ErrorSub.html("<img src=../images/keyizhuce.gif>");
                    ok4 = true;
                }
            });
            //提交按钮
            $SubmitMobile.click(function(){
                if(ok1 && ok2 && ok3 && ok4){
                    $(".mobile_form").submit();
                }else{
                    alert("请完成注册内容");
                    return false;
                }
            });
        }
        mobileVerify();
        //邮箱注册验证
        function emailVerify(){
            //邮箱
            var $EmailNum = $(".email_text");
            var $ErrorEmail = $(".email_error");
            //密码
            var $passwordNum = $(".password_text_email");
            var $ErrorPwd = $(".password_error_email");
            //确认密码
            var $SubPwd = $(".password_two_text_email");
            var $ErrorSub = $(".submitP_error_email");
            //验证码
            var $Ver = $(".email_verify input");
            var $VerA = $(".email_verify a");
            var $ErrorVerify = $(".verify_error_email");
            //确认登陆
            var $SubmitEmail = $(".submit_email");
            var ok1 = false;
            var ok2 = false;
            var ok3 = false;
            var ok4 = false;
            //正则规则
            var $Email = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;//邮箱
            var $Password = /(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,16}/;//密码
            //邮箱
            $EmailNum.blur(function(){
                if($EmailNum.val() == ""){
                    $ErrorEmail.html("请填写E-mail");
                }else{
                    if($Email.test($EmailNum.val())){
                        $ErrorEmail.html("<img src=../images/keyizhuce.gif>");
                        ok1 = true;
                    }else{
                        $ErrorEmail.html("E-mail格式不正确");
                    }
                }
            });
            //密码
            var str = "";
            $passwordNum.blur(function(){
                if($passwordNum.val() == "" || $passwordNum.val().length < 6){
                    $ErrorPwd.html("密码长度不能小于6位");
                }else if($Password.test($passwordNum.val())){
                    $ErrorPwd.html("<img src=../images/keyizhuce.gif>");
                    str = $passwordNum.val();
                    ok2 = true;
                }else{
                    $ErrorPwd.html("密码必须为6-16位数字与字母的组合");
                }
            });
            //确认密码
            $SubPwd.blur(function(){
                if($SubPwd.val() == "" || $SubPwd.val().length < 6){
                    $ErrorSub.html("密码长度不能小于6");
                }else{
                    if(str == $SubPwd.val()){
                        $ErrorSub.html("<img src=../images/keyizhuce.gif>");
                        ok3 = true;
                    }else{
                        $ErrorSub.html("两次输入的密码不一致");
                    }
                }
            });
            //验证码
            var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];//35
            //生成随机数的函数
            function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
            //从数组中找到四个随机数
            var str1 = "";
            //生成验证码并放入页面中
            function verify(){
                str1 = "";
                for(var i = 0; i < 4; i ++){
                    str1 += arr[random(1,35)];
                }
                $VerA.html(str1);
            }
            verify();
            $VerA.click(function(){
                verify();
            });
            $Ver.blur(function(){
                if($Ver.val() == ""){
                    $ErrorVerify.html("验证码不能为空");
                }else if($Ver.val().toLowerCase() == str1){
                    $ErrorVerify.html("<img src=../images/keyizhuce.gif>");
                    ok4 = true;
                }else{
                    $ErrorVerify.html("验证码错误");
                }
            });
            //点击登陆
            $SubmitEmail.click(function(){
                if(ok1 && ok2 && ok3 && ok4){
                    $(".email_form").submit();
                }else{
                    alert("请完成注册内容");
                    return false;
                }
            });
        }
        emailVerify();
	}
	return {
		register : register
	}
});