

// // import React from 'react';
// // import ImageHoverCard from './ImageHoverCard';

// // function Imagedivthree() {
 
// //   const eventData = [
// //   {
// //     imageUrl:
// //       'https://www.worldutilitiescongress.com/media/ob3nrxgt/engie-exhibitor.jpg?rxy=0.5889724310776943,0.4453792156522984&width=425&height=551&rnd=133715698290500000',
// //     title: 'EXHIBITION',
// //     description:
// //       '200+ global biotech companies and research institutions will showcase cutting-edge innovations in medical biotechnology, pharmaceuticals, genetics, agriculture, and industrial biotech.',
// //     buttonText: 'Find out more',
// //     linkUrl: '#/exhibition',
// //   },
// //   {
// //     imageUrl:
// //       'https://www.worldutilitiescongress.com/media/iu3p0nu4/strategic.png?width=425&height=551&rnd=133710506931600000',
// //     title: 'STRATEGIC CONFERENCE',
// //     description:
// //       'Join government leaders, scientists, and industry pioneers as they discuss strategies shaping the future of biotechnology, healthcare, food security, and sustainability.',
// //     buttonText: 'Find out more',
// //     linkUrl: '#/strategic-conference',
// //   },
// //   {
// //     imageUrl:
// //       'https://www.worldutilitiescongress.com/media/mlycxs4m/technical.png?width=425&height=551&rnd=133710507075570000',
// //     title: 'TECHNICAL CONFERENCE',
// //     description:
// //       'Gain access to the latest biotech research findings, advancements in genetic engineering, lab innovations, clinical applications, and industry best practices.',
// //     buttonText: 'Find out more',
// //     linkUrl: '#/technical-conference',
// //   },
// //   {
// //     imageUrl:
// //       'https://www.worldutilitiescongress.com/media/ucji3wzb/utilities-club.png?width=425&height=551&rnd=133710507263470000',
// //     title: 'BIOTECH LEADERS CLUB',
// //     description:
// //       'An exclusive networking platform for policymakers, scientists, investors, and biotech executives to exchange ideas, foster collaborations, and drive innovation.',
// //     buttonText: 'Find out more',
// //     linkUrl: '#/biotech-leaders-club',
// //   },
// //     {
// //     imageUrl:
// //       'https://www.worldutilitiescongress.com/media/ucji3wzb/utilities-club.png?width=425&height=551&rnd=133710507263470000',
// //     title: 'BIOTECH LEADERS CLUB',
// //     description:
// //       'An exclusive networking platform for policymakers, scientists, investors, and biotech executives to exchange ideas, foster collaborations, and drive innovation.',
// //     buttonText: 'Find out more',
// //     linkUrl: '#/biotech-leaders-club',
// //   },
// // ];

// //   return (
// //     <div className="w-full px-4">
// //       {/* Wrapper for scroll */}
// //       <div className="flex gap-0 mx-0">
// //         {eventData.map((card, index) => (
// //           <div
// //             key={index}
// //             className=" w-[300px] md:w-[280px] lg:w-[320px]"
// //           >
// //             <ImageHoverCard
// //               imageUrl={card.imageUrl}
// //               title={card.title}
// //               description={card.description}
// //               buttonText={card.buttonText}
// //               linkUrl={card.linkUrl}
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Imagedivthree;



// import React from 'react';
// import ImageHoverCard from './ImageHoverCard';

// function Imagedivthree() {
//   const eventData = [
//     {
//       imageUrl:
//         'https://www.worldutilitiescongress.com/media/ob3nrxgt/engie-exhibitor.jpg?rxy=0.5889724310776943,0.4453792156522984&width=425&height=551&rnd=133715698290500000',
//       title: 'EXHIBITION',
//       description:
//         '200+ global biotech companies and research institutions will showcase cutting-edge innovations in medical biotechnology, pharmaceuticals, genetics, agriculture, and industrial biotech.',
//       buttonText: 'Find out more',
//       linkUrl: '#/exhibition',
//     },
//     {
//       imageUrl:
//         'https://www.worldutilitiescongress.com/media/iu3p0nu4/strategic.png?width=425&height=551&rnd=133710506931600000',
//       title: 'STRATEGIC CONFERENCE',
//       description:
//         'Join government leaders, scientists, and industry pioneers as they discuss strategies shaping the future of biotechnology, healthcare, food security, and sustainability.',
//       buttonText: 'Find out more',
//       linkUrl: '#/strategic-conference',
//     },
//     {
//       imageUrl:
//         'https://www.worldutilitiescongress.com/media/mlycxs4m/technical.png?width=425&height=551&rnd=133710507075570000',
//       title: 'TECHNICAL CONFERENCE',
//       description:
//         'Gain access to the latest biotech research findings, advancements in genetic engineering, lab innovations, clinical applications, and industry best practices.',
//       buttonText: 'Find out more',
//       linkUrl: '#/technical-conference',
//     },
//     {
//       imageUrl:
//         'https://www.worldutilitiescongress.com/media/ucji3wzb/utilities-club.png?width=425&height=551&rnd=133710507263470000',
//       title: 'BIOTECH LEADERS CLUB',
//       description:
//         'An exclusive networking platform for policymakers, scientists, investors, and biotech executives to exchange ideas, foster collaborations, and drive innovation.',
//       buttonText: 'Find out more',
//       linkUrl: '#/biotech-leaders-club',
//     },
//     {
//       imageUrl:
//         'https://www.worldutilitiescongress.com/media/ucji3wzb/utilities-club.png?width=425&height=551&rnd=133710507263470000',
//       title: 'BIOTECH LEADERS CLUB',
//       description:
//         'An exclusive networking platform for policymakers, scientists, investors, and biotech executives to exchange ideas, foster collaborations, and drive innovation.',
//       buttonText: 'Find out more',
//       linkUrl: '#/biotech-leaders-club',
//     },
//   ];

//   return (
//     <div className="w-full px-4">
//       {/* Wrapper for scroll on mobile, flex/grid on desktop */}
//       <div className="
//         flex flex-row flex-nowrap 
//         overflow-x-auto 
//         gap-3        
//         md:gap-5
//         sm:flex-wrap 
//         sm:overflow-x-visible
//         sm:justify-center
//         py-3
//       ">
//         {eventData.map((card, index) => (
//           <div
//             key={index}
//             className="
//               min-w-[260px] 
//               w-[80vw] 
//               sm:w-[220px] 
//               md:w-[260px] 
//               lg:w-[320px]
//               flex-shrink-0
//               sm:flex-shrink
//             "
//           >
//             <ImageHoverCard
//               imageUrl={card.imageUrl}
//               title={card.title}
//               description={card.description}
//               buttonText={card.buttonText}
//               linkUrl={card.linkUrl}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Imagedivthree;



import React from 'react';
import ImageHoverCard from './ImageHoverCard';

function Imagedivthree() {
  // const eventData = [
  //   {
  //     imageUrl:
  //       'https://www.worldutilitiescongress.com/media/ob3nrxgt/engie-exhibitor.jpg?rxy=0.5889724310776943,0.4453792156522984&width=425&height=551&rnd=133715698290500000',
  //     title: 'EXHIBITION',
  //     description:
  //       '200+ global biotech companies and research institutions will showcase cutting-edge innovations in medical biotechnology, pharmaceuticals, genetics, agriculture, and industrial biotech.',
  //     buttonText: 'Find out more',
  //     linkUrl: '#/exhibition',
  //   },
  //   {
  //     imageUrl:
  //       'https://www.worldutilitiescongress.com/media/iu3p0nu4/strategic.png?width=425&height=551&rnd=133710506931600000',
  //     title: 'STRATEGIC CONFERENCE',
  //     description:
  //       'Join government leaders, scientists, and industry pioneers as they discuss strategies shaping the future of biotechnology, healthcare, food security, and sustainability.',
  //     buttonText: 'Find out more',
  //     linkUrl: '#/strategic-conference',
  //   },
  //   {
  //     imageUrl:
  //       'https://www.worldutilitiescongress.com/media/mlycxs4m/technical.png?width=425&height=551&rnd=133710507075570000',
  //     title: 'TECHNICAL CONFERENCE',
  //     description:
  //       'Gain access to the latest biotech research findings, advancements in genetic engineering, lab innovations, clinical applications, and industry best practices.',
  //     buttonText: 'Find out more',
  //     linkUrl: '#/technical-conference',
  //   },
  //   {
  //     imageUrl:
  //       'https://www.worldutilitiescongress.com/media/ucji3wzb/utilities-club.png?width=425&height=551&rnd=133710507263470000',
  //     title: 'BIOTECH LEADERS CLUB',
  //     description:
  //       'An exclusive networking platform for policymakers, scientists, investors, and biotech executives to exchange ideas, foster collaborations, and drive innovation.',
  //     buttonText: 'Find out more',
  //     linkUrl: '#/biotech-leaders-club',
  //   },
  //   {
  //     imageUrl:
  //       'https://www.worldutilitiescongress.com/media/ucji3wzb/utilities-club.png?width=425&height=551&rnd=133710507263470000',
  //     title: 'BIOTECH LEADERS CLUB',
  //     description:
  //       'An exclusive networking platform for policymakers, scientists, investors, and biotech executives to exchange ideas, foster collaborations, and drive innovation.',
  //     buttonText: 'Find out more',
  //     linkUrl: '#/biotech-leaders-club',
  //   },
  // ];

  const eventData = [

    {
      imageUrl: 'WhatsApp Image 2025-10-11 at 12.55.28_b46879a8.jpg', // Replace with an image of the venue or tech theme
      title: 'ABOUT',
      description: 'Learn about ROBOTICS-2026, a global hub for AI, machine learning, and robotics advancements. Join us July 28–30, 2026, in Rome to connect with pioneers shaping intelligent technologies.',
      buttonText: 'Discover More',
      linkUrl: '#/about',
    },
    {
      imageUrl: 'WhatsApp Image 2025-10-11 at 13.02.55_d8a6b302.jpg', // Replace with speaker photos or AI/robotics visuals
      title: 'SPEAKERS',
      description: 'Hear from top experts like Dr. Elena Rossi and Prof. Hiroshi Tanaka at ROBOTICS-2026, July 28–30, 2026. Gain insights into AI and robotics breakthroughs—secure your spot now!',
      buttonText: 'View Speakers',
      linkUrl: '#/speakers',
    },
    {
      imageUrl: 'Untitled-101.jpeg', // Replace with an agenda graphic or Rome skyline
      title: 'SCHEDULE',
      description: 'Plan your ROBOTICS-2026 experience with keynotes, workshops, and demos from July 28–30, 2026, in Rome. Download the full agenda and join the innovation journey!',
      buttonText: 'See Schedule',
      linkUrl: '#/schedule',
    },
    {
      imageUrl: 'Untitled102.jpeg', // Replace with registration form graphic
      title: 'REGISTRATION',
      description: 'Secure your exclusive access to ROBOTICS-2026, the premier AI, machine learning, and robotics conference, July 28–30, 2026, in Rome. Register now!',
      buttonText: 'Register Now',
      linkUrl: '#/registration',
    },

    {
      imageUrl: 'Untitled01.jpeg', // Replace with abstract submission image
      title: 'ABSTRACT SUBMISSION',
      description: 'Submit your research for ROBOTICS-2026, held July 28–30, 2026, in Rome. Deadline: March 15, 2026. Share your AI and robotics innovations today!',
      buttonText: 'Submit Abstract',
      linkUrl: '#/abstract-submission',
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
