import React from "react"
// import Square from "./square.js";
import Board from "./board.js";

export default class Game extends React.Component {
    render() {
        return ( 
            <div className = "game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div></div>
                    <ol></ol>
                </div>
            </div>
        )
    }
}
