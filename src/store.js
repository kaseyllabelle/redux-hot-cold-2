import {createStore} from 'redux';

import {gameReducer} from './reducers/game.reducers';

export default createStore(gameReducer);