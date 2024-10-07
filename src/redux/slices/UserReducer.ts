import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../../app/models/interfaces/UserInterface";
import { emptyUser } from "../../app/data/emptyUser";

interface AuthState {
  user: UserInterface;
}

const initialState: AuthState = {
  user: emptyUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserInterface>) {
      state.user = action.payload;
    },

    resetUser(state) {
      state.user = initialState.user;
    },
  },
});

export const { setUser, resetUser } = authSlice.actions;

export default authSlice.reducer;
