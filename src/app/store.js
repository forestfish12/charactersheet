import { configureStore } from "@reduxjs/toolkit";
import spellBookReducer from "../features/spellBook/spellBookSlice";

const store = configureStore({
  reducers: {
    spellBook: spellBookReducer,
  }
})