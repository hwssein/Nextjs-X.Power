import Image from "next/image";
import { BlogDataProps } from "@/types/types";

import { MoveLeft } from "lucide-react";

function BlogCard({ image, title, description, time }: BlogDataProps) {
  return (
    <>
      <div className="w-full max-w-80 h-96 relative bg-card rounded-lg flex flex-col items-center justify-start gap-3 mb-3 hover:bg-primary transition-colors group cursor-pointer shadow-lg">
        <div className="w-full flex items-center justify-center relative">
          <Image
            src={image}
            width={350}
            height={175}
            alt={`${title} image`}
            loading="lazy"
            className="w-full rounded-t-lg"
          />

          <span className="absolute bottom-4 right-4 backdrop-blur-md py-1 px-2 rounded-md text-xs">
            {time} ساعت قبل
          </span>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-4">
          <h4 className="w-full px-3 text-right font-bold">{title}</h4>

          <p className="w-full px-3 text-right">{description}</p>
        </div>

        <span className="absolute -bottom-3 z-10 p-1 bg-primary rounded-lg group-hover:bg-white transition-all group-hover:text-primary group-hover:rotate-90">
          <MoveLeft />
        </span>
      </div>
    </>
  );
}

export default BlogCard;
