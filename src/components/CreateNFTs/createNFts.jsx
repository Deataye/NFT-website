import React from 'react';

const CreateNFTs = () => {
  return (
    <div className="bg-[#ECF1FF] py-[100px] px-4"> {/* Background color for the main container */}
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Create and Sell Your NFTs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="bg-[#ECF1FF] p-8 rounded-lg flex flex-col items-start w-96"> {/* Increased width and background color */}
            <div className="mb-4">
              <img
                src="./Wallet.png" // Replace with your icon path
                alt="Icon 1"
                className="w-12 h-12" // Icon size
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Set up your wallet</h3> {/* Decreased text size */}
            <p className="text-gray-600 text-left text-sm"> {/* Decreased text size */}
              Brief description about what this feature offers to the users.
            </p>
          </div>

          {/* Column 2 */}
          <div className="bg-[#ECF1FF] p-8 rounded-lg flex flex-col items-start w-96"> {/* Increased width and background color */}
            <div className="mb-4">
              <img
                src="./Category.png" // Replace with your icon path
                alt="Icon 2"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Create your collection</h3> {/* Decreased text size */}
            <p className="text-gray-600 text-left text-sm">
              Brief description about what this feature offers to the users.
            </p>
          </div>

          {/* Column 3 */}
          <div className="bg-[#ECF1FF] p-8 rounded-lg flex flex-col items-start w-96"> {/* Increased width and background color */}
            <div className="mb-4">
              <img
                src="./Image.png" // Replace with your icon path
                alt="Icon 3"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Add your NFTs</h3> {/* Decreased text size */}
            <p className="text-gray-600 text-left text-sm">
              Brief description about what this feature offers to the users.
            </p>
          </div>

          {/* Column 4 */}
          <div className="bg-[#ECF1FF] p-8 rounded-lg flex flex-col items-start w-96"> {/* Increased width and background color */}
            <div className="mb-4">
              <img
                src="./Send.png" // Replace with your icon path
                alt="Icon 4"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">List them for sale</h3> {/* Decreased text size */}
            <p className="text-gray-600 text-left text-sm">
              Brief description about what this feature offers to the users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNFTs;
