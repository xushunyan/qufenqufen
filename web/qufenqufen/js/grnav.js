// JavaScript Document
$(document).ready(function() {
var a=0;
$(".geren_navbox li").mouseenter(function(){
	a=$(this).index();
	$(this).addClass("geren_nav_cur");
	$(this).children("span").removeClass("geren_nav_bor").addClass("geren_nav_bor1");
	$(this).children("img").eq(0).addClass("hidden");
	$(this).children("img").eq(1).removeClass("hidden");
	$(this).children("p").addClass("geren_nav_text2");
	});
$(".geren_navbox li").mouseleave(function(){
	a=$(this).index();
	$(this).removeClass("geren_nav_cur");
	$(this).children("span").removeClass("geren_nav_bor1").addClass("geren_nav_bor");
	$(this).children("img").eq(1).addClass("hidden");
	$(this).children("img").eq(0).removeClass("hidden");
	$(this).children("p").removeClass("geren_nav_text2");
	});
});
