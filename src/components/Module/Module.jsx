import Link from 'next/link';
import React from 'react';
import * as Icon from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

const Module = () => {
    return (
        <div>
            <section className='case-study-block style-one lg:pt-[100px] sm:pt-16 pt-10'>
                <div className='container'>
                    <div className='heading text-center'>
                        <h3 className='heading3'>Modules</h3>
                        <div className='right flex flex-col items-center gap-2 mt-3'>
                            <div className='body3'>
                                Comprehensive Modules for Every Hotel Need
                            </div>
                            <Link className='flex items-center gap-2 hover:text-primary-accent duration-300' href='/'>
                                <div className='text-button'>
                                    View all modules
                                </div>
                                <Icon.CaretDoubleRight
                                    weight='bold'
                                    className='text-xs mt-1' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='list-case-study md:mt-10 mt-6'>
                    <div className='list grid lg:grid-cols-4 sm:grid-cols-2'>
                        <div className='w-full'>
                            <div className='case-study-item'>
                                <div className='bg-img'>
                                    <Image
                                        width={5000}
                                        height={5000}
                                        className='w-full h-full block'
                                        src='/images/caseone.webp'
                                        alt='img'
                                    />
                                </div>
                                <div className='text flex flex-col justify-between gap-3'>
                                    <div className='heading5'>
                                        <Link className='text-white' href='/'>
                                            Restaurant Management System
                                        </Link>
                                    </div>
                                    <div className='body2 text-white'>
                                        Manage your hotel's restaurant operations with features like table reservations, order tracking, menu management, and billing, all integrated into the hotel system.
                                    </div>
                                    <Link className='flex items-center gap-1' href='/'>
                                        <div className='text-button text-white'>
                                            Read More
                                        </div>
                                        <Icon.CaretDoubleRight
                                            weight='bold'
                                            className='text-xs mt-1 text-white' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='case-study-item'>
                                <div className='bg-img'>
                                    <Image
                                        width={5000}
                                        height={5000}
                                        className='w-full h-full block'
                                        src='/images/caseone.webp'
                                        alt='img'
                                    />
                                </div>
                                <div className='text flex flex-col justify-between gap-3'>
                                    <div className='heading5'>
                                        <Link className='text-white' href='/'>
                                            Restaurant Management System
                                        </Link>
                                    </div>
                                    <div className='body2 text-white'>
                                        Manage your hotel's restaurant operations with features like table reservations, order tracking, menu management, and billing, all integrated into the hotel system.
                                    </div>
                                    <Link className='flex items-center gap-1' href='/'>
                                        <div className='text-button text-white'>
                                            Read More
                                        </div>
                                        <Icon.CaretDoubleRight
                                            weight='bold'
                                            className='text-xs mt-1 text-white' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='case-study-item'>
                                <div className='bg-img'>
                                    <Image
                                        width={5000}
                                        height={5000}
                                        className='w-full h-full block'
                                        src='/images/caseone.webp'
                                        alt='img'
                                    />
                                </div>
                                <div className='text flex flex-col justify-between gap-3'>
                                    <div className='heading5'>
                                        <Link className='text-white' href='/'>
                                            Restaurant Management System
                                        </Link>
                                    </div>
                                    <div className='body2 text-white'>
                                        Manage your hotel's restaurant operations with features like table reservations, order tracking, menu management, and billing, all integrated into the hotel system.
                                    </div>
                                    <Link className='flex items-center gap-1' href='/'>
                                        <div className='text-button text-white'>
                                            Read More
                                        </div>
                                        <Icon.CaretDoubleRight
                                            weight='bold'
                                            className='text-xs mt-1 text-white' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='case-study-item'>
                                <div className='bg-img'>
                                    <Image
                                        width={5000}
                                        height={5000}
                                        className='w-full h-full block'
                                        src='/images/caseone.webp'
                                        alt='img'
                                    />
                                </div>
                                <div className='text flex flex-col justify-between gap-3'>
                                    <div className='heading5'>
                                        <Link className='text-white' href='/'>
                                            Restaurant Management System
                                        </Link>
                                    </div>
                                    <div className='body2 text-white'>
                                        Manage your hotel's restaurant operations with features like table reservations, order tracking, menu management, and billing, all integrated into the hotel system.
                                    </div>
                                    <Link className='flex items-center gap-1' href='/'>
                                        <div className='text-button text-white'>
                                            Read More
                                        </div>
                                        <Icon.CaretDoubleRight
                                            weight='bold'
                                            className='text-xs mt-1 text-white' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Module;
