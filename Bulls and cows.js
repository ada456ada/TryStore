$(function(){
	var yes=function(){//避免全局污染
		var $textbox=$('#textbox').val();
		var $but1=$('#but1');
		var apple=0;
		var $word=$('#word');
		(function kk(){
			return num=parseInt(Math.random()*100);
		})();
		function plan(){
			$textbox=$('#textbox').val();
			console.log(typeof $textbox);
			var option='';
			if($textbox==num){
				alert('Wonderful! You are right,the answer is '+num);
				$but1[0].value='重置';//利用堵塞延迟value的更新
				return ;
			}else{
				option=($textbox>num)?'大':'小';
			}
			apple+=1;
			$word[0].innerHTML+=$textbox+',这是您的第'+apple+'次尝试,您选的数字偏'+option+'了。<br>';
			//juery对象转原生
		}
		$but1.click(function(){
			var $but2=$but1.val();
			if($but2=='确定'){
				plan();
			}else{
				window.location.reload();
			}
		});
		document.onkeydown=function(event){
			var $but2=$but1.val();
			event=event?event:window.event;
			if(event.keyCode==13){
				if($but2=='确定'){
					plan();
				}else{
					window.location.reload();
				}
			}
		}
		//window.addEventListener('alert',op);      alert()无法监听
	}();
});
//获取text内的value值，标签要被创建在getElementById之前，所以window.onload()或$(function(){})