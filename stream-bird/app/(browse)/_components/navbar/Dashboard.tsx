import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { IconVideo } from "@tabler/icons-react";
import Link from "next/link";

const Dashboard = async () => {
  const user = await currentUser();
  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-10 h-10",
    },
  };
  return (
    <div>
      {!user && (
        <SignInButton>
          <Button>Login</Button>
        </SignInButton>
      )}
      {user && (
        <div className="flex gap-x-4 items-center justify-center">
          <Button variant="ghost" size="sm">
            <Link href={`/dashboard/${user.username}`}>
              <IconVideo />
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/" appearance={userButtonAppearance} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
