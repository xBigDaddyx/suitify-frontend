'use client'
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'
import FeatureItem from './Item/FeatureItem';

const Feature = ({ data }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (

        <div>
            <section className='feature-block lg:mt-[100px] sm:mt-16 mt-10' ref={ref}>
                <div className='container'>
                    <h3 className='heading3 text-center'>Our Features</h3>
                    <div className='list-feature grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6 gap-y-10' style={{ transform: isInView ? 'none' : 'translateY(60px)', opacity: isInView ? 1 : 0, transition: 'all 0.7s cubic-bezier(0.17,0.55,0.55,1) 0.3s', }}>
                        {
                            data.slice(0, 6).map((item, index) => (
                                <FeatureItem data={item} key={index} number={index} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Feature;
