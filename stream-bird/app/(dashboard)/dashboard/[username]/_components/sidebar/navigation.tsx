"use client";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import NavItem from "./navitem";

import { IconCast, IconKey, IconMessages } from "@tabler/icons-react";

const Navigation = () => {
  const { user } = useUser();
  const pathname = usePathname();

  const routes = [
    {
      label: "Stream",
      href: `/dashboard/${user?.username}`,
      icon: <IconCast />,
    },
    {
      label: "Keys",
      href: `/dashboard/${user?.username}/keys`,
      icon: <IconKey />,
    },
    {
      label: "Chat",
      href: `/dashboard/${user?.username}/chat`,
      icon: <IconMessages />,
    },
  ];
  return (
    <ul className="space-y-2 px-2">
      {routes.map((route) => (
        <NavItem
          key={route.href}
          label={route.label}
          href={route.href}
          icon={route.icon}
          isActive={pathname === route.href}
        />
      ))}
    </ul>
  );
};

export default Navigation;
