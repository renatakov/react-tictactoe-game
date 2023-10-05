import s from "./GameBoard.module.css"
const GameBoard = () => {
    return (
        <>
        <div className={s.gameboard}>
            <div className={s.gameboardItem}></div>
            <div className={s.gameboardItem}></div>
            <div className={s.gameboardItem}></div>
            <div className={s.gameboardItem}></div>
            <div className={s.gameboardItem}></div>
            <div className={s.gameboardItem}></div>
            <div className={s.gameboardItem}></div>
            <div className={s.gameboardItem}></div>
            <div className={s.gameboardItem}></div>
        </div>
        </>
    )
}

export default GameBoard;