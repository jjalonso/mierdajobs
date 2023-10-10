import React from "react";

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) =>
  <div className="flex max-w-screen-md grow flex-col">
    <div className="flex flex-col gap-6 rounded-md bg-white px-8 py-10 shadow-md md:gap-8 md:p-14">
      {children}
    </div>
  </div>

export default Layout;
