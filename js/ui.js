const ui = {
	createPoint(player) {
		const point = document.createElement('div');
		point.setAttribute('class', 'point player-' + player);
		return point;
	},

	createHoverPoint() {
		const point = document.createElement('div');
		point.setAttribute('class', 'hover-point');
		return point;
	},
};
