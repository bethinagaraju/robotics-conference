
// // import React from 'react';

// // function HighletTwo() {
// //   return (
// //     <div className="flex gap-4" style={{ height: '80vh' }}>
// //     <div className="flex-shrink-0 rounded-xl shadow-md bg-white" style={{ width: '65vw' }}>
// //       <div className="mb-4">
// //         <img
// //           src="20250527-crl_1145.jpg"
// //           alt="Main highlight"
// //           className="w-full h-auto object-cover rounded-md"
// //         />
// //       </div>

// //       <div className="flex gap-4">
// //         <img
// //           src="20250527-crl_1153.jpg"
// //           alt="Highlight 1"
// //           className="w-1/2 h-auto object-cover rounded-md"
// //         />
// //         <img
// //           src="20250527-crl_1231.jpg"
// //           alt="Highlight 2"
// //           className="w-1/2 h-auto object-cover rounded-md"
// //         />
// //       </div>
// //     </div>

// //     <div className="flex flex-col gap-4 max-w-full" style={{ width: '35vw' }}>
// //         <img src="20250527-lim_2710.jpg" alt="Highlight 3" className="w-full h-[35vh] object-cover rounded-md" />
// //         <img src="20250527-lim_2888.jpg" alt="Highlight 4" className="w-full h-[41vh] object-cover rounded-md" />
// //     </div>

// //     </div>
// //   );
// // }

// // export default HighletTwo;







// import React from 'react';

// function HighletTwo() {
//   return (
//     <div
//       className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[80vh] px-2 py-4"
//     >
//       {/* Left Side: Main highlight & 2 small images */}
//       <div
//         className="flex-shrink-0 rounded-xl shadow-md bg-white w-full lg:w-[65vw] flex flex-col"
//       >
//         {/* Main Highlight Image */}
//         <div className="mb-4">
//           <img
//             src="20250527-crl_1145.jpg"
//             alt="Main highlight"
//             className="w-full aspect-[16/9] object-cover rounded-md max-h-[320px] md:max-h-[400px] lg:max-h-none"
//           />
//         </div>

//         {/* Two images under the main highlight */}
//         <div className="flex flex-col sm:flex-row gap-4">
//           <img
//             src="20250527-crl_1153.jpg"
//             alt="Highlight 1"
//             className="w-full sm:w-1/2 aspect-[16/8] object-cover rounded-md"
//           />
//           <img
//             src="20250527-crl_1231.jpg"
//             alt="Highlight 2"
//             className="w-full sm:w-1/2 aspect-[16/8] object-cover rounded-md"
//           />
//         </div>
//       </div>

//       {/* Right Side: Two vertical images */}
//       <div className="flex flex-col gap-4 w-full lg:w-[35vw] max-w-full">
//         <img
//           src="20250527-lim_2710.jpg"
//           alt="Highlight 3"
//           className="w-full aspect-[5/3] object-cover rounded-md max-h-[160px] md:max-h-[300px] lg:max-h-[35vh]"
//         />
//         <img
//           src="20250527-lim_2888.jpg"
//           alt="Highlight 4"
//           className="w-full aspect-[5/4] object-cover rounded-md max-h-[180px] md:max-h-[340px] lg:max-h-[41vh]"
//         />
//       </div>
//     </div>
//   );
// }

// export default HighletTwo;












import React from 'react';

function HighletTwo() {
  return (
    <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[80vh] p-4">
      {/* Left section */}
      <div className="w-full md:w-[55vw] flex flex-col gap-4 bg-white shadow-md overflow-hidden">
        <div className="w-full h-auto md:h-[50%]">
          <img
            src="GYaB3_SaMAYEJiH.jpeg"
            alt="Main highlight"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[50%]">
          <div className="w-full md:w-1/2 h-auto">
            <img
              src="Gemini_Generated_Image_4od9wb4od9wb4od9.png"
              alt="Highlight 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 h-auto">
            <img
              src="GAfY0ujWEAAeU1I(1).jpeg"
              alt="Highlight 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="w-full md:w-[28vw] flex flex-col gap-4">
        <div className="h-auto md:h-[35vh]">
          <img
            src="Gemini_Generated_Image_fyp50nfyp50nfyp5(2).png"
            alt="Highlight 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-auto md:h-[38vh]">
          <img
            src="Gemini_Generated_Image_flg9xrflg9xrflg9.png"
            alt="Highlight 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HighletTwo;

