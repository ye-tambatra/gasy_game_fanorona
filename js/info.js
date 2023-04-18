const playerHtml = $('.current-player');
const restartButton = $('.restart');

player$.subscribe((value) => {
	if (value === PLAYER_1) {
		playerHtml.css('background-color', 'red');
	} else if (value === PLAYER_2) {
		playerHtml.css('background-color', 'blue');
	}
});

restartButton.on('click', function () {
	state.update(() => [1, 1, 0, 1, 0, 2, 0, 2, 2]);
	initPoints();
});
