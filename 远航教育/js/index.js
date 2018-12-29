$(function() {
	layui.use(['layer'], function() {
		var layer = layui.layer
	});
	//封装alert成为layer方式
	if(typeof(layer)) {
		alert = function(message) {
			layer.msg(message, {
				offset: '150px'
			});
		}
	}
	
	//登陆
	$('#loginModal').find('.btn-primary').click(function() {
		var username = $('#username').val();
		var password = $('#password').val();
		if(username == '') {
			alert('请输入用户名！');
		} else if(username.length < 6) {
			alert('用户名的格式不正确！');
		} else if(password == '') {
			alert('请输入密码！');
		} else if(password.length < 6) {
			alert('密码格式不正确！');
		} else {
			$.ajax({
				type: "get",
				url: "../data.json",
				success: function(e) {
					if(e.username == username && e.password == password) {
						alert('登陆成功!');
						$('a[data-target="#loginModal"]').parent().parent().html('<li class="dropdown" id="pc_menu"><img src="../img/head.png" alt="..." id="my" class="dropdown-toggle img-circle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span id="myname">xiaoguan</span><ul class="dropdown-menu" id="mymenu"><li><a href="infocenter.html">个人中心</a></li><li><a href="pub-blog.html">发布博文</a><li><a href="pub-course.html">发布教程</a></li><li><a href="pub-works.html">发布作品</a></li><li><a href="infoedit.html">设置</a></li></ul></li>');
						$('#logo').append('<li class="dropdown" id="mo_menu" style="display:none"><img src="../img/head.png" alt="..." id="my" class="dropdown-toggle img-circle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span id="myname">xiaoguan</span><ul class="dropdown-menu" id="mymenu"><li><a href="infocenter.html">个人中心</a></li><li><a href="pub-blog.html">发布博文</a><li><a href="pub-course.html">发布教程</a></li><li><a href="pub-works.html">发布作品</a></li><li><a href="infoedit.html">设置</a></li></ul></li>')
						$('#loginModal').modal('hide')
					} else {
						alert('账号或密码错误！');
					}
				},
				error: function(e) {
					alert('网络错误，请稍后再试！');
				}
			});
		}
	})
})