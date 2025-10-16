// import React from 'react';

// const TestimonialCard = ({ imageUrl, quote, name, title, companyLogoUrl }) => {
//   return (
//     <div className="flex w-[90vw] max-w-[90vw] rounded-xl overflow-hidden bg-gradient-to-r from-teal-800 to-teal-400 shadow-lg p-6 md:p-10">
//       {/* Image section */}
//       <div className="flex-shrink-0">
//         <img
//           src={imageUrl}
//           alt={name}
//           className="w-300 h-300 object-cover object-top bg-white"
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = "https://placehold.co/300x300?text=Photo";
//           }}
//         />
//       </div>

//       {/* Content */}
//       <div className="bg-white flex-1 p-6 relative border-t border-t-[#0b97a1] border-t-[15px]">
//         {/* Quote mark */}
//         <div className="absolute -top-6 left-6 bg-teal-500 text-white text-4xl font-bold rounded-full w-10 h-10 flex items-center justify-center">
//           “
//         </div>

//         <p className="text-gray-800 text-lg leading-relaxed">{quote}</p>

//         <div className="flex flex-row items-center gap-x-8">

//         {/* Name/Title */}
//         <div className="mt-6">
//           <div className="text-indigo-800 font-extrabold text-lg">{name}</div>
//           <div className="text-gray-600 text-sm">{title}</div>
//         </div>

//         {/* Logo */}
//         {companyLogoUrl && (
//           <div className="mt-4">
//             <img
//               src={companyLogoUrl}
//               alt="Company Logo"
//               className="h-12"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "https://placehold.co/120x48?text=Logo";
//               }}
//             />
//           </div>
//         )}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;



import React from 'react';

const TestimonialCard = ({ imageUrl, quote, name, title, companyLogoUrl }) => {
  return (
    <div style={{ backgroundImage: "linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)" }} className="flex flex-col md:flex-row w-full max-w-[90vw] overflow-hidden shadow-lg p-4 md:p-6">
      {/* Image section */}
      <div className="flex-shrink-0 ">
        <img
          src={imageUrl}
          alt={name}
          className="w-[300px] h-[300px] md:w-[300px] md:h-[300px] object-cover object-top bg-white"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/300x300?text=Photo";
          }}
        />
      </div>

      {/* Content */}
      <div className="bg-white flex-1 p-4 md:p-6 relative border-t-8 border-[#313d73] md:mt-0">
        {/* Quote mark */}
        {/* <div className="absolute -top-4 left-4 md:-top-6 md:left-6 bg-teal-500 text-white text-3xl md:text-4xl font-bold rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
          “
        </div> */}

        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-sans-serif">{quote}</p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-x-8 mt-6">
          {/* Name/Title */}
          <div>
            <div style={{ color: '#394b82' }} className="font-extrabold text-base md:text-lg">{name}</div>
            <div className="text-gray-600 text-sm">{title}</div>
          </div>

          {/* Logo */}
          {companyLogoUrl && (
            <div>
              <img
                src={companyLogoUrl}
                alt="Company Logo"
                className="h-10 md:h-12"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/120x48?text=Logo";
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
