const selection$ = new rxjs.Subject(null);
let selection = {
	previous: null,
	current: null,
	release() {
		this.previous = this.current;
		this.current = null;
		selection$.next(this);
	},
	update(callBack) {
		const newValue = callBack(selection);
		this.previous = newValue.previous;
		this.current = newValue.current;
		selection$.next(this);
	},
};
