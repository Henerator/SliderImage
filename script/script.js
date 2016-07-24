$(document).ready(function() {
	var timer;

	$(".slider").mouseover(function() {
		if (timer != null) clearTimeout(timer);
	});
	$(".slider").mouseleave(function() {
		timer = setTimeout(nextSlide, 3000);
	});

	//	find all slides
	var slides = $("li.slider_image");
	//	hide
	var currentSlide = 0;
	var previousSlide = -1;
	slides.each(function() {
		$(this).css("top", "-324px");
		$(this).css("opacity", "0.0");
	});
	// //	show first slide
	$(slides[0]).css("top", "0px");
	$(slides[0]).css("opacity", "1.0");
	// $(slides[0]).addClass("active");

	function nextSlide() {
		if (previousSlide >= 0) {
			$(slides[previousSlide]).css("top", "-324px");
		}

		previousSlide = currentSlide;
		currentSlide++;
		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}

		// $(slides).each(function() {
		// 	$(this).removeClass("active");
		// });
		// $(slides[currentSlide]).addClass("active");

		$(slides[previousSlide]).css("top", "324px");
		$(slides[previousSlide]).css("opacity", "0.0");

		$(slides[currentSlide]).css("top", "0px");
		$(slides[currentSlide]).css("opacity", "1.0");
		timer = setTimeout(nextSlide, 3000);
	}

	timer = setTimeout(nextSlide, 3000);
});