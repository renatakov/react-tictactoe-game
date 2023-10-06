import s from "../GameBoard/GameBoard.module.css"
import {makeMove} from "../../redux/gameReducer"
import { useDispatch } from "react-redux"
import React, {createRef} from "react"
const Square = (props)=>{
    const dispatch = useDispatch()
        const ref = React.createRef()
        const addSymbol = (item) =>{
        dispatch(makeMove())
        console.log(props.gameState)
        
        item.current.innerHTML = props.gameState.tooglePlayer

    }
    return(
        <div ref={ref} onClick={()=>{addSymbol(ref)}} className={s.gameboardItem}></div>

    )
}

export default Square