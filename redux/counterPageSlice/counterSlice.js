import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            return {
                ...state,
                value: state.value + 1,
            };
        },
        decrement: (state) => {
            return {
                ...state,
                value: state.value - 1,
            };
        },
        incrementByAmount: (state, { payload }) => {
            return {
                ...state,
                value: state.value + payload,
            };
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
