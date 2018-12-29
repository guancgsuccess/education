//初始化富文本编辑器
$(document).ready(function() {
	$('#editor').summernote({
		lang: 'zh-CN',
		minHeight: 200,
	});

});

//二级联动分类
var area = [
	['皮艺', '木工', '陶艺', '编织', '饰品'],
	['国画', '书法', '摄影', '版画'],
	['手工书', '印章', '园艺', '食品', '模型']
];

function changeSelect() {
	//获得项目下拉框的对象
	var slt_project = document.form1.project;
	//获得升级区域下拉框的对象
	var slt_area = document.form1.area;
	//得到项目对应的升级区域数组
	var project_area = area[slt_project.selectedIndex - 1];
	//清空升级区域下拉框，仅留提示选项
	slt_area.length = 1;
	//将升级区域数组中的值填充到升级区域下拉框中
	for (var i = 0; i < project_area.length; i++) {
		slt_area[i + 1] = new Option(project_area[i], project_area[i]);
	}
}

//手机屏幕下隐藏图片上传预览框
var client_width = window.screen.width;
if (client_width<=768){
	var obj = document.getElementById("input4");
	obj.setAttribute("data-show-preview",false);
}


function initFileInput() {
    var projectfileoptions = {
        language : 'zh'
    }
    $("#input4").fileinput(projectfileoptions);
}




