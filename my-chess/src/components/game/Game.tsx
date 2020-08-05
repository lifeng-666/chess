import React, { Component } from 'react'
import { chessTypes, gameStatus } from '../../types/enum'
import Border from '../border/Border';
import './game.css'
import Status from '../status/Status';

interface Istate {
    chess: chessTypes[],
    next: chessTypes.black | chessTypes.red,
    status: gameStatus
}

export default class Game extends Component<{}, Istate> {
    state: Istate = {
        chess: [],
        next: chessTypes.black,
        status: gameStatus.gaming
    }
    init = () => {
        const arr = new Array(9);
        arr.fill(chessTypes.none);
        this.setState({
            chess: arr,
            next: chessTypes.black,
            status: gameStatus.gaming
        })
    }
    componentDidMount () {
        this.init();
    }
    onClick = (index: number) => {
        const newArr = [...this.state.chess];
        newArr[index] = this.state.next;
        this.setState(preState => ({
            chess: newArr,
            next: preState.next === chessTypes.black ? chessTypes.red : chessTypes.black,
            status: this.getStatus(newArr, index)
        }))
    }
    getStatus = (chess: chessTypes[], i: number) => {
        const horMin = Math.floor(i / 3) * 3;
        const verMin = i % 3;
        if (   (chess[horMin+2] === chess[horMin+1] && chess[horMin] === chess[horMin+2])
            || (chess[verMin] === chess[verMin+3] && chess[verMin] === chess[verMin+6])
            || (chess[0] === chess[4] && chess[0] === chess[8] && chess[0] !== chessTypes.none)
            || (chess[2] === chess[4] && chess[2] === chess[6] && chess[2] !== chessTypes.none)
           ) {
               if (chess[i] === chessTypes.red) {
                   return gameStatus.redWin
               } else {
                   return gameStatus.blackWin;
               }
           } else if (!chess.includes(chessTypes.none)) {
               return gameStatus.equal;
           } else {
               return gameStatus.gaming;
           }
    }
    render() {
        return (
            <div>
                <Status next={this.state.next} gameStatus={this.state.status}/>
                <Border chessArr={this.state.chess} isOver={this.state.status !== gameStatus.gaming} onChange={this.onClick}/>
                <div className="re-begin"
                 onClick={this.init}
                >
                    <span>重新开始</span>
                </div>
            </div>
        )
    }
}
