$(document).ready(function() {
	var sliders = [];
	//	search all sliders and launch them
	$(".slider").each(function() {
		sliders.push(new RSlider(this));
	});
});



function RSlider(slider_div) {
	this.slider;
	this.slides;
	this.currentSlide	= 0;
	this.previousSlide 	= -1;
	
	this.slideChangeDelay = 3000;
	this.timer = null;

	this.init(slider_div);

	return {
		changeDelay : function(value) {
			this.slideChangeDelay = value;
		}
	};
}

RSlider.prototype.nextSlide = function() {
	var slides = this.slides;

	if (this.previousSlide >= 0) {
		$(slides[this.previousSlide]).css("top", "-324px");
	}

	this.previousSlide = this.currentSlide;
	this.currentSlide++;
	if (this.currentSlide >= slides.length) {
		this.currentSlide = 0;
	}

	$(slides[this.previousSlide]).css("top", "324px");
	$(slides[this.previousSlide]).css("opacity", "0.0");

	$(slides[this.currentSlide]).css("top", "0px");
	$(slides[this.currentSlide]).css("opacity", "1.0");
	this.timer = setTimeout(this.nextSlide.bind(this), this.slideChangeDelay);
}
RSlider.prototype.init = function(slider_div) {
	var self = this;

	self.slider = $(slider_div);
	self.slider.mouseover(function() {
		if (self.timer != null) clearTimeout(self.timer);
	});
	self.slider.mouseleave(function() {
		self.timer = setTimeout(self.nextSlide.bind(self), self.slideChangeDelay);
	});

	//	find all slides
	self.slides = self.slider.find($("li.slider_image"));
	//	hide
	self.slides.each(function() {
		$(this).css("top", "-324px");
		$(this).css("opacity", "0.0");
	});
	//	show first slide
	$(this.slides[0]).css("top", "0px");
	$(this.slides[0]).css("opacity", "1.0");

	self.timer = setTimeout(self.nextSlide.bind(self), self.slideChangeDelay);
}