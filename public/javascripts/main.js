$(function () {
    const socket = io();
    
    socket.on('data', function(Rname,Rstatus) {

    	if(Rstatus) {
    		$('#' + Rname).removeClass('off').addClass('on').data('status', true);
    	}else{
    		$('#' + Rname).removeClass('on').addClass('off').data('status', false);
    	}
    });

    $('.light').on('click', function(e) {
    	var name = $(this).data('name');
    	var status = $(this).data('status');
		socket.emit('data', name, status);
    });

    $(window).on('resize', resizeHandler);
    resizeHandler();
});

function resizeHandler() {
	var w = $(window).width();
	var h = $(window).height();
	if(w < 576)			$('.light').css('height', h/6);
	else if(w < 768)	$('.light').css('height', h/4);
	else if(w < 992)	$('.light').css('height', h/3);
	else				$('.light').css('height', h/2);

}
