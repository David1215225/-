require.config({paths:{jquery:"jquery-1.11.3",cookie:"jquery.cookie",register:"register"}}),require(["jquery","cookie","register"],function(e,o,r){e(function(){e(".top").load("top.html",function(){r.register()}),e(".footer").load("bottom.html")})});