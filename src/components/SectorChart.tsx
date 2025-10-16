// // import React from "react";

// // const sectors = [
// //   { label: "Academics", percent: 38 },
// //   { label: "Technology", percent: 26 },
// //   { label: "Startups", percent: 9 },
// //   { label: "Government & Public sector", percent: 8 },
// //   { label: "Investors, Advisory & Consulting", percent: 5 },
// //   { label: "Enterprises/Corporates", percent: 4 },
// //   { label: "Others (Associations, Media, Independent Developers)", percent: 2 }
// // ];

// // const SectorChart = () => (
// //   <div className="max-w-4xl mx-auto rounded-xl overflow-hidden bg-white py-4 px-8" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
// //     <div className="font-semibold text-lg text-black mb-6 mt-2">By Sector</div>
// //     <div className="space-y-6">
// //       {sectors.map((item, idx) => (
// //         <div key={idx} className="flex items-center gap-4">
// //           <div className="flex-grow">
// //             <div className="text-[15px] font-medium text-black mb-1">{item.label}</div>
// //             <div className="w-full bg-[#f4f4f4] h-[16px] rounded overflow-hidden relative">
// //               <div
// //                 className="h-full"
// //                 style={{
// //                   width: `${item.percent}%`,
// //                   background: "linear-gradient(90deg, #6e40d8 0%, #34bbff 100%)"
// //                 }}
// //               ></div>
// //             </div>
// //           </div>
// //           <div className="w-14 text-right text-[18px] text-black font-medium">{item.percent}%</div>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // );

// // export default SectorChart;


// import React from "react";

// const SectorChart = () => (
//   <div className="max-w-4xl mx-auto rounded-xl overflow-hidden bg-white py-4 px-8" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
//     <div className="font-semibold text-lg text-black mb-6 mt-2">By Sector</div>
//     <div className="space-y-6">
      
//       {/* Sector: Academics */}
//       <div className="flex items-center gap-4">
//         <div className="flex-grow">
//           <div className="text-[15px] font-medium text-black mb-1">Academics</div>
//           <div className="w-full bg-[#f4f4f4] h-[16px] rounded overflow-hidden relative">
//             <div
//               className="h-full"
//               style={{
//                 width: `38%`,
//                 background: "linear-gradient(90deg, #6e40d8 0%, #34bbff 100%)"
//               }}
//             ></div>
//           </div>
//         </div>
//         <div className="w-14 text-right text-[18px] text-black font-medium">38%</div>
//       </div>

//       {/* Sector: Technology */}
//       <div className="flex items-center gap-4">
//         <div className="flex-grow">
//           <div className="text-[15px] font-medium text-black mb-1">Technology</div>
//           <div className="w-full bg-[#f4f4f4] h-[16px] rounded overflow-hidden relative">
//             <div
//               className="h-full"
//               style={{
//                 width: `26%`,
//                 background: "linear-gradient(90deg, #6e40d8 0%, #34bbff 100%)"
//               }}
//             ></div>
//           </div>
//         </div>
//         <div className="w-14 text-right text-[18px] text-black font-medium">26%</div>
//       </div>

//       {/* Sector: Startups */}
//       <div className="flex items-center gap-4">
//         <div className="flex-grow">
//           <div className="text-[15px] font-medium text-black mb-1">Startups</div>
//           <div className="w-full bg-[#f4f4f4] h-[16px] rounded overflow-hidden relative">
//             <div
//               className="h-full"
//               style={{
//                 width: `9%`,
//                 background: "linear-gradient(90deg, #6e40d8 0%, #34bbff 100%)"
//               }}
//             ></div>
//           </div>
//         </div>
//         <div className="w-14 text-right text-[18px] text-black font-medium">9%</div>
//       </div>

//       {/* Sector: Government & Public sector */}
//       <div className="flex items-center gap-4">
//         <div className="flex-grow">
//           <div className="text-[15px] font-medium text-black mb-1">Government & Public sector</div>
//           <div className="w-full bg-[#f4f4f4] h-[16px] rounded overflow-hidden relative">
//             <div
//               className="h-full"
//               style={{
//                 width: `8%`,
//                 background: "linear-gradient(90deg, #6e40d8 0%, #34bbff 100%)"
//               }}
//             ></div>
//           </div>
//         </div>
//         <div className="w-14 text-right text-[18px] text-black font-medium">8%</div>
//       </div>

//       {/* Sector: Investors, Advisory & Consulting */}
//       <div className="flex items-center gap-4">
//         <div className="flex-grow">
//           <div className="text-[15px] font-medium text-black mb-1">Investors, Advisory & Consulting</div>
//           <div className="w-full bg-[#f4f4f4] h-[16px] rounded overflow-hidden relative">
//             <div
//               className="h-full"
//               style={{
//                 width: `5%`,
//                 background: "linear-gradient(90deg, #6e40d8 0%, #34bbff 100%)"
//               }}
//             ></div>
//           </div>
//         </div>
//         <div className="w-14 text-right text-[18px] text-black font-medium">5%</div>
//       </div>

//       {/* Sector: Enterprises/Corporates */}
//       <div className="flex items-center gap-4">
//         <div className="flex-grow">
//           <div className="text-[15px] font-medium text-black mb-1">Enterprises/Corporateses</div>
//           <div className="w-full bg-[#f4f4f4] h-[16px] rounded overflow-hidden relative">
//             <div
//               className="h-full"
//               style={{
//                 width: `4%`,
//                 background: "linear-gradient(90deg, #6e40d8 0%, #34bbff 100%)"
//               }}
//             ></div>
//           </div>
//         </div>
//         <div className="w-14 text-right text-[18px] text-black font-medium">4%</div>
//       </div>

//       {/* Sector: Others */}
//       <div className="flex items-center gap-4">
//         <div className="flex-grow">
//           <div className="text-[15px] font-medium text-black mb-1">Others (Associations, Media, Independent Developers)</div>
//           <div className="w-full bg-[#f4f4f4] h-[16px] rounded overflow-hidden relative">
//             <div
//               className="h-full"
//               style={{
//                 width: `2%`,
//                 background: "linear-gradient(90deg, #6e40d8 0%, #34bbff 100%)"
//               }}
//             ></div>
//           </div>
//         </div>
//         <div className="w-14 text-right text-[18px] text-black font-medium">2%</div>
//       </div>

//     </div>
//   </div>
// );

// export default SectorChart;


import React from "react";

const SectorChart = () => {
  const data = [
    { label: "Academics", percent: 38 },
    { label: "Technology", percent: 26 },
    { label: "Startups", percent: 9 },
    { label: "Government & Public sector", percent: 8 },
    { label: "Investors, Advisory & Consulting", percent: 5 },
    { label: "Enterprises/Corporates", percent: 4 },
    { label: "Others (Associations, Media, Independent Developers)", percent: 2 },
  ];

  return (
    <div
      className="max-w-4xl mx-auto rounded-xl overflow-hidden bg-white py-4 px-8"
      style={{ fontFamily: "Inter, Arial, sans-serif" }}
    >
      <div className="font-semibold text-lg text-black mb-6 mt-2">By Sector</div>
      <div className="space-y-6">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="flex-grow">
              <div className="text-[15px] font-medium text-black mb-1">
                {item.label}
              </div>
              <div className="w-full bg-[#f4f4f4] h-[16px] rounded overflow-hidden relative">
                <div
                  className="h-full"
                  style={{
                    width: `${item.percent}%`,
                    background:
                      "linear-gradient(90deg, #6e40d8 0%, #34bbff 100%)",
                  }}
                ></div>
              </div>
            </div>
            <div className="w-14 text-right text-[18px] text-black font-medium">
              {item.percent}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorChart;
