"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex items-center justify-between">
      <ul className="w-full flex items-center justify-start gap-6">
        <li className="p-2 font-extrabold text-2xl tracking-wider uppercase">
          x.power
        </li>

        <li
          className={`p-2 ${
            pathname === "/" ? "text-[var(--highlight)]" : "text-primary"
          }`}
        >
          <Link href="/">صفحه اصلی</Link>
        </li>

        <li
          className={`p-2 ${
            pathname === "/store" ? "text-[var(--highlight)]" : "text-primary"
          }`}
        >
          <Link href="#store">فروشگاه</Link>
        </li>

        <li
          className={`p-2 ${
            pathname === "/services"
              ? "text-[var(--highlight)]"
              : "text-primary"
          }`}
        >
          <Link href="#services">خدمات</Link>
        </li>

        <li
          className={`p-2 ${
            pathname === "/blog" ? "text-[var(--highlight)]" : "text-primary"
          }`}
        >
          <Link href="#blog">بلاگ</Link>
        </li>

        <li
          className={`p-2 ${
            pathname === "/about" ? "text-[var(--highlight)]" : "text-primary"
          }`}
        >
          <Link href="#about">درباره ما</Link>
        </li>

        <li className="p-2 text-">
          <Link href="https://zarbbeat.vercel.app" target="_blank">
            پخش موزیک
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
