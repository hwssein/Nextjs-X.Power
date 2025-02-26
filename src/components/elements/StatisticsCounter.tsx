"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function StatisticsCounter() {
  const { inView, ref: counterRef } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const users = useMotionValue(0);
  const supplements = useMotionValue(0);
  const foods = useMotionValue(0);

  const usersValue = useTransform(users, (value) => Math.round(value));
  const supplementsValue = useTransform(supplements, (value) =>
    Math.round(value)
  );
  const foodsValue = useTransform(foods, (value) => Math.round(value));

  useEffect(() => {
    if (inView) {
      const usersAnimation = animate(users, 2000, { duration: 5 });
      const supplementsAnimation = animate(supplements, 250, { duration: 5 });
      const foodsAnimation = animate(foods, 100, { duration: 5 });

      return () => {
        usersAnimation.stop();
        supplementsAnimation.stop();
        foodsAnimation.stop();
      };
    }
  }, [inView, foods, supplements, users]);

  return (
    <ul ref={counterRef} className="w-full flex items-center justify-evenly">
      <li className="flex flex-col item-center justify-start gap-1">
        <span className="w-24 text-center text-3xl lg:text-5xl lg:w-40 flex items-center justify-center gap-1">
          <motion.pre>{usersValue}</motion.pre>+
        </span>
        <span className="w-24 text-center text-primary text-base lg:text-xl lg:w-40">
          کاربر فعال
        </span>
      </li>
      <li>
        <span className="w-px h-16 bg-gradient-to-b from-white to-transparent inline-block"></span>
      </li>

      <li className="flex flex-col item-center justify-start gap-1">
        <span className="w-24 text-center text-3xl lg:text-5xl lg:w-40 flex items-center justify-center gap-1">
          <motion.pre>{supplementsValue}</motion.pre>+
        </span>
        <span className="w-24 text-center text-primary text-base lg:text-xl lg:w-40">
          مکمل بدنسازی
        </span>
      </li>
      <li>
        <span className="w-px h-16 bg-gradient-to-b from-white to-transparent inline-block"></span>
      </li>

      <li className="flex flex-col item-center justify-start gap-1">
        <span className="w-24 text-center text-3xl lg:text-5xl lg:w-40 flex items-center justify-center gap-1">
          <motion.pre>{foodsValue}</motion.pre>+
        </span>
        <span className="w-24 text-center text-primary text-base lg:text-xl lg:w-40">
          رژیم غدایی
        </span>
      </li>
    </ul>
  );
}

export default StatisticsCounter;
