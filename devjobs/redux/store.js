import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterPageSlice/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
