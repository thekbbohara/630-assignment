"use client";
import { changeShape, getArea } from "@/redux/slices/box";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const { area, width, height, radius } = useSelector((state) => state.box);
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{ width, height, backgroundColor: "red", borderRadius: radius }}
      ></div>
      <span className="text-white">
        area: {(area * 0.0264583333).toFixed(2)}cm<sup>2</sup>
      </span>
      <br />
      <button
        onClick={() => {
          dispatch(changeShape());
          dispatch(getArea());
        }}
      >
        dont click
      </button>
    </div>
  );
}
