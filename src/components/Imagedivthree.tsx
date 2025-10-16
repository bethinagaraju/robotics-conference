

import React from 'react';
import ImageHoverCard from './ImageHoverCard';

function Imagedivthree() {
  

  const eventData = [

    {
      imageUrl: 'WhatsApp Image 2025-10-11 at 12.55.28_b46879a8.jpg', // Replace with an image of the venue or tech theme
      title: 'ABOUT',
      description: 'Learn about ROBOTICS-2026, a global hub for AI, machine learning, and robotics advancements. Join us July 28–30, 2026, in Rome to connect with pioneers shaping intelligent technologies.',
      buttonText: 'Discover More',
      linkUrl: '/#about-section',
    },
    {
      imageUrl: 'Untitled-sowaker.jpeg', // Replace with speaker photos or AI/robotics visuals
      title: 'SPEAKERS',
      description: 'Hear from top experts like Dr. Elena Rossi and Prof. Hiroshi Tanaka at ROBOTICS-2026, July 28–30, 2026. Gain insights into AI and robotics breakthroughs—secure your spot now!',
      buttonText: 'View Speakers',
      linkUrl: '/#Speakers-section',
    },
    {
      imageUrl: 'Untitled-101.jpeg', // Replace with an agenda graphic or Rome skyline
      title: 'SCHEDULE',
      description: 'Plan your ROBOTICS-2026 experience with keynotes, workshops, and demos from July 28–30, 2026, in Rome. Download the full agenda and join the innovation journey!',
      buttonText: 'See Schedule',
      linkUrl: '/#Sponsors-section',
    },
    {
      imageUrl: 'Untitled102.jpeg', // Replace with registration form graphic
      title: 'REGISTRATION',
      description: 'Secure your exclusive access to ROBOTICS-2026, the premier AI, machine learning, and robotics conference, July 28–30, 2026, in Rome. Register now!',
      buttonText: 'Register Now',
      linkUrl: '/register',
    },

    {
      imageUrl: 'Untitled01.jpeg', // Replace with abstract submission image
      title: 'ABSTRACT SUBMISSION',
      description: 'Submit your research for ROBOTICS-2026, held July 28–30, 2026, in Rome. Deadline: March 15, 2026. Share your AI and robotics innovations today!',
      buttonText: 'Submit Abstract',
      linkUrl: '/AbstractSubmission',
    },

    
  ];

  return (
    <div className="w-full px-4">
      <div
        className="
          flex gap-3 py-3
          overflow-x-auto flex-nowrap 
          md:overflow-x-visible md:flex-wrap
          lg:overflow-x-visible lg:flex-nowrap lg:justify-between
        "
      >
        {eventData.map((card, index) => (
          <div
            key={index}
            className="
              min-w-[260px] 
              w-[80vw] 
              sm:w-[220px] 
              md:w-[220px]
              lg:w-1/5 lg:min-w-0 
              flex-shrink-0 
              lg:flex-shrink
            "
          >
            <ImageHoverCard
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              linkUrl={card.linkUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Imagedivthree;
