import {
    SET_USER_GUESS,
    setUserGuess,
    SET_NEW_GAME,
    setNewGame
} from '../actions/game.actions';

describe('setNewGame', () => {
    it('Should return the action', () => {
        const action = setNewGame();
        expect(action.type).toEqual(SET_NEW_GAME);
    });
});

describe('setUserGuess', () => {
    it('Should return the action', () => {
        const guess = 10;
        const action = setUserGuess(guess);
        expect(action.type).toEqual(SET_USER_GUESS);
        expect(action.payload.userGuess).toEqual(guess);
    });
});