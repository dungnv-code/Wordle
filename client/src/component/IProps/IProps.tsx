import "./IProps.css"

interface IProps {
    letter: string
}

import { useSelector, useDispatch } from 'react-redux'
import { IncPos, setBoard } from "../../redux/boardSlice"
import type { rootState } from "../Interface.tsx"
const IProps: React.FC<IProps> = ({ letter }) => {
    const dispatch = useDispatch()
    const board = useSelector((state: rootState) => state.board.board)
    const pos = useSelector((state: rootState) => state.board.pos)
    const currentRow = Math.floor(pos / 5)
    const row = useSelector((state: rootState) => state.board.row)
    const choseLetter = () => {
        if (currentRow > row) return;
        if (pos >= 30) return;
        const newboard = [...board]
        newboard[pos] = letter;
        dispatch(setBoard(newboard))
        dispatch(IncPos())
    }

    return (
        <div className="letter" onClick={() => { choseLetter() }}>{letter}</div>
    )
}

export default IProps