"use client";

import { usePathname } from "next/navigation";

import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

function ResponsiveNavbar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="w-full mt-2 flex items-center justify-between">
        <div className="w-full flex items-center justify-start">
          <Sheet>
            <SheetTrigger className="p-2 cursor-pointer mb-1">
              <AlignJustify size={28} />
            </SheetTrigger>

            <SheetContent className="bg-foreground border-l-black">
              <SheetHeader>
                <SheetTitle className="w-full text-center text-white uppercase tracking-wider">
                  x.power
                </SheetTitle>

                <ul className="w-full flex- flex-col items-start justify-items-start gap-4">
                  <li
                    className={`p-2 ${
                      pathname === "/" ? "text-primary" : "text-white"
                    }`}
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
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <span className="p-2 font-semibold text-2xl tracking-wider uppercase">
            x.power
          </span>
        </div>

        <div className="p-2">
          <Button size="sm">ورود و ثبت نام</Button>
        </div>
      </nav>
    </>
  );
}

export default ResponsiveNavbar;
