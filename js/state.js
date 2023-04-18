const state = {
	value: [1, 1, 0, 1, 0, 2, 0, 2, 2],
	update(callBack) {
		this.value = callBack(this.value);
		state$.next(this.value);
	},
};

const state$ = new rxjs.BehaviorSubject(state.value);
