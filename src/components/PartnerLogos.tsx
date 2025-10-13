// import React from 'react';

// const partners = [
//   {
//     label: 'Supported by',
//     logo: 'gcea.png',
//     alt: 'GCEA - Global Center for Energy Analysis',
//   },
//   {
//     label: 'Official English News Partner',
//     logo: 'the-national.png',
//     alt: 'The National News',
//   },
//   {
//     label: 'Host City',
//     logo: 'abu-dhabi.png',
//     alt: 'Abu Dhabi Host City',
//   },
//   {
//     label: 'Destination Partner',
//     logo: 'abudhabiconvention.jpg',
//     alt: 'Abu Dhabi Convention & Exhibition Bureau',
//   },
//   {
//     label: 'Venue Partner',
//     logo: 'adnec-new-logo.png',
//     alt: 'ADNEC Centre Abu Dhabi',
//   },
//   {
//     label: 'Brought To You By',
//     logo: 'dmglogo_web.png',
//     alt: 'DMG Events',
//   },
//   {
//     label: 'dmg events GLOBAL ENERGY PORTFOLIO',
//     logo: 'adipecmaritime.jpg',
//     alt: 'ADIPEC 2025',
//   },
// ];

// const PartnerLogos: React.FC = () => {
//   return (
//     <section className="py-16 px-4 bg-gray-50">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center">
//         {partners.map((partner, index) => (
//           <div
//             key={index}
//             className="bg-white shadow rounded-lg p-6 w-[250px] h-[200px] text-center flex flex-col items-center justify-center"
//           >
//             <p className="text-sm text-gray-600 mb-4">{partner.label}</p>
//             <img
//               src={partner.logo}
//               alt={partner.alt}
//               className="max-h-20 object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PartnerLogos;





import React from 'react';

const partners = [
  {
    label: 'Supported by',
    logo: 'gcea.png',
    alt: 'GCEA - Global Center for Energy Analysis',
  },
  {
    label: 'Official English News Partner',
    logo: 'the-national.png',
    alt: 'The National News',
  },
  {
    label: 'Host City',
    logo: 'Emblem_of_Italy.svg.webp',
    alt: 'Abu Dhabi Host City',
  },
  {
    label: 'Destination Partner',
    logo: 'Roma-Stemma-2.svg.png',
    alt: 'Abu Dhabi Convention & Exhibition Bureau',
  },
  {
    label: 'Venue Partner',
    logo: 'Crowne_Plaza_by_IHG_logo.svg.png',
    alt: 'ADNEC Centre Abu Dhabi',
  },

];

const PartnerLogos: React.FC = () => {
  return (
    <section className="py-16 px-16 bg-gray-50">
      <div className="container mx-auto">
        {/* First 5 items in a grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center mb-8">
          {partners.slice(0, 5).map((partner, index) => (
            <div
              key={index}
              className="bg-white shadow p-6 w-[250px] h-[200px] text-center flex flex-col items-center justify-center"
            >
              <p className="text-sm text-gray-600 mb-4">{partner.label}</p>
              <img
                src={partner.logo}
                alt={partner.alt}
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Last 2 items centered */}
        <div className="flex flex-wrap justify-center gap-8">
          {partners.slice(5).map((partner, index) => (
            <div
              key={index + 5}
              className="bg-white shadow p-6 w-[250px] h-[200px] text-center flex flex-col items-center justify-center"
            >
              <p className="text-sm text-gray-600 mb-4">{partner.label}</p>
              <img
                src={partner.logo}
                alt={partner.alt}
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
