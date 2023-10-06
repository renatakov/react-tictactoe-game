import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    players: [
    {
    name: "playerX",
    position: [],
    },
    {
    name: "playerO",
    position: [],
    },
],
tooglePlayer: "x",
board: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
],
winnerNums: [123, 456, 789, 147, 258, 369, 159, 357],
status: "waiting",
};

export const makeMove = createAction("makeMove", (playerPosition) => {
return {
    payload: {
        playerPosition,
    },
};
});

export const gameReducer = createReducer(initialState, (builder) => {
    builder.addCase(makeMove, (state, action) => {
    const currentPlayer = state.tooglePlayer === "x" ? 0 : 1;
    if(state.players[currentPlayer].position === 0 ||
       state.players[currentPlayer].position !== state.players[1 - currentPlayer].position){
        state.tooglePlayer = state.tooglePlayer === "x" ? "o" : "x"
        state.players[currentPlayer].position.push(action.payload.playerPosition)
        
        
    }
});
});
