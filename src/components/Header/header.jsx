import React from 'react';
import { FaSearch, FaEllipsisH } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-[#1F1E45] text-[#969FB6] py-4 ">
      <div className="container mx-auto flex items-center justify-between px-12">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={`/Union.png`} alt="Logo" className="w-12 h-12" />
        </div>

        {/* Links and Icons in one div */}
        <div className="flex items-center space-x-4 ">
          <nav className="flex space-x-16">
            <a href="/" className="hover:text-white transition duration-300">Home</a>
            <a href="/marketplace" className="hover:text-white transition duration-300">Marketplace</a>
            <a href="/allnfts" className="hover:text-white transition duration-300">All NFTs</a>
            <a href="/activities" className="hover:text-white transition duration-300">Activities</a>
          </nav>
          
        </div>
        <div className="flex items-center space-x-16 ">  {/* Added ml-16 for more space */}
            <FaEllipsisH className="cursor-pointer hover:text-white transition duration-300" />
            <FaSearch className="cursor-pointer hover:text-white transition duration-300" />
          </div>

        {/* Connect Wallet Button */}
        <div className="flex items-center">
          <button className="border border-[#969FB6] text-[#969FB6] px-7 py-2 rounded-xl hover:bg-yellow-500 transition duration-300">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
