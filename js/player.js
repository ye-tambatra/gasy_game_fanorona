const PLAYER_1 = 1;
const PLAYER_2 = 2;
let player = PLAYER_1;
const player$ = new rxjs.BehaviorSubject(player);
function togglePlayer() {
	player = player === PLAYER_1 ? PLAYER_2 : PLAYER_1;
	player$.next(player);
}
function resetPlayer() {
	player = PLAYER_1;
	player$.next(player);
}
