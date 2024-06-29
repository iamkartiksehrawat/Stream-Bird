import { getRecommended } from "@/dbconfig/recommended-service";
import Recommmended from "./recommended";
import { Wrapper } from "./wrapper";
import { User } from "@/model/UserModel";
import { Skeleton } from "@/components/ui/skeleton";

const Sidebar = async () => {
  const recommended = (await getRecommended()) as unknown as User[];

  return (
    <Wrapper>
      <div>
        <Recommmended data={recommended} />
      </div>
    </Wrapper>
  );
};

export default Sidebar;
