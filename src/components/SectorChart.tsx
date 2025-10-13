import React from "react";

const sectors = [
  { label: "Enterprises/Corporates", percent: 38 },
  { label: "Technology", percent: 26 },
  { label: "Startups", percent: 9 },
  { label: "Government & Public sector", percent: 8 },
  { label: "Investors, Advisory & Consulting", percent: 5 },
  { label: "Academics", percent: 4 },
  { label: "Others (Associations, Media, Independent Developers)", percent: 2 }
];

const SectorChart = () => (
  <div className="max-w-4xl mx-auto rounded-xl overflow-hidden bg-white py-4 px-8" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
    <div className="font-semibold text-lg text-black mb-6 mt-2">By Sector</div>
    <div className="space-y-6">
      {sectors.map((item, idx) => (
        <div key={idx} className="flex items-center gap-4">
          <div className="flex-grow">
            <div className="text-[15px] font-medium text-black mb-1">{item.label}</div>
            <div className="w-full bg-[#f4f4f4] h-[16px] rounded overflow-hidden relative">
              <div
                className="h-full"
                style={{
                  width: `${item.percent}%`,
                  background: "linear-gradient(90deg, #6e40d8 0%, #34bbff 100%)"
                }}
              ></div>
            </div>
          </div>
          <div className="w-14 text-right text-[18px] text-black font-medium">{item.percent}%</div>
        </div>
      ))}
    </div>
  </div>
);

export default SectorChart;
