// // // // import React from 'react';
// // // // import RegionChart from './RegionChart';
// // // // import JobLevelChart from './JobLevelChart';
// // // // import CompanySizeChart from './CompanySizeChart';
// // // // import SectorChart from './SectorChart';

// // // // function RegionChartComponent() {
// // // //   return (
// // // //     <div>
// // // //       <RegionChart />
// // // //       <JobLevelChart />
// // // //       <CompanySizeChart />
// // // //       <SectorChart />
// // // //     </div>
// // // //   );
// // // // }

// // // // export default RegionChartComponent;












// // // import React from 'react';
// // // import RegionChart from './RegionChart';
// // // import JobLevelChart from './JobLevelChart';
// // // import CompanySizeChart from './CompanySizeChart';
// // // import SectorChart from './SectorChart';

// // // function RegionChartComponent() {
// // //   return (
// // //     <div className="max-w-7xl mx-auto p-6">
// // //       {/* Top Row: Region (left), Job Level (right) */}
// // //       <div className="flex gap-6 mb-6">
// // //         <div className="flex-[2]">
// // //           <RegionChart />
// // //         </div>
// // //         <div className="flex-1">
// // //           <JobLevelChart />
// // //         </div>
// // //       </div>
// // //       {/* Bottom Row: Company Size (left), Sector (right) */}
// // //       <div className="flex gap-6">
// // //         <div className="flex-1">
// // //           <CompanySizeChart />
// // //         </div>
// // //         <div className="flex-[2]">
// // //           <SectorChart />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default RegionChartComponent;








// // import React from "react";

// // const RegionChart = () => (
// //   <div className="w-full rounded-xl overflow-hidden flex min-h-[400px]">
// //     {/* Middle East */}
// //     <div className="w-1/4 bg-[#FF7800] text-white flex flex-col justify-center items-center">
// //       <h2 className="text-4xl font-bold">30%</h2>
// //       <p className="text-lg">Middle East</p>
// //     </div>
// //     {/* Asia */}
// //     <div className="w-1/4 bg-[#FFA54F] text-white flex flex-col justify-center items-center">
// //       <h2 className="text-4xl font-bold">28%</h2>
// //       <p className="text-lg">Asia</p>
// //     </div>
// //     {/* Europe + USA + Canada */}
// //     <div className="w-1/2 relative bg-[#FF9D2E] bg-[repeating-linear-gradient(135deg,#FF9D2E,#FF9D2E_10px,#FFBF83_10px,#FFBF83_20px)] text-white flex flex-col justify-center items-center">
// //       <h2 className="text-4xl font-bold">22%</h2>
// //       <p className="text-lg">Europe</p>
// //       {/* USA block */}
// //       <div className="absolute bottom-0 right-0 w-[70%] h-[70%] bg-[#FFBE65] flex flex-col justify-center items-center">
// //         <h2 className="text-2xl font-bold">17%</h2>
// //         <p className="text-sm">USA</p>
// //         {/* Canada block */}
// //         <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[#FFA54F] flex flex-col justify-center items-center">
// //           <h2 className="text-md font-bold">3%</h2>
// //           <p className="text-xs">Canada</p>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // );

// // const JobLevelChart = () => (
// //   <div className="max-w-md w-full rounded-xl overflow-hidden shadow bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
// //     <div className="bg-[#59c1ac] px-6 pt-6 pb-3">
// //       <div className="font-semibold text-lg mb-2 text-black">By Job Level</div>
// //       <div className="flex items-end gap-3">
// //         <span className="text-[56px] font-semibold leading-tight text-black">72%</span>
// //         <div className="flex flex-col pb-2">
// //           <div className="text-base text-black">C-Level / Director / VP / Founder</div>
// //         </div>
// //       </div>
// //     </div>
// //     <div className="bg-[#71D6C3] px-6 py-5 border-t border-[#f4f4f4]">
// //       <div className="font-semibold text-xl text-black">10.0%</div>
// //       <div className="text-black text-base">Heads / Manager</div>
// //     </div>
// //     <div className="bg-[#b1ece0] px-6 py-5 border-t border-[#f4f4f4]">
// //       <div className="font-semibold text-xl text-black">10.0%</div>
// //       <div className="text-black text-base">Senior Data Scientists & Engineers</div>
// //     </div>
// //     <div className="bg-[#e2f7f2] px-6 py-5 border-t border-[#f4f4f4]">
// //       <div className="font-semibold text-xl text-black">4.0%</div>
// //       <div className="text-black text-base">Professor / PhD /Doctor / Academic</div>
// //     </div>
// //     <div className="bg-[#fafefd] px-6 py-5 border-t border-[#f4f4f4]">
// //       <div className="font-semibold text-xl text-black">4.0%</div>
// //       <div className="text-black text-base">Developers</div>
// //     </div>
// //   </div>
// // );

// // const CompanySizeChart = () => (
// //   <div className="max-w-md w-full flex rounded-xl overflow-hidden bg-white shadow" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
// //     {/* Left side (Up to 1000) */}
// //     <div className="w-1/2 flex flex-col justify-between bg-[#f4f4f4] p-6 min-h-[240px]">
// //       <div className="font-semibold text-lg text-black mb-2">By Company Size</div>
// //       <div className="mt-auto">
// //         <div className="text-[48px] font-semibold text-black leading-none mb-2">34%</div>
// //         <div className="text-black text-lg">up to 1000</div>
// //       </div>
// //     </div>
// //     {/* Right side (split top/bottom) */}
// //     <div className="w-1/2 flex flex-col min-h-[240px]">
// //       {/* Top: 1,000-10,000 */}
// //       <div className="flex-1 flex flex-col items-end justify-start bg-[#929292] p-6">
// //         <div className="text-[32px] font-semibold text-white leading-none mb-2">13%</div>
// //         <div className="text-white text-lg">1,000-10,000</div>
// //       </div>
// //       {/* Bottom: 10,000 & over */}
// //       <div className="flex-1 flex flex-col items-end justify-end bg-[#d1d1d1] p-6">
// //         <div className="text-[32px] font-semibold text-white leading-none mb-2">13%</div>
// //         <div className="text-white text-lg">10,000 & over</div>
// //       </div>
// //     </div>
// //   </div>
// // );

// // const sectors = [
// //   { label: "Enterprises/Corporates", percent: 38 },
// //   { label: "Technology", percent: 26 },
// //   { label: "Startups", percent: 9 },
// //   { label: "Government & Public sector", percent: 8 },
// //   { label: "Investors, Advisory & Consulting", percent: 5 },
// //   { label: "Academics", percent: 4 },
// //   { label: "Others (Associations, Media, Independent Developers)", percent: 2 }
// // ];

// // const SectorChart = () => (
// //   <div className="max-w-4xl w-full rounded-xl overflow-hidden bg-white py-4 px-8" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
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

// // function Dashboard() {
// //   return (
// //     <div className="max-w-7xl mx-auto p-6 space-y-6">
// //       {/* Top Row */}
// //       <div className="flex gap-6">
// //         <div className="flex-[2]">
// //           <RegionChart />
// //         </div>
// //         <div className="flex-1">
// //           <JobLevelChart />
// //         </div>
// //       </div>
// //       {/* Bottom Row */}
// //       <div className="flex gap-6">
// //         <div className="flex-1">
// //           <CompanySizeChart />
// //         </div>
// //         <div className="flex-[2]">
// //           <SectorChart />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;




// import React from "react";

// // --- RegionChart Component ---
// const RegionChart = () => (
//   <div className="w-full h-full rounded-2xl overflow-hidden flex min-h-[340px]">
//     {/* Middle East */}
//     <div className="w-1/4 bg-[#FF7800] text-white flex flex-col justify-center items-center">
//       <h2 className="text-4xl font-bold">30%</h2>
//       <p className="text-lg">Middle East</p>
//     </div>
//     {/* Asia */}
//     <div className="w-1/4 bg-[#FFA54F] text-white flex flex-col justify-center items-center">
//       <h2 className="text-4xl font-bold">28%</h2>
//       <p className="text-lg">Asia</p>
//     </div>
//     {/* Europe + USA + Canada */}
//     <div className="w-1/2 relative bg-[#FF9D2E] bg-[repeating-linear-gradient(135deg,#FF9D2E,#FF9D2E_10px,#FFBF83_10px,#FFBF83_20px)] text-white flex flex-col justify-center items-center">
//       <h2 className="text-4xl font-bold">22%</h2>
//       <p className="text-lg">Europe</p>
//       {/* USA block */}
//       <div className="absolute bottom-0 right-0 w-[68%] h-[68%] bg-[#FFBE65] flex flex-col justify-center items-center rounded-b-xl">
//         <h2 className="text-2xl font-bold">17%</h2>
//         <p className="text-sm">USA</p>
//         {/* Canada block */}
//         <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-[#FFA54F] flex flex-col justify-center items-center rounded-br-xl">
//           <h2 className="text-md font-bold">3%</h2>
//           <p className="text-xs">Canada</p>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// // --- JobLevelChart Component ---
// const JobLevelChart = () => (
//   <div className="w-full rounded-2xl overflow-hidden shadow bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
//     <div className="bg-[#59c1ac] px-6 pt-6 pb-3 w-full">
//       <div className="font-semibold text-lg mb-2 text-black">By Job Level</div>
//       <div className="flex items-end gap-3">
//         <span className="text-[56px] font-semibold leading-tight text-black">72%</span>
//         <div className="flex flex-col pb-2">
//           <div className="text-base text-black">C-Level / Director / VP / Founder</div>
//         </div>
//       </div>
//     </div>
//     <div className="bg-[#71D6C3] px-6 py-5 border-t border-[#f4f4f4] w-full">
//       <div className="font-semibold text-xl text-black">10.0%</div>
//       <div className="text-black text-base">Heads / Manager</div>
//     </div>
//     <div className="bg-[#b1ece0] px-6 py-5 border-t border-[#f4f4f4] w-full">
//       <div className="font-semibold text-xl text-black">10.0%</div>
//       <div className="text-black text-base">Senior Data Scientists & Engineers</div>
//     </div>
//     <div className="bg-[#e2f7f2] px-6 py-5 border-t border-[#f4f4f4] w-full">
//       <div className="font-semibold text-xl text-black">4.0%</div>
//       <div className="text-black text-base">Professor / PhD /Doctor / Academic</div>
//     </div>
//     <div className="bg-[#fafefd] px-6 py-5 border-t border-[#f4f4f4] w-full">
//       <div className="font-semibold text-xl text-black">4.0%</div>
//       <div className="text-black text-base">Developers</div>
//     </div>
//   </div>
// );

// // --- CompanySizeChart Component ---
// const CompanySizeChart = () => (
//   <div className="w-full flex rounded-2xl overflow-hidden bg-white shadow min-h-[500px]" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
//     {/* Left side (Up to 1000) */}
//     <div className="w-1/2 flex flex-col justify-between bg-[#f4f4f4] p-6">
//       <div className="font-semibold text-lg text-black mb-2">By Company Size</div>
//       <div className="mt-auto">
//         <div className="text-[48px] font-semibold text-black leading-none mb-2">34%</div>
//         <div className="text-black text-lg">up to 1000</div>
//       </div>
//     </div>
//     {/* Right side (split top/bottom) */}
//     <div className="w-1/2 flex flex-col">
//       {/* Top: 1,000-10,000 */}
//       <div className="flex-1 flex flex-col items-end justify-start bg-[#929292] p-6">
//         <div className="text-[32px] font-semibold text-white leading-none mb-2">13%</div>
//         <div className="text-white text-lg">1,000-10,000</div>
//       </div>
//       {/* Bottom: 10,000 & over */}
//       <div className="flex-1 flex flex-col items-end justify-end bg-[#d1d1d1] p-6">
//         <div className="text-[32px] font-semibold text-white leading-none mb-2">13%</div>
//         <div className="text-white text-lg">10,000 & over</div>
//       </div>
//     </div>
//   </div>
// );

// // --- SectorChart Component ---
// const sectors = [
//   { label: "Enterprises/Corporates", percent: 38 },
//   { label: "Technology", percent: 26 },
//   { label: "Startups", percent: 9 },
//   { label: "Government & Public sector", percent: 8 },
//   { label: "Investors, Advisory & Consulting", percent: 5 },
//   { label: "Academics", percent: 4 },
//   { label: "Others (Associations, Media, Independent Developers)", percent: 2 }
// ];

// const SectorChart = () => (
//   <div className="w-full rounded-2xl overflow-hidden bg-white py-4 pr-6 pl-8" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
//     <div className="font-semibold text-lg text-black mb-6 mt-2">By Sector</div>
//     <div className="space-y-6">
//       {sectors.map((item, idx) => (
//         <div key={idx} className="flex items-center gap-4">
//           <div className="flex-grow">
//             <div className="text-[15px] font-medium text-black mb-1">{item.label}</div>
//             <div className="w-full bg-[#f4f4f4] h-[16px] rounded overflow-hidden relative">
//               <div
//                 className="h-full"
//                 style={{
//                   width: `${item.percent}%`,
//                   background: "linear-gradient(90deg, #6e40d8 0%, #34bbff 100%)"
//                 }}
//               ></div>
//             </div>
//           </div>
//           <div className="w-14 text-right text-[18px] text-black font-medium">{item.percent}%</div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // --- Dashboard Layout ---
// function Dashboard() {
//   return (
//     <div className="max-w-7xl mx-auto py-6 px-5 space-y-9">
//       {/* Top Row */}
//       <div className="flex gap-8" style={{ minHeight: 340 }}>
//         <div className="flex-[2] min-w-0">
//           <RegionChart />
//         </div>
//         <div className="flex-1 min-w-0">
//           <JobLevelChart />
//         </div>
//       </div>
//       {/* Bottom Row */}
//       <div className="flex gap-8">
//         <div className="flex-1 min-w-0">
//           <CompanySizeChart />
//         </div>
//         <div className="flex-[2] min-w-0">
//           <SectorChart />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



import React from "react";

// --- RegionChart Component ---
// const RegionChart = () => (
//   <div className="w-full h-full rounded-2xl overflow-hidden flex min-h-[200px] sm:min-h-[280px] md:min-h-[340px]">
//     {/* Middle East */}
//     <div className="w-1/4 bg-[#FF7800] text-white flex flex-col">
//       <h2 className="text-xl md:text-4xl font-bold ml-4 mt-4">30%</h2>
//       <p className="text-sm md:text-lg ml-4">Middle East</p>
//     </div>
//     {/* Asia */}
//     <div className="w-1/4 bg-[#FFA54F] text-white flex flex-col">
//       <h2 className="text-xl md:text-4xl font-bold ml-4 mt-4">28%</h2>
//       <p className="text-sm md:text-lg ml-4">Asia</p>
//     </div>
//     {/* Europe + USA + Canada */}
//     <div className="w-1/2 relative bg-[#FF9D2E] bg-[repeating-linear-gradient(135deg,#FF9D2E,#FF9D2E_10px,#FFBF83_10px,#FFBF83_20px)] text-white flex flex-col justify-center items-center">
//       <h2 className="text-xl md:text-4xl font-bold text-white">22%</h2>
//       <p className="text-sm md:text-lg text-white">Europe</p>
//       {/* USA block */}
//       <div className="absolute bottom-0 right-0 w-[68%] h-[68%] bg-[#FFBE65] flex flex-col rounded-b-xl pl-4 pt-4">
//         <h2 className="text-md md:text-2xl font-bold ">17%</h2>
//         <p className="text-xs md:text-sm">USA</p>
//         {/* Canada block */}
//         <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-[#FFA54F] flex flex-col rounded-br-xl pl-4 pt-4">
//           <h2 className="text-xs md:text-md font-bold">3%</h2>
//           <p className="text-[10px] md:text-xs">Canada</p>
//         </div>
//       </div>
//     </div>
//   </div>
// );







const RegionChart = () => (
  <div className="w-full h-full overflow-hidden flex min-h-[200px] sm:min-h-[280px] md:min-h-[340px]">
    {/* Middle East */}
    <div className="w-1/4 bg-[#242559] text-white flex flex-col">
      <h2 className="text-xl md:text-4xl font-bold ml-4 mt-4">30%</h2>
      <p className="text-sm md:text-lg ml-4">Europe</p>
    </div>
    {/* Asia */}
    <div className="w-1/4 bg-[#37477d] text-white flex flex-col">
      <h2 className="text-xl md:text-4xl font-bold ml-4 mt-4">28%</h2>
      <p className="text-sm md:text-lg ml-4">Asia</p>
    </div>
    {/* Europe + USA + Canada */}
    <div className="w-1/2 relative bg-[#FF9D2E] bg-[repeating-linear-gradient(135deg,#3b4f86,#ffffff_2px,#3b4f86_2px,#3c5087_20px)] text-white flex flex-col justify-center items-center">
      {/* Europe text with transparent black backdrop for visibility */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1">
        <h2 className="text-xl md:text-4xl font-bold text-white">22%</h2>
        <p className="text-sm md:text-lg text-white">Middle East</p>
      </div>
      {/* USA block */}
      <div className="absolute bottom-0 right-0 w-[68%] h-[68%] bg-[#3e548b] flex flex-col rounded-b-xl pl-4 pt-4 z-0">
        <h2 className="text-md md:text-2xl font-bold text-white drop-shadow">17%</h2>
        <p className="text-xs md:text-sm text-white drop-shadow">USA</p>
        {/* Canada block */}
        <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-[#46629b] flex flex-col rounded-br-xl pl-4 pt-4">
          <h2 className="text-xs md:text-md font-bold text-white drop-shadow">3%</h2>
          <p className="text-[10px] md:text-xs text-white drop-shadow">Canada</p>
        </div>
      </div>
    </div>
  </div>
);

// export default RegionChart;


// --- JobLevelChart Component ---
const JobLevelChart = () => (
  <div className="w-full overflow-hidden shadow bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="bg-[#59c1ac] px-3 md:px-6 pt-6 pb-3 w-full">
      <div className="font-semibold text-base md:text-lg mb-2 text-black">By Job Level</div>
      <div className="flex items-end gap-3">
        <span className="text-4xl md:text-[56px] font-semibold leading-tight text-black">72%</span>
        <div className="flex flex-col pb-2">
          <div className="text-xs md:text-base text-black">Professor / PhD /Doctor / Academic</div>
        </div>
      </div>
    </div>
    <div className="bg-[#71D6C3] px-3 md:px-6 py-4 md:py-5 border-t border-[#f4f4f4] w-full">
      <div className="font-semibold text-lg md:text-xl text-black">10.0%</div>
      <div className="text-xs md:text-base text-black">Heads / Manager</div>
    </div>
    <div className="bg-[#b1ece0] px-3 md:px-6 py-4 md:py-5 border-t border-[#f4f4f4] w-full">
      <div className="font-semibold text-lg md:text-xl text-black">10.0%</div>
      <div className="text-xs md:text-base text-black">Senior Data Scientists & Engineers</div>
    </div>
    <div className="bg-[#e2f7f2] px-3 md:px-6 py-4 md:py-5 border-t border-[#f4f4f4] w-full">
      <div className="font-semibold text-lg md:text-xl text-black">4.0%</div>
      <div className="text-xs md:text-base text-black">C-Level / Director / VP / Founder</div>
    </div>
    <div className="bg-[#fafefd] px-3 md:px-6 py-4 md:py-5 border-t border-[#f4f4f4] w-full">
      <div className="font-semibold text-lg md:text-xl text-black">4.0%</div>
      <div className="text-xs md:text-base text-black">Developers</div>
    </div>
  </div>
);

// --- CompanySizeChart Component ---
const CompanySizeChart = () => (
  <div className="w-full flex overflow-hidden bg-white shadow min-h-[250px] md:min-h-[350px] lg:min-h-[400px]" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
    {/* Left side (Up to 1000) */}
    <div className="w-1/2 flex flex-col justify-between bg-[#f4f4f4] p-3 md:p-6">
      <div className="font-semibold text-base md:text-lg text-black mb-2">By Company Size</div>
      <div className="mt-auto">
        <div className="text-3xl md:text-[48px] font-semibold text-black leading-none mb-2">34%</div>
        <div className="text-xs md:text-lg text-black">up to 1000</div>
      </div>
    </div>
    {/* Right side (split top/bottom) */}
    <div className="w-1/2 flex flex-col">
      {/* Top: 1,000-10,000 */}
      <div className="flex-1 flex flex-col items-end justify-start bg-[#929292] p-3 md:p-6">
        <div className="text-xl md:text-[32px] font-semibold text-white leading-none mb-2">13%</div>
        <div className="text-xs md:text-lg text-white">1,000-10,000</div>
      </div>
      {/* Bottom: 10,000 & over */}
      <div className="flex-1 flex flex-col items-end justify-end bg-[#d1d1d1] p-3 md:p-6">
        <div className="text-xl md:text-[32px] font-semibold text-white leading-none mb-2">13%</div>
        <div className="text-xs md:text-lg text-white">10,000 & over</div>
      </div>
    </div>
  </div>
);

// --- SectorChart Component ---Academics
const sectors = [
  { label: "Academics", percent: 38 },
  { label: "Technology", percent: 26 },
  { label: "Startups", percent: 9 },
  { label: "Government & Public sector", percent: 8 },
  { label: "Investors, Advisory & Consulting", percent: 5 },
  { label: "Enterprises/Corporates", percent: 4 },
  { label: "Others (Associations, Media, Independent Developers)", percent: 2 }
];

const SectorChart = () => (
  <div className="w-full overflow-hidden bg-white py-2 md:py-4 pr-3 md:pr-6 pl-3 md:pl-8" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
    <div className="font-semibold text-base md:text-lg text-black mb-4 md:mb-6 mt-1 md:mt-2">By Sector</div>
    <div className="space-y-4 md:space-y-6">
      {sectors.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2 md:gap-4">
          <div className="flex-grow">
            <div className="text-xs md:text-[15px] font-medium text-black mb-1">{item.label}</div>
            <div className="w-full bg-[#f4f4f4] h-[10px] md:h-[16px] rounded overflow-hidden relative">
              <div
                className="h-full"
                style={{
                  width: `${item.percent}%`,
                  background: "linear-gradient(90deg, #6e40d8 0%, #34bbff 100%)"
                }}
              ></div>
            </div>
          </div>
          <div className="w-9 md:w-14 text-right text-xs md:text-[18px] text-black font-medium">{item.percent}%</div>
        </div>
      ))}
    </div>
  </div>
);

// --- Dashboard Layout ---
function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto py-4 md:py-6 px-2 md:px-5 space-y-5 md:space-y-9">
    
            <h1
        style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
        className="text-center text-2xl md:text-3xl font-bold mb-4"
      >
        {/* WHO'S PRACTICING THE CONFERENCE, 2026 */}
        WHO'S PARTICIPATING THE CONFERENCE, 2026
      </h1>
      {/* Top Row */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-8">
        <div className="md:flex-[2] w-full min-w-0">
          <RegionChart />
        </div>
        <div className="md:flex-1 w-full min-w-0 mt-4 md:mt-0">
          <JobLevelChart />
        </div>
      </div>
      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-8">
        <div className="w-full md:flex-1 min-w-0">
          <CompanySizeChart />
        </div>
        <div className="w-full md:flex-[2] min-w-0 mt-4 md:mt-0">
          <SectorChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
