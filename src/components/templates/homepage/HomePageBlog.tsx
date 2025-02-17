import BlogCard from "@/components/modules/BlogCard";

function HomePageBlog() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-start gap-2 mt-10 md:mt-16">
        <h2 className="w-full text-center text-primary font-semibold">
          مقالات
        </h2>

        <h3 className="w-full text-center font-bold text-lg ">
          جدید ترین مقالات
        </h3>

        <div className="w-full p-3 flex flex-wrap items-center justify-center gap-4 mt-2">
          <BlogCard
            time={12}
            image="/images/homepage-blog1.png"
            title="پولدارترین بدنسازهای تاریخ"
            description="صنعت بدنسازی گاهی مرموز به نظر می‌رسد، اگر می‌خواهید بدانید چه افرادی در این صنعت، پول‌های حسابی بدست می‌آورند..."
          />

          <BlogCard
            time={15}
            image="/images/homepage-blog2.png"
            title="برنامه تمرینی اینتروال چربی سوزی"
            description="تمرینات اینتروال (HIIT) موثرترین روش تمرین برای چربی سوزی و حفظ عضلات است. در ادامه سعی می‌کنم درمورد تمرینات اینتروال بیشتر..."
          />

          <BlogCard
            time={20}
            image="/images/homepage-blog3.png"
            title="چقدر مقدار وزنه انتخاب کنم؟"
            description="صنعت بدنسازی گاهی مرموز به نظر می‌رسد، اگر می‌خواهید بدانید چه افرادی در این صنعت، پول‌های حسابی بدست می‌آورند با ما همراه باشید."
          />
        </div>
      </section>
    </>
  );
}

export default HomePageBlog;
