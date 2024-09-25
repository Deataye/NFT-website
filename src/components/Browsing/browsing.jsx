import React from 'react';

const Browsing = () => {
  const categories = [
    { name: 'ART', items: 28, imageSrc: '/525.png' },
    { name: 'Photography', items: 28, imageSrc: '/524.png' },
    { name: 'ART', items: 28, imageSrc: '/524.png' },
    { name: 'Photography', items: 28, imageSrc: '/524.png' },
    { name: 'Domains', items: 28, imageSrc: '/525.png' },
    { name: 'Photography', items: 28, imageSrc: '/524.png' },
    { name: 'Domains', items: 28, imageSrc: '/525.png' },
    { name: 'Photography', items: 28, imageSrc: '/524.png' }
  ];

  return (
    <div className='w-full flex flex-col py-12 bg-[#ECF1FF]'>
      {/* Title */}
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold text-gray-900 leading-tight'>
          Browse by category
        </h2>
      </div>

      {/* Grid for categories */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8'>
        {categories.map((category, index) => (
          <div key={index} className='relative w-full flex justify-center items-center'>
            {/* Card */}
            <div className='grid items-start p-[16px] w-[220px] h-[200px] rounded-[16px] bg-[rgba(249,249,249,0.7)] shadow-lg relative'>
              {/* Image */}
              <img
                src={category.imageSrc}
                alt={`${category.name} category`}
                className='absolute top-0 left-0 w-full h-full object-cover rounded-[16px] z-0'
              />

              {/* Custom Overlay with Flex */}
              <div
                className='absolute bottom-4 left-2 w-[200px] py-[10px] px-[16px] rounded-[8px] bg-[rgba(33,32,74,0.7)] backdrop-blur-[4px] flex justify-between items-center z-10'>
                {/* Text info (flex row) */}
                <p className='text-white font-semibold'>{category.name}</p>
                <p className='text-gray-300 text-sm'>{category.items} items</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browsing;
