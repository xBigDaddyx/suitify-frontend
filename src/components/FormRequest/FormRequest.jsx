import React from 'react';
import * as Icon from '@phosphor-icons/react/dist/ssr';

const FormRequest = () => {
    return (
        <div className='form-request-block lg:mt-[100px] sm:mt-16 mt-10'>
            <div className='container'>
                <div className='heading flex max-xl:flex-col xl:items-center gap-4 justify-between'>
                    <div className='heading3'>
                        Request a free call demo.
                    </div>
                    <div className='body3 text-primary-accent '>
                        Discover how our hotel management system can streamline your operations and elevate guest experiences. Book a personalized demo and see Suitify’s powerful features in real-time.
                    </div>
                </div>
                <form className='form md:mt-10 mt-6 flex max-lg:flex-col lg:items-center justify-between gap-8 pb-14 border-b border-line'>
                    <div className='grid lg:grid-cols-3 gap-6 w-full'>
                        <div className='w-full'>
                            <input
                                type="text"
                                name='name'
                                placeholder='First Name'
                                className='body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full bg-gray-100'
                            />
                        </div>
                        <div className='w-full'>
                            <input
                                type="email"
                                name='email'
                                placeholder='Email'
                                className='body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full bg-gray-100'
                            />
                        </div>
                        <div className='w-full select-arrow-none relative'>
                            <select
                                name="category"
                                className='body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full bg-gray-100'
                            >
                                <option value="Financial Planning">Financial Planning</option>
                                <option value="Bussiness Planning">Bussiness Planning</option>
                                <option value="Development Planning">Development Planning</option>
                            </select>
                            <Icon.CaretDown
                                className='absolute top-1/2 -translate-y-1/2 right-5'
                            />
                        </div>
                    </div>
                    <button
                        className='button-main flex-shrink-0 bg-black hover:bg-secondary text-white rounded-full'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormRequest;
