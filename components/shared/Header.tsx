import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* Uncomment below if you wish to use an image logo */}
          {/*
          <Image 
            src="/assets/images/logo.svg" 
            width={128} 
            height={38} 
            alt="The CMDians Logo" 
          />
          */}
          <span className="text-2xl font-bold text-gray-800">The CMDians</span>
        </Link>

        <SignedIn>
          <nav className="hidden md:flex space-x-8">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button
              asChild
              className="rounded-full bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition"
            >
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
