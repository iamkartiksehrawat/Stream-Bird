"use client";
import { User } from "@/model/UserModel";
import UserItem from "./useritem";
import { Skeleton } from "@/components/ui/skeleton";

interface RecommmendedProps {
  data: User[];
}

const Recommmended = ({ data }: RecommmendedProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="py-4 font-semibold">For You</div>
      <ul className="space-y-2 px-2">
        {data.map((user, indx) => (
          <UserItem
            key={indx}
            username={user.username}
            imageUrl={user.imageUrl!}
            isLive={false}
          />
        ))}
      </ul>
    </div>
  );
};

export default Recommmended;
