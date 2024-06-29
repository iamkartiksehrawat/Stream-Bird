import { configureStore } from "@reduxjs/toolkit";
import usesidebarReducer from "./slices/usesidebar";

const streamstore = configureStore({
  reducer: {
    usesidebar: usesidebarReducer,
  },
});

export type RootState = ReturnType<typeof streamstore.getState>;
export type AppDispatch = typeof streamstore.dispatch;

export default streamstore;
