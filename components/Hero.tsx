'use client'

import Image from "next/image";
import Button from "./Button";
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
const Hero = () => {
    return (
        <>
            {/* <section className="bg-[#D7DDDF] flex items-center md:justify-between">
                <Image
                    src="/icons/angle-left.png"
                    width={60}
                    height={60}
                    alt="angle-left"
                />

                <div className="flex flex-col justify-between py-4 md:w-[60vw] md:flex-row-reverse md:gap-12">

                    <div>
                        <Image src="/images/hero-img.svg" width={500} height={500} alt="hero-img"
                            className=" lg:pl-12 "
                        />
                    </div>

                    <div className="flex flex-col items-center justify-between gap-6 py-10 md:justify-center  md:items-start md:gap-5 lg:gap-8  ">
                        <h1 className="font-light uppercase text-center text-5xl md:text-start md:text-4xl md:w-[25vw] lg:text-5xl ">
                            Your Products <br /> are Great.
                        </h1>
                        <Button type="button" title="Shop Product" variant="bg-[#272727]"
                        />
                    </div>

                </div>

                <Image
                    src="/icons/angle-right.png"
                    width={60}
                    height={60}
                    alt="angle-right"
                />
            </section> */}
            <Swiper
                className="mySwiper md:h-[55vh]"
                modules={[Navigation, Scrollbar, A11y, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide className="bg-[#D7DDDF] flex items-center">
                    <div className="h-full  flex flex-col justify-between items-center md:w-[60vw] mx-auto md:flex-row-reverse md:gap-12">

                        <div>
                            <Image src="/images/hero-img.svg" width={500} height={500} alt="hero-img" className="w-full lg:pl-12 h-[60vh]" />
                        </div>

                        <div className="flex flex-col items-center justify-between gap-6 py-10 md:justify-center md:items-start md:gap-5 lg:gap-8">
                            <h1 className="font-light uppercase text-center text-5xl md:text-start md:text-4xl md:w-[25vw] lg:text-5xl">
                                Watches  <br />That Define You.
                            </h1>
                            <Button type="button" title="Explore Watch" variant="bg-[#272727]" />
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-[#cdc9b3] flex items-center ">
                    <div className="h-full flex flex-col justify-between items-center md:w-[60vw] mx-auto md:flex-row-reverse md:gap-12">

                        <div className="">
                            <Image src="/images/hero-img2.png" width={500} height={500} alt="hero-img" className="object-cover w-full h-[60vh] lg:pl-12 " />
                        </div>

                        <div className="flex flex-col items-center justify-between gap-6 py-10 md:justify-center md:items-start md:gap-5 lg:gap-8">
                            <h1 className="font-light uppercase text-center text-5xl md:text-start md:text-4xl md:w-[25vw] lg:text-5xl">
                                Smartphones <br /> for Every Lifestyle.                            </h1>
                            <Button type="button" title="Explore Smartphones" variant="bg-[#272727]" />
                        </div>

                    </div>
                </SwiperSlide>


                <SwiperSlide className="bg-[#dbc9d3] flex items-center ">
                    <div className="h-full flex flex-col justify-between items-center md:w-[60vw] mx-auto md:flex-row-reverse md:gap-12">

                        <div className="">
                            <Image src="/images/hero-img3.png" width={500} height={500} alt="hero-img" className="object-contain w-full h-[60vh] lg:pl-12 " />
                        </div>

                        <div className="flex flex-col items-center justify-between gap-6 py-10 md:justify-center md:items-start md:gap-5 lg:gap-8">
                            <h1 className="font-light uppercase text-center text-5xl md:text-start md:text-4xl md:w-[25vw] lg:text-5xl">
                                Explore Latest <br />Watch Collections.                          </h1>
                            <Button type="button" title="Explore More" variant="bg-[#272727]" />
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Hero;
