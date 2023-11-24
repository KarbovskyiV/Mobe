import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  category: "",
  memory: "",
  color: "",
  display_diagonal: "",
  display_resolution: "",
  matrix_type: "",
  screen_refresh_rate: "",
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setNameProduct(state, action) {
      state.name = action.payload;
    },
    setCategoryProduct(state, action) {
      state.category = action.payload;
    },
    setMemoryProduct(state, action) {
      state.memory = action.payload;
    },
    setColorProduct(state, action) {
      state.color = action.payload;
    },
    setDiagonal(state, action) {
      state.display_diagonal = action.payload;
    },

    setResolution(state, action) {
      state.display_resolution = action.payload;
    },
    setMatrix_type(state, action) {
      state.matrix_type = action.payload;
    },
    setScreen_refresh_rate(state, action) {
      state.screen_refresh_rate = action.payload;
    },
    setScreen_material(state, action) {
      state.screen_material = action.payload;
    },
    setCommunication_standard(state, action) {
      state.communication_standard = action.payload;
    },
    setSim_card_dimensions(state, action) {
      state.sim_card_dimensions = action.payload;
    },
    setFront_camera(state, action) {
      state.front_camera = action.payload;
    },
  },
});

export const {
  setNameProduct,
  setCategoryProduct,
  setMemoryProduct,
  setColorProduct,
  setDiagonal,
  setResolution,
  setMatrix_type,
  setScreen_refresh_rate,
  setScreen_material,
  setCommunication_standard,
  setSim_card_dimensions,
  setFront_camera,
} = cardSlice.actions;

export default cardSlice.reducer;
