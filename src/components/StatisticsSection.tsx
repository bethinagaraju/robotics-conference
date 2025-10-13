

// // import React from 'react';
// // import CountUp from 'react-countup';
// // import { useInView } from 'react-intersection-observer';

// // const stats = [
// //   { value: 2500, label: 'EXHIBITION ATTENDEES' },
// //   { value: 500, label: 'DELEGATES' },
// //   { value: 300, label: 'SPEAKERS' },
// //   { value: 100, label: 'COUNTRIES REPRESENTED' },
// //   { value: 150, label: 'EXHIBITORS' },
// //   { value: 200, label: 'MEDIA PARTNERS' },
// // ];

// // const StatisticsSection: React.FC = () => {
// //   const [ref, inView] = useInView({
// //     triggerOnce: true,
// //     threshold: 0.3,
// //   });

// //   return (
// //     <section className="bg-teal-600 text-white py-12" ref={ref}>
// //       <div className="container mx-auto px-4">
// //         <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center px-8">
// //           {stats.map((stat, index) => (
// //             <div key={index} className="border-l border-white px-4 first:border-0">
// //               <div className="text-4xl font-bold text-left">
// //                 {inView ? <CountUp end={stat.value} duration={2} /> : 0} +
// //               </div>
// //               <h4 className="text-left">
// //                 {stat.label.split(' ').map((word, i) => (
// //                   <span key={i}>
// //                     {word}
// //                     <br />
// //                   </span>
// //                 ))}
// //               </h4>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default StatisticsSection;













// import React from 'react';
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';

// const stats = [
//   { value: 2500, label: 'EXHIBITION ATTENDEES' },
//   { value: 500, label: 'DELEGATES' },
//   { value: 300, label: 'SPEAKERS' },
//   { value: 100, label: 'COUNTRIES REPRESENTED' },
//   { value: 150, label: 'EXHIBITORS' },
//   { value: 200, label: 'MEDIA PARTNERS' },
// ];

// const StatisticsSection: React.FC = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   return (
//     <section className="bg-teal-600 text-white py-12" ref={ref}>
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="px-4 border-l border-white"
//             >
//               <div className="text-4xl font-bold text-left">
//                 {inView ? <CountUp end={stat.value} duration={2} /> : 0} +
//               </div>
//               <h4 className="text-left mt-2">
//                 {stat.label.split(' ').map((word, i) => (
//                   <span key={i}>
//                     {word}
//                     <br />
//                   </span>
//                 ))}
//               </h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatisticsSection;












import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  // { value: 2500, label: 'EXHIBITION ATTENDEES' },
  { value: 500, label: 'DELEGATES' },
  { value: 300, label: 'SPEAKERS' },
  { value: 100, label: 'COUNTRIES REPRESENTED' },
  // { value: 150, label: 'EXHIBITORS' },
  { value: 200, label: 'MEDIA PARTNERS' },
];

const StatisticsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="text-white py-6" ref={ref} style={{ backgroundImage: "linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="px-4 border-l border-white"
            >
              <div className="text-4xl font-bold text-left">
                {inView ? <CountUp end={stat.value} duration={2} /> : 0} +
              </div>
              <h4 className="text-left mt-2 font-sans-serif">
                {stat.label.split(' ').map((word, i) => (
                  <span key={i}>
                    {word + ' '}
                    {/* <br /> */}
                  </span>
                ))}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
