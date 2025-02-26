import Image from "next/image";

import HeaderTrophy from "@/components/elements/HeaderTrophy";
import StatisticsCounter from "@/components/elements/StatisticsCounter";

import { Trophy } from "lucide-react";
import TextHoverEffect from "@/components/ui/text-hover-effect";
import { Button } from "@/components/ui/moving-border";

function HomePageHeader() {
  return (
    <>
      <section className="w-full overflow-hidden pb-4">
        <div className="w-full text-center">
          <TextHoverEffect text="XPOWER" />
        </div>

        <p className="w-full text-center bg-gradient-to-l from-white to-[var(--highlight)] text-transparent bg-clip-text font-extrabold text-xl mb-2 sm:text-3xl md:text-5xl md:p-1 md:mb-5">
          هر آنچه برای رسیدن به اندام ایده آل نیاز دارید
        </p>

        <h1 className="bg-gradient-to-l from-white to-[var(--highlight)] text-transparent bg-clip-text text-center mb-8 sm:text-xl md:text-2xl md:mb-16">
          تخصصی ترین وبسایت بدنسازی درایران با مجوز رسمی
        </h1>

        <div className="w-full flex items-center justify-center mb-4 relative px-3 mt-10">
          <HeaderTrophy />

          <span className="absolute -top-8 left-5 bg-card p-3 rounded-full z-10 trophy:left-[10%]">
            <Trophy size={35} />
          </span>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-2 mb-6 md:mb-14 md:flex-row-reverse md:justify-between">
          <div className="w-4/5 min-w-80">
            <Image
              src="/images/header-image-dark.png"
              width={400}
              height={400}
              alt="header image"
              priority={true}
              className="w-full flex items-center justify-center mb-6 md:mt-5"
            />
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-6 py-2 px-4 md:gap-8 md:mt-10 md:max-w-3xl">
            <StatisticsCounter />

            <Button
              borderRadius="8px"
              duration={2500}
              containerClassName="w-4/5"
              className="cursor-not-allowed"
            >
              ورود و ثبت نام
            </Button>
          </div>
        </div>

        <p className="w-full bg-secondary p-4 text-center font-extrabold text-xl md:text-2xl mt-8">
          همه می خواهند بدنساز باشند اما کسی نمی خواهد وزنه های سنگین بلند کند!
        </p>
      </section>
    </>
  );
}

export default HomePageHeader;
