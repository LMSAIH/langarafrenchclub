"use client"

import type React from "react"
import Image from "next/image"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import type { TestimonialProps } from "../types/testimonial"


const TestimonialSlider: React.FC<TestimonialProps> = ({ testimonials }) => {

    useEffect(() => {
        AOS.init({
            duration: 300,
            easing: "ease-in-sine",
        })

    }, [])


    return (
        <div className="w-full px-4 py-8 sm:px-6 lg:px-8 flex justify-center" data-aos="fade-up">
            <div className="w-full max-w-screen-2xl">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    className="w-full"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="pb-10">
                            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 2xl:p-12 m-2 sm:m-4 2xl:m-8">
                                <div className="flex flex-col md:flex-row items-center justify-center mb-4 sm:mb-6 2xl:mb-10">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 2xl:w-32 2xl:h-32 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 2xl:mr-10">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            width={128}
                                            height={128}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h3 className="text-lg sm:text-xl 2xl:text-3xl 4xl:text-4xl font-semibold text-blue-900">{testimonial.name}</h3>
                                        <p className="text-xs sm:text-sm 2xl:text-lg 4xl:text-xl text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-sm sm:text-base 2xl:text-xl 4xl:text-2xl text-gray-700 italic text-center mt-10 mb-10 2xl:mt-16 2xl:mb-16">
                                    {`"${testimonial.content}"`}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TestimonialSlider
