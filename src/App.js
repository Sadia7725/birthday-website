
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import EventCategories from './Components/EventCategories';
import EventPlanningSection from './Components/EventPlanningSection';
import TrendingCollections from './Components/TrendingCollections';
import CorporateEvents from './Components/CorporateEvents';
import EventGallery from './Components/EventGallery';
import WhyChooseHafla from './Components/WhyChooseHafla';
import HaflaExperience from './Components/HaflaExperience';

const App = () => {
  return (
    <div >
      <Header />
      <HeroSection/>
     <EventCategories/>
     <EventPlanningSection/>
     <TrendingCollections/>
     <CorporateEvents/>
     <EventGallery/>
     <WhyChooseHafla/>
     <HaflaExperience/>
      <Footer />
    </div>
  );
};


export default App;
