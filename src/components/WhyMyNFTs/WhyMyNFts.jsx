import React from 'react';

const WhyMyNFTs = () => {
  return (
    <div className='bg-[#ECF1FF]'>
    <div className=" bg-cover bg-center py-12 px-8 rounded-lg flex justify-between items-center"
         style={{ backgroundImage: 'url("/path-to-background-image.jpg")' }}>
      {/* Left Section */}
      <div className="max-w-md space-y-4">
        <h2 className="text-white text-3xl font-semibold">Why MyNFT</h2>
        <p className="text-white text-lg">
          Are you an artist or NFT project creator? Get in touch with us to get your content on Nifty Gateway!
        </p>
        <a href="#" className="inline-block bg-purple-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-purple-700 transition">
          Explore the marketplace &rarr;
        </a>
      </div>

      {/* Right Section: YouTube Embed */}
      <div className="relative">
        <iframe
          width="360"
          height="200"
          src="https://www.youtube.com/embed/your-video-id"
          title="Why MyNFT"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
        <div className="absolute bottom-4 left-4">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white"
          >
            <img src="/path-to-youtube-icon.png" alt="YouTube" className="w-6 h-6" />
            <span>Watch on YouTube</span>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhyMyNFTs;
