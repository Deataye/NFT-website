import React from 'react';
import './marketplace.css';

const Marketplace = () => {
  return (
    <section className="bg-[#ECF1FF] py-[100px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 px-8">
        
        {/* Left Section: Text and Button */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            The Premier Marketplace For NFTs
          </h2>
          <p className="text-gray-600 text-lg">
            Discover unique, high-quality NFTs from artists all over the world. Our marketplace offers a seamless experience for buying and selling digital art.
          </p>
          <button className="px-6 py-3 bg-transparent border-2 border-[#6692CC] text-[#6692CC] rounded-[12px] font-bold hover:bg-[#6692CC] hover:text-white transition-all">
            Learn More
          </button>
        </div>

        {/* Right Section: Images */}
        <div className="md:w-1/2 w-full flex items-center space-x-4">
          {/* Left Large Image */}
          <div
            className="w-[350.184px] h-[328px] rounded-[12px] bg-lightgray bg-cover bg-no-repeat"
            style={{
              backgroundImage:  `url('/512.png')`, // Update path to the large image
              backgroundPosition: 'center',
            }}
          >
          </div>

          {/* Right Column with Two Images */}
          <div className="flex flex-col space-y-4">
            {/* Top Image */}
            <div
              className="w-[171.45px] h-[160px] rounded-[12px] bg-lightgray bg-cover bg-no-repeat shadow-custom"
              style={{
                backgroundImage: `url('/Image3.png')`, // Update path to the top image
                backgroundPosition: 'center',
              }}
            >
            </div>

            {/* Bottom Image */}
            <div
              className="w-[128.587px] h-[120px] rounded-[12px] bg-lightgray bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('/517.png')`, // Update path to the bottom image
                backgroundPosition: 'center',
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
