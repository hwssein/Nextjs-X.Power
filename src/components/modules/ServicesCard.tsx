import Image from "next/image";

import { MoveLeft } from "lucide-react";
import { ServicesDataProps } from "@/types/types";

function ServicesCard({ icon, title, description, url }: ServicesDataProps) {
  return (
    <>
      <div className="services-card">
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
      </div>
    </>
  );
}

export default ServicesCard;
