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

// У новій версії – для всіх елементів .fadein стандартне опасіті 1 (як і у всіх елементів в по замовчуванню), коли відбувається подія mousemove touchmove або scroll, то тим блокам що знизу з'являються назначається .fadein-visible (який назначає опасіті 1), але у нас і так вже у всіх назначено 1, а ті що знизу першого екрану (які поки не видимі) – їм і назначається вже .fadein-invisible (який робить їм опасіті 0) і коли вже вони з'являються у першому екрані, то знизу їм плавно назначається опасіті 1

// А на додачу – вони вже при повторному скрулі не пропадають, як це було у попередній версії. Тобто 1 раз анімація спрацювала і вже повторюватись не буде. Це гуд.
