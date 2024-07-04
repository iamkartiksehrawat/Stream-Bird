import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ChatVariant {
  CHAT = "CHAT",
  COMMUNITY = "COMMUNITY",
}

interface SidebarState {
  collapsed: boolean;
  variant: ChatVariant;
}

const initialState: SidebarState = {
  collapsed: false,
  variant: ChatVariant.CHAT,
};

const usechat = createSlice({
  name: "usechat",
  initialState,
  reducers: {
    expandChat: (state) => {
      state.collapsed = false;
    },
    collapseChat: (state) => {
      state.collapsed = true;
    },
    setVariant: (state, action: PayloadAction<ChatVariant>) => {
      state.variant = action.payload;
    },
  },
});

export const { expandChat, collapseChat, setVariant } = usechat.actions;
export default usechat.reducer;
