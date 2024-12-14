import React from 'react';
import * as Icon from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

const TopNav = () => {
    return (
        <>
            <div className='bg-primary-darker'>
                <div className='container flex items-center justify-between h-[44px]'>
                    <div className='left-block flex items-center'>
                        <div className='location flex items-center max-lg:hidden'>
                            <Icon.MapPin className='text-white text-xl' />
                            <span className='ml-2 caption1 text-white'>
                                Tutup RT003 RW001 Jelok Cepogo Boyolali
                            </span>
                        </div>
                        <div className='mail lg:ml-7 flex items-center'>
                            <Icon.Envelope className='text-white text-xl' />
                            <span className='ml-2 caption1 text-white'>
                                support@suitify.cloud
                            </span>
                        </div>
                    </div>
                    <div className='right-block flex items-center gap-5'>
                        <div className='line h-6 w-px bg-grey max-sm:hidden'>
                        </div>
                        <div className='list-social flex items-center gap-2.5 max-sm:hidden'>
                            <Link className='item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center' href="https://facebook.com" target='_blank'>
                                <i className='icon-facebook text-[10px]'></i>
                            </Link>
                            <Link className='item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center' href="https://likendin.com" target='_blank'>
                                <i className='icon-in text-[10px]'></i>
                            </Link>
                            <Link className='item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center' href="https://twitter.com" target='_blank'>
                                <i className='icon-twitter text-[10px]'></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopNav;
