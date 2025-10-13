// // // import React from "react";

// // // const RegionChart: React.FC = () => {
// // //   return (
// // //     <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden flex">
// // //       {/* Middle East */}
// // //       <div className="flex-1 bg-[#24005B] text-white flex flex-col justify-center items-center py-16">
// // //         <h2 className="text-4xl font-bold">30%</h2>
// // //         <p className="text-lg">Middle East</p>
// // //       </div>

// // //       {/* Asia */}
// // //       <div className="flex-1 bg-[#A17CF3] text-white flex flex-col justify-center items-center py-16">
// // //         <h2 className="text-4xl font-bold">28%</h2>
// // //         <p className="text-lg">Asia</p>
// // //       </div>

// // //       {/* Europe + USA + Canada (stacked block style) */}
// // //       <div className="flex-1 relative bg-[#5B2BE1] bg-[repeating-linear-gradient(135deg,#5B2BE1,#5B2BE1_10px,#602BE3_10px,#602BE3_20px)] text-white flex flex-col justify-center items-center py-16">
// // //         <h2 className="text-4xl font-bold">22%</h2>
// // //         <p className="text-lg">Europe</p>

// // //         {/* USA block */}
// // //         <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-[#3A0E9E] flex flex-col justify-center items-center">
// // //           <h2 className="text-2xl font-bold">17%</h2>
// // //           <p className="text-sm">USA</p>

// // //           {/* Canada block */}
// // //           <div className="absolute bottom-0 right-0 w-[45%] h-[45%] bg-[#A17CF3] flex flex-col justify-center items-center">
// // //             <h2 className="text-md font-bold">3%</h2>
// // //             <p className="text-xs">Canada</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default RegionChart;




// // import React from "react";

// // const RegionChart: React.FC = () => {
// //   return (
// //     <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden flex">
// //       {/* Middle East */}
// //       <div className="flex-1 bg-[#24005B] text-white flex flex-col justify-center items-center min-h-[400px]">
// //         <h2 className="text-4xl font-bold">30%</h2>
// //         <p className="text-lg">Middle East</p>
// //       </div>

// //       {/* Asia */}
// //       <div className="flex-1 bg-[#A17CF3] text-white flex flex-col justify-center items-center min-h-[400px]">
// //         <h2 className="text-4xl font-bold">28%</h2>
// //         <p className="text-lg">Asia</p>
// //       </div>

// //       {/* Europe + USA + Canada (stacked block style) */}
// //       <div className="flex-1 relative bg-[#5B2BE1] bg-[repeating-linear-gradient(135deg,#5B2BE1,#5B2BE1_10px,#602BE3_10px,#602BE3_20px)] text-white flex flex-col justify-center items-center min-h-[400px]">
// //         <h2 className="text-4xl font-bold">22%</h2>
// //         <p className="text-lg">Europe</p>

// //         {/* USA block */}
// //         <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-[#3A0E9E] flex flex-col justify-center items-center">
// //           <h2 className="text-2xl font-bold">17%</h2>
// //           <p className="text-sm">USA</p>

// //           {/* Canada block */}
// //           <div className="absolute bottom-0 right-0 w-[45%] h-[45%] bg-[#A17CF3] flex flex-col justify-center items-center">
// //             <h2 className="text-md font-bold">3%</h2>
// //             <p className="text-xs">Canada</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegionChart;



// import React from "react";

// const RegionChart: React.FC = () => {
//   return (
//     <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden flex">
//       {/* Middle East */}
//       <div className="flex-1 bg-[#FF7800] text-white flex flex-col justify-center items-center min-h-[400px]">
//         <h2 className="text-4xl font-bold">30%</h2>
//         <p className="text-lg">Middle East</p>
//       </div>

//       {/* Asia */}
//       <div className="flex-1 bg-[#FFA54F] text-white flex flex-col justify-center items-center min-h-[400px]">
//         <h2 className="text-4xl font-bold">28%</h2>
//         <p className="text-lg">Asia</p>
//       </div>

//       {/* Europe + USA + Canada (stacked block style) */}
//       <div className="flex-1 relative bg-[#FF9D2E] bg-[repeating-linear-gradient(135deg,#FF9D2E,#FF9D2E_10px,#FFBF83_10px,#FFBF83_20px)] text-white flex flex-col justify-center items-center min-h-[400px]">
//         <h2 className="text-4xl font-bold">22%</h2>
//         <p className="text-lg">Europe</p>

//         {/* USA block */}
//         <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-[#FFBE65] flex flex-col justify-center items-center">
//           <h2 className="text-2xl font-bold">17%</h2>
//           <p className="text-sm">USA</p>

//           {/* Canada block */}
//           <div className="absolute bottom-0 right-0 w-[45%] h-[45%] bg-[#FFA54F] flex flex-col justify-center items-center">
//             <h2 className="text-md font-bold">3%</h2>
//             <p className="text-xs">Canada</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegionChart;


import React from "react";

const RegionChart: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden flex">
      {/* Middle East */}
      <div className="w-1/4 bg-[#FF7800] text-white flex flex-col min-h-[400px]">
        <h2 className="text-4xl font-bold">30%</h2>
        <p className="text-lg">Middle East</p>
      </div>

      {/* Asia */}
      <div className="w-1/4 bg-[#FFA54F] text-white flex flex-col min-h-[400px]">
        <h2 className="text-4xl font-bold">28%</h2>
        <p className="text-lg">Asia</p>
      </div>

      {/* Europe + USA + Canada */}
      <div className="w-1/2 relative bg-[#FF9D2E] bg-[repeating-linear-gradient(135deg,#FF9D2E,#FF9D2E_10px,#FFBF83_10px,#FFBF83_20px)] text-white flex flex-col min-h-[400px]">
        <h2 className="text-4xl font-bold">22%</h2>
        <p className="text-lg">Europe</p>

        {/* USA block */}
        <div className="absolute bottom-0 right-0 w-[70%] h-[70%] bg-[#FFBE65] flex flex-col ">
          <h2 className="text-2xl font-bold">17%</h2>
          <p className="text-sm">USA</p>

          {/* Canada block */}
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[#FFA54F] flex flex-col ">
            <h2 className="text-md font-bold">3%</h2>
            <p className="text-xs">Canada</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionChart;
