import React, { useState } from 'react';

import Header from './Header';
import HeroSection from './HeroSection';
import StatisticsSection from './StatisticsSection';
import ContentSection from './ContentSection';
import SpeakersSection from './SpeakersSection';
import ExhibitingCompanies from './ExhibitingCompanies';
import EventOverview from './EventOverview';
import ShowHighlights from './ShowHighlights';
import PartnerLogos from './PartnerLogos';
import Footer from './Footer';
import Mixcomponents from './Mixcomponents';
import HighletOne from './HighletOne';
import EndFooter from './EndFooter';
import CookieConsent from './CookieConsent';
import ConferenceRegistration from './ConferenceRegistration';
import AbstractSubmission from './AbstractSubmission';
import BiotechAgenda from './BiotechAgenda';
import ConferenceDetails from './ConferenceDetails';
import Overview from './Overview';
import RegionChartComponent from './RegionChartComponent';

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const speakers = [
    {
      name: "H.E. Al Nuaimi",
      title: "Chairman",
      company: "Emirates Energy Group",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    
    {
      name: "H.E. Amal Nour Mohamad",
      title: "Director General",
      company: "Regulation",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "H.E. Samir Kyrilov",
      title: "CEO",
      company: "Azerbaijan",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Dr. Angelos Vladeckas",
      title: "CEO",
      company: "World Energy Council",
      image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Maren Tyldum",
      title: "CEO",
      company: "TAQA",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const companies = [
    { name: "TAQA", logo: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "ADNOC", logo: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Emirates Water", logo: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "DEWA", logo: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <CookieConsent />
      <Header />
      <HeroSection />
      <StatisticsSection />
      
      <ContentSection />

      <Mixcomponents/>
      <RegionChartComponent/>
      <Overview />
      {/* <SpeakersSection speakers={speakers} />
      <ExhibitingCompanies companies={companies} /> */}
      {/* <ConferenceDetails /> */}
      <BiotechAgenda />
      
      <EventOverview />
      {/* <ConferenceRegistration />
      <AbstractSubmission /> */}
      
      {/* <ShowHighlights currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} /> */}
      {/* <HighletOne/> */}
      
      <ShowHighlights/>
      <PartnerLogos />
      <Footer />
      <EndFooter/>


      
    </div>
  );
}

export default HomePage;
