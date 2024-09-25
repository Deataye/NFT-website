import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const PopularCollections = () => {
  const [selectedCategory, setSelectedCategory] = useState('Ethereum');
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('Today');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleTimeFrameChange = (timeFrame) => {
    setSelectedTimeFrame(timeFrame);
  };

  // Dummy data for galleries
  const galleries = [
    {
      id: 1,
      images: ['/513.png', '/514.png', '/515.png', '/515.png'],
      name: 'NFT name Ex Shiba Astronaut',
      price: '128 ETH',
      floorPrice: '19 ETH',
      percentageChange: '-29%',
    },
    {
      id: 2,
      images: ['/516.png', '/517.png', '/515.png', '/519.png'],
      name: 'NFT name Ex Shiba Astronaut',
      price: '128 ETH',
      floorPrice: '19 ETH',
      percentageChange: '-29%',
    },
    {
      id: 3,
      images: ['/518.png', '/514.png', '/515.png', '/519.png'],
      name: 'NFT name Ex Shiba Astronaut',
      price: '128 ETH',
      floorPrice: '19 ETH',
      percentageChange: '-29%',
    },
  ];

  return (
    <section className="bg-[#ECF1FF] py-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Popular Collections</h2>
          <div className="flex items-center space-x-4">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="bg-[#CDE2FE] text-black px-3 py-1 rounded-lg text-sm"
            >
              <option value="Ethereum">Ethereum</option>
              <option value="Crypto">Crypto</option>
              <option value="Bitcoin">Bitcoin</option>
            </select>
            <div className="flex space-x-2">
              <button
                className={`px-4 py-2 rounded-lg  ${
                  selectedTimeFrame === 'Today'
                    ? 'bg-white text-blue-600 font-semibold'
                    : 'text-gray-600'
                }`}
                onClick={() => handleTimeFrameChange('Today')}
              >
                Today
              </button>
              <button
                className={`px-4 py-2 rounded-lg  ${
                  selectedTimeFrame === 'This Week'
                    ? 'bg-white text-blue-600 font-semibold'
                    : 'text-gray-600'
                }`}
                onClick={() => handleTimeFrameChange('This Week')}
              >
                This week
              </button>
              <button
                className={`px-4 py-2 rounded-lg  ${
                  selectedTimeFrame === 'This Month'
                    ? 'bg-white text-blue-600 font-semibold'
                    : 'text-gray-600'
                }`}
                onClick={() => handleTimeFrameChange('This Month')}
              >
                This month
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="text-blue-600 hover:underline text-sm">See All</button>
            <FaArrowLeft className="cursor-pointer text-blue-600 hover:text-black" />
            <FaArrowRight className="cursor-pointer text-blue-600 hover:text-black" />
          </div>
        </div>

        {/* Galleries Section */}
        <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[1080px] h-[364px] items-center ">
          {galleries.map((gallery) => (
            <div key={gallery.id} className="bg-[rgba(249,249,249,0.7)] shadow-custom p-4 rounded-lg shadow-md w-[350px] h-[270px]">
              {/* Image section */}
              <div className="flex space-x-2 mb-4">
  {/* First large image */}
  <img src={gallery.images[0]} alt="NFT Image" className="w-[184px] h-[184px] object-cover rounded-md" />

  {/* Column for smaller images */}
  <div className="flex flex-col space-y-2">
    {/* Second image (160px x 104px) */}
    <img src={gallery.images[1]} alt="NFT Image" className="w-[160px] h-[104px] object-cover rounded-md" />

    {/* Row for the two smaller images */}
    <div className="flex space-x-2">
      <img src={gallery.images[2]} alt="NFT Image" className="w-[60px] h-[72px] object-cover rounded-md" />
      <div className="relative">
        <img src={gallery.images[3]} alt="NFT Image" className="w-fill h-[72px] object-cover rounded-md" />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-md text-white">
          +12
        </div>
      </div>
    </div>
  </div>
</div>

              {/* Description */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{gallery.name}</h3>
                  <p className="text-gray-500">Floor: {gallery.floorPrice} ~ $108.7K</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">{gallery.price}</p>
                  <p className="text-gray-500">{gallery.percentageChange}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCollections;
