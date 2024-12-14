'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import * as Icon from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css/bundle';

export default function Slider() {
    return (
        <>
            <div className='slider-block'>
                <div className='prev-arrow items-center justify-center'>
                    <Icon.CaretLeft className='text-white heading6' weight='bold' />
                </div>
                <div className='slider-main'>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.prev-arrow',
                            nextEl: '.next-arrow',
                        }}
                        loop={true}
                        pagination={{ clickable: true }}
                        speed={400}
                        modules={[Autoplay, Navigation, Pagination]}
                        className='h-full relative'
                        autoplay={{
                            delay: 4000,
                        }}
                    >
                        <SwiperSlide>
                            <div className='slider-item slider-first'>
                                <div className='bg-img'>
                                    <Image
                                        src={'/images/slider/suitify_illustration_photo_01.jpg'}
                                        width={4000}
                                        height={3000}
                                        alt='slider1'
                                        priority={true}
                                        className='w-full h-full object-cover contrast-125 grayscale'
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-30 w-full"></div>
                                <div className='container'>

                                    <div className='text-content flex-column-between'>
                                        <div className='heading2'>
                                            <div className='relative overflow-hidden'>
                                                <span className='block relative overflow-hidden text-white'>Streamline Your Hotel Operations</span>
                                                <span className='block absolute top-0 left-0 w-full h-full text-white'>Streamline Your Hotel Operations</span>
                                            </div>

                                        </div>
                                        <div className='body2 mt-3 text-white'>
                                            Suitify empowers you to manage reservations, rooms, and guest experiences with ease.<br /> Simplify your workflow and enhance guest satisfaction today!
                                        </div>
                                        <div className='button-block md:mt-10 mt-6'>
                                            <Link className='button-main bg-primary-accent text-white hover:bg-primary-darker' href="/feature">
                                                Discovery Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slider-item slider-first'>
                                <div className='bg-img'>
                                    <Image
                                        src={'/images/slider/suitify_illustration_photo_03.jpg'}
                                        width={4000}
                                        height={3000}
                                        alt='slider2'
                                        priority={true}
                                        className='w-full h-full object-cover contrast-125 grayscale'
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-30 w-full"></div>
                                <div className='container'>
                                    <div className='text-content flex-column-between'>
                                        <div className='heading2'>
                                            <div className='relative overflow-hidden'>
                                                <span className='block relative overflow-hidden text-white'>Your Complete <br />Hotel Management Solution</span>
                                                <span className='block absolute top-0 left-0 w-full h-full text-white'>Your Complete <br />Hotel Management Solution</span>
                                            </div>

                                        </div>
                                        <div className='body2 mt-3 text-white'>
                                            From reservations to room statuses, Suitify provides everything you need to run your <br />hotel seamlessly—all in one platform.
                                        </div>
                                        <div className='button-block md:mt-10 mt-6'>
                                            <Link className='button-main bg-primary-accent text-white hover:bg-primary-darker' href="/feature">
                                                Discovery Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='next-arrow items-center justify-center'>
                    <Icon.CaretRight className='text-white heading6' weight='bold' />
                </div>
            </div>
        </>
    )
}
