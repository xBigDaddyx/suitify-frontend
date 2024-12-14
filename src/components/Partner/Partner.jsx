import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Partner = () => {
    return (
        <div className='cta-block relative lg:h-[120px] h-[128px]'>
            <div className='bg-cta w-full h-full absolute top-0 left-0 z-[-1]'>
                <Image
                    width={5000}
                    height={5000}
                    className='w-full h-full object-cover'
                    src='/images/cta/bg-cta1.png'
                    alt='bg-cta'
                />
            </div>
            <div className='container flex items-center justify-between max-lg:flex-col max-kg:justify-center gap-6 h-full'>
                <div className='heading5 max-lg:text-center text-white'>
                    Ready to Transform Your Hotel Operations?
                </div>
                <Link className='button-main rounded-full hover:bg-black hover:text-white bg-white text-button px-9 py-3' href='/'>
                    Get a Quote
                </Link>
            </div>
        </div>
    );
};

export default Partner;
