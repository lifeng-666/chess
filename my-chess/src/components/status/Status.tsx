import React from 'react'
import { chessTypes, gameStatus } from '../../types/enum'
import './status.css'
interface Iprops {
    next: chessTypes.black | chessTypes.red,
    gameStatus: gameStatus 
}
export default function Status(props: Iprops) {
    let txt: JSX.Element;
    if (props.gameStatus === gameStatus.gaming) {
        if (props.next === chessTypes.black) {
            txt = <div className="common status_black">黑方落子</div>
        } else {
            txt = <div className="common status_red">红方落子</div>
        }
    } else {
        if (props.gameStatus === gameStatus.blackWin ) {
            txt = <div className="common status_black">黑方胜利</div>
        } else if (props.gameStatus === gameStatus.redWin) {
            txt = <div className="common status_red">红方胜利</div>
        } else {
            txt = <div className="common status_black">平局</div>
        }
    }
    return (
        <>
            {txt}
        </>
    )
}
