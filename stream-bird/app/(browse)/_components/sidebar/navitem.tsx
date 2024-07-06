"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSelector, UseSelector } from "react-redux";
import { RootState } from "@/store";
import { IconVideo } from "@tabler/icons-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Showmodal = ({ openmodal, setmodalopen }: any) => {
  return (
    <AlertDialog open={openmodal} onOpenChange={setmodalopen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex justify-center text-xl">
            <div>Create Your Account</div>
          </AlertDialogTitle>
          <AlertDialogDescription className="fex justify-center items-center">
            <div className="text-center">
              Please log in or create an account first.
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center">
          <AlertDialogCancel>
            <div>Ok</div>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const NavItem = ({ username }: any) => {
  const collapsed = useSelector(
    (state: RootState) => state.usesidebar.collapsed
  );
  const [openmodal, setmodalopen] = useState(false);

  const handlemodal = () => {
    setmodalopen(true);
  };
  if (!username) {
    return (
      <div className="mt-4 cursor-pointer">
        <Showmodal openmodal={openmodal} setmodalopen={setmodalopen} />
        <Button variant="ghost" asChild onClick={handlemodal}>
          <div
            className={cn(
              " w-full flex items-center gap-x-4 justify-start",
              collapsed && "justify-center"
            )}
          >
            <IconVideo />
            {!collapsed && <span className="ml-2">Dashboard</span>}
          </div>
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-4 cursor-pointer">
      <Button variant="ghost" asChild>
        <Link href={`/dashboard/${username}`}>
          <div
            className={cn(
              " w-full flex items-center gap-x-4 justify-start",
              collapsed && "justify-center"
            )}
          >
            <IconVideo />
            {!collapsed && <span className="ml-2">Dashboard</span>}
          </div>
        </Link>
      </Button>
    </div>
  );
};

export default NavItem;
