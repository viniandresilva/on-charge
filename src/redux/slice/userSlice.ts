import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ISignInInput} from "../../shared/interfaces/ISignInInput.ts";

interface IUserState {
  user: ISignInInput | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<ISignInInput>) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
