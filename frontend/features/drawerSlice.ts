import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DrawerState {
  isDrawerOpen: boolean;
}

const initialState: DrawerState = {
  isDrawerOpen: false,
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
    toggleDrawer: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
  },
});

export const { setDrawerOpen, toggleDrawer } = drawerSlice.actions;
export const selectIsDrawerOpen = (state: { drawer: DrawerState }) => state.drawer.isDrawerOpen;
export default drawerSlice.reducer;
