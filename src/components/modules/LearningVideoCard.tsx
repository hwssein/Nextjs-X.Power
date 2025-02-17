import Image from "next/image";
import { Play } from "lucide-react";

function LearningVideoCard({ image }: { image: string }) {
  return (
    <div className="w-full h-full flex items-start justify-center xs:items-center relative">
      <Image
        src={image}
        width={400}
        height={400}
        alt="learning video Card"
        loading="lazy"
      />
      <div className="w-full h-20 flex flex-col items-center justify-center absolute bottom-2 backdrop-blur-sm">
        <span className="w-9 h-9 p-1 bg-primary rounded-full border border-[var(--stroke)] flex items-center justify-center cursor-pointer">
          <Play />
        </span>
      </div>
    </div>
  );
}

export default LearningVideoCard;
