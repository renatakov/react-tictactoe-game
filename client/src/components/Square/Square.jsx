import s from "../GameBoard/GameBoard.module.css"
import {makeMove} from "../../redux/gameReducer"
import { useDispatch } from "react-redux"
import React from "react"
const Square = (props)=>{
    const dispatch = useDispatch()
        const ref = React.createRef()
        const addSymbol = () =>{
        dispatch(makeMove(props.x, props.y))
        console.log(props.gameState)
        ref.current.innerHTML = props.gameState.tooglePlayer
    }
    return(
        <div ref={ref} onClick={()=>{addSymbol()}} className={s.gameboardItem}>
        </div>
        
    )
}

export default Square