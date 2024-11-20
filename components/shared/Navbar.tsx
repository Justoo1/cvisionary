"use client";

import { UserButton } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <header className="p-3 shadow-sm">
      <div className="tems-center mx-auto flex max-w-7xl justify-between gap-3">
        <Link href="/resumes" className="flex items-center gap-2">
          <Image
            src="/assets/images/logo.png"
            alt="CVivisonary Logo"
            width={35}
            height={35}
            className="rounded-full"
          />
          <span>CVisionary</span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: {
                avatarBox: {
                  width: 35,
                  height: 35,
                },
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="Billing"
                labelIcon={<CreditCard className="size-4" />}
                href="/billing"
              />
            </UserButton.MenuItems>
          </UserButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
