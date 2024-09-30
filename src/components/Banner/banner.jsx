import React from 'react';

const Banner = () => {
  return (
    <div className='py-[120px] bg-[#ECF1FF]'>
    <div className="flex justify-between items-center bg-[#5C6D99] p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
      
      {/* Left Section - Text and Buttons */}
      <div className="flex flex-col gap-4">
        <p className="text-white text-lg font-semibold">
          Download MyNFTs app to track your NFT portfolio and discover drops
        </p>
        <div className="flex gap-4">
          <button className="bg-[#CDE2FE] text-gray-700 font-semibold py-2 px-4 rounded-lg flex items-center">
            <img src="/apple.png" alt="App Store" className="w-5 h-5 mr-2" />
            App Store
          </button>
          <button className="bg-[#CDE2FE] text-gray-700 font-semibold py-2 px-4 rounded-lg flex items-center">
            <img src="/google.png" alt="Google Play" className="w-5 h-5 mr-2" />
            Google Play
          </button>
        </div>
      </div>

      {/* Middle Section - Phones */}
      <div className="flex items-center justify-center">
        <img src="/530.png" alt="Phone Mockup" className="w-80 h-auto" />
      </div>

      {/* Right Section - QR Code */}
      <div className="flex flex-col items-center gap-2">
        <img src="/QRcode.png" alt="QR Code" className="w-24 h-24" />
        <p className="text-white text-center">
          Scan to download MyNFT app
        </p>
      </div>
      
    </div>
    </div>
  );
};

export default Banner;
