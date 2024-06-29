"use client";

import { Provider } from "react-redux";
import streamstore from "./index";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={streamstore}>{children}</Provider>;
}
