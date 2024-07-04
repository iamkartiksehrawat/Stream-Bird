import Dashboard from "./Dashboard";
import Logo from "./Logo";
import ToggleSidebar from "./ToggleSidebar";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center fixed w-full bg-background z-10 border-b-[1px] px-4  sm:px-8  py-6 gap-x-8 ">
      <div className="flex gap-x-4 items-center justify-center">
        <ToggleSidebar />
        <Logo />
      </div>

      <Dashboard />
    </nav>
  );
};

export default Navbar;
