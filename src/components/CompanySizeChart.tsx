import React from "react";

const CompanySizeChart: React.FC = () => {
  return (
    <div className="max-w-md mx-auto flex rounded-xl overflow-hidden bg-white shadow" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
      {/* Left side (Up to 1000) */}
      <div className="w-1/2 flex flex-col justify-between bg-[#f4f4f4] p-6 min-h-[400px]">
        <div className="font-semibold text-lg text-black mb-2">By Company Size</div>
        <div className="mt-auto">
          <div className="text-[48px] font-semibold text-black leading-none mb-2">34%</div>
          <div className="text-black text-lg">up to 1000</div>
        </div>
      </div>
      {/* Right side (split top/bottom) */}
      <div className="w-1/2 flex flex-col min-h-[400px]">
        {/* Top: 1,000-10,000 */}
        <div className="flex-1 flex flex-col items-end justify-start bg-[#929292] p-6">
          <div className="text-[32px] font-semibold text-white leading-none mb-2">13%</div>
          <div className="text-white text-lg">1,000-10,000</div>
        </div>
        {/* Bottom: 10,000 & over */}
        <div className="flex-1 flex flex-col items-end justify-end bg-[#d1d1d1] p-6">
          <div className="text-[32px] font-semibold text-white leading-none mb-2">13%</div>
          <div className="text-white text-lg">10,000 & over</div>
        </div>
      </div>
    </div>
  );
};

export default CompanySizeChart;
