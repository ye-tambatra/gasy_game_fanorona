const ui = {
	createPoint(player) {
		const point = document.createElement('div');
		point.setAttribute('class', 'point player-' + player);
		return point;
	},

	createHoverPoint(player) {
		let backgroundUrl;
		if (player === 1) {
			backgroundUrl = './assets/player1.png';
		} else if (player === 2) {
			backgroundUrl = './assets/player2.png';
		}
		const point = document.createElement('div');
		point.setAttribute('class', 'hover-point');
		point.style.backgroundImage = `url(${backgroundUrl})`;
		return point;
	},
};
