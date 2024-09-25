import React from 'react';
import Header from './components/Header/header';  // Adjust path as necessary
import Hero from './components/Hero/hero';
import HotAuctions from './components/HotAuctions/hotauctions';
import PopularCollections from './components/PopularCollection/Popularcollection';
import TopArtist from './components/TopArtist/topartist';
import TrendingNfts from './components/TrendingNFTs/trendingNFTs'
import AboutMe from './components/AboutMe/aboutme';
import Browsing from './components/Browsing/browsing'
import Marketplace from './components/Marketplace/maketplace';
import WhyMyNFTs from './components/WhyMyNFTs/WhyMyNFts';
import CreateNFTs from './components/CreateNFTs/createNFts';
function App() {
  return (
    <div className="App">
      {/* Header Component */}
      <Header />
      <Hero/>
      <HotAuctions/>
      <PopularCollections/>
      <TopArtist/>
      <TrendingNfts/>
      <AboutMe />
      <Browsing/>
      <Marketplace/>
      <WhyMyNFTs/>
      <CreateNFTs/>
      {/* Other components or routes will go here */}
      <main>
        {/* Add your routes or other content */}
      </main>
    </div>
  );
}

export default App;