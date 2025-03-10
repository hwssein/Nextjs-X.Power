"use client";

import Image from "next/image";

import { Plus } from "lucide-react";
import { StoreDataProps } from "@/types/types";

function StoreCard({ image, title, price }: StoreDataProps) {
  return (
    <div className="w-64 h-80 flex flex-col items-center justify-start gap-4 relative select-none mx-auto">
      <div className="max-w-36 p-2 bg-secondary/50 backdrop-blur-md rounded-lg z-10 shadow-lg border border-[var(--stroke)] group-[.swiper-slide-active]:bg-secondary/30">
        <Image
          src={image}
          width={200}
          height={200}
          alt={title}
          className="w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="w-full h-[90%] flex flex-col items-center justify-start gap-8 bg-secondary pt-32 px-5 rounded-lg absolute top-[10%] group-[.swiper-slide-active]:bg-card">
        <strong className="w-full text-center font-normal">{title}</strong>

        <span className="w-full flex items-center justify-between gap-2">
          <span>قیمت:</span>
          <span>{price.toLocaleString("fa-IR")} تومان</span>
        </span>
      </div>

      <span className="z-10 absolute -bottom-3 bg-secondary rounded-md p-1 group-[.swiper-slide-active]:hidden">
        <Plus />
      </span>

      <span className="hidden z-10 absolute -bottom-3 bg-secondary text-primary rounded-md py-1 px-2 cursor-pointer group-[.swiper-slide-active]:flex">
        افزودن به سبد خرید
      </span>
    </div>
  );
}

export default StoreCard;
