import { getRecommended } from "@/dbconfig/recommended-service";
import Recommmended from "./recommended";
import { Wrapper } from "./wrapper";
import { User } from "@/model/UserModel";
import { getFollowedUsers } from "@/dbconfig/follow-service";
import Followers from "./followers";
import NavItem from "./navitem";
import { currentUser } from "@clerk/nextjs/server";

const Sidebar = async () => {
  const user = await currentUser();
  const recommended = await getRecommended();
  const val = await getFollowedUsers();

  return (
    <Wrapper>
      <div>
        <NavItem username={user?.username} />
        <Recommmended data={recommended} />
        <Followers data={val} />
      </div>
    </Wrapper>
  );
};

export default Sidebar;
