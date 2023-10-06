import s from "./GameBoard.module.css"
import {makeMove} from "../../redux/gameReducer"
import { useSelector, useDispatch } from "react-redux"
import Square from "../Square/Square"
const GameBoard = () => {
    const dispatch = useDispatch()
    const gameState = useSelector((state)=>state.games)

    // const addSymbol = (item, position) =>{
    //     dispatch(makeMove(position))
    //     console.log(gameState)
        
    //     item.current.innerHTML = gameState.tooglePlayer

    // }
    const SquareCollection = () => {
        const squaresArr = [];
        for (let i = 0; i < gameState.board.length; i++) {
            for (let k = 0; k < gameState.board[i].length; k++) {
            squaresArr.push(<Square num={+gameState.board[i][k]} />);
            }
        }
        return squaresArr;
    }
    return (
        <>
        <div className={s.gameboard}>
            {SquareCollection()}
        </div>
        </>
    )
}

export default GameBoard;