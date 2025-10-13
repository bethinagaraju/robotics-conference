// import React, { useState } from 'react';
// import { User } from 'lucide-react';
// import Header from './Header';

// // Defines the type for a single event in the schedule
// interface ScheduleItem {
//   time: string;
//   title: string;
//   description: string;
//   speaker: string | null; // Speaker can be a string or null if not applicable
// }

// // Defines the type for the entire schedule object
// interface ScheduleData {
//   day1: ScheduleItem[];
//   day2: ScheduleItem[];
// }



// const scheduleData: ScheduleData = {
//   day1: [
//     {
//       time: '08:00 - 09:00',
//       title: 'Registration & Welcome Coffee',
//       description: 'Check-in, collect your badge, and network with peers over coffee.',
//       speaker: null,
//     },
//     {
//       time: '09:00 - 10:00',
//       title: 'Keynote: Engineering the Future of Medicine',
//       description: 'How biomedical engineering is bridging the gap between clinical challenges and technological solutions.',
//       speaker: 'Dr. Aris Thorne, Director at the Institute for Medical Engineering',
//     },
//     {
//       time: '10:00 - 11:30',
//       title: 'Panel: Next-Generation Medical Devices',
//       description: 'Experts discuss innovations in diagnostics, therapeutics, and wearable technology from lab to clinic.',
//       speaker: 'Moderated by Dr. Lena Hanson',
//     },
//     {
//       time: '11:30 - 12:00',
//       title: 'Coffee & Networking Break',
//       description: 'Connect with speakers and attendees.',
//       speaker: null,
//     },
//     {
//       time: '12:00 - 13:30',
//       title: 'Track 1: Advances in Biomaterials & Tissue Engineering',
//       description: 'Exploring novel materials for regenerative medicine and drug delivery systems.',
//       speaker: 'Prof. Kenji Tanaka, Center for Regenerative Medicine',
//     },
//     {
//       time: '13:30 - 14:30',
//       title: 'Networking Lunch',
//       description: 'Enjoy a catered lunch while discussing the morning sessions.',
//       speaker: null,
//     },
//     {
//       time: '14:30 - 16:00',
//       title: 'Track 2: Innovations in Medical Imaging & Diagnostics',
//       description: 'A deep dive into AI-powered diagnostics and the latest in imaging technology.',
//       speaker: 'Dr. Isabella Rossi, Lead Imaging Scientist',
//     },
//   ],
//   day2: [
//     {
//       time: '08:30 - 09:00',
//       title: 'Morning Coffee & Networking',
//       description: 'Start the day with fresh coffee and new connections.',
//       speaker: null,
//     },
//     {
//       time: '09:00 - 10:00',
//       title: 'Keynote: AI & Robotics in Modern Healthcare',
//       description: 'The transformative impact of intelligent systems in surgical procedures and patient care.',
//       speaker: 'Dr. Samuel Chen, CEO of MedBotics Inc.',
//     },
//     {
//       time: '10:00 - 11:30',
//       title: 'Panel: Commercializing Biomedical Innovations',
//       description: 'Founders and venture capitalists discuss navigating regulatory pathways and securing funding.',
//       speaker: 'Featuring panelists from MedTech Ventures & Health Innovate',
//     },
//     {
//       time: '11:30 - 12:00',
//       title: 'Coffee & Networking Break',
//       description: 'A final opportunity to exchange contacts.',
//       speaker: null,
//     },
//     {
//       time: '12:00 - 13:30',
//       title: 'Workshop: Computational Modeling in Biomechanics',
//       description: 'A hands-on session using modern software for simulating biological systems.',
//       speaker: 'Dr. Maria Flores, Bio-Signal Processing Lab',
//     },
//     {
//       time: '13:30 - 14:30',
//       title: 'Networking Lunch',
//       description: 'Final networking lunch.',
//       speaker: null,
//     },
//     {
//       time: '14:30 - 16:00',
//       title: 'Closing Remarks & Future Outlook',
//       description: 'A summary of key takeaways and a look at the future of biomedical engineering.',
//       speaker: 'Conference Chair',
//     },
//   ],


  
  
// };

// const BiotechAgenda: React.FC = () => {
//   const [activeDay, setActiveDay] = useState<number>(1);
//   const themeColor = '#2e366c'; 

//   const renderSchedule = (day: ScheduleItem[]) => {
//     return day.map((item, index) => (
//       <div key={index} className="flex flex-col sm:flex-row border-t border-gray-200 py-6">
//         <div className="w-full sm:w-1/4 pr-4 mb-2 sm:mb-0 sm:text-right">
//           <p className="font-bold text-lg" style={{ color: themeColor }}>
//             {item.time}
//           </p>
//         </div>
//         <div className="w-full sm:w-3/4 pl-4 sm:border-l border-gray-200">
//           <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
//           <p className="text-gray-600 mt-1">{item.description}</p>
//           {item.speaker && (
//             <div className="flex items-center mt-3 text-gray-500">
//               <User size={16} className="mr-2 flex-shrink-0" />
//               <span className="text-sm font-medium">{item.speaker}</span>
//             </div>
//           )}
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div>
      
//       <section className="bg-white py-16 px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* <h2 className="text-4xl font-extrabold text-center" style={{color: '#f4aa3d'}}>
//             CONFERENCE AGENDA
//           </h2> */}

//              <h1
//         style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
//         className="text-2xl md:text-4xl font-bold text-center mb-4"
//       >
//         CONFERENCE AGENDA
//       </h1>
//           <br/>
//           <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//             Explore our two-day agenda packed with insightful keynotes, expert panels, and networking opportunities in Biomedical Engineering.
//           </p>

//           {/* Day Toggle Buttons */}
//           <div className="flex justify-center mb-10 gap-2 sm:gap-4 p-1 bg-gray-100 max-w-xs mx-auto">

//             <button
//               onClick={() => setActiveDay(1)}
//               className={`w-full px-6 py-3 text-sm sm:text-base font-bold rounded-full transition-all duration-300 ease-in-out ${
//                 activeDay === 1 ? 'text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'
//               }`}
//               style={{ backgroundColor: activeDay === 1 ? themeColor : '' }}
//             >
//               Day 1
//             </button>

//             <button
//               onClick={() => setActiveDay(2)}
//               className={`w-full px-6 py-3 text-sm sm:text-base font-bold rounded-full transition-all duration-300 ease-in-out ${
//                 activeDay === 2 ? 'text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'
//               }`}
//               style={{ backgroundColor: activeDay === 2 ? themeColor : '' }}
//             >
//               Day 2
//             </button>

//           </div>

//           {/* Schedule Display */}
//           <div className="transition-opacity duration-500 ease-in-out">
//             {activeDay === 1
//               ? renderSchedule(scheduleData.day1)
//               : renderSchedule(scheduleData.day2)}
//           </div>

          

//           {/* Register Button */}
//           <div className="flex justify-center mt-10">
//             <a href="#" className="bg-[#f4aa3d] hover:bg-teal-600 text-white px-6 py-2 rounded font-semibold text-sm transition-colors">
//               Register Now
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BiotechAgenda;




import React, { useState } from 'react';
import { User } from 'lucide-react';
import Header from './Header';

// Defines the type for a single event in the schedule
interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  speaker: string | null; // Speaker can be a string or null if not applicable
}

// Defines the type for the entire schedule object
interface ScheduleData {
  day1: ScheduleItem[];
  day2: ScheduleItem[];
  day3: ScheduleItem[];
}

// const scheduleData: ScheduleData = {
//   day1: [
//     {
//       time: '08:00 - 09:00',
//       title: 'Registration & Welcome Coffee',
//       description: 'Check-in, collect your badge, and network with peers over coffee.',
//       speaker: null,
//     },
//     {
//       time: '09:00 - 10:00',
//       title: 'Keynote: Engineering the Future of Medicine',
//       description:
//         'How biomedical engineering is bridging the gap between clinical challenges and technological solutions.',
//       speaker: 'Dr. Aris Thorne, Director at the Institute for Medical Engineering',
//     },
//     {
//       time: '10:00 - 11:30',
//       title: 'Panel: Next-Generation Medical Devices',
//       description:
//         'Experts discuss innovations in diagnostics, therapeutics, and wearable technology from lab to clinic.',
//       speaker: 'Moderated by Dr. Lena Hanson',
//     },
//     {
//       time: '11:30 - 12:00',
//       title: 'Coffee & Networking Break',
//       description: 'Connect with speakers and attendees.',
//       speaker: null,
//     },
//     {
//       time: '12:00 - 13:30',
//       title: 'Track 1: Advances in Biomaterials & Tissue Engineering',
//       description:
//         'Exploring novel materials for regenerative medicine and drug delivery systems.',
//       speaker: 'Prof. Kenji Tanaka, Center for Regenerative Medicine',
//     },
//     {
//       time: '13:30 - 14:30',
//       title: 'Networking Lunch',
//       description: 'Enjoy a catered lunch while discussing the morning sessions.',
//       speaker: null,
//     },
//     {
//       time: '14:30 - 16:00',
//       title: 'Track 2: Innovations in Medical Imaging & Diagnostics',
//       description:
//         'A deep dive into AI-powered diagnostics and the latest in imaging technology.',
//       speaker: 'Dr. Isabella Rossi, Lead Imaging Scientist',
//     },
//   ],

//   day2: [
//     {
//       time: '08:30 - 09:00',
//       title: 'Morning Coffee & Networking',
//       description: 'Start the day with fresh coffee and new connections.',
//       speaker: null,
//     },
//     {
//       time: '09:00 - 10:00',
//       title: 'Keynote: AI & Robotics in Modern Healthcare',
//       description:
//         'The transformative impact of intelligent systems in surgical procedures and patient care.',
//       speaker: 'Dr. Samuel Chen, CEO of MedBotics Inc.',
//     },
//     {
//       time: '10:00 - 11:30',
//       title: 'Panel: Commercializing Biomedical Innovations',
//       description:
//         'Founders and venture capitalists discuss navigating regulatory pathways and securing funding.',
//       speaker: 'Featuring panelists from MedTech Ventures & Health Innovate',
//     },
//     {
//       time: '11:30 - 12:00',
//       title: 'Coffee & Networking Break',
//       description: 'A final opportunity to exchange contacts.',
//       speaker: null,
//     },
//     {
//       time: '12:00 - 13:30',
//       title: 'Workshop: Computational Modeling in Biomechanics',
//       description:
//         'A hands-on session using modern software for simulating biological systems.',
//       speaker: 'Dr. Maria Flores, Bio-Signal Processing Lab',
//     },
//     {
//       time: '13:30 - 14:30',
//       title: 'Networking Lunch',
//       description: 'Final networking lunch.',
//       speaker: null,
//     },
//     {
//       time: '14:30 - 16:00',
//       title: 'Closing Remarks & Future Outlook',
//       description:
//         'A summary of key takeaways and a look at the future of biomedical engineering.',
//       speaker: 'Conference Chair',
//     },
//   ],

//   day3: [
//     {
//       time: '09:00 - 09:30',
//       title: 'Welcome & Recap of Previous Days',
//       description: 'A brief recap of key insights and announcements.',
//       speaker: 'Event Coordinator',
//     },
//     {
//       time: '09:30 - 11:00',
//       title: 'Panel: Future of AI-Powered Healthcare Systems',
//       description:
//         'Experts discuss the next big steps for AI and ML applications in hospitals and telemedicine.',
//       speaker: 'Panelists from HealthAI & DeepMed',
//     },
//     {
//       time: '11:00 - 11:30',
//       title: 'Coffee & Networking Break',
//       description: 'Relax and network with fellow attendees and speakers.',
//       speaker: null,
//     },
//     {
//       time: '11:30 - 13:00',
//       title: 'Workshop: Robotics in Precision Surgery',
//       description:
//         'Live demonstration of robotic systems in medical applications and simulation environments.',
//       speaker: 'Dr. Nina Alvarez, Robotics Research Lab',
//     },
//     {
//       time: '13:00 - 14:00',
//       title: 'Lunch & Networking',
//       description: 'Enjoy lunch while exchanging ideas with global experts.',
//       speaker: null,
//     },
//     {
//       time: '14:00 - 15:30',
//       title: 'Innovation Showcase & Award Ceremony',
//       description:
//         'Presentation of top student research and industry innovations, followed by the Excellence Awards.',
//       speaker: 'Conference Committee',
//     },
//     {
//       time: '15:30 - 16:00',
//       title: 'Farewell & Closing Speech',
//       description: 'Official closing of the conference with highlights and next-year plans.',
//       speaker: 'Conference Chair',
//     },
//   ],
// };


const scheduleData: ScheduleData = {
  day1: [
    {
      time: '08:00 - 09:00',
      title: 'Registration & Welcome Coffee',
      description: 'Check-in, collect your badge, and network with innovators, researchers, and AI enthusiasts over coffee.',
      speaker: null,
    },
    {
      time: '09:00 - 10:00',
      title: 'Opening Keynote: The Dawn of Artificial Intelligence in the Real World',
      description:
        'Exploring how AI and machine learning are redefining industries, from autonomous vehicles to predictive healthcare.',
      speaker: 'Dr. Meera Krishnan, Chief Scientist at NeuralNext Labs',
    },
    {
      time: '10:00 - 11:30',
      title: 'Panel: Machine Learning in Action — From Research to Real Deployment',
      description:
        'Industry leaders and researchers discuss the latest ML advancements in computer vision, NLP, and edge computing.',
      speaker: 'Moderated by Prof. Andrew Koh, Stanford AI Institute',
    },
    {
      time: '11:30 - 12:00',
      title: 'Coffee & Networking Break',
      description: 'Engage with top engineers and data scientists from global AI companies.',
      speaker: null,
    },
    {
      time: '12:00 - 13:30',
      title: 'Track 1: Deep Learning and Neural Network Innovations',
      description:
        'Dive deep into new architectures, training optimization, and large language model breakthroughs.',
      speaker: 'Dr. Sarah Williams, Lead Researcher at OpenVision AI',
    },
    {
      time: '13:30 - 14:30',
      title: 'Networking Lunch',
      description: 'Enjoy a delicious lunch and discuss research ideas with attendees and speakers.',
      speaker: null,
    },
    {
      time: '14:30 - 16:00',
      title: 'Track 2: Robotics & Human–AI Collaboration',
      description:
        'Learn how robotics, automation, and reinforcement learning are shaping the next industrial revolution.',
      speaker: 'Dr. Rajesh Iyer, Robotics Systems Engineer at Boston Dynamics',
    },
  ],

  day2: [
    {
      time: '08:30 - 09:00',
      title: 'Morning Coffee & Networking',
      description: 'Start the second day with fresh coffee and new collaborations.',
      speaker: null,
    },
    {
      time: '09:00 - 10:00',
      title: 'Keynote: The Role of Generative AI in Creative Industries',
      description:
        'Exploring how large language and image models like ChatGPT, Midjourney, and Sora are transforming creativity.',
      speaker: 'Dr. Michael Zhang, Head of AI Research at Synth Labs',
    },
    {
      time: '10:00 - 11:30',
      title: 'Panel: Building Responsible & Ethical AI Systems',
      description:
        'Discussion on bias, transparency, data privacy, and the ethical challenges of deploying AI globally.',
      speaker: 'Panelists from Google DeepMind, Meta AI, and Open Ethics Foundation',
    },
    {
      time: '11:30 - 12:00',
      title: 'Coffee & Networking Break',
      description: 'Discuss research papers and new collaborations during the break.',
      speaker: null,
    },
    {
      time: '12:00 - 13:30',
      title: 'Workshop: Hands-on Machine Learning with TensorFlow & PyTorch',
      description:
        'An interactive session on training and deploying ML models efficiently using open-source tools.',
      speaker: 'Dr. Priya Menon, ML Engineer at NVIDIA Research',
    },
    {
      time: '13:30 - 14:30',
      title: 'Networking Lunch',
      description: 'Share ideas and explore collaborations across AI and robotics industries.',
      speaker: null,
    },
    {
      time: '14:30 - 16:00',
      title: 'Track: AI in Healthcare & Autonomous Systems',
      description:
        'Discover how AI is revolutionizing medical diagnosis, drug discovery, and self-driving technologies.',
      speaker: 'Dr. Rohan Malik, Director of AI at MedRobotics Global',
    },
  ],

  day3: [
    {
      time: '09:00 - 09:30',
      title: 'Welcome & Recap of the Conference',
      description: 'A quick recap of major insights and announcements from Day 1 and 2.',
      speaker: 'Conference Host',
    },
    {
      time: '09:30 - 11:00',
      title: 'Panel: The Future of Robotics and Autonomous Intelligence',
      description:
        'A look at next-gen robotics, swarm intelligence, and the rise of AI-driven automation in industry.',
      speaker: 'Panelists from Tesla Robotics, iRobot, and MIT CSAIL',
    },
    {
      time: '11:00 - 11:30',
      title: 'Coffee & Networking Break',
      description: 'Relax and network before the final sessions.',
      speaker: null,
    },
    {
      time: '11:30 - 13:00',
      title: 'Workshop: Building Intelligent Agents using Reinforcement Learning',
      description:
        'Hands-on session to design and train smart agents capable of autonomous decision-making.',
      speaker: 'Dr. Ananya Roy, RL Researcher at DeepRL Systems',
    },
    {
      time: '13:00 - 14:00',
      title: 'Lunch & Networking',
      description: 'Final networking opportunity before the closing ceremony.',
      speaker: null,
    },
    {
      time: '14:00 - 15:30',
      title: 'AI Innovation Showcase & Startup Pitch',
      description:
        'AI startups present groundbreaking products in robotics, computer vision, and generative AI.',
      speaker: 'Judging Panel: Global AI Investors & Researchers',
    },
    {
      time: '15:30 - 16:00',
      title: 'Closing Ceremony & Future Roadmap',
      description:
        'Conference wrap-up with highlights, awards, and announcement of next year’s AI & Robotics Summit.',
      speaker: 'Conference Chairperson',
    },
  ],
};



const BiotechAgenda: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const themeColor = '#2e366c';

  const renderSchedule = (day: ScheduleItem[]) =>
    day.map((item, index) => (
      <div key={index} className="flex flex-col sm:flex-row border-t border-gray-200 py-6">
        <div className="w-full sm:w-1/4 pr-4 mb-2 sm:mb-0 sm:text-right">
          <p className="font-bold text-lg" style={{ color: themeColor }}>
            {item.time}
          </p>
        </div>
        <div className="w-full sm:w-3/4 pl-4 sm:border-l border-gray-200">
          <h3 className="text-base font-bold text-gray-800 sm:text-xl" style={{ fontFamily: "'Manrope', sans-serif" }}>{item.title}</h3>
          <p className="text-gray-600 mt-1 " style={{ fontFamily: "'Manrope', sans-serif" }}>{item.description}</p>
          {/* {item.speaker && (
            <div className="flex items-center mt-3 text-gray-500">
              <User size={16} className="mr-2 flex-shrink-0" />
              <span className="text-sm font-medium">{item.speaker}</span>
            </div>
          )} */}
        </div>
      </div>
    ));

  return (
    <div>
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1
            style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
            className="text-2xl md:text-4xl font-bold text-center mb-4"
          >
            CONFERENCE AGENDA
          </h1>

          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" style={{ fontSize: '1rem', font: "sans-serif" }}>
            Experience three days of inspiring keynotes, hands-on workshops, and cutting-edge innovations in AI, ML, and Robotics.
          </p>

          {/* Day Toggle Buttons */}
          <div className="flex justify-center mb-10 gap-2 sm:gap-4 p-1 bg-gray-100 max-w-sm mx-auto rounded-full">
            {[1, 2, 3].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`w-full px-5 py-3 text-sm sm:text-base font-bold rounded-full transition-all duration-300 ${
                  activeDay === day
                    ? 'text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
                style={{ backgroundColor: activeDay === day ? themeColor : '' }}
              >
                Day {day}
              </button>
            ))}
          </div>

          {/* Schedule Display */}
          <div className="transition-opacity duration-500 ease-in-out">
            {activeDay === 1
              ? renderSchedule(scheduleData.day1)
              : activeDay === 2
              ? renderSchedule(scheduleData.day2)
              : renderSchedule(scheduleData.day3)}
          </div>

          {/* Register Button */}
          <div className="flex justify-center mt-10">
            <a
              href="#"
              className="bg-[#2e366c] hover:bg-[#4967a0] text-white px-6 py-2 font-semibold text-sm transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BiotechAgenda;
