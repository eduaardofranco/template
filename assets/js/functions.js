/*
 Biblioteca de funções para site
 Autor: Afonso Alban
 ₢OWS
 
 Última revisão: 12/11/2013
 */

$(document).ready(function() {
	/* BOTAO TOPO */
	var tempo = 1000;
	var offset = 200;
	$('body').append('<a href="#" class="ao-topo"></a>');
	$(window).scroll(function(){
		if( $(this).scrollTop() > offset ){
			$('.ao-topo').fadeIn(tempo);
		} else {
			$('.ao-topo').fadeOut(tempo);
		}
	});
	$('.ao-topo').click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, tempo);
		return false;
	});
	/* FIM BOTAO TOPO */

});