import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    id: 0,
    name: undefined,
    image: undefined,
    species: undefined,
    status: undefined,
  },
  reducers: {
    setDetails: (state, action) => {
      const details = action.payload;
      state.id = details.id;
      state.name = details.name;
      state.image = details.image;
      state.species = details.species;
      state.status = details.status;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDetails } = characterSlice.actions;

export default characterSlice.reducer;
