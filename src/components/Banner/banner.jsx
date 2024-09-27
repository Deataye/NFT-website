import React from 'react';

const Banner = () => {
  return (
    <div className='bg-[#ECF1FF] py-[180px] mx-auto'>
    <div className="bg-[#7589c3] py-8 px-6  flex justify-between items-center rounded-lg">
      {/* Left Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-white text-lg font-semibold">
          Download <span className="font-bold">MyNFTs app</span> to track your NFT portfolio and discover drops
        </h2>
        <div className="flex space-x-4">
          {/* App Store Button */}
          <a href="#" className="bg-white text-[#7589c3] py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">
            <i className="fab fa-apple mr-2"></i> App Store
          </a>
          {/* Google Play Button */}
          <a href="#" className="bg-white text-[#7589c3] py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">
            <i className="fab fa-google-play mr-2"></i> Google Play
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-10">
        {/* Mockup Phones */}
        <div className="flex mr-[120px]">
          <img src="530.png" alt="Phone 1" className="w-50 h-auto" />
          
        </div>

        {/* QR Code */}
        <div className="text-center">
          <img src="QRcode.png" alt="QR Code" className="w-20 h-20" />
          <p className="text-white mt-2">Scan to download<br />MyNFT app</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
