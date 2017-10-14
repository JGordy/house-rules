export const GAME_SELECTED = "GAME_SELECTED";

export function selectGame(gameId) {
  return {
    type: GAME_SELECTED,
    payload: gameId
  };
}
