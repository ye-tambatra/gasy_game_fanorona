const pointsContainer = $('.point-container');
initPoints();

let isOver = false;

pointsContainer.each(function (i) {
	const pointContainer = $(this);
	pointContainer.on('click', function () {
		onPointContainerClick($(this), i);
	});
});

function initPoints() {
	pointsContainer.each(function () {
		$(this).empty();
	});
	pointsContainer[0].append(ui.createPoint(PLAYER_1));
	pointsContainer[1].append(ui.createPoint(PLAYER_1));
	pointsContainer[3].append(ui.createPoint(PLAYER_1));
	pointsContainer[5].append(ui.createPoint(PLAYER_2));
	pointsContainer[7].append(ui.createPoint(PLAYER_2));
	pointsContainer[8].append(ui.createPoint(PLAYER_2));
}

function onPointContainerClick(pointContainer, i) {
	if (isOver) {
		return;
	}

	if (pointContainer.children().length === 0) return;

	const child = $(pointContainer.children()[0]);
	if (
		child.attr('class').includes('hover-point') &&
		selection.current !== null
	) {
		const j = selection.current.index;
		const point = $(pointsContainer[j]).children()[0];
		movePoint($(point), j, i);
		return;
	}

	// Release selection
	if (selection.current !== null && selection.current.index === i) {
		removeHoverPoints();
		selection.release();
		return;
	}

	// Select a point
	const point = $(pointContainer.children()[0]);
	// Cannot select the opponent's point
	if (!point.attr('class').includes('player-' + player)) {
		return;
	}
	selection.update((value) => ({
		previous: value.current,
		current: {
			index: i,
			value: point,
		},
	}));
}

function movePoint(point, start, dest) {
	const animationTime = 150;
	removeHoverPoints();
	point.fadeOut(animationTime);
	setTimeout(() => {
		const newContainer = $(pointsContainer[dest]);
		newContainer.append(point);
		state.update((value) => {
			const newValue = [...value];
			newValue[start] = 0;
			newValue[dest] = player;
			return newValue;
		});
		selection.release();
		togglePlayer();
		point.fadeIn(animationTime);
	}, animationTime);
}

function removeHoverPoints() {
	$('.hover-point').each(function () {
		$(this).remove();
	});
}
function showAvailableDirection(stateValue, i) {
	removeHoverPoints();
	const availableDirections = logic.getAvailableDirections(
		stateValue,
		i,
		player
	);
	availableDirections.forEach((i) => {
		pointsContainer[i].append(ui.createHoverPoint());
	});
}

selection$.subscribe((value) => {
	if (value.previous !== null) {
		value.previous.value.removeClass('selected');
	}
	if (value.current) {
		value.current.value.addClass('selected');
		showAvailableDirection(state.value, value.current.index);
	}
});

state$.subscribe((stateValue) => {
	const winner = logic.checkWinner(stateValue);
	if (winner !== null) {
		isOver = true;
		setTimeout(() => {
			alert('Player ' + winner + ' wins the game');
		}, 300);
	}
});
