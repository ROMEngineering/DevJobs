import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
} from "../../redux/redux-slices/counterSlices/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-center items-center  w-full h-screen">
        <button
          className="border"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          className="border"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
export default Counter
