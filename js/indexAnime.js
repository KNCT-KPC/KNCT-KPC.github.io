AOS.init({
    // エフェクト設定
    delay: 0,
    offset: 40,
    anchorPlacement: 'top-bottom'
});

// コンテナの分だけ空白を確保する
function SpaseContainer() {
	var container = document.getElementById('info_container');
	var containerHeight = container.clientHeight;

	$('.bg_container').css('height', containerHeight);
}

window.addEventListener('DOMContentLoaded', function() {
	ChangeMainVisualHeight();
});

window.addEventListener('resize', function() {
	ChangeMainVisualHeight();
});