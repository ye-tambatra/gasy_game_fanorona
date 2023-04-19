const playerHtml = $('.current-player');
const restartButton = $('.restart');

player$.subscribe((value) => {
	if (value === PLAYER_1) {
		playerHtml.css('background-image', "url('./assets/player1.png')");
	} else if (value === PLAYER_2) {
		playerHtml.css('background-image', "url('./assets/player2.png')");
	}
});

restartButton.on('click', function () {
	restartGame();
});
function restartGame() {
	player = PLAYER_1;
	state.update(() => [1, 1, 0, 1, 0, 2, 0, 2, 2]);
	initPoints();
	isOver = false;
}
