import { createSlice } from "@reduxjs/toolkit";

export const boxSlice = createSlice({
  name: "box",
  initialState: {
    radius: 0,
    width: 90,
    height: 50,
    area: 90 * 50,
  },
  reducers: {
    changeShape: (state) => {
      state.radius = state.radius !== 0 ? 0 : "50%";
      state.width = state.height = Math.max(state.width, state.height);
    },
    getArea: (state) => {
      if (state.radius == 0) {
        state.area = state.width * state.height;
      } else {
        state.area = (Math.PI * (state.width / 2) ** 2).toFixed(2);
      }
    },
  },
});

export const { changeShape, getArea } = boxSlice.actions;
export default boxSlice.reducer;
