"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/elements/Navbar"), { ssr: false });
const ResponsiveNavbar = dynamic(() => import("@/elements/ResponsiveNavbar"), {
  ssr: false,
});

function Header() {
  return (
    <>
      <div className="w-full flex items-center justify-start my-1 p-1">
        <div className="hidden md:block md:w-full">
          <Navbar />
        </div>
        <div className="w-full block md:hidden">
          <ResponsiveNavbar />
        </div>
      </div>
    </>
  );
}

export default Header;
