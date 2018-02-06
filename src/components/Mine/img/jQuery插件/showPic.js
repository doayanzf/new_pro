/*
	图片查看插件
	date：2017年10月12日
*/ 

;(function($){
	$.fn.extend({
		//扩展图片放大查看
		showPic:function(rate){
			//为选中图片添加点击事件
			this.on("click",function(){
				//默认放大2倍
				rate = rate || 2;
				//复制当前图片
				var pic = $(this).clone().css({
					position:"fixed",
					left:"50%",
					top:"50%",
					transform:"translate(-50%,-50%) scale("+ rate +","+ rate +")"
				});
				//显示遮罩
				showLightBox();
				//将图片添加到当前页面
				$("body").append(pic);

				//绑定单击关闭事件
				pic.on("click",function(){
					//移除放大图片
					$(this).remove();
					//隐藏遮罩
					hideLightBox();
				});
			});
		}
	});
	//显示遮罩
	function showLightBox(zIndex){
		if ($("body #lightBox").size()>0){
			$("#lightBox").show();
		}else{
			//创建遮罩对象
			var element = '<div id="lightBox" style="position: fixed;width: 100%;height: 100%;left: 0;top: 0;background-color: rgba(0,0,0,.6);z-index: 3;"></div>';
			//添加遮罩到页面
			$("body").append(element);
		}
		//如果自定义层级
		if(zIndex) $("#lightBox").css("zIndex",zIndex);
	}
	//隐藏遮罩
	function hideLightBox(){
		//恢复层级为默认值
		$("#lightBox").css("zIndex","3").hide();
	}
})(jQuery);