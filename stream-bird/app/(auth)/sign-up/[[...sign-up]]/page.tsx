"use client";
import { SignUp } from "@clerk/nextjs";
import { useSignUp } from "@clerk/nextjs";
import { IconLoader2 } from "@tabler/icons-react";
export default function Page() {
  const { isLoaded } = useSignUp();
  return isLoaded ? (
    <div className="flex flex-col gap-4 items-center justify-center">
      <img src="./Birdeee.png" />
      <SignUp />
    </div>
  ) : (
    <div className="flex gap-2 text-xl">
      Loading <IconLoader2 className="animate-spin" />
    </div>
  );
}
