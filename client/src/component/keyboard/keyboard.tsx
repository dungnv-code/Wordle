import "./keyboard.css"
import IProps from "../IProps/IProps";

import { useSelector, useDispatch } from 'react-redux'
import { DecPos, setBoard, inRow } from "../../redux/boardSlice"
import type { rootState } from "../Interface.tsx"
import wordList from "../word.json";
const Keyboard: React.FC = () => {
    const rows: string[] = [
        "q w e r t y u i o p",
        "a s d f g h j k l",
        "z x c v b n m",
    ];
    const dispatch = useDispatch()
    const pos = useSelector((state: rootState) => state.board.pos)
    const board = useSelector((state: rootState) => state.board.board)
    const row = useSelector((state: rootState) => state.board.row)
    const correctWord = useSelector((state: rootState) => state.board.correctWord)
    const handleBack = () => {
        if (pos - 1 < row * 5) return;
        const newboard = [...board]
        newboard[pos - 1] = "";
        dispatch(setBoard(newboard))
        dispatch(DecPos())
    }

    const correct5Word = `${board[(row) * 5]}${board[(row) * 5 + 1]}${board[(row) * 5 + 2]}${board[(row) * 5 + 3]}${board[(row) * 5 + 4]}`

    const hanleEnter = () => {
        if (wordList.words.includes(correct5Word.toLocaleLowerCase())) {
            if (pos % 5 !== 0 || pos <= 0) return;
            console.log("enter")
            dispatch(inRow())
        } else if (correct5Word) {
            alert("Not in word list")
        }

        if (pos === 30 && wordList.words.includes(correct5Word.toLocaleLowerCase())) {
            alert("Game Over Correct Word is " + correctWord)
        }
    }

    return (
        <div>
            {rows.map((item, index) => {
                return (
                    <div key={index} className="row">
                        {item.split(" ").map((letter, idx) => (
                            <>
                                {
                                    letter == "z" && <span key={"enter" + idx} onClick={() => { hanleEnter() }}  >Enter</span>
                                }
                                <IProps key={idx} letter={letter.toLocaleUpperCase()} />
                                {
                                    letter == "m" && <span key={"back" + idx} onClick={handleBack}  >Back</span>
                                }
                            </>
                        ))}
                    </div>
                );
            })}
        </div>
    )
}

export default Keyboard