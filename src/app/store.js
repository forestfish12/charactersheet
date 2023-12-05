import { configureStore } from "@reduxjs/toolkit";
import spellBookReducer from "../features/spellBook/spellBookSlice";

const store = configureStore({
  reducer: {
    spellBook: spellBookReducer,
  }
})

export default store;