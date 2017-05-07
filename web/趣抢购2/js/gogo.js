// JavaScript Document

//大图切换板块

window.onload=function(){
	
	var oban=document.getElementById('xx_boxbox');
	var aImg=oban.getElementsByTagName('img');
	var aIpt=oban.getElementsByTagName('a');
	var oUl=oban.getElementsByTagName('ul')[0];
	var aLi=oban.getElementsByTagName('li');
	var num=0;
	
	var timer=null;
	
	function fn2(){
	timer=setInterval(function(){
			num++;
			num%=3;
			fn1();
			},2000)
	};
	oban.onmousemove=function(){
		clearInterval(timer);
		setTimeout(fn3,200)
		function fn3(){
			
		aIpt[0].style.cssText="opacity:0.6;filter:alpha(opacity=60);"
		aIpt[1].style.cssText="opacity:0.6;filter:alpha(opacity=60);"
/*		aIpt[0].style.opacity="0.6";
		aIpt[1].style.opacity="0.6";
*/		
			
		};
		};
	oban.onmouseout=function(){
		fn2();
		setTimeout(fn4,200)
		function fn4(){
			
		aIpt[0].style.cssText="opacity:0.15;filter:alpha(opacity=15);"
		aIpt[1].style.cssText="opacity:0.15;filter:alpha(opacity=15);"
/*		aIpt[0].style.opacity="0.15";
		aIpt[1].style.opacity="0.15";
*/		
		
		};
		
	};
	
	//初始化
	function fn1(){
		for(var i=0;i<3;i++){
			aImg[i].style.display="none";
		};
		aImg[num].style.display="block";
		
		for(var i=0;i<3;i++){
			aLi[i].className='';
		};
		aLi[num].className='xx_cur';
	};
	fn1();
	
	aIpt[1].onclick=function(){
		num++;
		if(num===3){
			num=0;
			}
		fn1();
	};
	
	aIpt[0].onclick=function(){
		num--;
		if(num===-1){
			num=2;
			}
		fn1();
	};
	
	for(var i=0;i<3;i++){
		aLi[i].index=i;
		
		aLi[i].onclick=function(){
			num=this.index;
			fn1();
			};
		
	};
	
	/*倒计时*/
	fn2Time('xx_time1','2016','1','25','24','00','00');
	fn2Time('xx_time2','2016','2','25','24','00','00');
	fn2Time('xx_time3','2016','3','25','24','00','00');
	fn2Time('xx_time4','2016','4','25','24','00','00');
	fn2Time('xx_time5','2016','5','25','24','00','00');
	fn2Time('xx_time6','2016','6','25','24','00','00');
	
	
	function fn2Time(id,a,b,c,d,e,f){;
		var oDiv=document.getElementById(id);
		var aSpan=oDiv.getElementsByTagName('span');
		setInterval(fnTime,1000)	
			
		fnTime()	
		function fnTime(){;	
			var iNow=new Date();	
			var iNew=new Date(a,b,c,d,e,f);
				
			var t=Math.floor((iNew-iNow)/1000);   
			if(t<0){t=0};
			
			aSpan[0].innerHTML=Math.floor(t/86400);
			aSpan[1].innerHTML=toTwo(Math.floor(t%86400/3600));
			aSpan[2].innerHTML=toTwo(Math.floor(t%86400%3600/60));
			aSpan[3].innerHTML=toTwo(t%60);
		};
		function toTwo(n){return n<10?'0'+n:n;};
	}
	

};	

		

