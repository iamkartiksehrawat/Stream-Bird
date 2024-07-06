import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton";
import LiveBadge from "./live-badge";
import UserAvatar from "./user-avatar";

interface ThumbnailProps {
  src: string | null;
  fallback: string;
  isLive: boolean;
  username: string;
}

export const Thumbnail = ({
  src,
  fallback,
  isLive,
  username,
}: ThumbnailProps) => {
  let content;

  if (!src) {
    content = (
      <div className="bg-background flex flex-col items-center justify-center gap-y-4 h-full w-full group-hover:scale-105  transition-transform rounded-md border-[1px]">
        <UserAvatar
          size="lg"
          showBadge
          username={username}
          imageUrl={fallback}
          isLive={isLive}
        />
      </div>
    );
  } else {
    content = (
      <Image
        src={src}
        fill
        alt="Thumbnail"
        className="object-cover group-hover:scale-105 transition-transform rounded-md"
      />
    );
  }

  return (
    <div className="group aspect-video relative rounded-md cursor-pointer">
      {content}
      {isLive && src && (
        <div className="absolute top-2 left-2 group-hover:scale-105  transition-transform">
          <LiveBadge />
        </div>
      )}
    </div>
  );
};

export const ThumbnailSkeleton = () => {
  return (
    <div className="group aspect-video relative rounded-xl cursor-pointer">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
