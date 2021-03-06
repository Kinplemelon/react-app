import React from "react";
import Square from "./square.js";

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            XIsNext: true,
        };
    }
    handleClick(i) {
        let squares = this.state.squares.slice();
        squares[i] = this.state.XIsNext ? "X" : "O";
        this.setState({
            squares: squares,
            XIsNext: !this.state.XIsNext,
        });
    }
    renderSquare(i) {
        // ðºðºðº å¾ç¹å«çåæ³
        // å°±æ¯ä¸æ¯åªæå¨renderå½æ°éé¢æè½åJSX
        // å¨æ®éå½æ°éé¢ä¹å¯ä»¥
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            // ðºè¿ä¸ªæ¬å·è¥è éè¦ã
            status = "Next player: " + (this.state.XIsNext ? "X" : "O");
        }
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
        );
    }
}

// ä¸è¦å¨æè¿äºç»èããã
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}
