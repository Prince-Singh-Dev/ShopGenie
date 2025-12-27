import React from 'react'
import Title from '../component/Title'
import aboutus from "../assets/aboutus.png"
import NewLetterBox from '../component/NewLetterBox'

function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-[#141414] to-[#0c2025] pt-20 overflow-x-hidden">
      
      <Title text1="ABOUT" text2="US" />

      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center px-4 gap-10 mt-10">
        
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={aboutus}
            alt="About us"
            className="w-4/5 lg:w-2/3 max-w-full h-auto rounded-md shadow-md shadow-black"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-5 text-white">
          
          <p className="text-sm md:text-base">
            ShopGenie is born for smart, seamless shopping — created to deliver quality products,
            trending styles, and everyday essentials in one place. With reliable service, fast
            delivery, and great value, ShopGenie makes online shopping simple and stress-free.
          </p>

          <p className="text-sm md:text-base">
            Modern shopping combining style, convenience, and affordability. Whether fashion
            essentials or trends, we bring everything to one trusted platform with fast delivery,
            easy returns, and a customer-first experience.
          </p>

          <h3 className="text-lg md:text-xl font-bold mt-2">
            Our Mission
          </h3>

          <p className="text-sm md:text-base">
            Our mission is to redefine online shopping by delivering quality, affordability,
            and convenience. ShopGenie connects customers with trusted products and brands
            while saving time and adding value.
          </p>

        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-20 px-4">
        <Title text1="WHY" text2="CHOOSE US" />

        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6 mt-10">
          
          <div className="flex-1 min-h-[220px] border border-gray-200 text-white flex flex-col items-center justify-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg">
            <h4 className="text-lg font-semibold text-[#bff1f9]">
              Quality Assurance
            </h4>
            <p className="text-sm text-center">
              We guarantee quality through strict checks, reliable sourcing,
              and a commitment to customer satisfaction.
            </p>
          </div>

          <div className="flex-1 min-h-[220px] border border-gray-200 text-white flex flex-col items-center justify-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg">
            <h4 className="text-lg font-semibold text-[#bff1f9]">
              Convenience
            </h4>
            <p className="text-sm text-center">
              Shop easily with fast delivery, smooth navigation,
              and secure checkout — all in one place.
            </p>
          </div>

          <div className="flex-1 min-h-[220px] border border-gray-200 text-white flex flex-col items-center justify-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg">
            <h4 className="text-lg font-semibold text-[#bff1f9]">
              Customer Support
            </h4>
            <p className="text-sm text-center">
              Our dedicated support team ensures fast responses
              and a smooth shopping experience every time.
            </p>
          </div>

        </div>
      </div>

      <div className="w-full mt-20">
        <NewLetterBox />
      </div>

    </div>
  )
}

export default About
