import React from 'react';
import { FaArrowRight } from 'react-icons/fa';  // Import the arrow icon

const Hero = () => {
  return (
    <div className="bg-[#1F1E45] text-white py-20 relative px-10">  {/* Add z-20 */}
      <div className=" w-full h-full flex items-center justify-between flex-col md:flex-row">
        
        {/* Text Section */}
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="w-[479px] h-[106px] text-[40px]  font-poppins font-bold leading-[48px] text-left ml-20  ">Discover, collect, and sell extraordinary NFTs</h1>
          <p className="text-[14px] poppins font-normal leading-[22px] text-left w-[479px] h-[126px]  ml-20">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <button className="flex items-center justify-between px-4 py-3 w-[192px] h-[48px] leading-[24px] text-[18px] text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-poppins transition-all hover:opacity-90 ml-20">
  Explore now
  <img src='/531.png' className="-mr-3" alt="arrow icon" />  {/* Arrow icon aligned at the end */}
</button>

        </div>

        {/* Image Section */}
        <div className="flex-1  w-[690px] h-[
610.89px]">
          <img src={`/illu.png`} alt="NFT Art" className=" 
 absolute -bottom-40 left-50 z-50 w-[
690px] h-[600px]" />  {/* Add z-30 */}
        </div>

      </div>
    </div>
  );
};

export default Hero;
