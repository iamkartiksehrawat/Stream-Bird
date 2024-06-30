import { getRecommended } from "@/dbconfig/recommended-service";
import Recommmended from "./recommended";
import { Wrapper } from "./wrapper";
import { User } from "@/model/UserModel";
import { getFollowedUsers } from "@/dbconfig/follow-service";
import Followers from "./followers";

const Sidebar = async () => {
  const recommended = (await getRecommended()) as unknown as User[];
  const val = await getFollowedUsers();
  return (
    <Wrapper>
      <div>
        <Recommmended data={recommended} />
        <Followers data={val} />
      </div>
    </Wrapper>
  );
};

export default Sidebar;
