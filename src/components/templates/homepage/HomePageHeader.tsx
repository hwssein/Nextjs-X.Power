import Image from "next/image";

import { Trophy } from "lucide-react";

function HomePageHeader() {
  return (
    <>
      <section className="w-full">
        <div className="w-full flex flex-col items-center justify-center gap-2 mb-6 md:mb-14 md:flex-row-reverse md:justify-between">
          <Image
            src="/images/header-image.png"
            width={400}
            height={400}
            alt="header image"
            className="flex items-center justify-center mb-6 md:mt-5"
          />

          <div className="w-full flex flex-col items-center justify-center md:mt-10 md:pr-4 md:max-w-3xl">
            <p className="bg-gradient-to-l from-white to-[var(--stroke)] text-transparent bg-clip-text font-extrabold text-xl text-center mb-2 md:text-5xl md:p-1 md:text-right md:mb-4">
              هر آنچه برای رسیدن به اندام ایده آل نیاز دارید
            </p>

            <p className="bg-gradient-to-l from-white to-[var(--stroke)] text-transparent bg-clip-text text-center mb-6 md:text-right md:text-2xl md:mb-16">
              تخصصی ترین وبسایت بدنسازی درایران با مجوز رسمی
            </p>

            <span className="w-full inline-block p-2 relative mb-4 md:mb-6">
              <p className="w-full text-center py-8 px-4 border border-[var(--stroke)] rounded-md backdrop-blur bg-[rgba(255,255,255,0.1)] md:p-10">
                با بیش از ۲۵ سال تجربه در ورزش بدنسازی و تناسب اندام تصمیم
                گرفتیم دانش و تجربه خود را در اختیار همه علاقه‌مندان به این رشته
                ورزشی جذاب قرار دهیم.
              </p>

              <span className="absolute -top-6 left-5 bg-primary p-3 rounded-full z-10">
                <Trophy size={35} />
              </span>
            </span>

            <div className="w-full flex items-center justify-center p-2 px-4">
              <ul className="w-full flex items-center justify-between">
                <li className="flex flex-col item-center justify-start gap-1">
                  <span className="w-24 text-center text-2xl md:text-4xl">
                    ۲۰۰۰+
                  </span>
                  <span className="w-24 text-center text-primary text-sm">
                    کاربر فعال
                  </span>
                </li>
                <li>
                  <span className="w-px h-16 bg-gradient-to-b from-white to-transparent inline-block"></span>
                </li>

                <li className="flex flex-col item-center justify-start gap-1">
                  <span className="w-24 text-center text-2xl md:text-4xl">
                    ۲۵۰+
                  </span>
                  <span className="w-24 text-center text-primary text-sm">
                    مکمل بدنسازی
                  </span>
                </li>
                <li>
                  <span className="w-px h-16 bg-gradient-to-b from-white to-transparent inline-block"></span>
                </li>

                <li className="flex flex-col item-center justify-start gap-1">
                  <span className="w-24 text-center text-2xl md:text-4xl">
                    ۱۰۰۰+
                  </span>
                  <span className="w-24 text-center text-primary text-sm">
                    رژیم غدایی آنلاین
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="w-full bg-primary p-2 py-4 text-center -rotate-1 font-extrabold text-xl md:text-2xl">
          همه می خواهند بدنساز باشند اما کسی نمی خواهد وزنه های سنگین بلند کند!
        </p>
      </section>
    </>
  );
}

export default HomePageHeader;
