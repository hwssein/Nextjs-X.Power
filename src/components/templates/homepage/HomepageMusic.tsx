"use client";

import Image from "next/image";
import Link from "next/link";

import { BicepsFlexed } from "lucide-react";
import { Button } from "@/components/ui/moving-border";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function HomepageMusic() {
  const { inView, ref: musicContainer } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <>
      <section
        ref={musicContainer}
        className="w-full flex flex-col items-center justify-start gap-8 mt-16 md:flex-row md:justify-between"
      >
        <div className="w-3/4 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView && { opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full flex items-center justify-center"
          >
            <Image
              src="/images/homepage-music.jpg"
              width={400}
              height={400}
              alt="zarb beat music"
              loading="lazy"
              className="w-full max-w-96 min-w-72 flex items-center justify-center rounded-lg"
            />
          </motion.div>
        </div>

        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView && { opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full flex flex-col items-center justify-start gap-4"
          >
            <p className="bg-gradient-to-l from-white to-[var(--highlight)] text-transparent bg-clip-text font-extrabold text-xl text-center sm:text-3xl md:text-5xl md:px-4 md:text-right md:mb-2">
              با بهترین موزیک ها به تمرینت قدرت بده
            </p>

            <p className="w-full text-center px-4 text-primary md:text-right">
              اینجاست که قدرت و انرژی با هم ترکیب می‌شوند. هر تمرین را به
              تجربه‌ای منحصر به فرد تبدیل کن و با موزیک‌های ورزشی ما به بهترین
              نسخه از خودت تبدیل شو.
            </p>

            <Link
              href="https://zarbbeat.vercel.app"
              target="_blank"
              className="w-full flex items-center justify-center"
            >
              <Button
                borderRadius="8px"
                duration={2500}
                className="cursor-pointer"
              >
                بزن که بریم
                <BicepsFlexed />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HomepageMusic;
