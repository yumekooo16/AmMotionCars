'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MobileBurgerMenu from "@/components/Acceuil/MobileBurgerMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-screen h-15 bg-black flex items-center justify-between px-5 fixed top-0 z-20" suppressHydrationWarning>
      <div className="flex items-center" suppressHydrationWarning>
        <Link href="/" className="inline-block">
          <Image 
            src="/image/motioncar.webp" 
            alt="AM Motion Cars" 
            width={60} 
            height={60}
            priority
          />
        </Link>
      </div>
      <MobileBurgerMenu />
    </header>
  );
}