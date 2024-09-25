import React from 'react';

const WhyMyNFTs = () => {
  return (
    <div className='bg-[#ECF1FF]'>
    <div className="w-[1200px] h-[417px] rounded-[32px] bg-[linear-gradient(187deg,rgba(0,0,0,0) -4.48%,rgba(0,0,0,0.80) 57.5%),url('<path-to-image>')] bg-light-gray bg-cover bg-no-repeat flex items-center justify-between p-8">
      {/* Text Section */}
      <div className="flex flex-col justify-center text-black w-1/2">
        <h2 className="text-3xl font-bold mb-2">Why MyNFTs</h2>
        <p className="mb-4">
          Discover the unique advantages of owning NFTs through our platform,
          offering unparalleled access to exclusive digital assets and a vibrant
          community.
        </p>
        <button className="bg-blue-500 w-[240px] text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition">
          Explore the Marketplace
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-1/2 h-full">
        <img
          className="w-full h-full rounded-[32px] object-cover"
          src="/529.png" Replace with your video path
          
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="">
            <img src="/Y-icon.png" alt="" />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhyMyNFTs;
