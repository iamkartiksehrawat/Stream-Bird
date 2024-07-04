import { configureStore } from "@reduxjs/toolkit";
import usesidebarReducer from "./slices/usesidebar";
import usechat from "./slices/usechat";

const streamstore = configureStore({
  reducer: {
    usesidebar: usesidebarReducer,
    usechat: usechat,
  },
});

export type RootState = ReturnType<typeof streamstore.getState>;
export type AppDispatch = typeof streamstore.dispatch;

export default streamstore;
