import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userData: {} },
  reducers: {
    addUserAction(state, action) {
      state.userData = action.payload;
    },
  },
});

export const { addUserAction } = userSlice.actions;
export default userSlice.reducer;
