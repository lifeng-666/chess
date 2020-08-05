import React from 'react'
import './border.css'
import { chessTypes } from '../../types/enum'
import Chess from '../chess/Chess'
interface Iprops {
    chessArr: chessTypes[]
    isOver: boolean
    onChange: (i: number) => void
}
export default function Border(props: Iprops) {
    const list = props.chessArr.map((ele, index) => {
        return <Chess type={ele} onChange={() => {
            if (!props.isOver) {
                props.onChange(index);
            }
        }}
        key={index}
        />
    })
    return (
        <div className="chess-border">
            {list}
        </div>
    )
}
