const logic = {
	getAvailableDirections(stateValue, i) {
		const adjacency = [
			[1, 3, 4],
			[0, 4, 2],
			[1, 4, 5],
			[0, 6, 4],
			[0, 1, 2, 3, 5, 6, 7, 8],
			[2, 4, 8],
			[3, 4, 7],
			[6, 4, 8],
			[7, 4, 5],
		];
		const availableDirections = [];
		for (let neighbor of adjacency[i]) {
			if (stateValue[neighbor] === 0) {
				availableDirections.push(neighbor);
			}
		}
		return availableDirections;
	},

	checkWinner(stateValue) {
		const winningPatterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (const pattern of winningPatterns) {
			const [a, b, c] = pattern;
			if (
				stateValue[a] &&
				stateValue[a] === stateValue[b] &&
				stateValue[a] === stateValue[c]
			) {
				return stateValue[a];
			}
		}

		return null;
	},
};
