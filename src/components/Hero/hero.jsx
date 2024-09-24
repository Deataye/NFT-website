import React from 'react';
import { FaArrowRight } from 'react-icons/fa';  // Import the arrow icon

const Hero = () => {
  return (
    <div className="bg-[#1F1E45] text-white py-20 relative">  {/* Add z-20 */}
      <div className=" w-full h-full flex items-center justify-between flex-col md:flex-row">
        
        {/* Text Section */}
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="w-[479px] h-[96px] text-[40px] font-bold leading-[48px] text-left ml-20  ">Discover Amazing NFTs</h1>
          <p className="text-[14px] font-normal leading-[22px] text-left w-[479px] h-[66px] ml-20">
            Explore the world of non-fungible tokens and buy, sell, or create your own digital art.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300 flex items-center ml-20">
            Get Started 
            <FaArrowRight className="ml-2" />  {/* Arrow icon added */}
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-[655px] h-[
591.89px]">
          <img src="../../public/illu.png" alt="NFT Art" className=" 
 absolute -bottom-40 left- z-30 w-[
577.34px] h-[497.53px]" />  {/* Add z-30 */}
        </div>

      </div>
    </div>
  );
};

export default Hero;
