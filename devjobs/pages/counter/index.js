import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    selectCounter,
} from "../../redux/counter/counterSlice";

export default function Counter() {
    const count = useSelector(selectCounter);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(3);

    return (
        <div>
            <div>
                <h1>{count}</h1>

                <button
                    className="border"
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>

                <button
                    className="border"
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <br />
                <input
                    className="border"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <br />
                <button
                    className="border"
                    onClick={() => dispatch(incrementByAmount(amount))}
                >
                    Increment by Amount
                </button>
            </div>
        </div>
    );
}
