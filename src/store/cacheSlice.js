import { createSlice } from "@reduxjs/toolkit";

export const cacheSlice = createSlice({
  name: "cache",
  initialState: {
    cache: [],
    searchInCache: false,
  },
  reducers: {
    loadFromHistory: (state, action) => {
      const history = action.payload;
      if (history) {
        state.cache = history;
      }
    },
    clearCache: (state) => {
      state.cache = [];
    },
    addToCache: (state, action) => {
      const character = action.payload;
      const search = state.cache.find(
        (cacheChar) => cacheChar.id === character.id
      );
      if (!search) {
        state.cache.push(character);
      }
    },
    checkSearchInCache: (state, action) => {
      const idInput = action.payload;
      state.searchInCache = false;
      const search = state.cache.find(
        (cacheChar) => cacheChar.id === parseInt(idInput)
      );
      if (search) state.searchInCache = search;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCache, checkSearchInCache, loadFromHistory, clearCache } =
  cacheSlice.actions;

export default cacheSlice.reducer;
