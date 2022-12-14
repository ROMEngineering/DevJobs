import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
} from "../../redux/counterPageSlice/counterSlice";
import { getCountValue } from "../../redux/counterPageSlice/counterSelectors";

export default function Counter() {
    const count = useSelector(getCountValue);
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
                    onClick={() => dispatch(incrementByAmount(Number(amount)))}
                >
                    Increment by Amount
                </button>
            </div>
        </div>
    );
}
