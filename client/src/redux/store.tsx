import { configureStore } from "@reduxjs/toolkit";
import boardReduce from "./boardSlice.tsx"
export default configureStore({
    reducer: {
        board: boardReduce
    },
});