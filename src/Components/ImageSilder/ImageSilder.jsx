"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ImageSlider() {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-[600px]"
        >
            <SwiperSlide>
                <img src="https://i.ibb.co.com/FMTFGJ0/IPHONE-17-seriesv5.jpg" className="h-[600px] w-full rounded" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co.com/HfSLsShz/all-outlet.jpg" className="h-[600px] w-full rounded" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="https://i.ibb.co.com/zc46ckV/gamimg-v2.jpg" className="h-[600px] w-full rounded" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="https://i.ibb.co.com/FbW8d4BD/website.jpg" className="h-[600px] w-full rounded" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co.com/DHXD6P8Y/gadget-v2.jpg" className="h-[600px] w-full rounded" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co.com/wNtwD8fb/sc-offer-main-banner.jpg" className="h-[600px] w-full rounded" />
            </SwiperSlide>
        </Swiper>
    );
}