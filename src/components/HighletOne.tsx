


import React from 'react';

function HighletOne() {
  return (
    <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[80vh] p-4">
      {/* Left section */}
      <div className="w-full md:w-[55vw] flex flex-col gap-4 bg-white shadow-md overflow-hidden">
        <div className="w-full h-auto md:h-[50%]">
          <img
            src="Gemini_Generated_Image_j5zwdpj5zwdpj5zw.png"
            alt="Main highlight"
            className="w-full h-full object-cover lazyload"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[50%]">
          <div className="w-full md:w-1/2 h-auto">
            <img
              src="F9ydvioa0AARIM0.jpeg"
              alt="Highlight 1"
              className="w-full h-full object-cover lazyload"
            />
          </div>
          <div className="w-full md:w-1/2 h-auto">
            <img
              src="Gemini_Generated_Image_szvxggszvxggszvx.png"
              alt="Highlight 2"
              className="w-full h-full object-cover lazyload"
            />
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="w-full md:w-[28vw] flex flex-col gap-4">
        <div className="h-auto md:h-[35vh]">
          <img
            src="Gemini_Generated_Image_flg9xrflg9xrflg9.png"
            alt="Highlight 3"
            className="w-full h-full object-cover lazyload"
          />
        </div>
        <div className="h-auto md:h-[38vh]">
          <img
            src="20250527-re1_3975.jpg"
            alt="Highlight 4"
            className="w-full h-full object-cover lazyload"
          />
        </div>
      </div>
    </div>
  );
}

export default HighletOne;
