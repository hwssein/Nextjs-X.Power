"use client";

import ServicesCard from "@/components/modules/ServicesCard";
import { servicesData } from "@/constants/homePageData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HomePageServices() {
  const { inView, ref: servicesContainer } = useInView({
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
    <section
      className="w-full flex flex-col items-center justify-start gap-2 mt-10 md:mt-14"
      id="services"
    >
      <h2 className="w-full text-center text-[var(--highlight)] font-semibold">
        خدمات ما
      </h2>
      <h3 className="w-full text-center font-bold text-lg ">
        ما در ایکس پاور چه خدماتی ارائه میکنیم؟
      </h3>

      <div
        ref={servicesContainer}
        className="w-full p-3 flex flex-wrap items-center justify-center gap-3"
      >
        {servicesData.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={boxVariants}
          >
            <ServicesCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              url={item.url}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HomePageServices;
