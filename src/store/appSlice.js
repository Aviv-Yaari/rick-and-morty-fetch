import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isLoading: false,
    error: null,
    currentSearch: 0,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setCurrentSearch: (state, action) => {
      state.currentSearch = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setError, setCurrentSearch } = appSlice.actions;

export default appSlice.reducer;
