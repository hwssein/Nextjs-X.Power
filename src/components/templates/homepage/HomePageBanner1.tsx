import Image from "next/image";

import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/moving-border";

function HomePageBanner1() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center md:flex-row-reverse md:justify-between">
        <div className="w-4/5 min-w-80">
          <Image
            src="/images/homepage-banner1.png"
            width={500}
            height={500}
            alt="homepage banner 1"
            loading="lazy"
            className="w-full flex items-center justify-center"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-start gap-4">
          <p className="bg-gradient-to-l from-white to-[var(--highlight)] text-transparent bg-clip-text font-extrabold text-xl text-center sm:text-3xl md:text-5xl md:px-4 md:text-right md:mb-2">
            برنامه تمرینی کاملا اختصاصی برای شما...
          </p>

          <p className="w-full text-center px-4 text-primary md:text-right">
            هر فردی با هدفی خاص ورزش می‌کند: کاهش وزن، افزایش وزن، عضله‌سازی،
            حفظ تناسب اندام یا توانبخشی پس از آسیب. با برنامه‌های ورزشی اختصاصی
            ایکس‌پاور، یک برنامه کاملاً شخصی‌سازی‌شده متناسب با اهداف و شرایط
            بدنی خود دریافت کنید و بدون نگرانی از آسیب‌ها، به بهترین نتیجه
            برسید.
          </p>

          <div className="w-full flex items-center justify-center gap-4 flex-wrap px-2 md:justify-start">
            <Button
              borderRadius="8px"
              duration={2500}
              className="cursor-not-allowed"
            >
              دریافت برنامه تمرینی
            </Button>

            <span className="flex items-center justify-center gap-2 p-2 rounded-md cursor-pointer">
              مشاهده نظرات کاربران <MoveLeft />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePageBanner1;
