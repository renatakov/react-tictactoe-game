import s from "./GameBoard.module.css"
import React, {createRef} from "react"
import { useEffect } from "react"
import {makeMove} from "../../redux/gameReducer"
import { useSelector, useDispatch } from "react-redux"
const GameBoard = () => {
    const dispatch = useDispatch()
    const gameState = useSelector((state)=>state.games)
    // for(let i = 0; i < gameState.board.length; i++){
    //     for(let k = 0; k < gameState.board[i].length; k++){
    //         console.log(+gameState.board[i].join(""))
    //     }
    // }
    const gameboardItem1 = React.createRef(null)
    const gameboardItem2 = React.createRef(null)
    const gameboardItem3 = React.createRef(null)
    const gameboardItem4 = React.createRef(null)
    const gameboardItem5 = React.createRef(null)
    const gameboardItem6 = React.createRef(null)
    const gameboardItem7 = React.createRef(null)
    const gameboardItem8 = React.createRef(null)
    const gameboardItem9 = React.createRef(null)
    const addSymbol = (item, position) =>{
        dispatch(makeMove(position))
        console.log(gameState)
        
        item.current.innerHTML = gameState.tooglePlayer

    }
    return (
        <>
        <div className={s.gameboard}>
            <div ref={gameboardItem1} onClick={()=>{addSymbol(gameboardItem1, 1)}} className={s.gameboardItem}></div>
            <div ref={gameboardItem2} onClick={()=>{addSymbol(gameboardItem2, 2)}} className={s.gameboardItem}></div>
            <div ref={gameboardItem3} onClick={()=>{addSymbol(gameboardItem3, 3)}} className={s.gameboardItem}></div>
            <div ref={gameboardItem4} onClick={()=>{addSymbol(gameboardItem4, 4)}} className={s.gameboardItem}></div>
            <div ref={gameboardItem5} onClick={()=>{addSymbol(gameboardItem5, 5)}} className={s.gameboardItem}></div>
            <div ref={gameboardItem6} onClick={()=>{addSymbol(gameboardItem6, 6)}} className={s.gameboardItem}></div>
            <div ref={gameboardItem7} onClick={()=>{addSymbol(gameboardItem7, 7)}} className={s.gameboardItem}></div>
            <div ref={gameboardItem8} onClick={()=>{addSymbol(gameboardItem8, 8)}} className={s.gameboardItem}></div>
            <div ref={gameboardItem9} onClick={()=>{addSymbol(gameboardItem9, 9)}} className={s.gameboardItem}></div>
        </div>
        </>
    )
}

export default GameBoard;