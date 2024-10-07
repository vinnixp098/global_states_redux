import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../../app/models/interfaces/UserInterface";
import { emptyUser } from "../../app/data/emptyUser";

interface AppState {
  edit: boolean;
}

const initialState: AppState = {
  edit: false,
};

const authSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setEdit(state, action: PayloadAction<boolean>) {
      state.edit = action.payload;
    },
  },
});

export const { setEdit } = authSlice.actions;

export default authSlice.reducer;
