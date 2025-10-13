
import React, { useEffect, useState, useRef } from 'react';
import GuestCard from './GuestCard';
import CompanyCarousel from './CompanyCarousel';
import Imagedivthree from './Imagedivthree';

function Mixcomponents() {
  const speakersData = [
    {
      imageUrl: 'speakerone.png',
      name: 'Béatrice Buffon',
      title: 'Chairwoman & CEO',
      company: 'EDF Renewables'
    },
    {
      imageUrl: 'speakertwo.png',
      name: 'Rory Sullivan',
      title: 'Associate Partner',
      company: 'McKinsey'
    },
    {
      imageUrl: 'speaker3.png',
      name: 'Patricia Bingoto',
      title: 'Senior Expert',
      company: 'McKinsey'
    },
    {
      imageUrl: 'speaker04.png',
      name: 'Alexios Zachariadis',
      title: 'Partner',
      company: 'Deloitte'
    },
    {
      imageUrl: 'Gemini_Generated_Image_v41z06v41z06v41z.png',
      name: 'Anuj Agarwal',
      title: 'Partner',
      company: 'KPMG'
    },
    {
      imageUrl: 'Gemini_Generated_Image_19cov119cov119co.png',
      name: 'Chris Young',
      title: 'MD, Energy Strategy & Performance Transformation',
      company: 'KPMG, UK'
    },
    {
      imageUrl: 'Gemini_Generated_Image_n1hse1n1hse1n1hs.png',
      name: 'H.E. Suhail Mohamed Al Mazrouei',
      title: 'Minister of Energy & Infrastructure',
      company: 'Ministry of Energy & Infrastructure, UAE'
    },
    {
      imageUrl: 'Gemini_Generated_Image_cksm8zcksm8zcksm.png',
      name: 'H.E. Dr. Abdulla Humaid Saif Al Jarwan',
      title: 'Chairman',
      company: 'Department of Energy - Abu Dhabi, UAE'
    },
    
  ];


const logos = [
  {
    src: "NVIDIA_logo.svg.png",
    alt: "Platinum Tabreed",
    link: "https://www.tabreed.ae/",
  },
  {
    src: "ABB_logo.svg.png",
    alt: "Hydropower",
    link: "https://www.hydropower.energy/",
  },
  {
    src: "Rockwell_Automation_logo_(2019).svg.png",
    alt: "Gold Hitachi",
    link: "https://www.hitachienergy.com/me/en",
  },

  
  {
    src: "Real-sense-logo-rgb.png",
    alt: "Gold IGC",
    link: "https://intelligent-globe.com/",
  },


  {
    src: "Yaskawa_logo.svg.png",
    alt: "Gold Siemens",
    link: "https://www.siemens-energy.com",
  },
  {
    src: "Figure-ai-logo.svg.png",
    alt: "Silver Minsait",
    link: "https://www.minsait.com/en",
  },
  {
    src: "images.png",
    alt: "Abbnew 1",
    link: "javascript:void(0);",
  },
  {
    src: "Untitled.png",
    alt: "Bronze PWC",
    link: "https://www.pwc.com/gx/en.html",
  },
  {
    src: "Black_Full_Logo.webp",
    alt: "SUEZ",
    link: "javascript:void(0);",
  },

];

// Array 2: Sponsor types (in the same order)
const sponsorTypes = [
  "Platinum Sponsor",
  "Platinum Sponsor",
  "Gold Sponsor",
  "Gold Sponsor",
  "Silver Sponsor",
  "Bronze Sponsor",
  "Bronze Sponsor",
  "Bronze Sponsor",
  "Bronze Sponsor",

];



  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 1;
    let animationFrameId;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // ⏱️ Sponsor card logic
  const numberOfVisibleCards = 5;
  const [visibleIndices, setVisibleIndices] = useState(
    Array.from({ length: 4 }, (_, i) => i)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndices((prevIndices) =>
        prevIndices.map(() => Math.floor(Math.random() * logos.length))
      );
    }, 2500); 

    return () => clearInterval(interval);
  }, [logos.length]);

  return (


<div id='speakers-section' className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 px-4 md:px-6">
  {/* Left Side (Main Content) */}
  <div className="col-span-full md:col-span-4 p-4">

    <h1
      style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c', paddingBottom: '0.5rem' }}
      className="text-center text-xl md:text-3xl font-bold mb-6"
    >
      SPEAKERS
    </h1>



<div className="relative overflow-hidden h-[520px]">
  <div className="flex gap-6 animate-[scroll_40s_linear_infinite] w-max">
    {[...speakersData, ...speakersData].map((speaker, idx) => (
      <div key={idx} className="flex-shrink-0">
        <GuestCard
          imageUrl={speaker.imageUrl}
          name={speaker.name}
          title={speaker.title}
          company={speaker.company}
        />
      </div>
    ))}
  </div>
</div>




    <div className="mt-10">
      <h1
        style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
        className="text-center text-2xl md:text-3xl font-bold mb-4"
      >
        UNIVERSITIES PARTICIPATING IN THE CONFERENCE
      </h1>
      <CompanyCarousel />
    </div>

    {/* Image Section */}

  </div>

  {/* Right Side (Sponsors) */}
  <div className="col-span-full md:col-span-1 p-4">
    <h1
      style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
      className="text-center text-xl md:text-2xl font-bold mb-4"
    >
      2025 SPONSORS
    </h1>

    {visibleIndices.map((logoIndex, cardIdx) => (
      <div
        key={cardIdx}
        className="flex justify-center items-center p-4 transition-all duration-300"
      >
        <div className="flex flex-col items-center bg-white shadow-md p-4 w-full sm:w-64 h-32 justify-center">
          <h6 className="text-gray-600 text-center text-sm">
            {sponsorTypes[logoIndex]}
          </h6>
          <img
            src={logos[logoIndex].src}
            alt={logos[logoIndex].alt}
            className="object-contain h-full w-full mt-2"
          />
        </div>
      </div>
    ))}
  </div>
</div>


  );
}

export default Mixcomponents;