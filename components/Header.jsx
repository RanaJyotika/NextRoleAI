"use client";
import {
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenIcon, StarsIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <header className="fixed top-0 w-full border-b background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/newlogo.png"
            alt="logo"
            width={200}
            height={60}
            className="py-1 h-8 w-auto  object-contain"
          />
        </Link>
        {/* only appears if user in signed in */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4" />
                <span
                  className="hidden
                md:block"
                >
                  Industry Insights
                </span>
              </Button>
            </Link>
          

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button>
                <StarsIcon className="h-4 w-4" />
                <span
                  className="hidden
                md:block"
                >
                  Growth Tools
                </span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={"/resume"}>
                <FileText className="h-4 w-4" />
                <span
                >
                  Build Resume
                </span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem><Link href={"/ai-cover-letter"}>
                <PenIcon className="h-4 w-4" />
                <span
                >
                  Cover Letter
                </span>
                </Link></DropdownMenuItem>
              <DropdownMenuItem><Link href={"/interview"}>
                <GraduationCap className="h-4 w-4" />
                <span
                >
                  Interview Prep
                </span>
                </Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
      </SignedIn>

           <ClerkLoaded>
        <SignedOut>
          <SignInButton>
            <Button variant="outline">
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton appearance={{
            elements: {
              avatarBox: "w-10 h-10",
              userButtonPopoverCard: "shadow-xl",
              userPreviewMainIdentifier: "font-semibold",
            }
          }}
          afterSignOutUrl={"/"}
          />
        </SignedIn>
      </ClerkLoaded>
        </div>
      </nav>

      
     
    </header>
  );
};

export default Header;
