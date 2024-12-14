import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as Icon from '@phosphor-icons/react/dist/ssr';

const Footer = () => {
    return (
        <div className='footer-bloack bg-primary-darker pt-[60px]'>
            <div className='container'>
                <div className='flex max-lg:flex-col max-lg:items-start gap-y-10 pb-10'>
                    <div className='lg:w-1/4'>
                        <div className='footer-company-infor flex flex-col justify-between gap-5'>
                            <Image
                                width={4000}
                                height={4000}
                                className='footer-logo w-[145px]'
                                src='/images/suitify_logo_dark.svg'
                                alt="footer-logo"
                            />
                            <div className='text caption1 text-white'>
                                Suitify is a cutting-edge hotel management system designed to streamline operations, enhance guest experiences, and optimize efficiency. From reservations to housekeeping, we empower hotels with tools to manage every aspect of their property effortlessly. Trust Suitify to elevate your hospitality business to new heigh
                            </div>
                            <div className='list-social flex items-center gap-2'>
                                <Link
                                    className='item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center'
                                    href='https://www.facebook.com'
                                    target='_blank'
                                >
                                    <i className='icon-facebook text-xs'></i>
                                </Link>
                                <Link
                                    className='item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center'
                                    href='https://www.linkedin.com'
                                    target='_blank'
                                >
                                    <i className='icon-in text-xs'></i>
                                </Link>
                                <Link
                                    className='item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center'
                                    href='https://www.twitter.com'
                                    target='_blank'
                                >
                                    <i className='icon-twitter text-xs'></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <div className='footer-navigate flex items-center justify-center gap-20'>
                            <div className='footer-nav-item'>
                                <div className='item-heading text-button-sm text-white'>
                                    Quick Link
                                </div>
                                <ul className='list-nav mt-1 text-white'>
                                    <li className='mt-3'>
                                        <Link
                                            className='caption1 has-line-before line-white text-surface hover-underline'
                                            href='/'
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link
                                            className='caption1 has-line-before line-white text-surface hover-underline'
                                            href='/'
                                        >
                                            Features
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link
                                            className='caption1 has-line-before line-white text-surface hover-underline'
                                            href='/'
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link
                                            className='caption1 has-line-before line-white text-surface hover-underline'
                                            href='/'
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer-nav-item max-sm:hidden'>
                                <div className='item-heading text-button-sm text-white'>
                                    Pages
                                </div>
                                <ul className='list-nav mt-1 text-white'>
                                    <li className='mt-3'>
                                        <Link
                                            className='caption1 has-line-before line-white text-surface hover-underline'
                                            href='/'
                                        >
                                            FAQs
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link
                                            className='caption1 has-line-before line-white text-surface hover-underline'
                                            href='/'
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link
                                            className='caption1 has-line-before line-white text-surface hover-underline'
                                            href='/'
                                        >
                                            Partners
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link
                                            className='caption1 has-line-before line-white text-surface hover-underline'
                                            href='/'
                                        >
                                            Support Center
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                            <div className='footer-nav-item max-sm:hidden'>
                                <div className='item-heading text-button-sm text-white'>
                                    Blog
                                </div>
                                <ul className='list-nav mt-1 text-white'>
                                    <li className='mt-3'>
                                        <Link
                                            className='caption1 has-line-before line-white text-surface hover-underline'
                                            href='/'
                                        >
                                            Blog List
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link
                                            className='caption1 has-line-before line-white text-surface hover-underline'
                                            href='/'
                                        >
                                            Blog Grid
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link
                                            className='caption1 has-line-before line-white text-surface hover-underline'
                                            href='/'
                                        >
                                            Masonry
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link
                                            className='caption1 has-line-before line-white text-surface hover-underline'
                                            href='/'
                                        >
                                            Blog Detail
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/4'>
                        <div className='company-contact'>
                            <div className='heading text-button-sm text-white'>
                                NewsLetter
                            </div>
                            <div className='mt-3 flex items-start'>
                                <div className='text'>
                                    <div className='caption2 text-surface text-white'>
                                        Need help? 24/7 Support
                                    </div>
                                    <div className='fw-700 text-white mt-1'>
                                        +62 895 2903 0641
                                    </div>
                                </div>
                            </div>
                            <div className='locate mt-3 flex items-center'>
                                <div className='caption1 text-surface text-white'>
                                    Tutup RT003 RW001 Jelok Cepogo Boyolali
                                </div>
                            </div>
                            <form className='send-block mt-5 flex items-center h-[45px] rounded-lg overflow-hidden'>
                                <input
                                    type="text"
                                    placeholder='Your Email Address'
                                    className='caption1 text-secondary h-full w-full pr-4 pl-3'
                                />
                                <button className='flex items-center justify-center w-[45px] h-[45px] bg-blue-800 flex-shrink-0'>
                                    <Icon.PaperPlaneTilt className='text-white' />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='border-line'></div>
                <div className='footer-bottom flex items-center justify-between pt-3 pb-3'>
                    <div className='left-block flex items-center'>
                        <div className='copy-right text-surface caption1 text-white'>
                            @2024 Suitify. All rights reserved.
                        </div>
                    </div>
                    <div className='nav-link flex items-center gap-3 text-white'>
                        <a href="#" className='text-surface caption1 hover-underline line-white has-line-before'>Terms of Services</a>
                        <span className='text-surface caption1'> | </span>
                        <a href="#" className='text-surface caption1 hover-underline line-white has-line-before'>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
