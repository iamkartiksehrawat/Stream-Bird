import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
  collapsed: boolean;
}

const initialState: SidebarState = {
  collapsed: false,
};

const usesidebar = createSlice({
  name: "usesidebar",
  initialState,
  reducers: {
    expand: (state) => {
      state.collapsed = false;
    },
    collapse: (state) => {
      state.collapsed = true;
    },
  },
});

export const { expand, collapse } = usesidebar.actions;
export default usesidebar.reducer;
