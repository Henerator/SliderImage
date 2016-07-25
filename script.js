$(document).ready(function() {
	function Slider(slider_div) {
		var $slider = $(slider_div);
		var slides;
		var currentSlide = 0;
		var previousSlide = -1;
		var timer = null;

		function nextSlide() {
			if (previousSlide >= 0) {
				$(slides[previousSlide]).css("top", "-324px");
			}

			previousSlide = currentSlide;
			currentSlide++;
			if (currentSlide >= slides.length) {
				currentSlide = 0;
			}

			$(slides[previousSlide]).css("top", "324px");
			$(slides[previousSlide]).css("opacity", "0.0");

			$(slides[currentSlide]).css("top", "0px");
			$(slides[currentSlide]).css("opacity", "1.0");
			timer = setTimeout(nextSlide, 3000);
		}

		function init() {
			$slider.mouseover(function() {
				if (timer != null) clearTimeout(timer);
			});
			$slider.mouseleave(function() {
				timer = setTimeout(nextSlide, 3000);
			});

			//	find all slides
			slides = $("li.slider_image");
			//	hide
			slides.each(function() {
				$(this).css("top", "-324px");
				$(this).css("opacity", "0.0");
			});
			//	show first slide
			$(slides[0]).css("top", "0px");
			$(slides[0]).css("opacity", "1.0");

			timer = setTimeout(nextSlide, 3000);
		}

		init();
	}

	var sliders = [];
	$(".slider").each(function() {
		sliders.push(new Slider(this));

	});
	console.log(sliders);
});