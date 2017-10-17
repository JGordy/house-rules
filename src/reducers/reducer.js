import { GAME_SELECTED, SET_DATA } from '../actions/action';
import update from 'immutability-helper';

const initialState = {
    gamesList: [],
    filter: 'all'
}

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case GAME_SELECTED:
          return update(state, {
            selectedGame: {
              $set: action.payload
            }
          })
    case SET_DATA:
        return update(state, {
          gamesList: {
            $set: action.payload
          }
        })
    default:
      return state;
  }
}

// const reducer = combineReducers({people: PeopleDataFilter, films: FilmsData, starships: StarshipsData, details: details});

export default reducer;
