// // // import React from "react";
// // // import Header from "./Header";

// // // // Pass features, prices, etc. as arrays
// // // const passes = [
// // //   {
// // //     name: "VIP Pass",
// // //     price: 1799,
// // //     oldPrice: 1999,
// // //     features: [
// // //       { label: "2 Days Exhibition Access", included: true },
// // //       { label: "2 Days Conference Access", included: true },
// // //       { label: "Access to Official Event App", included: true },
// // //       { label: "Complimentary Coffee & Tea", included: true },
// // //       { label: "Business Networking Zone", included: true },
// // //       { label: "VIP Food & Beverage", included: true },
// // //       { label: "VIP / Speaker Lounge Access", included: true },
// // //       { label: "VIP Registration Desk", included: true },
// // //       { label: "VIP Seats in Conference", included: true }
// // //     ]
// // //   },
// // //   {
// // //     name: "Delegate Pass",
// // //     price: 399,
// // //     oldPrice: 599,
// // //     features: [
// // //       { label: "2 Days Exhibition Access", included: true },
// // //       { label: "2 Days Conference Access", included: true },
// // //       { label: "Access to Official Event App", included: true },
// // //       { label: "Complimentary Coffee & Tea", included: true },
// // //       { label: "Lunch Box", included: true },
// // //       { label: "Business Networking Zone", included: true },
// // //       { label: "VIP Food & Beverage", included: false },
// // //       { label: "VIP / Speaker Lounge Access", included: false },
// // //       { label: "VIP Registration Desk", included: false },
// // //       { label: "VIP Seats in Conference", included: false }
// // //     ]
// // //   },
// // //   {
// // //     name: "Visitor Pass",
// // //     price: 0,
// // //     oldPrice: 199,
// // //     features: [
// // //       { label: "2 Days Exhibition Access", included: true },
// // //       { label: "2 Days Conference Access", included: true },
// // //       { label: "Access to Official Event App", included: true },
// // //       { label: "Complimentary Coffee & Tea", included: false },
// // //       { label: "Lunch Box", included: false },
// // //       { label: "Business Networking Zone", included: false },
// // //       { label: "VIP Food & Beverage", included: false },
// // //       { label: "VIP / Speaker Lounge Access", included: false },
// // //       { label: "VIP Registration Desk", included: false },
// // //       { label: "VIP Seats in Conference", included: false }
// // //     ]
// // //   }
// // // ];

// // // const check = (
// // //   <svg className="inline align-text-bottom" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#30cc87" viewBox="0 0 20 20">
// // //     <path fillRule="evenodd" d="M16.707 7.293a1 1 0 01.023 1.32l-.083.094-6.293 6.293a1 1 0 01-1.32.084l-.094-.084-3.293-3.293a1 1 0 011.32-1.497l.094.083 2.586 2.586 5.587-5.586a1 1 0 011.423-.095z"/>
// // //   </svg>
// // // );

// // // const cross = (
// // //   <svg className="inline align-text-bottom" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ee304b" viewBox="0 0 20 20">
// // //     <path fillRule="evenodd" d="M10 8.586l3.536-3.535a1 1 0 111.415 1.415L11.415 10l3.536 3.535a1 1 0 01-1.415 1.415L10 11.415l-3.535 3.535a1 1 0 01-1.415-1.415L8.585 10 5.05 6.465a1 1 0 011.415-1.415L10 8.586z"/>
// // //   </svg>
// // // );

// // // const passColors = [
// // //   "from-purple-100 via-white to-white",
// // //   "from-purple-200 via-white to-white",
// // //   "from-purple-200 via-white to-white"
// // // ];

// // // function RegisterPasses() {
// // //   return (
// // //     <>
// // //     <Header />
// // //     <section className="py-8">
// // //       <h1 className="text-center text-4xl font-bold mb-10">Book Your Tickets Now</h1>
// // //       <div className="flex flex-wrap justify-center gap-8">
// // //         {passes.map((pass, idx) => (
// // //           <div key={pass.name}
// // //             className={`bg-white rounded-2xl shadow-lg w-[330px] min-w-[280px] px-6 py-10 relative
// // //               transition hover:shadow-2xl border border-gray-100`}
// // //             style={{
// // //               background: "linear-gradient(135deg, #9f7aea2c 0%, #fff 60%)"
// // //             }}
// // //           >
// // //             {/* Early Bird Badge */}
// // //             <div className="absolute top-0 left-0 right-0 flex justify-center">
// // //               <div className="flex items-center rounded-bl-xl rounded-br-xl bg-gradient-to-r from-[#6751c8] to-[#7f4af8] px-6 py-1 mt-[-1rem]">
// // //                 <svg width="18" height="18" fill="#fff" className="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
// // //                   <rect width="16" height="16" rx="3"/>
// // //                   <text x="8" y="12" textAnchor="middle" fontSize="10" fill="#fff">🎉</text>
// // //                 </svg>
// // //                 <span className="text-white text-sm font-medium">Early Bird</span>
// // //               </div>
// // //             </div>
// // //             {/* Pass Title */}
// // //             <h2 className="text-3xl font-bold mb-6 mt-6 text-black">{pass.name}</h2>
// // //             {/* Features List */}
// // //             <ul className="mb-8">
// // //               {pass.features.map((feature, fidx) => (
// // //                 <li key={feature.label}
// // //                   className={`mb-2 text-base flex items-center gap-3 
// // //                     ${feature.included ? "text-[#2d9f61]" : "text-[#c3c3c9] line-through"}`}>
// // //                   {feature.included ? check : cross}
// // //                   <span>{feature.label}</span>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //             {/* Pass Price */}
// // //             <div className="text-left mb-6">
// // //               <span
// // //                 className="block font-bold text-2xl text-black"
// // //               >
// // //                 {pass.price === 0 ? (
// // //                   <>
// // //                     <span className="text-gray-500 text-xl line-through mr-3">${pass.oldPrice}</span>
// // //                     <span className="text-[#6751c8] text-2xl font-bold">Free</span>
// // //                   </>
// // //                 ) : (
// // //                   <>
// // //                     <span className="text-gray-500 text-xl line-through mr-3">${pass.oldPrice}</span>
// // //                     <span>${pass.price}</span>
// // //                   </>
// // //                 )}
// // //               </span>
// // //             </div>
// // //             {/* Book Now Button */}
// // //             <div className="flex justify-center">
// // //               <button
// // //                 className="bg-gradient-to-r from-[#6751c8] to-[#7f4af8] hover:from-[#7f4af8] hover:to-[#6751c8] px-8 py-3 rounded-full text-white font-semibold text-lg transition-all shadow-md"
// // //               >
// // //                 Book Now &rarr;
// // //               </button>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //     </>
// // //   );
// // // }

// // // export default RegisterPasses;














// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import Header from "./Header";

// // const passes = [
// //   {
// //     name: "Delegate Pass",
// //     price: 399,
// //     oldPrice: 599,
// //     features: [
// //       { label: "2 Days Exhibition Access", included: true },
// //       { label: "2 Days Conference Access", included: true },
// //       { label: "Access to Official Event App", included: true },
// //       { label: "Complimentary Coffee & Tea", included: true },
// //       { label: "Lunch Box", included: true },
// //       { label: "Business Networking Zone", included: true },
// //       { label: "VIP Food & Beverage", included: false },
// //       { label: "VIP / Speaker Lounge Access", included: false },
// //       { label: "VIP Registration Desk", included: false },
// //       { label: "VIP Seats in Conference", included: false }
// //     ],
// //     planid: "prod_kb1DzyjS8DvJN"
// //   },
// //   {
// //     name: "Speaker Pass",
// //     price: 1799,
// //     oldPrice: 1999,
// //     features: [
// //       { label: "2 Days Exhibition Access", included: true },
// //       { label: "2 Days Conference Access", included: true },
// //       { label: "Access to Official Event App", included: true },
// //       { label: "Complimentary Coffee & Tea", included: true },
// //       { label: "Business Networking Zone", included: true },
// //       { label: "VIP Food & Beverage", included: true },
// //       { label: "VIP / Speaker Lounge Access", included: true },
// //       { label: "VIP Registration Desk", included: true },
// //       { label: "VIP Seats in Conference", included: true }
// //     ],
// //     planid: "prod_R9FWdDqlo5uAO"
// //   },
// //   {
// //     name: "Poster Pass",
// //     price: 0,
// //     oldPrice: 199,
// //     features: [
// //       { label: "2 Days Exhibition Access", included: true },
// //       { label: "2 Days Conference Access", included: true },
// //       { label: "Access to Official Event App", included: true },
// //       { label: "Complimentary Coffee & Tea", included: false },
// //       { label: "Lunch Box", included: false },
// //       { label: "Business Networking Zone", included: false },
// //       { label: "VIP Food & Beverage", included: false },
// //       { label: "VIP / Speaker Lounge Access", included: false },
// //       { label: "VIP Registration Desk", included: false },
// //       { label: "VIP Seats in Conference", included: false }
// //     ],
// //     planid: "prod_itFw6YN8draMQ"
// //   }
// // ];

// // const check = (
// //   <svg className="inline align-text-bottom" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#30cc87" viewBox="0 0 20 20">
// //     <path fillRule="evenodd" d="M16.707 7.293a1 1 0 01.023 1.32l-.083.094-6.293 6.293a1 1 0 01-1.32.084l-.094-.084-3.293-3.293a1 1 0 011.32-1.497l.094.083 2.586 2.586 5.587-5.586a1 1 0 011.423-.095z"/>
// //   </svg>
// // );

// // const cross = (
// //   <svg className="inline align-text-bottom" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ee304b" viewBox="0 0 20 20">
// //     <path fillRule="evenodd" d="M10 8.586l3.536-3.535a1 1 0 111.415 1.415L11.415 10l3.536 3.535a1 1 0 01-1.415 1.415L10 11.415l-3.535 3.535a1 1 0 01-1.415-1.415L8.585 10 5.05 6.465a1 1 0 011.415-1.415L10 8.586z"/>
// //   </svg>
// // );

// // function RegisterPasses() {
// //   const navigate = useNavigate();

// //   // Replace with your actual user input mechanism
// //   const email = "test@email.com";

// //   const handleBookNow = (pass) => {
// //     const registrationData = {
// //       email,
// //       planid: pass.planid
// //     };
// //     navigate("/checkout", { state: { registrationData } });
// //   };

// //   return (
// //     <>
// //       <Header />
// //       <section className="py-8">
// //         <h1 className="text-center text-4xl font-bold mb-10">Book Your Tickets Now</h1>
// //         <div className="flex flex-wrap justify-center gap-8">
// //           {passes.map((pass) => (
// //             <div key={pass.name}
// //               className="bg-white rounded-2xl shadow-lg w-[330px] min-w-[280px] px-6 py-10 relative transition hover:shadow-2xl border border-gray-100"
// //               style={{ background: "linear-gradient(135deg, #9f7aea2c 0%, #fff 60%)" }}
// //             >
// //               <div className="absolute top-0 left-0 right-0 flex justify-center">
// //                 <div className="flex items-center rounded-bl-xl rounded-br-xl bg-gradient-to-r from-[#6751c8] to-[#7f4af8] px-6 py-1 mt-[-1rem]">
// //                   <svg width="18" height="18" fill="#fff" className="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
// //                     <rect width="16" height="16" rx="3"/>
// //                     <text x="8" y="12" textAnchor="middle" fontSize="10" fill="#fff">🎉</text>
// //                   </svg>
// //                   <span className="text-white text-sm font-medium">Early Bird</span>
// //                 </div>
// //               </div>
// //               <h2 className="text-3xl font-bold mb-6 mt-6 text-black">{pass.name}</h2>
// //               <ul className="mb-8">
// //                 {pass.features.map((feature) => (
// //                   <li key={feature.label}
// //                     className={`mb-2 text-base flex items-center gap-3 
// //                       ${feature.included ? "text-[#2d9f61]" : "text-[#c3c3c9] line-through"}`}>
// //                     {feature.included ? check : cross}
// //                     <span>{feature.label}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //               <div className="text-left mb-6">
// //                 <span className="block font-bold text-2xl text-black">
// //                   {pass.price === 0 ? (
// //                     <>
// //                       <span className="text-gray-500 text-xl line-through mr-3">${pass.oldPrice}</span>
// //                       <span className="text-[#6751c8] text-2xl font-bold">Free</span>
// //                     </>
// //                   ) : (
// //                     <>
// //                       <span className="text-gray-500 text-xl line-through mr-3">${pass.oldPrice}</span>
// //                       <span>${pass.price}</span>
// //                     </>
// //                   )}
// //                 </span>
// //               </div>
// //               <div className="flex justify-center">
// //                 <button
// //                   className="bg-gradient-to-r from-[#6751c8] to-[#7f4af8] hover:from-[#7f4af8] hover:to-[#6751c8] px-8 py-3 rounded-full text-white font-semibold text-lg transition-all shadow-md"
// //                   onClick={() => handleBookNow(pass)}
// //                 >
// //                   Book Now &rarr;
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// // export default RegisterPasses;




// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";

// const passes = [
//   {
//     name: "Delegate Pass",
//     price: 899,
//     oldPrice: 1299,
//     features: [
//       { label: "2 Days Exhibition Access", included: true },
//       { label: "2 Days Conference Access", included: true },
//       { label: "Access to Official Event App", included: true },
//       { label: "Complimentary Coffee & Tea", included: true },
//       { label: "Lunch Box", included: true },
//       { label: "Business Networking Zone", included: true },
//       { label: "VIP Food & Beverage", included: false },
//       { label: "VIP / Speaker Lounge Access", included: false },
//       { label: "VIP Registration Desk", included: false },
//       { label: "VIP Seats in Conference", included: false },
//     ],
//     planid: "plan_jfnD3Xi7TnAzV", // ✅ Whop Plan IDprod_kb1DzyjS8DvJN
//   },
//   {
//     name: "Speaker Pass",
//     price: 799,
//     oldPrice: 1199,
//     features: [
//       { label: "2 Days Exhibition Access", included: true },
//       { label: "2 Days Conference Access", included: true },
//       { label: "Access to Official Event App", included: true },
//       { label: "Complimentary Coffee & Tea", included: true },
//       { label: "Business Networking Zone", included: true },
//       { label: "VIP Food & Beverage", included: true },
//       { label: "VIP / Speaker Lounge Access", included: true },
//       { label: "VIP Registration Desk", included: true },
//       { label: "VIP Seats in Conference", included: true },
//     ],
//     planid: "plan_hLWCDW2D5cK92", // ✅ Whop Plan ID
//   },
//   {
//     name: "Poster Pass",
//     price: 499,
//     oldPrice: 799,
//     features: [
//       { label: "2 Days Exhibition Access", included: true },
//       { label: "2 Days Conference Access", included: true },
//       { label: "Access to Official Event App", included: true },
//       { label: "Complimentary Coffee & Tea", included: false },
//       { label: "Lunch Box", included: false },
//       { label: "Business Networking Zone", included: false },
//       { label: "VIP Food & Beverage", included: false },
//       { label: "VIP / Speaker Lounge Access", included: false },
//       { label: "VIP Registration Desk", included: false },
//       { label: "VIP Seats in Conference", included: false },
//     ],
//     planid: "plan_qLhtFzRCezWpw", // ✅ Free plan for testing
//   },
// ];

// function RegisterPasses() {
//   const navigate = useNavigate();
//   const email = ""; // Replace with actual user email if needed

//   const handleBookNow = (pass) => {
//     navigate("/checkout", { state: { registrationData: { email, planid: pass.planid } } });
//   };

//   return (
//     <>
//       <Header />
//       <section className="py-8">
//         <h1 className="text-center text-4xl font-bold mb-10 text-[#2b3267]">BOOK YOUR PASSES NOW</h1>
//         <div className="flex flex-wrap justify-center gap-8">
//           {passes.map((pass) => (
//             <div
//               key={pass.name}
//               className="bg-white shadow-lg w-[330px] min-w-[280px] px-6 py-10 transition hover:shadow-2xl border border-gray-100"
//             >
//               <h2 className="text-3xl font-bold mb-6 text-black">{pass.name}</h2>
//               <ul className="mb-8">
//                 {pass.features.map((feature) => (
//                   <li
//                     key={feature.label}
//                     className={`mb-2 text-base ${
//                       feature.included ? "text-[#4a69a2]" : "text-gray-400 line-through"
//                     }`}
//                   >
//                     {feature.included ? "✔️" : "❌"} {feature.label}
//                   </li>
//                 ))}
//               </ul>
//               <div className="text-left mb-6">
//                 <span className="block font-bold text-2xl text-black">
//                   {pass.price === 0 ? (
//                     <>
//                       <span className="text-gray-500 text-xl line-through mr-3">
//                         ${pass.oldPrice}
//                       </span>
//                       <span className="text-purple-600 text-2xl font-bold">Free</span>
//                     </>
//                   ) : (
//                     <>
//                       <span className="text-gray-500 text-xl line-through mr-3">
//                         ${pass.oldPrice}
//                       </span>
//                       <span>${pass.price}</span>
//                     </>
//                   )}
//                 </span>
//               </div>
//               <div className="flex justify-center">
//                 <button
//                   style={{ backgroundImage: "linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)" }}
//                   className="hover:from-indigo-600 hover:to-purple-600 px-8 py-3 text-white font-semibold text-lg transition-all shadow-md"
//                   onClick={() => handleBookNow(pass)}
//                 >
//                   Book Now →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// export default RegisterPasses;






import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const passes = [
  {
    name: "DELEGATE PASS",
    price: 899,
    oldPrice: 1299,
    isPopular: true,
    features: [
      { label: "3 Days Exhibition Access", included: true },
      { label: "3 Days Conference Access", included: true },
      { label: "Access to Official Event App", included: true },
      { label: "Complimentary Coffee & Tea", included: true },
      { label: "Lunch", included: true },
      { label: "Business Networking Zone", included: true },
      // { label: "VIP Food & Beverage", included: false },
      // { label: "VIP / Speaker Lounge Access", included: false },
      // { label: "VIP Registration Desk", included: false },
      // { label: "VIP Seats in Conference", included: false },
    ],
    planid: "plan_jfnD3Xi7TnAzV",
  },
  {
    name: "SPEAKER PASS",
    price: 799,
    oldPrice: 1199,
     // Highlight this pass
    features: [
      { label: "3 Days Exhibition Access", included: true },
      { label: "3 Days Conference Access", included: true },
      { label: "Access to Official Event App", included: true },
      { label: "Complimentary Coffee & Tea", included: true },
      { label: "Lunch", included: true },
      { label: "Business Networking Zone", included: true },
      
    ],
    planid: "plan_hLWCDW2D5cK92",
  },
  {
    name: "POSTER PASS",
    price: 499,
    oldPrice: 799,
    features: [
           { label: "3 Days Exhibition Access", included: true },
      { label: "3 Days Conference Access", included: true },
      { label: "Access to Official Event App", included: true },
      { label: "Complimentary Coffee & Tea", included: true },
      { label: "Lunch", included: true },
      { label: "Business Networking Zone", included: true },
      // { label: "Complimentary Coffee & Tea", included: false },
      // { label: "Lunch Box", included: false },
      // { label: "Business Networking Zone", included: false },
      // { label: "VIP Food & Beverage", included: false },
      // { label: "VIP / Speaker Lounge Access", included: false },
      // { label: "VIP Registration Desk", included: false },
      // { label: "VIP Seats in Conference", included: false },
    ],
    planid: "plan_qLhtFzRCezWpw",
  },
];

function PassCard({ pass, onBookNow }) {
  return (
    <div
      className={`flex flex-col rounded-xl border bg-white p-8 shadow-sm transition hover:shadow-lg ${
        pass.isPopular ? "border-indigo-500" : "border-slate-200"
      }`}
    >
      <h3 className="text-2xl font-bold text-slate-800">{pass.name}</h3>
      
      {/* Price Section */}
      <div className="my-6 flex items-baseline gap-3">
        <span className="text-4xl font-extrabold text-[#2d366b]">${pass.price}</span>
        {/* <span className="text-xl font-medium text-slate-400 line-through">${pass.oldPrice}</span> */}
      </div>

      {/* Features List */}
      <ul className="space-y-3 text-slate-600">
        {pass.features.map((feature) => (
          <li key={feature.label} className="flex items-center gap-3">
            {feature.included ? (
              <CheckCircle2 size={20} className="text-emerald-500" />
            ) : (
              <XCircle size={20} className="text-slate-400" />
            )}
            <span className={!feature.included ? "text-slate-400 line-through" : ""}>
              {feature.label}
            </span>
          </li>
        ))}
      </ul>

      {/* Spacer to push button to the bottom */}
      <div className="mt-auto pt-8">
        <button
          onClick={() => onBookNow(pass)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2b3267] px-6 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Register Now
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

function RegisterPasses() {
  const navigate = useNavigate();

  const handleBookNow = (pass) => {
    // Navigate to checkout with the selected plan ID
    navigate("/checkout", { state: { registrationData: { planid: pass.planid } } });
  };

  return (
    <>
      <Header />
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#2b3267] sm:text-5xl">
              Book Your Passes Now
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Choose the perfect pass to unlock your conference experience.
            </p>
          </div>
          
          {/* Pricing Cards Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {passes.map((pass) => (
              <PassCard key={pass.name} pass={pass} onBookNow={handleBookNow} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterPasses;