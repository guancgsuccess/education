//初始化富文本编辑器
$(document).ready(function() {
	$('#editor').summernote({
		lang: 'zh-CN',
		minHeight: 200,
	});

});

//手机屏幕下隐藏图片上传预览框
var client_width = window.screen.width;
if (client_width<=768){
	var obj = document.getElementById("input4");
	obj.setAttribute("data-show-preview",false);
}



