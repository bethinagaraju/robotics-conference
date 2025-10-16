
import React from 'react';
import GuestCard from './GuestCard';
import CompanyCarousel from './CompanyCarousel';
import Imagedivthree from './Imagedivthree';
import SponsorsSection from './SponsorsSection';

function Mixcomponents() {
  const speakersData = [
    {
      imageUrl: 'speakerone.png',
      name: 'Michael Cafarella',
      title: 'Massachusetts Institute of Technology, USA',
      company: 'EDF Renewables'
    },
    {
      imageUrl: 'speakertwo.png',
      name: 'Chris Atkenson',
      title: 'Carnegie Mellon University, USA',
      company: 'McKinsey'
    },
    {
      imageUrl: 'speaker3.png',
      name: 'Yanda Li',
      title: 'Tsinghua University, China',
      company: 'McKinsey'
    },
    {
      imageUrl: 'speaker04.png',
      name: 'Samuel Coogan',
      title: 'Georgia institute of Technology, USA',
      company: 'Deloitte'
    },
    {
      imageUrl: 'Gemini_Generated_Image_v41z06v41z06v41z.png',
      name: 'Leonidas Guibas',
      title: 'Stanford University, USA',
      company: 'KPMG'
    },
    {
      imageUrl: 'Gemini_Generated_Image_19cov119cov119co.png',
      name: 'Jeannette Bohg',
      title: 'Stanford University, USA',
      company: 'KPMG, UK'
    },
    {
      imageUrl: 'Gemini_Generated_Image_n1hse1n1hse1n1hs.png',
      name: 'Gustavo Alonso',
      title: 'ETH Zurich, Switzerland',
      company: 'Ministry of Energy & Infrastructure, UAE'
    },
    {
      imageUrl: 'Gemini_Generated_Image_cksm8zcksm8zcksm.png',
      name: 'Weidong Chen',
      title: 'Shanghai Jiao Tong University, China',
      company: 'Shanghai Jiao Tong University, China'
    },
    
  ];










  return (


<div id='speakers-section' className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 px-4 md:px-6 ">
  {/* Left Side (Main Content) */}
  <div className="col-span-full md:col-span-4 p-4">

    <h1
      style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c', paddingBottom: '0.5rem' }}
      className="text-center text-xl md:text-3xl font-bold mb-6"
    >
      SPEAKERS
    </h1>



<div id='Speakers-section' className="relative overflow-hidden h-[520px] scroll-mt-48">
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
        style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c', textTransform: 'uppercase' }}
        className="text-center text-2xl md:text-3xl font-bold mb-4"
      >
        Universities Participating in the Conference
      </h1>
      <CompanyCarousel />
    </div>

    {/* Image Section */}

  </div>

  {/* Right Side (Sponsors) */}
  <SponsorsSection />
</div>


  );
}

export default Mixcomponents;