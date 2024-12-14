'use client'
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import * as Icon from '@phosphor-icons/react/dist/ssr';

export default function NotificationService() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div>
            <section className="payment-gateway-one style-first lg:mt-[100px] sm:mt-16 mt-10 bg-surface relative bg-primary-darker">
                <div className='bg-image lg:absolute top-0 left-0 lg:w-1/2 w-full h-full flex-shrink-0'>
                    <Image
                        src={'/images/slider/suitify_illustration_photo_04.jpg'}
                        width={5000}
                        height={5000}
                        alt='img'
                        className='w-full h-full object-cover contrast-125 grayscale'
                    />
                </div>
                <div className='container w-full lg:py-[150px] pt-14 py-16'>
                    <div className='w-full flex items-center lg:justify-end' ref={ref}>
                        <div
                            className='payment-infor lg:w-1/2 xl:pl-20 lg:pl-10'
                            style={{ transform: isInView ? 'none' : 'translateY(60px)', opacity: isInView ? 1 : 0, transition: 'all 0.7s cubic-bezier(0.17,0.55,0.55,1) 0.3s', }}
                        >
                            <div className='heading flex items-center gap-4 max-lg:flex-wrap'>
                                <div className='flex items-center'>
                                    <div className='img sm:w-12 w10 sm:h-12 h-10 rounded-full overflow-hidden bg-line p-0 z-[3]'>
                                        <Image
                                            className='w-full h-full rounded-full'
                                            width={300}
                                            height={300}
                                            src='/images/avatar3.webp'
                                            alt='img'
                                        />
                                    </div>
                                </div>
                                <div className='text-button text-secondary '>
                                    Trusted by 5M+ People <br /> Around the globe
                                </div>
                            </div>
                            <div className='text lg:mt-14 mt-5'>
                                <h3 className='heading3 text-white'>Stay Connected with Real-Time Notifications</h3>
                                <div className='body3 text-secondary lg:mt-6 mt-4'>
                                    Empower your team and guests with real-time notifications delivered directly to WhatsApp. Whether it's booking confirmations, payment reminders, or urgent updates, stay connected effortlessly.
                                </div>
                            </div>
                            <div className='button-block flex items-center max-sm:flex-wrap sm:gap-6 gap-3 lg:mt-12 mt-8 w-fit'>
                                <Link className='button-main box-shadow bg-primary-accent text-white hover:bg-primary-darker whitespace-nowrap rounded-full' href="/feature">
                                    Get Started
                                </Link>
                                <div className='relative'>
                                    <Link className='button-main box-shadow bg-white text-on-surface hover:bg-black hover:text-white whitespace-nowrap rounded-full flex items-center gap-2 relative z-[1]' href="/feature">
                                        <Icon.Phone weight='fill' className='text-xl' />
                                        <span className='whitespace-nowrap'>(+62) 895 2903 0641</span>
                                    </Link>
                                    <Image
                                        src='/images/component/gateway1-dot.png'
                                        width={4000}
                                        height={4000}
                                        alt='img'
                                        className='absolute -right-12 w-[100px] h-auto top-1/2 -translate-y-1/2'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
