"use client";

import useViewerToken from "@/hooks/use-viewer-token";
import { User } from "@/model/UserModel";
import { LiveKitRoom } from "@livekit/components-react";
import { Video } from "./video";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Chat } from "./Chat";
import { Stream } from "@/model/stream";
import { Header } from "./header";
import { InfoCard } from "./info-card";
import { AboutCard } from "./about-card";
import { ChatToggle } from "./chat-toggle";

interface StreamPlayerProps {
  user: User;
  isFollowing: boolean;
  stream: Stream;
}

const StreamPlayer = ({ user, isFollowing, stream }: StreamPlayerProps) => {
  const { token, name, identity } = useViewerToken(user._id);
  const collapsed = useSelector((state: RootState) => state.usechat.collapsed);
  if (!token || !name || !identity) {
    return <div>Cannot Watch the Stream</div>;
  }

  return (
    <>
      {collapsed && (
        <div className="hidden lg:block fixed top-[120px] right-8 z-50">
          <ChatToggle />
        </div>
      )}
      <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        className={cn(
          "grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 h-full p-4 gap-2",
          collapsed && "lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
        )}
      >
        <div className="space-y-4 hidden-scrollbar col-span-2 pb-10">
          <Video hostName={user.username} hostIdentity={user._id} />
          <Header
            hostName={user.username}
            hostIdentity={user._id}
            viewerIdentity={identity}
            imageUrl={user.imageUrl!}
            isFollowing={isFollowing}
            name={stream.name}
          />
          <InfoCard
            hostIdentity={user._id}
            viewerIdentity={identity}
            name={stream.name}
            thumbnailUrl={stream.thumbnailUrl!}
          />
          <AboutCard
            hostName={user.username}
            hostIdentity={user._id}
            viewerIdentity={identity}
            bio={user.bio!}
            followedByCount={user.followers.length}
          />
        </div>
        <div className={cn("col-span-1", collapsed && "hidden")}>
          <Chat
            viewerName={name}
            hostName={user.username}
            hostIdentity={user._id}
            isFollowing={isFollowing}
            isChatEnabled={stream.isChatEnabled}
            isChatDelayed={stream.isChatDelayed}
            isChatFollowersOnly={stream.isChatFollowersOnly}
          />
        </div>
      </LiveKitRoom>
    </>
  );
};

export default StreamPlayer;