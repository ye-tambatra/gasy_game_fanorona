const ui = {
	createPoint(player) {
		const point = document.createElement('div');
		point.setAttribute('class', 'point player-' + player);
		return point;
	},

	createHoverPoint(player) {
		let backgroundUrl;
		if (player === 1) {
			backgroundUrl = './assets/rock.jpg';
		} else if (player === 2) {
			backgroundUrl = './assets/point2.jpg';
		}
		const point = document.createElement('div');
		point.setAttribute('class', 'hover-point');
		point.style.backgroundImage = `url(${backgroundUrl})`;
		return point;
	},
};
