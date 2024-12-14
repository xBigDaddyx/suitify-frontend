import Link from 'next/link'
import React from 'react'

export default function FeatureItem({ data, number }) {
    return (
        <div className='feature-item p-8 bg-white rounded-lg border border-line hover-box-shadow'>
            <Link className='feature-item-main h-full' href={"/"}>
                <div className='heading flex items-center justify-between'>
                    <i className={`${data.icon} text-primary-accent md:text-6xl text-5xl`}>
                    </i>
                    <div className='number heading3 text-placehover text-secondary'>
                        {number + 1}
                    </div>

                </div>
                <div className='heading6 hover:text-primary-accent duration-300 mt-6'>
                    {data.title}
                </div>
                <div className='text-secondary mt-2'>
                    {data.description}
                </div>
            </Link>
        </div>
    )
}
