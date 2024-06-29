"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Link from "next/link";
import UserAvatar from "@/components/user-avatar";
import LiveBadge from "@/components/live-badge";
import { Skeleton } from "@/components/ui/skeleton";

interface UserItemProps {
  username: string;
  imageUrl: string;
  isLive: boolean;
}

const UserItem = ({ username, imageUrl, isLive }: UserItemProps) => {
  const pathname = usePathname();
  const collapsed = useSelector(
    (state: RootState) => state.usesidebar.collapsed
  );

  const href = `/${username}`;
  const isActive = pathname === href;

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "w-full h-12",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-accent"
      )}
    >
      <Link href={href}>
        <div
          className={cn(
            "flex items-center w-full gap-x-4",
            collapsed && "justify-center"
          )}
        >
          <UserAvatar imageUrl={imageUrl} username={username} isLive={isLive} />
          {!collapsed && <p className="truncate">{username}</p>}
          {!collapsed && isLive && <LiveBadge className="ml-auto" />}
        </div>
      </Link>
    </Button>
  );
};

export default UserItem;
