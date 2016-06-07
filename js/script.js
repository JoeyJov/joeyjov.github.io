$(document).ready(function() {
	/* parallax */
	$('.parallax').parallax();

	/* scrollspy */
	$('.scrollspy').scrollSpy();
})

$('.animate-on-mousehover').on('mouseenter', function(){
	$(this).toggleClass("animated pulse");
}).on("mouseleave", function() {
	$(this).toggleClass("animated pulse");
});
