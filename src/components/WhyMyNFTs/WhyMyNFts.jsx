import React from 'react';

const WhyMyNFT = () => {
  return (
    <div className='bg-[#ECF1FF] py-[100px]'>
    <div className="w-[1200px] h-[417px]  mx-auto bg-[url('/bg-2.jpg')] p-8 rounded-2xl shadow-lg flex items-center justify-between">
      {/* Left Section - Text */}
      <div className="w-1/2">
        <h2 className="text-3xl font-semibold text-white">Why MyNFT</h2>
        <p className="text-lg text-white mt-4">
          Are you an artist or NFT project creator? Get in touch with us to get your content on Nifty Gateway!
        </p>
        <button className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-5 rounded-lg font-poppins font-semibold hover:opacity-90">
          Explore the marketplace
        </button>
      </div>

      {/* Right Section - Video */}
      <div className="w-[973px]  flex justify-center">
        <iframe
          className="rounded-xl"
          width="600"
          height="300"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default WhyMyNFT;
