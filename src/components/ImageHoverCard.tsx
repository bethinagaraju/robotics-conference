// import React from 'react';

// const ImageHoverCard = ({ imageUrl, title, description, buttonText }) => {
//   return (
//     <div className="relative w-[250px] mx-auto rounded-lg overflow-hidden shadow-lg group h-[400px]">
//       {/* Image Container */}
//       <div className="w-full h-80 sm:h-96 bg-gray-200 overflow-hidden">
//         <img
//           src={imageUrl}
//           alt={title}
//           className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
//           onError={(e) => {
//             e.target.onerror = null; // Prevent infinite loop
//             e.target.src = "https://placehold.co/600x400/CCCCCC/000000?text=Image+Not+Found";
//           }}
//         />
//       </div>

//       {/* Initial Text at the bottom (visible on hover out) */}
//       <div
//         className="absolute bottom-0 left-0 right-0 bg-teal-700 text-white p-4 py-8 text-center
//                    transform translate-y-0 group-hover:translate-y-full
//                    transition-transform duration-500 ease-out z-10" // Ensure it's above the image but below the overlay
//       >
//         <h3 className="text-lg font-bold font-roboto">{title}</h3>
//       </div>

//       {/* Overlay Content (appears on hover) */}
//       <div
//         className="absolute inset-0 bg-teal-700 bg-opacity-90 flex flex-col items-center justify-center p-6 text-white
//                    transform scale-y-0 origin-bottom group-hover:scale-y-100
//                    transition-transform duration-500 ease-out z-20" // Ensure it's on top
//       >
//         <h3 className="text-2xl font-bold mb-4 text-center font-inter">
//           {title}
//         </h3>
//         <p className="text-base mb-4 font-inter leading-relaxed">
//           {description}
//         </p>
//         <button
//           className="bg-black text-white px-4 py-2 font-semibold text-base rounded-md
//                      hover:bg-gray-800 transition-colors duration-300 shadow-md"
//         >
//           {buttonText}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageHoverCard;



import React from 'react';

const ImageHoverCard = ({ imageUrl, title, description, buttonText, linkUrl }) => {
  return (
    <div className="relative w-[268px] max-w-xs mx-auto overflow-hidden shadow-lg group h-[390px]">
      {/* Image Container */}
      <div className="w-full h-96 sm:h-96 bg-gray-200 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-fill object-center transition-transform duration-300 group-hover:scale-105 lazyload"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400/CCCCCC/000000?text=Image+Not+Found";
          }}
        />
        {/* <h1 style={{ color: 'orange' }}>EXIOJSJJS</h1> */}
      </div>

      {/* Bottom Title - only visible on large screens (where overlay is hidden initially) */}

      <div
        className="hidden lg:block absolute bottom-0 left-0 right-0 bg-[#232375] bg-gradient-to-br from-[#232375] to-[#4c6da6] text-white p-4 py-8 text-center
                   transform translate-y-0 group-hover:translate-y-full
                   transition-transform duration-500 ease-out z-10"
      >

        <h3 className="text-lg font-bold" style={{ fontFamily: 'Manrope, sans-serif' }}>{title}</h3>

      </div>

      {/* Overlay Content - always visible on mobile/tablet, only on hover in desktop */}
      <div
        className="absolute inset-0 bg-[#415991] bg-opacity-70 flex flex-col items-center justify-center px-4 py-6 text-white
                   transform scale-y-100 lg:scale-y-0 lg:group-hover:scale-y-100 origin-bottom
                   transition-transform duration-500 ease-out z-20 text-center font-Manrope sans-serif">

        <h3 className="text-2xl font-bold mb-4 text-black">{title}</h3>
        <p className="text-sm sm:text-base mb-4 leading-relaxed text-white">{description}</p>

        <a href={linkUrl} className="bg-black text-white px-4 py-2 rounded-md text-sm sm:text-base font-semibold hover:bg-gray-800 transition">
          {buttonText}
        </a>

      </div>


    </div>
  );
};

export default ImageHoverCard;
