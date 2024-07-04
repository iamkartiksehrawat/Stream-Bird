import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { IconHome } from "@tabler/icons-react";
import Link from "next/link";

const Dashboard = async () => {
  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-10 h-10",
    },
  };
  return (
    <div>
      <div className="flex gap-x-4 items-center justify-center">
        <Button variant="ghost" size="sm">
          <Link href="/">
            <IconHome />
          </Link>
        </Button>
        <UserButton afterSignOutUrl="/" appearance={userButtonAppearance} />
      </div>
    </div>
  );
};

export default Dashboard;
