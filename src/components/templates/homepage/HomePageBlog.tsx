import BlogCard from "@/components/modules/BlogCard";
import { blogData } from "@/constants/homePageData";

function HomePageBlog() {
  return (
    <>
      <section
        className="w-full flex flex-col items-center justify-start gap-2 mt-10 md:mt-16"
        id="blog"
      >
        <h2 className="w-full text-center text-primary font-semibold">
          مقالات
        </h2>

        <h3 className="w-full text-center font-bold text-lg ">
          جدید ترین مقالات
        </h3>

        <div className="w-full p-3 flex flex-wrap items-center justify-center gap-4 mt-2">
          {blogData.map((item, index) => (
            <BlogCard
              key={index}
              time={item.time}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePageBlog;
