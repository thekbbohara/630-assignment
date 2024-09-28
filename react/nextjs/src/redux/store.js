import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter";
import boxSlice from "./slices/box";

export default configureStore({
  reducer: { counter: counterSlice, box: boxSlice },
});
