import React, { useEffect, useState } from 'react'
import "./Square.css"
import { motion } from "framer-motion"
interface SquareProps {
    val: string;
    squareIdx: number;
}

import { useSelector } from 'react-redux'
import type { rootState } from '../Interface';

const Square: React.FC<SquareProps> = ({ val, squareIdx }) => {
    const correctWord = useSelector((state: rootState) => state.board.correctWord)
    const pos = useSelector((state: rootState) => state.board.pos)
    const row = useSelector((state: rootState) => state.board.row)
    const [correct, setCorrect] = useState<boolean>(false)
    const [almost, setAlmost] = useState<boolean>(false)
    const [wrong, setWrong] = useState<boolean>(false)
    let wordLastIndex = 4;
    let currentPos =
        pos === 5
            ? wordLastIndex
            : pos > 5 && pos % 5 === 0
                ? wordLastIndex
                : (pos % 5) - 1;

    const variants = {
        filled: () => ({
            scale: [1.2, 1],
            transition: {
                duration: 0.2,
            },
        }),
        unfilled: () => ({
            scale: [1.2, 1],
            transition: {
                duration: 0.2,
            },
        }),
    };

    useEffect(() => {
        if (correctWord[currentPos] === val) {
            setCorrect(true);
        } else if (!correct && val !== "" && correctWord.includes(val)) {
            setAlmost(true);
        } else if (!correct && val !== "" && !correctWord.includes(val)) {
            setWrong(true);
        }
        return () => {
            setCorrect(false);
            setAlmost(false);
            setWrong(false);
        };
    }, [val]);

    const status: any = Math.floor(squareIdx / 5) < row && (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "");

    return (
        <motion.div
            animate={val ? "filled" : "unfilled"}
            variants={variants}
            transition={{ duration: 0.3 }}
        >
            <div className={`square`} id={status}>{val}</div>
        </motion.div>
    )
}

export default Square