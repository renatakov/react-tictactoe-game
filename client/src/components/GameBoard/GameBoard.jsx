import s from "./GameBoard.module.css"
import { useSelector} from "react-redux"
import { useDispatch } from "react-redux"
import { useRef, useState } from "react"
import Square from "../Square/Square"
import { restart } from "../../redux/gameReducer"
const GameBoard = () => {
    const [showText, setShowText] = useState(true)
    const dispatch = useDispatch()
    
    const gameState = useSelector((state)=>state.games)
    const btnRef = useRef(null)
    let SquareCollection = () => {
        const squaresArr = [];
        for (let i = 0; i < gameState.board.length; i++) {
            for (let k = 0; k < gameState.board[i].length; k++) {
            squaresArr.push(<Square showText={showText} gameState={gameState} x={i} y={k}/>);
            }
        }
        return squaresArr;
    }
    const restartBtn = () => {
        if (gameState.status === `Player ${gameState.tooglePlayer} won`) {
            setShowText(false);
            dispatch(restart())
        }
        window.location.reload()
    }
    return (
        <>
        <div className={s.gameboard}>
            {SquareCollection()}
        </div>
            {gameState.status === `Player ${gameState.tooglePlayer} won` ? <button onClick={()=>restartBtn()} ref={btnRef} className={s.btnRestart}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"/></svg>
                Restart</button> : null}
        </>
    )
}

export default GameBoard;