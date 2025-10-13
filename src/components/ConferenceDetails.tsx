// // import React from 'react';
// // import { Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

// // const ConferenceDetails: React.FC = () => {
// //   const themeColor = '#00a99d'; // ✨ IMPORTANT: Change this to your website's main color

// //   const whoShouldAttend = [
// //     'Researchers and Scientists',
// //     'Academics and University Professors',
// //     'Biotech Industry Leaders and Executives',
// //     'Pharmaceutical Professionals',
// //     'Venture Capitalists and Investors',
// //     'Government Policy Makers',
// //   ];

// //   return (
// //     <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
// //         {/* Image Column */}
// //         <div className="w-full">
// //           <img
// //             src="https://images.unsplash.com/photo-1579154230794-3ae1e4c9b331?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
// //             alt="Scientists collaborating in a modern biotechnology lab"
// //             className="rounded-xl shadow-2xl object-cover w-full h-full"
// //           />
// //         </div>

// //         {/* Details Column */}
// //         <div>
// //           <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
// //             Global Biotechnology Summit 2026
// //           </h2>
// //           <p className="mt-4 text-xl text-gray-600">
// //             Innovate, Collaborate, and Transform the Future of Life Sciences.
// //           </p>

// //           {/* Key Info Boxes */}
// //           <div className="flex flex-col sm:flex-row gap-8 my-8">
// //             <div className="flex items-center">
// //               <Calendar size={40} className="flex-shrink-0" style={{ color: themeColor }} />
// //               <div className="ml-4">
// //                 <h3 className="text-lg font-bold text-gray-800">Date</h3>
// //                 <p className="text-gray-600">May 29-31, 2026</p>
// //               </div>
// //             </div>
// //             <div className="flex items-center">
// //               <MapPin size={40} className="flex-shrink-0" style={{ color: themeColor }} />
// //               <div className="ml-4">
// //                 <h3 className="text-lg font-bold text-gray-800">Location</h3>
// //                 <p className="text-gray-600">DoubleTree by Hilton, Tokyo</p>
// //               </div>
// //             </div>
// //           </div>

// //           <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
// //             About the Conference
// //           </h3>
// //           <p className="text-gray-600 leading-relaxed">
// //             The Global Biotechnology Summit is a premier event that brings together the brightest minds to share cutting-edge research, explore new technologies, and foster collaborations that will address the world's most pressing challenges in health, agriculture, and sustainability.
// //           </p>

// //           <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
// //             Who Should Attend
// //           </h3>
// //           <ul className="space-y-3">
// //             {whoShouldAttend.map((item, index) => (
// //               <li key={index} className="flex items-center">
// //                 <CheckCircle2 size={20} className="text-green-500 mr-3 flex-shrink-0" />
// //                 <span className="text-gray-700">{item}</span>
// //               </li>
// //             ))}
// //           </ul>
          
// //           {/* Call to Action Button */}
// //           <div className="mt-12">
// //             <button className="inline-flex items-center justify-center px-8 py-4 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4" style={{ backgroundColor: themeColor, '--tw-ring-color': themeColor} as React.CSSProperties}>
// //               Register Now
// //               <ArrowRight size={20} className="ml-2" />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ConferenceDetails;

// import React from 'react';
// import { Calendar, MapPin, Ticket, FileText, BookOpen } from 'lucide-react';

// // Define the structure for each detail item
// interface DetailItem {
//   label: string;
//   value: string;
//   Icon: React.ElementType; // Allows passing icon components
// }

// const conferenceInfo: DetailItem[] = [
//   {
//     label: 'Conference Date',
//     value: 'May 29-31, 2026',
//     Icon: Calendar,
//   },
//   {
//     label: 'Venue',
//     value: 'DoubleTree by Hilton Tokyo Ariake',
//     Icon: MapPin,
//   },
//   {
//     label: 'Earlybird Registration',
//     value: 'July 28, 2025',
//     Icon: Ticket,
//   },
//   {
//     label: 'Submission Deadline',
//     value: 'September 15, 2025',
//     Icon: FileText,
//   },
//   {
//     label: 'Workshops',
//     value: '10 Workshops',
//     Icon: BookOpen,
//   },
// ];

// const ConferenceDetails: React.FC = () => {
//   return (
//     <section className="bg-gray-50 p-8">
//       <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
//           Conference Details
//         </h2>
        
//         <div className="space-y-4">
//           {conferenceInfo.map((item, index) => {
//             const isDeadlineToday = item.label === 'Submission Deadline';

//             return (
//               <div
//                 key={index}
//                 className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-gray-200"
//               >
//                 {/* Label with Icon */}
//                 <div className="flex items-center text-gray-600 mb-2 sm:mb-0">
//                   <item.Icon className="w-5 h-5 mr-3 text-indigo-500" />
//                   <span className="font-medium">{item.label}</span>
//                 </div>
                
//                 {/* Value with Highlight */}
//                 <div className="flex items-center">
//                   <span className="font-semibold text-gray-900 text-right">
//                     {item.value}
//                   </span>
//                   {isDeadlineToday && (
//                     <span className="ml-3 flex items-center text-sm font-semibold text-red-600 bg-red-100 px-2 py-1 rounded-full">
//                       <span className="relative flex h-3 w-3 mr-2">
//                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
//                         <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
//                       </span>
//                       Today is the deadline!
//                     </span>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConferenceDetails;



import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Ticket, FileText, BookOpen } from 'lucide-react';

// Define the structure for each detail item
interface DetailItem {
  label: string;
  value: string;
  date: string; // ISO format date (YYYY-MM-DD) for calculations
  Icon: React.ElementType;
}

const conferenceInfo: DetailItem[] = [
  {
    label: 'Earlybird Registration Ends',
    value: 'July 28, 2025',
    date: '2025-07-28',
    Icon: Ticket,
  },
  {
    label: 'Submission Deadline',
    value: 'September 15, 2025',
    date: '2025-09-15',
    Icon: FileText,
  },
  {
    label: 'Conference Begins',
    value: 'May 29, 2026',
    date: '2026-05-29',
    Icon: Calendar,
  },
];

// Helper to find the next upcoming event for the countdown
const getNextEvent = () => {
  const now = new Date();
  return conferenceInfo.find(event => new Date(event.date) > now) || conferenceInfo[conferenceInfo.length - 1];
};

const ConferenceDetails: React.FC = () => {
  const [nextEvent, setNextEvent] = useState(getNextEvent());
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const eventDate = new Date(nextEvent.date).getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        // Optional: find the next event if the current one has passed
        const next = getNextEvent();
        if (next.date !== nextEvent.date) {
            setNextEvent(next);
        }
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [nextEvent]);

  const getStatus = (date: string) => {
    const today = new Date();
    const eventDate = new Date(date);
    today.setHours(0, 0, 0, 0); // Normalize today's date
    eventDate.setHours(0, 0, 0, 0); // Normalize event date

    if (eventDate < today) return { text: 'Concluded', width: '100%', color: 'bg-gray-400' };
    if (eventDate.getTime() === today.getTime()) return { text: 'Today!', width: '50%', color: 'bg-red-500 animate-pulse' };
    
    // For future events, calculate progress from a fixed start date (e.g., today)
    const startDate = new Date('2025-09-15'); // Today's date
    const totalDuration = eventDate.getTime() - startDate.getTime();
    const elapsed = today.getTime() - startDate.getTime();
    const progress = Math.min(100, (elapsed / totalDuration) * 100);

    return { text: 'Upcoming', width: `${progress}%`, color: 'bg-indigo-500' };
  };

  return (
    <section className="bg-gray-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        
        {/* Countdown Timer Section */}
        <div className="text-center border-b pb-6 mb-6">
          <h3 className="text-lg font-medium text-indigo-600">Countdown to {nextEvent.label}</h3>
          <div className="flex justify-center gap-4 sm:gap-8 mt-4 text-gray-800">
            <div className="p-4 rounded-lg bg-gray-100 w-24">
              <div className="text-4xl sm:text-5xl font-bold">{timeLeft.days}</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider">Days</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-100 w-24">
              <div className="text-4xl sm:text-5xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider">Hours</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-100 w-24">
              <div className="text-4xl sm:text-5xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider">Minutes</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-100 w-24">
              <div className="text-4xl sm:text-5xl font-bold">{timeLeft.seconds}</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider">Seconds</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Key Dates & Progress */}
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-gray-900">Key Dates</h3>
            {conferenceInfo.map((item, index) => {
              const status = getStatus(item.date);
              return (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center text-gray-600">
                      <item.Icon className="w-5 h-5 mr-3 text-indigo-500" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <span className={`text-sm font-semibold ${status.text === 'Today!' ? 'text-red-500' : 'text-gray-500'}`}>
                      {status.text}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`${status.color} h-2.5 rounded-full`} style={{ width: status.width }}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Other Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Venue & Info</h3>
             <div className="flex items-center p-4 bg-gray-100 rounded-lg">
                <MapPin className="w-8 h-8 mr-4 text-indigo-500 flex-shrink-0" />
                <div>
                    <p className="font-medium text-gray-600">Venue</p>
                    <p className="font-bold text-lg text-gray-900">DoubleTree by Hilton Tokyo Ariake</p>
                </div>
            </div>
             <div className="flex items-center p-4 bg-gray-100 rounded-lg">
                <BookOpen className="w-8 h-8 mr-4 text-indigo-500 flex-shrink-0" />
                <div>
                    <p className="font-medium text-gray-600">Workshops</p>
                    <p className="font-bold text-lg text-gray-900">10 Hands-On Sessions</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceDetails;