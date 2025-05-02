import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

interface UserState {
  name: string;
}

const initialState: UserState = {
  name: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const selectName = (state: RootState) => state.useCases;

export const {} = userSlice.actions;
export default userSlice.reducer;
