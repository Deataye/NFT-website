import React, { useState } from 'react';
import { FaHeart, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const TrendingNFTs = () => {
  const [selectedCategory, setSelectedCategory] = useState('Ethereum');
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('Today');

  const handleDropdownChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleTimeFrameChange = (timeFrame) => {
    setSelectedTimeFrame(timeFrame);
  };

  // Dummy data for slider cards
  const auctionData = [
    {
      id: 1,
      image: '/Base.png',
      collectionName: 'NFT name Ex Shiba Astronaut',
      currentBid: '1.0 ETH',
      bestOffer: '1.5 ETH',
      
    },
    {
      id: 2,
      image: '/Base.png',
      collectionName: 'NFT name Ex Shiba Astronaut',
      currentBid: '1.0 ETH',
      bestOffer: '1.5 ETH',
     
    },
    {
      id: 3,
      image: '/Base.png',
      collectionName: 'NFT name Ex Shiba Astronaut',
      currentBid: '1.0 ETH',
      bestOffer: '1.5 ETH',
   
    },
    {
      id: 4,
      image: '/Base.png',
      collectionName: 'NFT name Ex Shiba Astronaut',
      currentBid: '1.0 ETH',
      bestOffer: '1.5 ETH',
     
    },
   
  ];

  return (
    <section className="bg-[#ECF1FF] text-black flex flex-col items-center px-[90px] gap-8 py-16 relative">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 px-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-[32px] leading-[48px] font-poppins font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Trending NFTs
            </h2>
            {/* Dropdown */}
            <select
              value={selectedCategory}
              onChange={handleDropdownChange}
              className="bg-[#CDE2FE] font-poppins w-[146px] h-[44px] text-[#476285] px-3 py-1 rounded-lg text-lg"
            >
              <option value="Ethereum">Ethereum</option>
              <option value="Crypto">Crypto</option>
              <option value="Bitcoin">Bitcoin</option>
            </select>
          </div>

          {/* Time frame buttons */}
          <div className="flex space-x-2 bg-[#CDE2FE] rounded-lg">
            <button
              className={`px-4 py-1 rounded-lg ${
                selectedTimeFrame === 'Today'
                  ? 'bg-[#F0F6FF] text-[#476285] font-poppins font-semibold'
                  : 'text-gray-600'
              }`}
              onClick={() => handleTimeFrameChange('Today')}
            >
              Today
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                selectedTimeFrame === 'This Week'
                  ? 'bg-[#F0F6FF] text-[#476285] font-poppins font-semibold'
                  : 'text-gray-600'
              }`}
              onClick={() => handleTimeFrameChange('This Week')}
            >
              This week
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                selectedTimeFrame === 'This Month'
                  ? 'bg-[#F0F6FF] text-[#476285] font-poppins font-semibold'
                  : 'text-gray-600'
              }`}
              onClick={() => handleTimeFrameChange('This Month')}
            >
              This month
            </button>
          </div>

          {/* See All and Slider Controls */}
          <div className="flex items-center space-x-3 z-50">
            <button className="text-blue-600 font-poppins font-normal flex p-[10px] px-[24px] justify-center items-center gap-[10px] rounded-[12px] border-2 border-[#6692CC] hover:underline text-md">
              See all
            </button>
            <FaArrowLeft className="flex p-2 items-start w-[45px] h-[45px] rounded-[12px] border-2 border-[#6692CC] cursor-pointer text-blue-600 hover:text-black" />
            <FaArrowRight className="flex p-2 items-start w-[45px] h-[45px] rounded-[12px] border-2 border-[#6692CC] cursor-pointer text-blue-600 hover:text-black" />
          </div>
        </div>

        {/* Slider Section */}
        <div className="grid w-[1200px] h-[444px] grid-cols-4  gap-5">
          {auctionData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-4 items-center gap-4 flex-1 self-stretch rounded-[16px] bg-[rgba(255,255,255,0.6)] shadow-custom"
            >
              {/* Image */}
              <div className="w-[250px] h-[292px] p-1 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.collectionName}
                  className="object-cover w-full h-full rounded-[12px]"
                />
              </div>
              {/* Card Content */}
              <div className="flex h-[160px]  flex-col items-start self-stretch">
                <p className="text-sm font-poppins pl-2 text-gray-500">Collection Name:</p>
                <h4 className="text-[16px] font-poppins pl-2 w-[224px] overflow-hidden font-normal">{item.collectionName}</h4>
                <div className='flex flex-col p-2 w-[224px] h-[76px] justify-between items-start self-stretch rounded-[12px] bg-[rgba(160,160,214,0.10)] ]'>
                <div className="flex justify-between w-full  mt-3 px-2">
                  <p className="text-[12px]  leading-[16px] font-poppins text-gray-500 ">
                    Price: <br />
                    <span className="text-black font-poppins font-normal text-[16px] leading-[24px]">{item.currentBid}</span>
                  </p>
                  <p className="text-[12px] leading-[16px]  font-poppins text-gray-500">
                    Best Offer: <br />
                    <span className="text-black font-poppins font-normal text-[16px] leading-[24px]">{item.bestOffer}</span>
                  </p>
                </div>
                <div className="flex justify-between w-full px-2">
                  <p className="text-[12px] leading-[16px] font-poppins  text-gray-500">
                    $130,729.12
                  </p>
                  <p className="text-[12px] leading-[16px] pr-3 font-poppins text-gray-500">
                  4hrs left
                  </p>
                </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNFTs;
