"use client";

import Link from "next/link";
import { navItems } from "@/lib/constants";
import ConnectButton from "./connect-button";
import MobileNav from "./mobile-navbar";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { ScanQrCode, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 isolate z-10 bg-contrast/50 backdrop-filter backdrop-blur-xl shadow-sm">
        <nav
          aria-label="Desktop navigation"
          className="mx-auto flex container items-center justify-between p-6 lg:!px-8 !py-4"
        >
          <div className="flex-1 hidden md:block justify-start items-center">
            <div className="flex items-center">
              <div className="flex items-center gap-8">
                {navItems.map((navItem, idx: number) => (
                  <React.Fragment key={`nav-item-${idx}`}>
                    <Button
                      onClick={() => router.push(navItem.href)}
                      className={`relative ${
                        pathname === navItem.href ? "bg-blue-100/50" : ""
                      } hover:bg-blue/20 transition-colors duration-200`}
                    >
                      <span className="flex items-center gap-1 text-md !cursor-pointer font-semibold text-black">
                        {navItem.name === "Pay" ? (
                          <Send className="w-4 h-4" />
                        ) : (
                          <ScanQrCode className="w-4 h-4" />
                        )}
                        {navItem.name}
                        {pathname === navItem.href && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></span>
                        )}
                      </span>
                    </Button>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-4">
            <Link href="/">
              <Image
                src="/logos/svg/cube-blue.svg"
                alt="cube-logo"
                width={40}
                height={40}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
          </div>
          <div className="flex-1 justify-end items-center hidden md:!flex gap-2">
            <ConnectButton />
          </div>
          <div className="block md:hidden ml-8">
            <MobileNav navItems={navItems} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
