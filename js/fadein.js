$(document).ready(function () {
	var tags = $('.storytelling-block .fadein')
	if (tags.length > 0) {
		$(tags[0]).addClass('fadein-visible')
	}

	function checkVisibility() {
		var pageTop = $(document).scrollTop()
		var pageBottom = pageTop + $(window).height()
		var tags = $('.storytelling-block .fadein')

		for (var i = 0; i < tags.length; i++) {
			var tag = tags[i]
			if ($(tag).position().top < pageBottom) {
				$(tag).addClass('fadein-visible')
			} else {
				$(tag).addClass('fadein-invisible')
			}
		}
	}
	$(document).on('scroll', checkVisibility)
	$(document).on('mousemove touchmove', checkVisibility)
})
