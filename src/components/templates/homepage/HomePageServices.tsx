import ServicesCard from "@/components/modules/ServicesCard";

function HomePageServices() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-start gap-2 mt-10 md:mt-14">
        <h2 className="w-full text-center text-primary font-semibold">
          خدمات ما
        </h2>

        <h3 className="w-full text-center font-bold text-lg ">
          ما در ایکس پاور چه خدماتی ارائه میکنیم؟
        </h3>

        <div className="w-full p-3 flex flex-wrap items-center justify-center gap-2 mt-4">
          <ServicesCard
            icon="/images/services-icon1.png"
            title="انگیزه و روانشناسی"
            description="غلبه بر چالش‌های ذهنی و تقویت تمرکز برای بهترین عملکرد"
            url="#1"
          />
          <ServicesCard
            icon="/images/services-icon2.png"
            title="رژیم غذایی"
            description="ارائه رژیمهای غذایی ویژه ورزشکاران و افرادی که دوستدار سلامتی هستند"
            url="#2"
          />
          <ServicesCard
            icon="/images/services-icon3.png"
            title="مکمل های بدنسازی"
            description="بررسی انواع مکملهای بدنسازی برای انتخاب بهترین مکمل بدنسازی"
            url="#3"
          />
          <ServicesCard
            icon="/images/services-icon4.png"
            title="برنامه تمرینی"
            description="ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح ورزشی"
            url="#4"
          />
        </div>
      </section>
    </>
  );
}

export default HomePageServices;
