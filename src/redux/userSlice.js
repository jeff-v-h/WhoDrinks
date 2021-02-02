import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    confirmedDisclaimer: false
  },
  reducers: {
    confirmDisclaimer: (state) => {
      state.confirmedDisclaimer = true;
    }
  }
});

export const { confirmDisclaimer } = userSlice.actions;
export default userSlice.reducer;
