"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function ResponsiveNavbar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="w-full flex items-center justify-between">
        <div className="w-full flex items-center justify-start">
          <Sheet>
            <SheetTrigger className="p-2 cursor-pointer mb-1">
              <AlignJustify size={28} />
            </SheetTrigger>

            <SheetContent className="bg-background border-l-black">
              <SheetHeader>
                <SheetTitle className="w-full text-center text-white uppercase tracking-wider">
                  x.power
                </SheetTitle>

                <ul className="w-full flex- flex-col items-start justify-items-start gap-4">
                  <li
                    className={`p-2 ${
                      pathname === "/"
                        ? "text-[var(--highlight)]"
                        : "text-primary"
                    }`}
                  >
                    <Link href="/">صفحه اصلی</Link>
                  </li>

                  <li
                    className={`p-2 ${
                      pathname === "/store"
                        ? "text-[var(--highlight)]"
                        : "text-primary"
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
                      pathname === "/blog"
                        ? "text-[var(--highlight)]"
                        : "text-primary"
                    }`}
                  >
                    <Link href="#blog">بلاگ</Link>
                  </li>

                  <li
                    className={`p-2 ${
                      pathname === "/about" ? "text-primary" : "text-primary"
                    }`}
                  >
                    <Link href="#about">درباره ما</Link>
                  </li>

                  <li className="p-2 text-white">
                    <Link href="https://zarbbeat.vercel.app" target="_blank">
                      پخش موزیک
                    </Link>
                  </li>
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <span className="p-2 font-semibold text-2xl tracking-wider uppercase">
            x.power
          </span>
        </div>
      </nav>
    </>
  );
}

export default ResponsiveNavbar;
