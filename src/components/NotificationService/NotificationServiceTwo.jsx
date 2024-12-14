'use client'
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import * as Icon from '@phosphor-icons/react/dist/ssr';

const NotificationServiceTwo = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div>
            <section className='payment-gateway-one style-second lg:mt-[100px] sm:mt-16 mt-10' ref={ref}>
                <div className='container'>
                    <div className='content flex items-center gap-8'>
                        <div className='w-full xl:w-5/12 flex flex-col gap-y-6'>
                            <h3 className='heading3'>Notification Services</h3>
                            <div className='body3 text-primary-darker'>
                                Empower your team and guests with real-time notifications delivered directly to WhatsApp. Whether it's booking confirmations, payment reminders, or urgent updates, stay connected effortlessly.
                            </div>
                            <div className='button-bloack'>
                                <Link className='button-main bg-black text-white hover:bg-black rounded-full' href="/feature">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                        <div className='w-11/12 xl:w-7/12'>
                            <div
                                className='right pl-10'
                                style={{
                                    transform: isInView ? 'none' : 'translateY(60px)',
                                    opacity: isInView ? 1 : 0,
                                    transition: 'all 0.7s cubic-bezier(0.17,0.55,0.55,1) 0.3s',
                                }}>
                                <div className='bg-img'>
                                    <Image
                                        width={5000}
                                        height={5000}
                                        className='w-full contrast-125 grayscale'
                                        src='/images/gateway2-bg.webp'
                                        alt='image'
                                    />
                                </div>
                                <div className='feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow'>
                                    <i className='icon-list text-2xl p-4 rounded-2xl bg-red-400'>
                                    </i>
                                    <div className='text'>
                                        <div className='heading7'>
                                            2K+
                                        </div>
                                        <div className='heading7 text-secondary'>
                                            Projects
                                        </div>
                                    </div>
                                </div>
                                <div className='feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow'>
                                    <Icon.Star
                                        weight='fill'
                                        className='text-yellow-400 text-3xl'
                                    />
                                    <div className='text'>
                                        <div className='heading7'>
                                            4.8
                                        </div>
                                        <div className='heading7 text-secondary'>
                                            Satisfaction
                                        </div>
                                    </div>

                                </div>
                                <div className='feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow'>
                                    <i className='icon-user text-2xl p-4 rounded-2xl bg-red-600'>
                                    </i>
                                    <div className='text'>
                                        <div className='heading7'>
                                            6 Years
                                        </div>
                                        <div className='heading7 text-secondary'>
                                            Product Designer
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotificationServiceTwo;
