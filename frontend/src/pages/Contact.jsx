import React from "react";
import Title from "../component/Title";
import contact from "../assets/contact.jpg";
import NewLetterBox from "../component/NewLetterBox";

function Contact() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#141414] to-[#0c2025] gap-[50px] pt-[80px] text-white">
      
      <Title text1="CONTACT" text2="US" />

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-[40px] px-[20px]">
        
        <div className="lg:w-[50%] w-full flex items-center justify-center">
          <img
            src={contact}
            alt="Contact"
            className="lg:w-[70%] w-[85%] shadow-lg shadow-black rounded-md"
          />
        </div>

        <div className="lg:w-[50%] w-full flex flex-col items-start gap-[24px]">

          <div className="flex flex-col gap-[8px]">
            <p className="font-bold lg:text-[18px] text-[15px]">
              Our Store
            </p>

            <div className="md:text-[16px] text-[13px] leading-relaxed opacity-90">
              <p>12345 Random Station</p>
              <p>Random City, State, India</p>
            </div>
          </div>

          <div className="md:text-[16px] text-[13px] leading-relaxed opacity-90">
            <p>Tel: +91-987654689*</p>
            <p>Email: admin@shopgenie.com</p>
          </div>

          <div className="flex flex-col gap-[6px]">
            <p className="font-bold lg:text-[18px] text-[15px]">
              Careers at ShopGenie
            </p>
            <p className="md:text-[16px] text-[13px] opacity-90">
              Learn more about our teams and job openings
            </p>
          </div>

          <button className="mt-[10px] px-[32px] py-[14px] border border-white rounded-md transition-all hover:bg-white hover:text-black">
            Explore Jobs
          </button>

        </div>

      </div>

      <NewLetterBox />

    </div>
  );
}

export default Contact;
