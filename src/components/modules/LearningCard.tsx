import { Video } from "lucide-react";
import { MoveRight } from "lucide-react";
import "animate.css";

interface LearningCardProps {
  title: string;
  description: string;
}

function LearningCard({ title, description }: LearningCardProps) {
  return (
    <div className="w-full h-full relative flex flex-col items-start justify-start gap-6 bg-primary px-4 py-8 sm:justify-center">
      <span className="w-full flex items-center justify-start gap-2 text-xl font-extrabold pr-4">
        <Video color="#ffffff" size={27} /> ویدیو آموزشی
      </span>

      <div className="w-full flex flex-col items-start justify-start gap-2">
        <h4 className="w-full text-right text-lg font-semibold px-4">
          {title}
        </h4>
        <p className="w-full text-right p-3">{description}</p>
      </div>

      <div className="w-1/2 absolute bottom-3 animate__animated animate__fadeInLeft animate__infinite">
        <MoveRight size={30} />
      </div>
    </div>
  );
}

export default LearningCard;
