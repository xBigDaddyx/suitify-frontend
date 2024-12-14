'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/bundle';

const Testimonial = () => {
    return (
        <>
            <div className='testimonial-block bg-primary'>
                <div className='container'>
                    <div className='testimonial-main bg-surface lg:pt-20 sm:pt-16 pt-10 lg:pb-12 pb-8 sm:my-16 my-10 lg:rounded-[40px] rounded-2xl flex items-center justify-center'>
                        <div className='content sm:w-2/3 w-[85%]'>
                            <div className='heading3 text-center text-white'>
                                Trusted by Professionals
                            </div>
                            <Swiper
                                spaceBetween={16}
                                slidesPerView={1}
                                loop={true}
                                pagination={{ clickable: true }}
                                speed={400}
                                modules={[Autoplay, Navigation, Pagination]}
                                className='h-full relative lg:mt-10 mt-7'
                                autoplay={{
                                    delay: 4000,
                                }}
                            >
                                <SwiperSlide className='lg:pb-24 pb-20'>
                                    <div className='text-2xl font-medium text-center text-white'>
                                        {String.raw`"`}Suitify transformed how we manage our operations. The seamless integration of reservations, housekeeping, and restaurant services has saved us countless hours and improved guest satisfaction.{String.raw`"`}
                                    </div>
                                    <div className='text-button text-center text-white mt-5'>
                                        Sarah Johnson // General Manager
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='lg:pb-24 pb-20'>
                                    <div className='text-2xl font-medium text-center text-white'>
                                        {String.raw`"`}The real-time notifications and detailed reporting tools have been game-changers for us. With Suitify, I can manage multiple properties effortlessly, even on the go.{String.raw`"`}
                                    </div>
                                    <div className='text-button text-center text-white mt-5'>
                                        Michael Lee // Owner
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
