"use client";
import { SignIn } from "@clerk/nextjs";
import { useSignIn } from "@clerk/nextjs";
import { IconLoader2 } from "@tabler/icons-react";

export default function Page() {
  const { isLoaded } = useSignIn();
  return isLoaded ? (
    <div className="flex flex-col gap-8 items-center justify-center">
      <img src="./Birdeee.png" className="w-[200px]" />
      <SignIn />
    </div>
  ) : (
    <div className="flex gap-2 text-xl">
      Loading <IconLoader2 className="animate-spin" />
    </div>
  );
}
