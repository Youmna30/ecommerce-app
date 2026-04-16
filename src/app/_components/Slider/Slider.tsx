"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import imageSlider from "@/images/coverSlider.png";

import SliderCard from "./SliderCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Slider = () => {
  return (
    <div className="relative">
      <img src={imageSlider.src} className="w-full h-96 object-cover" />

      <div className="absolute inset-0 bg-linear-to-r from-green-500/90 to-green-400/50 ">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          loop
          navigation
          pagination={{
            clickable: true,
            bulletActiveClass:
              "bg-white! opacity-100! w-8! h-3! rounded-2xl! hover:bg-[#fffc]!",
          }}
          className="h-full "
        >
          <SwiperSlide>
            <SliderCard
              header="Fresh Products Delivered to your Door"
              paragraph="Get 20% off your first order"
              btn1="Shop Now"
              btn2="View Deals"
              link1="products"
              link2="deals"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              header="Premium Quality Guaranteed"
              paragraph="Fresh from farm to your table"
              btn1="Shop Now"
              btn2="Learn More"
              link1="products"
              link2="about"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              header="Fast & Free Delivery"
              paragraph="Same day delivery available"
              btn1="Order Now"
              btn2="Delivery Info"
              link1="products"
              link2="delivery"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Slider;
