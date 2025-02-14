import Image from "next/image";
import Link from "next/link";

import { MoveLeft } from "lucide-react";

interface ServicesCardProps {
  icon: string;
  title: string;
  description: string;
  url: string;
}

function ServicesCard({ icon, title, description, url }: ServicesCardProps) {
  return (
    <>
      <div className="services-card">
        <Image src={icon} width={50} height={50} alt="services-icon" />

        <span className="font-bold">{title}</span>

        <p className="w-full text-center">{description}</p>

        <Link
          href={`/blog/${url}`}
          className="w-full flex items-center justify-center gap-2"
        >
          ادامه مطلب <MoveLeft />
        </Link>
      </div>
    </>
  );
}

export default ServicesCard;
