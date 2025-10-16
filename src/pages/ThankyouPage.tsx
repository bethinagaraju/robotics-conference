// import React from "react";
// import { CheckCircle } from "lucide-react";
// import { Link } from "react-router-dom";

// const ThankyouPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center text-center px-6">
//       {/* Success Icon */}
//       <CheckCircle className="text-green-500 w-20 h-20 mb-6" />

//       {/* Title */}
//       <h1 className="text-3xl md:text-4xl font-bold text-[#002d45] mb-3">
//         Payment Successful!
//       </h1>

//       {/* Subtitle */}
//       <p className="text-lg text-gray-700 mb-6">
//         🎉 Congratulations! You’ve successfully registered for the <br />
//         <span className="font-semibold text-[#2e376d]">
//           AI, ML & Robotics Conference — Artificial Intelligence, Machine Learning and Robotics Conference
//         </span>
//       </p>

//       {/* Call to Action */}
//       <div className="flex flex-col sm:flex-row gap-4 mt-6">
//         <Link
//           to="/"
//           className="bg-[#2e376d] text-white px-6 py-3 rounded-lg shadow hover:bg-[#3f558d] transition-all duration-300"
//         >
//           Back to Home
//         </Link>
//         <a
//           href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=AI+ML+%26+Robotics+Conference+2026&dates=20260728T090000Z/20260730T170000Z&details=International+Conference+on+AI,+ML+and+Robotics+in+Rome,+Italy&location=Crowne+Plaza+-+St.+Peter's+Rome,+Italy"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="border border-[#2e376d] text-[#2e376d] px-6 py-3 rounded-lg hover:bg-[#2e376d] hover:text-white transition-all duration-300"
//         >
//           Add to Calendar
//         </a>
//       </div>

//       {/* Footer Text */}
//       <footer className="mt-10 text-sm text-gray-600">
//         © 2026 All rights reserved. AI, ML & Robotics Conference <br />
//         Artificial Intelligence, Machine Learning and Robotics Conference
//       </footer>
//     </div>
//   );
// };

// export default ThankyouPage;



import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankyouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center text-center px-6">
      {/* Success Icon */}
      <CheckCircle className="text-green-500 w-20 h-20 mb-6" />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#002d45] mb-3">
        Payment Successful!
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-700 mb-4">
        🎉 Congratulations! You’ve successfully registered for the <br />
        <span className="font-semibold text-[#2e376d]">
          AI, ML & Robotics Conference — Artificial Intelligence, Machine Learning and Robotics Conference
        </span>
      </p>

      {/* Event Details */}
      <div className="bg-white shadow-md rounded-lg p-5 mt-3 mb-6 border border-gray-200 max-w-md">
        <p className="text-[#2e376d] font-semibold text-lg">
          📅 July 28–30, 2026
        </p>
        <p className="text-gray-700 mt-1">
          📍 Crowne Plaza - St. Peter’s Rome, Italy
        </p>
        <p className="text-gray-600 text-sm mt-2">
          (Conference Dates: 28th, 29th & 30th July 2026)
        </p>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link
          to="/"
          className="bg-[#2e376d] text-white px-6 py-3 rounded-lg shadow hover:bg-[#3f558d] transition-all duration-300"
        >
          Back to Home
        </Link>
        <a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=AI+ML+%26+Robotics+Conference+2026&dates=20260728T090000Z/20260730T170000Z&details=International+Conference+on+AI,+ML+and+Robotics+in+Rome,+Italy&location=Crowne+Plaza+-+St.+Peter's+Rome,+Italy"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#2e376d] text-[#2e376d] px-6 py-3 rounded-lg hover:bg-[#2e376d] hover:text-white transition-all duration-300"
        >
          Add to Calendar
        </a>
      </div>

      {/* Footer Text */}
      <footer className="mt-10 text-sm text-gray-600 leading-relaxed">
        © 2026 All rights reserved. AI, ML & Robotics Conference <br />
        Artificial Intelligence, Machine Learning and Robotics Conference
      </footer>
    </div>
  );
};

export default ThankyouPage;
