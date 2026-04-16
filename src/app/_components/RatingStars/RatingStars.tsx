import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-[#FCC800]">
      {[...Array(5)].map((_, i) => {
        if (rating >= i + 1) {
          return <FaStar key={i} className="text-base" />;
        } else if (rating > i && rating < i + 1) {
          return <FaStarHalfAlt key={i} className="text-base" />;
        } else {
          return <FaRegStar key={i} className="text-base" />;
        }
      })}
    </div>
  );
}
