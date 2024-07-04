"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  IconCast,
  IconKey,
  IconMessages,
  IconUsers,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  label: string;
  href: string;
  icon: React.ReactNode;
  isActive: boolean;
}

const NavItem = ({ icon: Icon, label, href, isActive }: NavItemProps) => {
  const collapsed = useSelector(
    (state: RootState) => state.usesidebar.collapsed
  );
  return (
    <Button
      variant="ghost"
      asChild
      className={cn("w-full", isActive && "bg-accent")}
    >
      <Link href={href}>
        <div
          className={cn(
            " w-full flex items-center gap-x-4 justify-start",
            collapsed && "justify-center"
          )}
        >
          {Icon}
          {!collapsed && <span className="ml-2">{label}</span>}
        </div>
      </Link>
    </Button>
  );
};

export default NavItem;
