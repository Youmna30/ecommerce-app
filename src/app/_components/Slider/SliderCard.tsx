import Link from "next/link";
import React from "react";

interface SliderCardType {
  header: string;
  paragraph: string;
  btn1: string;
  btn2: string;
  link1: string;
  link2: string;
}

const SliderCard = ({
  header,
  paragraph,
  btn1,
  btn2,
  link1,
  link2,
}: SliderCardType) => {
  return (
    <div className="py-28 mx-auto w-10/12">
      <h2 className="text-white text-3xl font-bold mb-4 max-w-96">{header}</h2>
      <p className="text-white font-medium">{paragraph}</p>
      <div className="mt-4">
        <Link
          href={`/${link1}`}
          className="px-6 py-2 btn bg-white border-2 border-white/50 text-green-500 inline-block rounded-lg font-semibold hover:scale-105 transition-transform"
        >
          {btn1}
        </Link>
        <Link
          href={`/${link2}`}
          className="px-6 py-2 btn bg-transparent border-2 border-white/50 text-white ml-2 inline-block rounded-lg font-semibold hover:scale-105 transition-transform"
        >
          {btn2}
        </Link>
      </div>
    </div>
  );
};

export default SliderCard;
