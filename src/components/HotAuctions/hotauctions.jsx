import React, { useState } from "react";
import { FaHeart, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const HotAuctions = () => {
  const [selectedCategory, setSelectedCategory] = useState("Ethereum");

  const handleDropdownChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Dummy data for slider cards
  const auctionData = [
    {
      id: 1,
      image: "/Image1.png",
      collectionName: "CryptoPunk Collection",
      currentBid: "300 ETH",
      auctionEndsIn: "03d : 25h : 05m",
      artistImage: "/Avatar.svg",
      artistName: "John Doe",
      likes: 120,
    },
    {
      id: 2,
      image: "/Image2.png",
      collectionName: "Bored Ape Collection",
      currentBid: "300 ETH",
      auctionEndsIn: "03d : 25h : 05m",
      artistImage: "/Avatar.svg",
      artistName: "Jane Smith",
      likes: 340,
    },
    {
      id: 3,
      image: "/Image3.png",
      collectionName: "Art Blocks",
      currentBid: "300 ETH",
      auctionEndsIn: "03d : 25h : 05m",
      artistImage: "/Avatar.svg",
      artistName: "Alice Johnson",
      likes: 75,
    },
    {
      id: 4,
      image: "/Image4.png",
      collectionName: "Doodles",
      currentBid: "300 ETH",
      auctionEndsIn: "03d : 25h : 05m",
      artistImage: "/Avatar.png",
      artistName: "Bob Brown",
      likes: 150,
    },
  ];

  return (
    <section className="bg-[#ECF1FF] text-black flex flex-col items-center px-[90px] gap-8 py-16 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 px-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-[32px]  leading-[48px] font-poppins font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Hot Auctions
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
        <div className="grid grid-cols-4 gap-5">
          {auctionData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-4 items-center gap-4 flex-1 self-stretch rounded-[16px] bg-[rgba(255,255,255,0.6)] shadow-custom"
            >
              {/* Image */}
              <div className=" w-[250px] h-[292px] p-1 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.collectionName}
                  className="object-cover w-full h-full rounded-[12px]"
                />
              </div>
              {/* Card Content */}
              <div className=" flex h-[160px] flex-col items-start   self-stretch">
                <p className="text-sm font-poppins text-gray-500 ">Collection Name:</p>
                <h3 className="text-lg font-poppins font-semibold">{item.collectionName}</h3>
                <div className="flex items-center justify-between  mt-3">
                  <p className="text-[12px] leading-[16px] font-poppins text-gray-500 mr-10">
                    Current Bid: <br />
                    <span className="text-black font-poppins font-normal text-[16px] leading-[24px]">{item.currentBid}</span>
                  </p>
                  <br />
                  
                  <p className="text-[12px]  leading-[16px] font-poppins text-gray-500">
                   Auction ending in: <br />
                    <span className="text-black font-poppins font-normal text-[16px] leading-[24px]">{item.auctionEndsIn}</span>
                  </p>

                 
                </div>
                <div className="flex items-center justify-between ">
                <p className="text-[12px] leading-[16px] font-poppins mr-[49px] text-gray-500">
                  $130,729.12
                  </p>
                  <p className=" text-[12px] leading-[16px] font-poppins text-gray-500">
                  Bids:25
                  </p>
                  </div>
                <div className="flex items-center justify-between border-t  border-t-[#F906F9] mt-3">
                  <div className="flex items-center justify-start mt-3">
                  <img src={item.artistImage} className="w-[24px] h-[24px] mr-2"  />
                  <span className="font-poppins text-[12px] leading-[16px] text-sm text-gray-500">{item.artistName}</span>
                  </div>
                  <div className="flex font-poppins text-[12px] leading-[16px] items-center mt-3 text-gray-500">
                    <img src="/likes.png" alt="" className="ml-[80px]" /> {item.likes}
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
