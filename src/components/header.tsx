import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

import AuthBadge from "./auth-badge";

interface Props {
  noLogo?: boolean
  noAuth?: boolean
}

const Header = async ({ noLogo = false, noAuth = false }: Props) =>
  <header className={twMerge("justify-center flex h-20 w-full items-center py-4 md:h-24 z-10")}>
    <div className={twMerge("flex-1 hidden", clsx({ "md:block hidden": !noAuth }))}></div>
    {
      !noLogo && <a
        href="/" className="flex-none">
        <Image
          priority
          className="w-36 md:w-60"
          src="/logo.png"
          width={250}
          height={58.8}
          quality={100}
          alt="MierdaJobs"
        />
      </a>
    }
    {
      !noAuth && <div className="flex-1">
        {/* ACCOUNT INFORMATION */}
        <AuthBadge />
      </div>
    }
  </header>

export default Header;
