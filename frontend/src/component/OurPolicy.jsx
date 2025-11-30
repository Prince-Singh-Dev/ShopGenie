import React from 'react'
import Title from './Title'
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";

function OurPolicy() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-[#141414] to-[#0c2025] py-16'>
        
        <div className='text-center mb-6 px-4'>
            <Title text1={"OUR"} text2={"POLICY"} />
            <p className='text-[13px] md:text-[20px] text-blue-100 max-w-[700px] mx-auto'>
                Customer Friendly Policies - Committed to Your Satisfaction and Safety.
            </p>
        </div>

        <div className='w-full flex items-center justify-center flex-wrap gap-10 lg:gap-16 px-4 py-4'>

            <div className='w-[400px] max-w-[90%] flex flex-col items-center gap-3 text-center'>
                <RiExchangeFundsLine className='w-[30px] h-[30px] md:w-[60px] md:h-[60px] text-[#90b9ff]' />
                <p className='font-semibold text-[19px] md:text-[25px] text-[#a5e8f7]'>
                    Easy Exchange Policy
                </p>
                <p className='font-semibold text-[12px] md:text-[18px] text-[aliceblue]'>
                    Exchange Made Easy - Quick, Simple and Customer-Friendly Process.
                </p>
            </div>

            <div className='w-[400px] max-w-[90%] flex flex-col items-center gap-3 text-center'>
                <TbRosetteDiscountCheckFilled className='w-[30px] h-[30px] md:w-[60px] md:h-[60px] text-[#90b9ff]' />
                <p className='font-semibold text-[19px] md:text-[25px] text-[#a5e8f7]'>
                    7 Days Return Policy
                </p>
                <p className='font-semibold text-[12px] md:text-[18px] text-[aliceblue]'>
                    Shop With Confidence - 7 Days Easy Return Policy.
                </p>
            </div>

            <div className='w-[400px] max-w-[90%] flex flex-col items-center gap-3 text-center'>
                <MdSupportAgent className='w-[30px] h-[30px] md:w-[60px] md:h-[60px] text-[#90b9ff]' />
                <p className='font-semibold text-[19px] md:text-[25px] text-[#a5e8f7]'>
                    Best Customer Support
                </p>
                <p className='font-semibold text-[12px] md:text-[18px] text-[aliceblue]'>
                    Trusted Company - 24/7 Support - Customer Satisfaction Is Our Priority.
                </p>
            </div>

        </div>
    </div>
  )
}

export default OurPolicy
