import React from 'react';
import './about.css';

const AboutMe = () => {
  return (
    <section className="bg-[#ECF1FF] py-[100px] ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 px-8">
        
        {/* Image Section */}
        <div className="relative md:w-1/2 w-full flex justify-center items-center space-x-6 mr-6">
          {/* First Image Card */}
          <div className="flex flex-col items-center w-[280px]  h-[340px] rounded-[16px] bg-[rgba(249,249,249,0.7)] shadow-lg">
            
            <div className='pl-4 pr-4 pt-4 pb-1'><img 
              src="/520.png" 
              alt="Awkward Astronauts" 
              className="w-full h-[256px] rounded-[8px] object-cover "
            /></div>
            <div className="pl-4">
              {/* Flexbox row for title and Verified icon */}
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-gray-800">Awkward Astronauts</h3>
                <img 
                  src="/Verified.png" // Checkmark icon here
                  alt="Verified"
                  className="w-5 h-5 "
                />
              </div>
              {/* Flexbox row for pinochio_2 */}
              <div className="flex items-center space-x-2 ">
                <p className="text-gray-600">pinochio_2</p>
              </div>
            </div>
          </div>

          {/* Second Image Card */}
          <div className="flex flex-col items-center w-[280px] h-[340px] rounded-[16px] bg-[rgba(249,249,249,0.7)] shadow-lg ml-4 -mt-12">
            <div className='pl-4 pr-4 pb-1 pt-4'>
            <img 
              src="521.png" 
              alt="Awkward Astronauts 2" 
              className="w-full h-[256px] rounded-[8px] object-cover "
            />
            </div>
            <div className="px-4 ">
              {/* Flexbox row for title and Verified icon */}
              <div className="flex items-center space-x-2 ">
                <h3 className="font-bold text-gray-800">Awkward Astronauts</h3>
                <img 
                  src="/Verified.png" // Checkmark icon here as well
                  alt="Verified"
                  className="w-5 h-5"
                />
              </div>
              {/* Flexbox row for pinochio_2 */}
              <div className="flex items-center space-x-2">
                <p className="text-gray-600">pinochio_2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start space-y-6 p-4">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            List your art on MyNFT
          </h2>
          <p className="text-gray-600 text-lg">
            Are you an artist or NFT project creator? Get in touch with us to get your content on Nifty Gateway!
          </p>

          {/* Buttons */}
          <div className="space-x-4">
            <button className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold transition-all hover:opacity-90">
              I am an artist
            </button>
            <button className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-bold rounded-xl transition-all hover:bg-blue-500 hover:text-white">
              I am a buyer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
