"use client";

import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
}
export const Wrapper = ({ children }: WrapperProps) => {
  const collapsed = useSelector(
    (state: RootState) => state.usesidebar.collapsed
  );

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col items-center h-full bg-background border-r-[1px] z-5 ",
        collapsed ? "w-32 p-3" : "w-60 p-4"
      )}
    >
      {children}
    </aside>
  );
};
