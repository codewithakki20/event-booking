import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
        <Link href="/" className="flex items-center text-lg font-semibold text-gray-800">
          {/* Uncomment the following Image block to use a logo image */}
          {/*
          <Image 
            src="/assets/images/logo.svg" 
            alt="The CMDians Logo" 
            width={128} 
            height={38} 
            className="mr-2"
          />
          */}
          The CMDians
        </Link>
        <p className="text-sm text-gray-600">
          2023 The CMDians. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
