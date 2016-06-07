$(document).ready(function() {
	/* parallax */
	$('.parallax').parallax();

	/* scrollspy */
	$('.scrollspy').scrollSpy();
})

/* pulse action on skills */
$('.animate-on-mousehover').on('mouseenter', function(){
	$(this).toggleClass("animated pulse");
}).on("mouseleave", function() { /* reactivate pulse action */
	$(this).toggleClass("animated pulse");
});
