import Navigation from "./navigation";
import { Wrapper } from "./wrapper";

const Sidebar = async () => {
  return (
    <Wrapper>
      <div className="flex flex-col space-y-4 p-2 items-center">
        <span className=" font-semibold">Dashboard</span>
        <Navigation />
      </div>
    </Wrapper>
  );
};

export default Sidebar;
