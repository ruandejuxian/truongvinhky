// Fn Auto width input field
$.fn.textWidth = function(text, font) {
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl =      $('<span>').hide().appendTo(document.body);
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
    return $.fn.textWidth.fakeEl.width(); 
};

$(document).ready(function(e) {
    // Back top
	$('#back-top,.go-top').click(function(){
		$('html, body').animate({
			scrollTop:0	
		},800)	
	})

	$('.menu .icon').click(function(event) {
		$('.menu > ul').stop(true, true).slideToggle();
	});

	// Menu mobile
	$('.i-menu').click(function(){
		$('#menu').slideToggle();	
	})

	$('.box-tab-tit div').click(function(event) {
		if(!$(this).hasClass('active'))
		{
			$(this).parent('.box-tab-tit').children('div').not($(this)).removeClass('active');
			$(this).addClass('active');
			var i=parseInt($(this).index())+1;
			$(this).parent('.box-tab-tit').next().find('.box-tab-con').hide();
			$(this).parent('.box-tab-tit').next().find('.box-tab-con:nth-child('+i+')').show();
		}
	});

	$('.giohang-cl').click(function(event) {
		$('#giohang').removeClass('active');
	});

	$('.tbl-giohang').on('change', '.ajax_soluong', function(event) {
		// ajax cap nhat so luong
		var id=$(this).attr('data-key');
		var sl=$(this).val();
		var $gia=$('.p'+$(this).attr('data-id'));
		if(sl<1)
		{
			sl=1;
		}
		$this=$(this);
		$.ajax({
			url: 'ajax/soluong.php',
			type: 'POST',
			dataType: 'json',
			data: {id: id,sl:sl},
			success:function(res){
				$this.parent().next().html(res.thanhtien);
				$('.giohang-thanhtien span').html(res.tongtien);
				$gia.html(res.gia);
			}
		})
	});

	$('.tbl-giohang').on('click', '.del-cart', function(event) {
		// Xoa san pham khoi gio hang
		var id=$(this).attr('data-key');
		var pid=$(this).attr('data-id');
		$this=$(this);
		$.ajax({
			url: 'ajax/delcart.php',
			type: 'POST',
			dataType: 'json',
			data: {id: id,pid:pid},
			success:function(res){
				$('.giohang-thanhtien span').html(res.thanhtien);
				$('.giohang-tit span,.banner-ab-gh span').html(res.soluong);
				$('.p'+pid).html(res.gia);
				$this.parents('.tr').remove();
			}
		})
		return false;
	});

	$('.ajax_cart').click(function(event) {
        /* Xu ly gio hang*/
        var id=$(this).attr('data-id');
        var sl=$('#quality').val();
        $.ajax({
            url: 'ajax/giohang.php',
            type: 'POST',
            dataType: 'json',
            data: {id: id,sl:sl},
            beforeSend:function(){
                $('.ajax_cart').html('<img src="img/load.gif" width="25"/> Vui lĂ²ng Ä‘á»£i');
            },
            success:function(res){
                $('.ajax_cart').html('<i class="fa fa-shopping-cart" aria-hidden="true"></i> Cho vĂ o giá» hĂ ng');
                $('.banner-ab-gh span,.giohang-tit span').html(res.soluong);
                $('.giohang-thanhtien span').html(res.tongtien);
                $('.tbl-giohang').html(res.giohang);
                $('#giohang').addClass('active');
            }
        })
    });

    $('.ajax_cart_for').click(function(event) {
        $('.row_sp').each(function(index, el) {
        	var id=$(this).attr('data-id');
        	var size=$(this).attr('data-size');
        	var soluong=parseInt($(this).find('.soluong').val());
        	if(soluong>0)
        	{
	        	$.ajax({
		            url: 'ajax/giohang_tt.php',
		            type: 'POST',
		            dataType: 'json',
		            data: {id: id,size:size,soluong:soluong},
		            success:function(res){
		                $('.banner-cart .text').html(res.soluong+' (sp)');
		                $('.giohang-thanhtien span').html(res.tongtien);
		                $('.tbl-giohang').html(res.giohang);
		            }
		        })
	        }
        });
        if($(this).hasClass('btn-pay'))
        {
        	window.location.href='gio-hang';
        }
        $('#giohang').addClass('active');
    });

	// Xu ly nguoi dung bam "thich" san pham
	$('.ajax_like').click(function(event) {
		var id=$(this).attr('data-id');
		var $this=$(this);
		$.ajax({
			url: 'ajax/like.php',
			type: 'POST',
			dataType: 'html',
			data: {id: id},
			success:function(res){
				if(res==0)
				{
					alert('Báº¡n Ä‘Ă£ thĂ­ch sáº£n pháº©m nĂ y rá»“i!');
				}
				else
				{
					$this.children('span').html(res);	
				}
			}
		})
	});

	// Auto width input field
	$('.auto-width').on('input', function() {
	    var padding = $(this).data('pd'); //Works as a minimum width
	    var valWidth = ($(this).textWidth() + padding) + 'px';
	    $(this).css('width', valWidth);
	}).trigger('input');

	//Title left
	$('.left-tit').click(function(event) {
		$('.left-tit').not($(this)).next('.left-box').slideUp();
		$(this).next('.left-box').stop(true, true).slideToggle();
	});

	// Xu ly khi chuyen video
	$('#svi').change(function(event) {
		$('.cvi iframe').attr('src','https://www.youtube.com/embed/'+$(this).val());
	});
	$('#svi1').change(function(event) {
		var t=$(this).children('option:selected').data('type');
		if(t=='yt')
		{
			var tx='<iframe width="560" height="315" src="https://www.youtube.com/embed/'+$(this).val()+'" frameborder="0" allowfullscreen></iframe>';
			$('.cvi').html(tx);
		}
		else
		{
			var tx='<video width="320" height="240" controls><source src="'+$(this).val()+'" type="video/mp4">Your browser does not support the video tag.</video>';
			$('.cvi').html(tx);

		}
	});

	$('#form-tv .btn-cl').click(function(event) {
		$('#form-tv').removeClass('active');
    });
});

$(window).on('scroll',function(){
	$pageY=$(window).scrollTop();
	if($pageY>300)
	{
		$('#back-top').fadeIn();
	}
	else
	{
		$('#back-top').fadeOut();
	}

	if($pageY>$('#banner').height())
	{
		$('#menu').addClass('fix');
	}
	else
	{
		$('#menu').removeClass('fix');
	}
})