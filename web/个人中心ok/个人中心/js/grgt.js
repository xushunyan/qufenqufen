// JavaScript Document
$(document).ready(function() {
    
var n=0;
var t=0;
//导航下划线
$(".nav2 span").mouseenter(function(){
	n=$(this).index();
	$(this).addClass("current01").siblings().removeClass("current01");
});	
$(".nav2 span").mouseleave(function(){
	n=$(this).index();
	$(this).removeClass("current01");
});
$(".nav2 span").mouseleave(function(){
	$(".nav2 span:eq(0)").addClass("current01").siblings().removeClass("current01");
});


//导航下拉框
$(".navbox_l_nav1").mouseenter(function(){
	$(".navbox_d").css("display","block");
	});
$(".navbox_l_nav1").mouseleave(function(){
	$(".navbox_d").css("display","none");
	});

$(".navbox_d .nav_1d").mouseenter(function(){
	$(".nav_imgbox1").children("img").eq(0).addClass("hidden").siblings().removeClass("hidden");
    });
$(".navbox_d .nav_1d").mouseleave(function(){
	$(".nav_imgbox1").children("img").eq(1).addClass("hidden").siblings().removeClass("hidden");
    });

$(".navbox_d .nav_2d").mouseenter(function(){
	$(".nav_imgbox2").children("img").eq(0).addClass("hidden").siblings().removeClass("hidden");
    });
$(".navbox_d .nav_2d").mouseleave(function(){
	$(".nav_imgbox2").children("img").eq(1).addClass("hidden").siblings().removeClass("hidden");
    });

$(".navbox_d .nav_3d").mouseenter(function(){
	$(".nav_imgbox3").children("img").eq(0).addClass("hidden").siblings().removeClass("hidden");
    });
$(".navbox_d .nav_3d").mouseleave(function(){
	$(".nav_imgbox3").children("img").eq(1).addClass("hidden").siblings().removeClass("hidden");
    });

$(".navbox_d .nav_4d").mouseenter(function(){
	$(".nav_imgbox4").children("img").eq(0).addClass("hidden").siblings().removeClass("hidden");
    });
$(".navbox_d .nav_4d").mouseleave(function(){
	$(".nav_imgbox4").children("img").eq(1).addClass("hidden").siblings().removeClass("hidden");
    });

$(".navbox_d .nav_5d").mouseenter(function(){
	$(".nav_imgbox5").children("img").eq(0).addClass("hidden").siblings().removeClass("hidden");
    });
$(".navbox_d .nav_5d").mouseleave(function(){
	$(".nav_imgbox5").children("img").eq(1).addClass("hidden").siblings().removeClass("hidden");
    });
	
$(".navbox_d .nav_6d").mouseenter(function(){
	$(".nav_imgbox6").children("img").eq(0).addClass("hidden").siblings().removeClass("hidden");
    });
$(".navbox_d .nav_6d").mouseleave(function(){
	$(".nav_imgbox6").children("img").eq(1).addClass("hidden").siblings().removeClass("hidden");
    });
	
$(".navbox_d .nav_7d").mouseenter(function(){
	$(".nav_imgbox7").children("img").eq(0).addClass("hidden").siblings().removeClass("hidden");
    });
$(".navbox_d .nav_7d").mouseleave(function(){
	$(".nav_imgbox7").children("img").eq(1).addClass("hidden").siblings().removeClass("hidden");
    });
	
$(".navbox_d .nav_8d").mouseenter(function(){
	$(".nav_imgbox8").children("img").eq(0).addClass("hidden").siblings().removeClass("hidden");
    });
$(".navbox_d .nav_8d").mouseleave(function(){
	$(".nav_imgbox8").children("img").eq(1).addClass("hidden").siblings().removeClass("hidden");
    });

$(".navbox_d .nav_d").mouseenter(function(){
	n=$(this).index()
	$(".nav_d2").hide().eq(n).show();
    });
$(".navbox_d .nav_d").mouseleave(function(){
	n=$(this).index()
	$(".nav_d2").hide().eq(n).show();
    });
$(".navbox_l_nav1").mouseleave(function(){
	$(".nav_d2").hide();
    });

$(function(){
		 function state1(){
			 $(".rotate").removeClass("r2"); 
			 $(".rotate").addClass("r1");
			 setTimeout(state2,90);
		 }
		function state2(){	   
		     $(".rotate").removeClass("r1");
		     $(".rotate").addClass("r2"); 
			 setTimeout(state1,90);
		}
		state1();
})
	
//顶部图片	
$(".top_X").click(function(){
	$(".top").css("display","none");});

});
