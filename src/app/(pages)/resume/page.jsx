"use client"

import { othersTemps, popularTemps } from '@/app/utils/PopularTemp'
import Image from 'next/image'
import React, { useState } from 'react'

const Resume = () => {
    const [borderColor, setBorderColor] = useState('border-white-500');

    const handleClick = () => {
        console.log("hello");
        setBorderColor(borderColor === 'border-white-500' ? 'border-blue-500' : 'border-white-500');
    };

    return (
        <main>
            <section>
                <div className='space-y-4 my-6 md:my-20'>
                    <h1 className='text-4xl font-bold text-center'>Select Template For <br /> Your CV </h1>
                    <p className='text-center'>
                        Differentiate yourself and secure faster employment opportunities <br /> by utilizing our field-tested resume templates.
                    </p>
                </div>

                {/* OTHERS TEMPLATES  */}
                <div className='my-10'>
                    <div className="flex justify-center items-center mx-0 md:mx-80 my-20">
                        <div className="w-1/2 flex-1 border-t-4 border-blue-500"></div>
                        <div className="mx-4 text-lg font-medium">POPULAR TEMPLATES</div>
                        <div className="w-1/2 flex-1 border-t-4 border-blue-500"></div>
                    </div>


                    <div className='w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
                        {
                            popularTemps.map((temp) => (
                                <div key={temp.id} className='flex justify-center items-center rounded-md'>
                                    <Image
                                        // onClick={handleClick}
                                        src={temp.pic}
                                        alt='templates'
                                        className={`w-full cursor-pointer h-full border-2 object-cover rounded-md focus:border-blue-500`}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>


                {/* OTHERS TEMPLATES  */}
                <div className='my-10'>
                    <div className="flex justify-center items-center mx-0 md:mx-80 my-20">
                        <div className="w-1/2 flex-1 border-t-4 border-blue-500"></div>
                        <div className="mx-4 text-lg font-medium">OTHERS TEMPLATES</div>
                        <div className="w-1/2 flex-1 border-t-4 border-blue-500"></div>
                    </div>


                    <div className='w-3/4 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
                        {
                            othersTemps.map((temp) => (
                                <div className='flex justify-center items-center focus:border focus:border-blue-2'>
                                    <Image
                                        src={temp.pic}
                                        alt='templates'
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Resume