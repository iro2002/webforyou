import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import AIAssistant from "./components/AIAssistant";
import Hero from "./components/Hero";
import SocialSidebar from "./components/SocialSidebar";
import NewComponent from "./components/NewComponent";
import Artist from "./components/Artist";

import Album from "./components/Album";
import Price from "./components/Price";
import Footer from "./components/Footer";
import VideoShowcase from "./components/Video";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Line from "./components/Line";
import Line2 from "./components/Line2";
import Line3 from "./components/Line3";
import LetsTalk from "./components/LetsTalk";
import TermsModal from "./components/TermsModal";
import Process from "./components/Process";


const App = () => {
  return (
    <div className="min-h-screen relative">
      <TermsModal />
      <LetsTalk />
     
      <Header />
      <Navbar />
      <Line3 />
     
      <NewComponent />
      
      <Hero />
      <Line />
      
      <Gallery />
      
     
      <Artist />
      <Album />
      <Process />
      <Line2 />

      <Price />

    
    
   
      <Footer />
    </div>
  );
};

export default App;
