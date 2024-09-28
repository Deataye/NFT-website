import React from 'react';
import './App.css'
import Header from './components/Header/header';  // Adjust path as necessary
import Hero from './components/Hero/hero';
import HotAuctions from './components/HotAuctions/hotauctions';
import PopularCollections from './components/PopularCollection/popularcollection';
import TopArtist from './components/TopArtist/topartist';
import TrendingNfts from './components/TrendingNFTs/trendingNFTs'
import AboutMe from './components/AboutMe/aboutme';
import Browsing from './components/Browsing/browsing'
import Marketplace from './components/Marketplace/maketplace';
import WhyMyNFTs from './components/WhyMyNFTs/WhyMyNFts';
import CreateNFTs from './components/CreateNFTs/createNFts';
import Banner from './components/Banner/banner';

import Footer from './components/Footer/footer';

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
      <Banner/>
      <Footer/>
      
      {/* Other components or routes will go here */}
      <main>
        {/* Add your routes or other content */}
      </main>
    </div>
  );
}

export default App;