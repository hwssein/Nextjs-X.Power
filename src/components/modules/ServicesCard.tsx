"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import { ServicesDataProps } from "@/types/types";

const Meteors = dynamic(() => import("@/ui/meteors"), { ssr: false });
import { MoveLeft } from "lucide-react";

function ServicesCard({ icon, title, description, url }: ServicesDataProps) {
  return (
    <div className="max-w-72 h-72 overflow-hidden relative bg-background flex flex-col items-center justify-center gap-6 p-3 rounded-lg shadow-lg border border-[var(--stroke)] hover:bg-card transition-colors">
      <Image
        src={icon}
        width={50}
        height={50}
        alt="services-icon"
        loading="lazy"
      />
      <span className="font-bold">{title}</span>
      <p className="w-full text-center">{description}</p>
      <p className="w-full flex items-center justify-center gap-2 cursor-pointer">
        ادامه مطلب <MoveLeft />
        <span className="hidden">{url}</span>
      </p>

      <Meteors number={20} />
    </div>
  );
}

export default ServicesCard;
