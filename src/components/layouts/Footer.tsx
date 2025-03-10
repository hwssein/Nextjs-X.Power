import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="w-full flex-col items-center justify-center">
        <div
          className="w-[90%] flex flex-col items-center justify-start gap-4 bg-card mx-auto py-4 rounded-t-lg lg:flex-row lg:justify-between lg:w-4/5"
          id="about"
        >
          <a
            href="tel:02134562245"
            className="w-full flex items-center justify-center gap-2"
          >
            <span>شماره تماس:</span>
            <span dir="ltr">۰۲۱ ۳۴۵۶ ۲۲۴۵</span>
          </a>

          <p className="w-full text-center">
            ما را در شبکه های اجتماعی دنبال کنید
          </p>

          <span className="w-full flex items-center justify-center gap-3">
            <span className="p-2 bg-secondary rounded-md cursor-pointer">
              <Twitter />
            </span>

            <span className="p-2 bg-secondary rounded-md cursor-pointer">
              <Instagram />
            </span>

            <span className="p-2 bg-secondary rounded-md cursor-pointer">
              <Linkedin />
            </span>

            <span className="p-2 bg-secondary rounded-md cursor-pointer">
              <Youtube />
            </span>
          </span>
        </div>

        <div className="w-full flex flex-col items-center justify-start py-4 sm:py-10 bg-secondary">
          <div className="w-full flex flex-col items-center justify-start gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
            <div className="w-full flex flex-col items-center justify-start gap-1">
              <span className="font-semibold text-[var(--highlight)]">
                دسترسی سریع
              </span>

              <ul className="w-full flex flex-col items-center justify-start gap-2 text-sm">
                <li>فروشگاه</li>
                <li>خدمات</li>
                <li>بلاگ</li>
              </ul>
            </div>

            <div className="w-full flex flex-col items-center justify-start gap-1 ">
              <span className="font-semibold text-[var(--highlight)]">
                راهنمای مشتریان
              </span>

              <ul className="w-full flex flex-col items-center justify-start gap-2 text-sm">
                <li>پاسخ به پرسش های متداول</li>
                <li>روش های ارسال کالا</li>
                <li>روش های پرداخت</li>
                <li>قوانین و مقررات</li>
              </ul>
            </div>

            <div className="w-full flex items-center justify-center gap-3">
              <Image
                src="/images/zarinpal.png"
                width={100}
                height={120}
                loading="lazy"
                alt="zarinpal image"
                className="w-[100px] h-[120px] rounded-lg"
              />
              <Image
                src="/images/enamad.png"
                width={100}
                height={120}
                loading="lazy"
                alt="e-namad image"
                className="w-[100px] h-[120px] bg-white rounded-lg"
              />
            </div>
          </div>

          <Link
            href="https://github.com/hwssein"
            target="_blank"
            className="w-[80%] text-center mt-6 p-3 bg-card sm:w-[40%] rounded-lg"
          >
            توسعه داده شده توسط hwssein
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
