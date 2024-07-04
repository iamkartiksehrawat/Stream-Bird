"use client";

import { MessageSquare, Users } from "lucide-react";

import { CustomToolTip } from "../customtooltip";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { ChatVariant, setVariant } from "@/store/slices/usechat";
import { RootState } from "@/store";

export const VariantToggle = () => {
  const variant = useSelector((state: RootState) => state.usechat.variant);
  const dispatch = useDispatch();

  const isChat = variant === ChatVariant.CHAT;

  const Icon = isChat ? Users : MessageSquare;

  const onToggle = () => {
    const newVariant = isChat ? ChatVariant.COMMUNITY : ChatVariant.CHAT;
    dispatch(setVariant(newVariant));
  };

  const label = isChat ? "Community" : "Go back to chat";

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
