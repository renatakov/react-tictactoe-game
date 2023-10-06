import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  tooglePlayer: "x",
  board: [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ],
  winnerNums: [123, 456, 789, 147, 258, 369, 159, 357],
  status: "waiting"
};

export const makeMove = createAction("makeMove");

export const gameReducer = createReducer(initialState, (builder) => {
  builder.addCase(makeMove, (state) => {
    // const newBoard = state.board.map((item) =>
    //   item.map((el) => (el === "-" ? state.tooglePlayer : el))
    // );

    return {
      ...state,
      tooglePlayer: state.tooglePlayer === "x" ? "o" : "x"
    };
  });
});
