import React, { useState } from 'react';

const TopArtists = () => {
  const [selectedCategory, setSelectedCategory] = useState('Music');

  const handleDropdownChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Dummy artist data
  const artistsData = [
    { id: 1, name: 'Phuong Pham', followers: '2,798', isVerified: true },
    { id: 2, name: 'Phuong Pham', followers: '2,798', isVerified: false },
    { id: 3, name: 'MThu Nguyen', followers: '2,798', isVerified: true },
    { id: 4, name: 'Trina Nguyen', followers: '2,798', isVerified: false },
    { id: 5, name: 'Phuong Pham', followers: '2,798', isVerified: true },
    { id: 6, name: 'MThu Nguyen', followers: '2,798', isVerified: false },
  ];

  return (
    <section className="bg-[#ECF1FF] text-black py-16">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-semibold">Top artists</h2>
          {/* Dropdown */}
          <select
              value={selectedCategory}
              onChange={handleDropdownChange}
              className="bg-white text-black px-3 py-1 rounded-lg text-sm"
            >
              <option value="Music">Music</option>
              <option value="Art">Art</option>
              <option value="Photography">Photography</option>
            </select>
           </div>

          <div className="flex items-center space-x-4">
            
            {/* See All Button */}
            <button className="text-blue-600 hover:underline text-sm">See all</button>
          </div>
        </div>

        {/* Artists List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artistsData.map((artist, index) => (
            <div key={artist.id} className="flex items-center space-x-4">
              {/* Artist Rank */}
              <span className="text-lg font-bold">{index + 1}</span>

              {/* Artist Image */}
              <div className="relative">
                <img
                  src={`/ava.png`} 
                  alt={artist.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                {artist.isVerified && (
                  <span className="absolute bottom-0 right-0  p-1"> <img 
                  src="/Verified.png" // Checkmark icon here
                  alt="Verified"
                  className="w-5 h-5"
                /></span>
                )}
              </div>

              {/* Artist Details */}
              <div>
                <h3 className="font-medium text-lg">{artist.name}</h3>
                <p className="text-gray-500">{artist.followers}</p>
                <p className="text-sm text-gray-400">Followed by 2,129 users</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopArtists;
