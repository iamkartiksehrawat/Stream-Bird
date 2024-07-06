"use client";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

const Logo = () => {
  const ismobile = useMediaQuery("(max-width: 640px)");

  return (
    <Link href="/">
      <Image
        src={ismobile ? "/Birde-short.png" : "/Birdeee.png"}
        alt="Logo"
        width={ismobile ? 50 : 150}
        height={10}
        className=" object-contain"
      />
    </Link>
  );
};

export default Logo;
