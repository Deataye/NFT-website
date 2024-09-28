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
      image: '/Image1.png',
      collectionName: 'CryptoPunk Collection',
      currentBid: '1.2 ETH',
      auctionEndsIn: '3h 20m',
      artistName: 'John Doe',
      likes: 120,
    },
    {
      id: 2,
      image: '/Image2.png',
      collectionName: 'Bored Ape Collection',
      currentBid: '2.5 ETH',
      auctionEndsIn: '1h 45m',
      artistName: 'Jane Smith',
      likes: 340,
    },
    {
      id: 3,
      image: '/Image3.png',
      collectionName: 'Art Blocks',
      currentBid: '0.8 ETH',
      auctionEndsIn: '2h 10m',
      artistName: 'Alice Johnson',
      likes: 75,
    },
    {
      id: 4,
      image: '/Image4.png',
      collectionName: 'Doodles',
      currentBid: '1.5 ETH',
      auctionEndsIn: '5h 5m',
      artistName: 'Bob Brown',
      likes: 150,
    },
  ];

  return (
    <section className="bg-[#ECF1FF] text-black py-16 relative">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-[32px] leading-[48px] font-poppins text-[#21204A] font-semibold">Trending NFTs</h2>
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
                className={`px-4 py-2  rounded-lg ${
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
            <FaArrowLeft className="flex p-2 items-start w-[45px] h-[45px] rounded-[12px] border-2 border-[#6692CC]  cursor-pointer text-blue-600 hover:text-black" />
            <FaArrowRight className="flex p-2 items-start w-[45px] h-[45px] rounded-[12px] border-2 border-[#6692CC]  cursor-pointer text-blue-600 hover:text-black" />
          </div>
        </div>

        {/* Slider Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {auctionData.map((item) => (
            <div key={item.id} className="w-full h-[460px] bg-[#FFFFFF99] rounded-2xl shadow-[0_0_0.5px_0px_rgba(0,0,0,0.1)_inset,6px_12px_18px_0px_rgba(102,146,204,0.1)] hover:shadow-lg transition-shadow duration-300">
              {/* Image */}
              <div className='w-full h-[270px] object-cover rounded-[12px] p-4'>
                <img src={item.image} alt={item.collectionName} className="w-full h-full object-cover rounded-md" />
              </div>              
              {/* Card Content */}
              <div className="px-5 flex flex-col">
                <p className="text-sm text-gray-500">Collection Name:</p>
                <h3 className="text-lg font-medium">{item.collectionName}</h3>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-sm text-gray-500">Current Bid:<br /><span className="text-black">{item.currentBid}</span></p>
                  <p className="text-sm text-gray-500">Ends In:<br /><span className="text-black">{item.auctionEndsIn}</span></p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-sm text-gray-500">Artist: <span className="text-black">{item.artistName}</span></p>
                  <div className="flex items-center text-gray-500">
                    <FaHeart className="text-red-500 mr-2" /> {item.likes}
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
