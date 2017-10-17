export const GAME_SELECTED = "GAME_SELECTED";
export const SET_DATA = "SET_DATA";

export function selectGame(gameId) {
  return {
    type: GAME_SELECTED,
    payload: gameId
  };
}

// setting the api data to the initialState
export function setData(payload) {
  return {
    type: SET_DATA,
    payload: payload
  };
}


// calling the api action
export const getGameList = () => {
  return(dispatch, getState) => {
    fetch('https://dry-forest-51238.herokuapp.com/api/games')
    .then(response => {
      return response.json()
    })
    .then(data => {
      // console.log("DATA: ",data);
      dispatch(setData(data));
    })
  }
}
