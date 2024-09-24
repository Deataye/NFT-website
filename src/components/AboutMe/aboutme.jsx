import React from 'react';
import './about.css'

const AboutMe = () => {
  return (
    <section className=" bg-[#ECF1FF]  ">
      
      <div className=' flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0  px-8'>
      <div className="relative md:w-1/2 w-full flex justify-center items-center mt-10">
            {/* First Image Card */}
            <div className="flex flex-col items-start  p-[16px] w-[280px] rounded-[16px] bg-[rgba(249,249,249,0.7)] shadow-custom">
            <img 
                src="/520.png" 
                alt="About Image 1" 
                className="h-[256px] self-stretch rounded-[8px] bg-lightgray bg-cover bg-no-repeat"
            />
            </div>
            {/* Second Image Card */}
            <div className="flex flex-col items-start  p-[16px] w-[280px] rounded-[16px] bg-[rgba(249,249,249,0.7)] shadow-custom ml-4 -mt-12">
            <img 
                src="521.png" 
                alt="About Image 2" 
                className="h-[256px] self-stretch rounded-[8px] bg-lightgray bg-cover bg-no-repeat" 
                
            />
        </div>
      </div>

      {/* Section 2: Text Section */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-start space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">List your art on MyNFT</h2>
        <p className="text-gray-600">
          Are you an artist or NFT project creator?Get in touch with us to get your content on Nifty Gateway!
        </p>
        <div className="space-x-4">
          <button className="px-4 py-2 text-white custom-button">
            I am an artist
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 transition-all">
            I am a buyer
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutMe;
