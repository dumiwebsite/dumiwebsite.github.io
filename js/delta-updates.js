/* Delta Construct: updates by Jump Web Design (23 November 2026). */
(function () {
	// YouTube players load only when someone taps play, so the project pages open fast.
	document.querySelectorAll('.yt-facade').forEach(function (el) {
		el.addEventListener('click', function () {
			var f = document.createElement('iframe');
			f.src = 'https://www.youtube.com/embed/' + el.getAttribute('data-yt') + '?autoplay=1&rel=0';
			f.title = el.getAttribute('aria-label') || 'Project video';
			f.setAttribute('frameborder', '0');
			f.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
			f.setAttribute('allowfullscreen', '');
			el.parentNode.replaceChild(f, el);
		});
	});
})();
