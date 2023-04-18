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
		for (let j of adjacency[i]) {
			if (stateValue[j] === 0) {
				availableDirections.push(j);
			}
		}
		return availableDirections;
	},

	checkWinner(stateValue) {
		// Define winning patterns
		const winningPatterns = [
			// Rows
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			// Columns
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			// Diagonals
			[0, 4, 8],
			[2, 4, 6],
		];

		// Check for winning patterns
		for (const pattern of winningPatterns) {
			const [a, b, c] = pattern;
			if (
				stateValue[a] &&
				stateValue[a] === stateValue[b] &&
				stateValue[a] === stateValue[c]
			) {
				return stateValue[a]; // Return the winning symbol (either "X" or "O")
			}
		}

		return null; // No winner found
	},
};
