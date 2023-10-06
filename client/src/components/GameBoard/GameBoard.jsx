import s from "./GameBoard.module.css"
import {makeMove} from "../../redux/gameReducer"
import { useSelector, useDispatch } from "react-redux"
import Square from "../Square/Square"
const GameBoard = () => {
    const dispatch = useDispatch()
    const gameState = useSelector((state)=>state.games)
    // const arr = [
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9]
    // ]
    
    // for(let i = 0; i < arr.length; i++){
    //     console.log(+arr[i].join(""))
    //         console.log(arr[i][0])
    //         console.log(arr[i][1])
    //         console.log(arr[i][2])
    
        
            
    //     }
    //     for(let k = 0; k <= 2; k++){
    //         console.log(arr[k][k]) //1, 5, 9
    //         console.log(arr[k][2-k]) //3, 5, 7
    //     }
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