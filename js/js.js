$(document).ready(function () {

		$(document).ready(function() {
	$(".head-flex").on('click', '.hamburger', function() {
		$(".navbar-nav").toggleClass("menu_show");
	});
});






		$('.titlle-slider').click(function () {
			$(this).toggleClass('in').next().slideToggle();
			$('.titlle-slider').not(this).removeClass('in').next().slideUp();
        });
        $('.your-class').slick();
    });



