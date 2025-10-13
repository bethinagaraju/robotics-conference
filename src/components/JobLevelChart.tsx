import React from "react";

const JobLevelChart: React.FC = () => {
  return (
    <div className="max-w-md mx-auto rounded-xl overflow-hidden shadow bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="bg-[#59c1ac] px-6 pt-6 pb-3">
        <div className="font-semibold text-lg mb-2 text-black">By Job Level</div>
        <div className="flex items-end gap-3">
          <span className="text-[56px] font-semibold leading-tight text-black">72%</span>
          <div className="flex flex-col pb-2">
            <div className="text-base text-black">C-Level / Director / VP / Founder</div>
          </div>
        </div>
      </div>
      <div className="bg-[#71D6C3] px-6 py-5 border-t border-[#f4f4f4]">
        <div className="font-semibold text-xl text-black">10.0%</div>
        <div className="text-black text-base">Heads / Manager</div>
      </div>
      <div className="bg-[#b1ece0] px-6 py-5 border-t border-[#f4f4f4]">
        <div className="font-semibold text-xl text-black">10.0%</div>
        <div className="text-black text-base">Senior Data Scientists & Engineers</div>
      </div>
      <div className="bg-[#e2f7f2] px-6 py-5 border-t border-[#f4f4f4]">
        <div className="font-semibold text-xl text-black">4.0%</div>
        <div className="text-black text-base">Professor / PhD /Doctor / Academic</div>
      </div>
      <div className="bg-[#fafefd] px-6 py-5 border-t border-[#f4f4f4]">
        <div className="font-semibold text-xl text-black">4.0%</div>
        <div className="text-black text-base">Developers</div>
      </div>
    </div>
  );
};

export default JobLevelChart;
