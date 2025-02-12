"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full mt-2 flex items-center justify-between">
      <ul className="w-full flex items-center justify-start gap-6">
        <li className="p-2 font-extrabold text-2xl tracking-wider uppercase">
          x.power
        </li>

        <li
          className={`p-2 ${pathname === "/" ? "text-primary" : "text-white"}`}
        >
          <Link href="/">صفحه اصلی</Link>
        </li>

        <li
          className={`p-2 ${
            pathname === "/store" ? "text-primary" : "text-white"
          }`}
        >
          <Link href="/store">فروشگاه</Link>
        </li>

        <li
          className={`p-2 ${
            pathname === "/services" ? "text-primary" : "text-white"
          }`}
        >
          <Link href="/services">خدمات</Link>
        </li>

        <li
          className={`p-2 ${
            pathname === "/blog" ? "text-primary" : "text-white"
          }`}
        >
          <Link href="/blog">بلاگ</Link>
        </li>

        <li
          className={`p-2 ${
            pathname === "/about" ? "text-primary" : "text-white"
          }`}
        >
          <Link href="/about">درباره ما</Link>
        </li>
      </ul>

      <div className="p-2">
        <Button>ورود و ثبت نام</Button>
      </div>
    </nav>
  );
}

export default Navbar;
