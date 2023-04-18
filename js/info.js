const playerHtml = $('.current-player');
const restartButton = $('.restart');

player$.subscribe((value) => {
	if (value === PLAYER_1) {
		playerHtml.css('background-image', "url('./assets/rock.jpg')");
	} else if (value === PLAYER_2) {
		playerHtml.css('background-image', "url('./assets/point2.jpg')");
	}
});

restartButton.on('click', function () {
	restartGame();
});
function restartGame() {
	player = PLAYER_1;
	state.update(() => [1, 1, 0, 1, 0, 2, 0, 2, 2]);
	initPoints();
}
