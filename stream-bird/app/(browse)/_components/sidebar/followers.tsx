"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import UserItem from "./useritem";

const Followers = ({ data }: any) => {
  const collapsed = useSelector(
    (state: RootState) => state.usesidebar.collapsed
  );

  if (!data.length) {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      {!collapsed && (
        <div>
          <p className="text-sm text-[#505050] font-semibold py-4">Following</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((item: any, indx: number) => (
          <UserItem
            key={indx}
            username={item.username}
            imageUrl={item.imageUrl}
            isLive={item.stream.isLive}
          />
        ))}
      </ul>
    </div>
  );
};

export default Followers;
