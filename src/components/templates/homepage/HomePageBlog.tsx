"use client";

import BlogCard from "@/components/modules/BlogCard";
import { blogData } from "@/constants/homePageData";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function HomePageBlog() {
  const { inView, ref: blogContainer } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const boxVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.2,
      },
    }),
  };

  return (
    <>
      <section
        ref={blogContainer}
        className="w-full flex flex-col items-center justify-start gap-2 mt-10 md:mt-16"
        id="blog"
      >
        <h2 className="w-full text-center text-[var(--highlight)] font-semibold">
          مقالات
        </h2>

        <h3 className="w-full text-center font-bold text-lg ">
          جدید ترین مقالات
        </h3>

        <div className="w-full p-3 flex flex-wrap items-center justify-center gap-4 mt-2">
          {blogData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={boxVariants}
            >
              <BlogCard
                key={index}
                time={item.time}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePageBlog;
