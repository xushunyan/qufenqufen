/** jQuery Calculation Plug-in**/
$(document).ready(function(){
	$(".add").click(function(){
			var v=$(this).prev().val();						
			var abc=$(this).parent().next().children("span");
			var zjj=abc.eq(0).text();
			var zjjs=zjj.substr(1);
			var dj=zjjs/v;
			var newjj=dj * (++v);
			$(this).prev().val(v);
			
			var qw=abc.eq(1).text();
			var qws=qw.substr(1);
			var dg=qws/(--v);
			var totaldg=dg * (++v);
			
			abc.eq(0).text("￥"+newjj);
			abc.eq(1).text("￥"+totaldg);	

	});
	
	
	$(".reduce").click(function(){
			var v=$(this).next().val();
				if(v == 1){
					v=1
					$(this).next().val(v);
					return false;
				}					
			var abc=$(this).parent().next().children("span");
			var zjj=abc.eq(0).text();
			var zjjs=zjj.substr(1);
			var dj=zjjs/v;	
			var newjj=dj * (--v);

			$(this).next().val(v);	
			
			var qw=abc.eq(1).text();
			var qws=qw.substr(1);
			var dg=qws/(++v);
				
			var totaldg=dg * (--v);
			
			abc.eq(0).text("￥"+newjj);
			abc.eq(1).text("￥"+totaldg);	 
	});

	$("#all_sels").click(function(){
		if(this.checked){   
			$("input[type='checkbox']").prop("checked","checked");
		}else{

			$("input[type='checkbox']").removeProp("checked");

		}
	});
	
});