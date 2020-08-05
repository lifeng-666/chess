import React from 'react'
import { chessTypes } from '../../types/enum'
import './chess.css'
interface Iprops {
    type: chessTypes,
    onChange: () => void
}
export default function Chess(props: Iprops) {
    let status = null;
    if (props.type === chessTypes.black) {
        status = <div className="chess-item black"></div>
    } else if (props.type === chessTypes.red) {
        status = <div className="chess-item red"></div>
    }
    return (
        <div className="chess" 
        onClick={
            () => {
                if (props.type === chessTypes.none) {
                    props.onChange();
                }
            }
        }>
            {status}
        </div>
    )
}
