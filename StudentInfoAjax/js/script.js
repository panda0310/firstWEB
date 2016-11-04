(function(){
	function getData(){
		$.ajax({
			type:'get',
			async:true,
			url:'http://localhost/wwwroot/Unit4-2/1102/StudentInfoAjax/studentInfoPHP/select.php',
			success:function(data){
				insertHTML(data);
			}
		})
	};
	getData();
	function insertHTML(data){
		var html = '';
		$.each(data,function(){
			html += '<tr><td>'+$(this)[0].id+'</td><td>'+$(this)[0].uname+'</td><td>'+$(this)[0].age+'</td><td>'+$(this)[0].sex+'</td><td>'+$(this)[0].num+'</td><td><a href = "javascript:;" class = "update">修改</a><a href = "javascript:;" class = "del">删除</a></td></tr>';
		});
		$('#tablecon').html(html);
	}
	//ADD
	$('.submit').click(function(){
		$('.box').fadeIn();
		$.ajax({
			async:true,
			url:'http://localhost/wwwroot/Unit4-2/1102/StudentInfoAjax/studentInfoPHP/add.php',
			data:{
				'uname':$('#uname').val(),
				'age':$('#age').val(),
				'sex':$('#sex').val(),
				'num':$('#num').val()
			},
			dataType:'text',
			type:'post',
			success:function(data){
				if (data == 'success'){
					getData();
					$('.box').fadeOut();
				};
				
			}
		})
	})
//UPDATE
$('.updateWrap').hide();
	$(document).on('click','.update',function(){
		var tr = $(this).parent().parent();
		var n = tr.children().eq(1).html();
		var a = tr.children().eq(2).html();
		var s = tr.children().eq(3).html();
		var nu = tr.children().eq(4).html();
		id = tr.children().eq(0).html();
		$('.updateWrap').show();
		$('#unames').val(n);
		$('#ages').val(a);
		$('#sexs').val(s);
		$('#nums').val(nu);
	});
	$('.sure').click(function(){
		id = parseInt(id);
		$.ajax({
			type:'post',
			url:'http://localhost/wwwroot/Unit4-2/1102/StudentInfoAjax/studentInfoPHP/update.php',
			async:true,
			data:{
				'id':id,
				'uname':$('#unames').val(),
				'age':$('#ages').val(),
				'sex':$('#sexs').val(),
				'num':$('#nums').val()
			},
			dataType:'text',
			success:function(data){
				if(data == 'success'){
					$('.updateWrap').hide();
					getData();
				}
			}
		})
	})
})();

(function(){
	function show(){
		$('.box').hide();
		$('.add').click(function(){
			$('.box').fadeIn();
		})
	}
	show();
})();
//DELETE
(function(){
	$(document).on('click','.del',function(){
		var tr = $(this).parent().parent();
		var id = tr.children().eq(0).html();
		id = parseInt(id);
		$.ajax({
			type:'post',
			url:'http://localhost/wwwroot/Unit4-2/1102/StudentInfoAjax/studentInfoPHP/delete.php',
			async:true,
			data:{
				'id':id
			},
			dataType:'text',
			success:function(data){
				if(data == 'success'){
					tr.remove();
				}
			}
		})
	})
})();