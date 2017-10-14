import { GAME_SELECTED } from '../actions/action';
import update from 'immutability-helper';

const initialState = {
    selectedGame: null
}

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case GAME_SELECTED:
          return update(state, {
            selectedGame: {
              $set: action.payload
            }
          });
    default:
      return state;
  }
}

export default reducer;
