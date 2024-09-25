import React, { useState } from 'react';
import { FaHeart, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const HotAuctions = () => {
  const [selectedCategory, setSelectedCategory] = useState('Ethereum');

  const handleDropdownChange = (e) => {
    setSelectedCategory(e.target.value);
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
        <div className="flex items-center justify-between mb-6 px-10">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-semibold">Hot Auctions</h2>
            {/* Dropdown */}
            <select
              value={selectedCategory}
              onChange={handleDropdownChange}
              className="bg-[#CDE2FE] text-black px-3 py-1 rounded-lg text-sm"
            >
              <option value="Ethereum">Ethereum</option>
              <option value="Crypto">Crypto</option>
              <option value="Bitcoin">Bitcoin</option>
            </select>
          </div>
          
          {/* See All and Slider Controls */}
          <div className="flex items-center space-x-3 z-50">
            <button className="text-blue-600 hover:underline text-sm">See All</button>
            <FaArrowLeft className="cursor-pointer text-blue-600 hover:text-black" />
            <FaArrowRight className="cursor-pointer text-blue-600 hover:text-black" />
          </div>
        </div>

        {/* Slider Section */}
        <div className="grid grid-cols-4 gap-5">
          {auctionData.map((item) => (
            <div key={item.id} className=" w-full h-[460px] bg-[#FFFFFF99] rounded-2xl shadow-[0_0_0.5px_0px_rgba(0,0,0,0.1)_inset,6px_12px_18px_0px_rgba(102,146,204,0.1)] hover:shadow-lg transition-shadow duration-300">
              {/* Image */}
               <div className=' w-full h-[280px] object-cover rounded-[12px] p-4'>
               <img src={item.image} alt={item.collectionName} className=" " />

                </div>              
              {/* Card Content */}
              <div className="w-full  px-5  flex flex-col mt-8">
                <p className="text-sm text-gray-500">Collection Name:</p>
                <h3 className="text-lg font-medium">{item.collectionName}</h3>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-sm text-gray-500">Current Bid: <br /><span className="text-black">{item.currentBid}</span></p>
                  <p className="text-sm text-gray-500">Ends In: <br /><span className="text-black">{item.auctionEndsIn}</span></p>
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

export default HotAuctions;
