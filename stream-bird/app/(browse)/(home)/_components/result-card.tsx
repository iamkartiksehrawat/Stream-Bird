import Link from "next/link";

import { User } from "@/model/UserModel";
import { Thumbnail, ThumbnailSkeleton } from "@/components/thumbnail";
import { Skeleton } from "@/components/ui/skeleton";
import UserAvatar from "@/components/user-avatar";
import { UserAvatarSkeleton } from "@/components/user-avatar";

interface ResultCardProps {
  data: {
    userId: User;
    isLive: boolean;
    name: string;
    thumbnailUrl: string | null;
  };
}

export const ResultCard = ({ data }: ResultCardProps) => {
  return (
    <Link href={`/${data.userId.username}`}>
      <div className="h-full w-full space-y-4">
        <Thumbnail
          src={data.thumbnailUrl}
          fallback={data.userId.imageUrl!}
          isLive={data.isLive}
          username={data.userId.username}
        />
        <div className="flex gap-x-3">
          <UserAvatar
            username={data.userId.username}
            imageUrl={data.userId.imageUrl!}
            isLive={data.isLive}
          />
          <div className="flex flex-col text-sm overflow-hidden">
            <p className="truncate font-semibold hover:text-[#8f47f5]">
              {data.name}
            </p>
            <p className="text-muted-foreground">{data.userId.username}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ResultCardSkeleton = () => {
  return (
    <div className="h-full w-full space-y-4">
      <ThumbnailSkeleton />
      <div className="flex gap-x-3">
        <UserAvatarSkeleton />
        <div className="flex flex-col gap-y-1">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  );
};
