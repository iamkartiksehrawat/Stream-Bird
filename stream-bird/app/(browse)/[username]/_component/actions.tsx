"use client";
import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionProps) => {
  const [isPending, startTransition] = useTransition();

  const handlefollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) => {
          toast.success(`You are now following ${data.following.username}`);
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    });
  };

  const handleunfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) => {
          toast.success(`You have unfollowed ${data.unfollowed.username}`);
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    });
  };

  const Onclick = () => {
    if (isFollowing) {
      handleunfollow();
    } else {
      handlefollow();
    }
  };

  return (
    <Button disabled={isPending} onClick={Onclick}>
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};
