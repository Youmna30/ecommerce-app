import Image from "next/image";
import Slider from "./_components/Slider/Slider";
import InfoCards from "./_components/InfoCards/InfoCards";
import Category from "./_components/Category/Category";
import Product from "./_components/Product/Product";

export default function Home() {
  return (
    <div>
      <Slider />
      <InfoCards />
      <Category />
      <Product />
    </div>
  );
}
