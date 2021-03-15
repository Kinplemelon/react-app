import React from "react";
import Square from "./square.js";

export default class Board extends React.Component {
    renderSquare(i){
        // 🔺🔺🔺 很特别的写法
        // 就是不是只有在render函数里面才能写JSX
        // 在普通函数里面也可以
        return <Square value={i} />
    }
    render() {
        const status = 'Next player: X';
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}