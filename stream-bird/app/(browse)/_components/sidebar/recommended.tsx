"use client";
import { User } from "@/model/UserModel";
import UserItem from "./useritem";

interface RecommmendedProps {
  data: User[];
}

const Recommmended = ({ data }: RecommmendedProps) => {
  if (!data.length) {
    return null;
  }
  return (
    <div className="flex flex-col items-center">
      <div className="py-4 font-semibold text-sm text-[#505050]">For You</div>
      <ul className="space-y-2 px-2">
        {data.map((user, indx) => (
          <UserItem
            key={indx}
            username={user.username}
            imageUrl={user.imageUrl!}
            isLive={user.isLive}
          />
        ))}
      </ul>
    </div>
  );
};

export default Recommmended;
