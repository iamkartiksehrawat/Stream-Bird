"use client";

import { useEffect, useMemo, useState } from "react";
import { ConnectionState } from "livekit-client";
import { useMediaQuery } from "usehooks-ts";
import {
  useChat,
  useConnectionState,
  useRemoteParticipant,
} from "@livekit/components-react";

import { ChatForm, ChatFormSkeleton } from "./chat-form";
import { ChatList, ChatListSkeleton } from "./chat-list";
import { ChatHeader, ChatHeaderSkeleton } from "./chat-header";
import { ChatCommunity } from "./chat-community";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { expandChat } from "@/store/slices/usechat";
import { ChatVariant } from "@/store/slices/usechat";

interface ChatProps {
  hostName: string;
  hostIdentity: string;
  viewerName: string;
  isFollowing: boolean;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
}

export const Chat = ({
  hostName,
  hostIdentity,
  viewerName,
  isFollowing,
  isChatEnabled,
  isChatDelayed,
  isChatFollowersOnly,
}: ChatProps) => {
  const matches = useMediaQuery("(max-width: 1024px)");
  const connectionState = useConnectionState();
  const participant = useRemoteParticipant(hostIdentity);
  const dispatch = useDispatch();
  const variant = useSelector((state: RootState) => state.usechat.variant);
  const isOnline = participant && connectionState === ConnectionState.Connected;

  const isHidden = !isChatEnabled || !isOnline;

  const [value, setValue] = useState("");
  const { chatMessages: messages, send } = useChat();

  useEffect(() => {
    if (matches) {
      dispatch(expandChat());
    }
  }, [matches, dispatch]);

  const reversedMessages = useMemo(() => {
    return messages.sort((a, b) => b.timestamp - a.timestamp);
  }, [messages]);

  const onSubmit = () => {
    if (!send) return;

    send(value);
    setValue("");
  };

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className="flex flex-col bg-background border border-b pt-4 h-[calc(100vh-120px)]">
      <ChatHeader />
      {variant === ChatVariant.CHAT && (
        <>
          <ChatList messages={reversedMessages} isHidden={isHidden} />
          <ChatForm
            onSubmit={onSubmit}
            value={value}
            onChange={onChange}
            isHidden={isHidden}
            isFollowersOnly={isChatFollowersOnly}
            isDelayed={isChatDelayed}
            isFollowing={isFollowing}
          />
        </>
      )}
      {variant === ChatVariant.COMMUNITY && (
        <ChatCommunity
          viewerName={viewerName}
          hostName={hostName}
          isHidden={isHidden}
        />
      )}
    </div>
  );
};

export const ChatSkeleton = () => {
  return (
    <div className="flex flex-col border-l border-b pt-0 h-[calc(100vh-80px)] border-2">
      <ChatHeaderSkeleton />
      <ChatListSkeleton />
      <ChatFormSkeleton />
    </div>
  );
};
