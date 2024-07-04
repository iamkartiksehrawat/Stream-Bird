"use client";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

import { CustomToolTip } from "../customtooltip";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { collapseChat, expandChat } from "@/store/slices/usechat";

export const ChatToggle = () => {
  const collapsed = useSelector((state: RootState) => state.usechat.collapsed);
  const dispatch = useDispatch();
  const Icon = collapsed ? ArrowLeftFromLine : ArrowRightFromLine;

  const onToggle = () => {
    if (collapsed) {
      dispatch(expandChat());
    } else {
      dispatch(collapseChat());
    }
  };

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <CustomToolTip content={label} placement="left" asChild>
      <Button
        onClick={onToggle}
        variant="ghost"
        className="h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent"
      >
        <Icon className="h-4 w-4" />
      </Button>
    </CustomToolTip>
  );
};
