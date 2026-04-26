import React from 'react'
import "./board.css"
import Square from '../Square/Square';
import Keyboard from '../keyboard/keyboard';
interface BoardProps {
    board: string[];
}
const Board: React.FC<BoardProps> = ({ board }) => {
    return (
        <>
            <div className="board">
                {board.map((square, idx) => {
                    return (
                        <>
                            <Square val={square} squareIdx={idx} />
                        </>
                    )
                })}
            </div>
            <div>
                <Keyboard />
            </div>
        </>
    )
}

export default Board