import Image from "next/image";
import React from "react";

import BackButton from "@/components/back-button";

const Header = () => {
  return (
    <header className="flex w-full items-center py-1.5">
      <nav className="flex-1">
        <BackButton
          variant="ghost" className="min-w-fit md:hidden" />
      </nav>
      <a
        href="/" className="flex-none">
        <Image
          className="w-36 md:w-60"
          src="/logo.png"
          width="250"
          quality={100}
          height="0"
          alt="MierdaJobs"
        />
      </a>
      <div className="flex-1">
        {/* ACCOUNT INFORMATION */}
      </div>
    </header >
  );
};

export default Header;
