"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { RootState } from "@/store";
import { cn } from "@/lib/utils";
import { collapse, expand } from "@/store/slices/usesidebar";

export default function Container({ children }: { children: React.ReactNode }) {
  const collapsed = useSelector(
    (state: RootState) => state.usesidebar.collapsed
  );
  const dispatch = useDispatch();
  const ismobile = useMediaQuery("(max-width: 640px)");

  useEffect(() => {
    if (ismobile) {
      dispatch(collapse());
    } else {
      dispatch(expand());
    }
  }, [ismobile, dispatch]);

  return (
    <div className={cn("flex-1", collapsed ? "ml-32" : " ml-60")}>
      {children}
    </div>
  );
}
