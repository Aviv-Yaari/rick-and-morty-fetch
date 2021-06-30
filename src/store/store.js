import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characterSlice";
import appReducer from "./appSlice";
import cacheReducer from "./cacheSlice";
export default configureStore({
  reducer: {
    character: characterReducer,
    app: appReducer,
    cache: cacheReducer,
  },
});
