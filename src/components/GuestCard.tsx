// // // // GuestCard.jsx or GuestCard.tsx
// // // import React from 'react';

// // // const GuestCard = ({ imageUrl, name, title, company }) => {
// // //   return (
// // //     <div className="group bg-white rounded-lg shadow-xl overflow-hidden w-[250px] max-w-full transform transition-transform duration-300 hover:scale-105 font-inter">
      
// // //       {/* Image Section */}
// // //       <div className="relative w-full h-48 sm:h-56 bg-gray-200 overflow-hidden">
// // //         <img
// // //           src={imageUrl}
// // //           alt={`Profile of ${name}`}
// // //           className="w-full h-full object-contain object-fill"
// // //           onError={(e) => {
// // //             e.currentTarget.onerror = null;
// // //             e.currentTarget.src = "https://placehold.co/400x300/CCCCCC/000000?text=Image+Not+Found";
// // //           }}
// // //         />
// // //         <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transform scale-y-0 group-hover:scale-y-100 transition-all duration-300 ease-in-out origin-top" />
// // //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-white rounded-full p-2 flex items-center justify-center shadow-lg z-10">
// // //           <svg
// // //             xmlns="http://www.w3.org/2000/svg"
// // //             className="h-6 w-6 text-gray-800"
// // //             fill="none"
// // //             viewBox="0 0 24 24"
// // //             stroke="currentColor"
// // //             strokeWidth="2"
// // //           >
// // //             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
// // //           </svg>
// // //         </div>
// // //       </div>

// // //       {/* Name Section */}
// // //       <div className="bg-teal-700 text-white p-4 text-center rounded-b-lg -mt-2 group-hover:bg-teal-800 transition-colors duration-300 ease-in-out">
// // //         <h2 className="text-2xl font-semibold">{name}</h2>
// // //       </div>

// // //       {/* Details Section */}
// // //       <div className="p-6 text-center bg-white group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300 ease-in-out">
// // //         <p className="text-gray-700 group-hover:text-white text-lg font-medium mb-2 leading-relaxed">{title}</p>
// // //         <p className="text-gray-600 group-hover:text-white text-base font-normal leading-relaxed">{company}</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default GuestCard;












// // import React from 'react';

// // const GuestCard = ({ imageUrl, name, title, company }) => {
// //   return (
// //     <div className="group w-[250px] bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 font-inter">
      
// //       {/* Image Section */}
// //       <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
// //         <img
// //           src={imageUrl}
// //           alt={`Profile of ${name}`}
// //           className="w-full h-full object-cover object-center"
// //           onError={(e) => {
// //             e.currentTarget.onerror = null;
// //             e.currentTarget.src = "https://placehold.co/400x300/CCCCCC/000000?text=Image+Not+Found";
// //           }}
// //         />
// //         <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transform scale-y-0 group-hover:scale-y-100 transition-all duration-300 ease-in-out origin-top" />
// //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-white rounded-full p-2 flex items-center justify-center shadow-lg z-10">
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-6 w-6 text-gray-800"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //             strokeWidth="2"
// //           >
// //             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
// //           </svg>
// //         </div>
// //       </div>

// //       {/* Name Section */}
// //       <div className="bg-teal-700 text-white p-4 text-center group-hover:bg-teal-800 transition-colors duration-300 ease-in-out">
// //         <h2 className="text-xl font-semibold truncate">{name}</h2>
// //       </div>

// //       {/* Details Section */}
// //       <div className="h-40 p-4 text-center bg-white group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300 ease-in-out">
// //         <p className="text-gray-700 group-hover:text-white text-sm font-medium mb-2 leading-snug font-roboto">{title}</p>
// //         <p className="text-gray-600 group-hover:text-white font-bold text-sm leading-snug font-roboto" style={{ fontWeight: 800 }}>{company}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default GuestCard;








// import React from 'react';

// const GuestCard = ({ imageUrl, name, title, company }) => {
//   return (
//     <div className="group w-[300px] bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 font-inter">
      
//       {/* Image Section */}
//       <div className="relative w-full h-64 bg-white-200 overflow-hidden"> 
//         <img
//           src={imageUrl}
//           alt={`Profile of ${name}`}
//           className="w-full h-full object-cover object-center"
//           onError={(e) => {
//             e.currentTarget.onerror = null;
//             e.currentTarget.src = "https://placehold.co/400x300/CCCCCC/000000?text=Image+Not+Found";
//           }}
//         />
//         {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transform scale-y-0 group-hover:scale-y-100 transition-all duration-300 ease-in-out origin-top" /> */}
//         <div className="absolute inset-0 bg-[#f4aa3d] opacity-0 group-hover:opacity-60 transform scale-y-0 group-hover:scale-y-100 transition-all duration-300 ease-in-out origin-top" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-white rounded-full p-2 flex items-center justify-center shadow-lg z-10">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-gray-800"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//           </svg>
//         </div>
//       </div>

//       {/* Name Section */}
//       <div className="bg-[#f4aa3d] text-white p-4 text-center group-hover:bg-[#f4aa3d] transition-colors duration-300 ease-in-out">
//         <h2 className="text-xl font-semibold truncate">{name}</h2>
//       </div>

//       {/* Details Section */}
//       <div className="h-44 p-5 text-center bg-white group-hover:bg-[#f4aa3d] group-hover:text-white transition-colors duration-300 ease-in-out">
//         <p className="text-gray-700 group-hover:text-white text-base font-medium mb-2 leading-snug font-roboto">{title}</p>
//         <p className="text-gray-600 group-hover:text-white font-bold text-base leading-snug font-roboto" style={{ fontWeight: 800 }}>{company}</p>
//       </div>
//     </div>
//   );
// };

// export default GuestCard;



import React from "react";

const GuestCard = ({ imageUrl, name, title, company }) => (


    <div className="flex-shrink-0 w-[280px] h-[500px] bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mx-4 first:ml-0 last:mr-0 snap-center">
    <div className="flex flex-col items-center text-center p-0">
      
      {/* Image Wrapper with fixed size */}
      <div className="w-full h-[280px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={`Portrait of ${name}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/276x276/EFEFEF/AAAAAA?text=Image";
          }}
        />
      </div>

      {/* Text Section */}
      <h3 className="text-xl font-bold text-gray-800 mt-4" style={{ fontFamily: 'Manrope, sans-serif' }}>{name}</h3>
      <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: 'Manrope, sans-serif' }}>{title}</p>
      {/* <p className="text-base font-semibold text-gray-700 mt-2">{company}</p> */}
      <div className="mt-2" /> {/* Extra spacing for visual balance */}
    </div>
  </div>
);

export default GuestCard;
