import {SET_USER_GUESS, SET_NEW_GAME} from '../actions/game.actions';

const initialState = {
    randomNumber: Math.floor(Math.random()*100) + 1,
    userGuess: []
};

export const gameReducer = (state=initialState, action) => {
    console.log(action);
    if (action.type === SET_USER_GUESS) {
        return {...state, userGuess: [...state.userGuess, action.payload.userGuess]}
    }
    else if (action.type === SET_NEW_GAME) {
        return initialState
    }
    return state;
};