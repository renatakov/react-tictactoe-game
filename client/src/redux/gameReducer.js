import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  tooglePlayer: "x",
  board: [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ],
  status: "waiting"
};

export const makeMove = createAction("makeMove", (x, y)=>{
  return{
    payload:{
      x,
      y
    }
  }
});

export const gameReducer = createReducer(initialState, (builder) => {
  builder.addCase(makeMove, (state, action) => {
    if(state.board[action.payload.x][action.payload.y] === "-"){
      state.board[action.payload.x][action.payload.y] = state.tooglePlayer
    }
      state.tooglePlayer = state.tooglePlayer === "x" ? "o" : "x"
    const checkWinner = (board, player)=>{
      for(let i = 0; i < 3; i++){
        if(board[0][i] === player && board[1][i] === player &&board[2][i] === player){
          return true
        }
        if(board[i][0] === player && board[i][1] === player &&board[i][2] === player){
          return true
        }
      }
      
        if(board[0][0]===player&&board[1][1]===player&&board[2][2]===player){
          return true
        }
        if(board[0][2] === player && board[1][1] === player && board[2][0] === player){
          return true
        }
      
    }
    if(checkWinner(state.board, state.tooglePlayer)){
      state.status = `Player ${state.tooglePlayer} won`
    }
      })
  });
