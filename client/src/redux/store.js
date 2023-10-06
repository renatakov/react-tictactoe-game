import { gameReducer } from "./gameReducer";
import { configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        games: gameReducer,
    }
})

export default store