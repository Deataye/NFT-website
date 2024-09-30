import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const PopularCollections = () => {
  const [selectedCategory, setSelectedCategory] = useState("Ethereum");
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("Today");

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
      images: ["/513.png", "/514.png", "/515.png", "/515.png"],
      name: "NFT name Ex Shiba Astronaut",
      price: "128 ETH",
      floorPrice: "19 ETH",
      percentageChange: "-29%",
    },
    {
      id: 2,
      images: ["/516.png", "/517.png", "/515.png", "/519.png"],
      name: "NFT name Ex Shiba Astronaut",
      price: "128 ETH",
      floorPrice: "19 ETH",
      percentageChange: "-29%",
    },
    {
      id: 3,
      images: ["/518.png", "/514.png", "/515.png", "/519.png"],
      name: "NFT name Ex Shiba Astronaut",
      price: "128 ETH",
      floorPrice: "19 ETH",
      percentageChange: "-29%",
    },
  ];

  return (
    <section className="bg-[#ECF1FF] px-[90px] py-[100px]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-poppins font-semibold text-[32px] leading-[48px] text-[#21204A]">
            Popular Collections
          </h2>
          <div className="flex items-center space-x-4">
            {/* Dropdown for category selection */}
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="bg-[#CDE2FE] font-poppins w-[146px] h-[44px] text-[#476285] px-3 py-1 rounded-lg text-lg"
            >
              <option value="Ethereum">Ethereum</option>
              <option value="Crypto">Crypto</option>
              <option value="Bitcoin">Bitcoin</option>
            </select>

            {/* Time frame buttons */}
            <div className="flex space-x-2 bg-[#CDE2FE] rounded-lg">
              <button
                className={`px-4 py-1 rounded-lg ${
                  selectedTimeFrame === "Today"
                    ? "bg-[#F0F6FF] text-[#476285] font-poppins font-semibold"
                    : "text-gray-600"
                }`}
                onClick={() => handleTimeFrameChange("Today")}
              >
                Today
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  selectedTimeFrame === "This Week"
                    ? "bg-[#F0F6FF] text-[#476285] font-poppins font-semibold"
                    : "text-gray-600"
                }`}
                onClick={() => handleTimeFrameChange("This Week")}
              >
                This Week
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  selectedTimeFrame === "This Month"
                    ? "bg-[#F0F6FF] text-[#476285] font-poppins font-semibold"
                    : "text-gray-600"
                }`}
                onClick={() => handleTimeFrameChange("This Month")}
              >
                This Month
              </button>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center space-x-3 z-50">
            <button className="text-blue-600 font-poppins font-normal flex p-[10px] px-[24px] justify-center items-center gap-[10px] rounded-[12px] border-2 border-[#6692CC] hover:underline text-md">
              See all
            </button>
            <FaArrowLeft className="flex p-2 items-start w-[45px] h-[45px] rounded-[12px] border-2 border-[#6692CC] cursor-pointer text-blue-600 hover:text-black" />
            <FaArrowRight className="flex p-2 items-start w-[45px] h-[45px] rounded-[12px] border-2 border-[#6692CC] cursor-pointer text-blue-600 hover:text-black" />
          </div>
        </div>

        {/* Galleries Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleries.map((gallery) => (
            <div
              key={gallery.id}
              className="bg-[rgba(249,249,249,0.7)] shadow-custom p-4 rounded-lg shadow-md w-[350px] h-[270px]"
            >
              {/* Image section */}
              <div className="flex space-x-1 mb-4">
                {/* First large image */}
                <img
                  src={gallery.images[0]}
                  alt="NFT Image"
                  className="w-[184px] h-[184px] object-cover rounded-md"
                />

                {/* Column for smaller images */}
                <div className="flex flex-col space-y-2">
                  {/* Second image */}
                  <img
                    src={gallery.images[1]}
                    alt="NFT Image"
                    className="w-[160px] h-[104px] object-cover rounded-md"
                  />

                  {/* Row for the two smaller images */}
                  <div className="flex space-x-2">
                    <img
                      src={gallery.images[2]}
                      alt="NFT Image"
                      className="w-[60px] h-[72px] object-cover rounded-md"
                    />
                    <div className="relative">
                      <img
                        src={gallery.images[3]}
                        alt="NFT Image"
                        className="w-fill h-[72px] object-cover rounded-md"
                      />
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
                  <h3 className="text-[16px] leading-[24px] font-poppins font-semibold">
                    {gallery.name}
                  </h3>
                  <p className="text-gray-500 font-poppins text-[12px] leading-[16px]">
                    Floor: {gallery.floorPrice} ~ $108.7K
                  </p>
                </div>
                <div>
                  <p className="text-[16px] leading-[24px] font-poppins font-semibold">
                    {gallery.price}
                  </p>
                  <p className="text-gray-500 font-poppins text-[12px] leading-[16px]">
                    {gallery.percentageChange}
                  </p>
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
