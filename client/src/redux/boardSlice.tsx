import { createSlice } from "@reduxjs/toolkit";
import wordlist from "../component/word.json";

const randomWord = Math.floor(Math.random() * wordlist.words.length);
export const boardSlice = createSlice({
    name: "board",
    initialState: {
        board: [
            "", "", "", "", "",
            "", "", "", "", "",
            "", "", "", "", "",
            "", "", "", "", "",
            "", "", "", "", "",
            "", "", "", "", ""
        ],
        pos: 0,
        row: 0,
        correctWord: wordlist.words[randomWord].toLocaleUpperCase(),
    },
    reducers: {
        setBoard: (state, action) => {
            state.board = action.payload;
        },

        IncPos: (state) => {
            state.pos += 1;
        },

        DecPos: (state) => {
            state.pos -= 1;
        },

        inRow: (state) => {
            state.row += 1;
        },


    },
});

export const { setBoard, IncPos, DecPos, inRow, } = boardSlice.actions;

export default boardSlice.reducer;