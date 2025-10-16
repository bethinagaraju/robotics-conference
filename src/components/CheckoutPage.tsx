

// // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // import { useLocation, useNavigate } from "react-router-dom";
// // // // // import { WhopCheckoutEmbed } from "@whop/checkout/react";

// // // // // const COLORS = {
// // // // //   primary: "#1A3D8F",
// // // // //   accent: "#FFFFFF",
// // // // //   buttonBlue: "#1571FF",
// // // // //   background: "#4c6ca5",
// // // // // };

// // // // // const plans = [
// // // // //   {
// // // // //     id: "plan_jfnD3Xi7TnAzV",
// // // // //     title: "Delegate Pass",
// // // // //     price: "$899",
// // // // //     description:
// // // // //       "Everything in General Admission plus giveaways, private session and lifetime recording access",
// // // // //   },
// // // // //   {
// // // // //     id: "plan_hLWCDW2D5cK92",
// // // // //     title: "Speaker Pass",
// // // // //     price: "$799",
// // // // //     description:
// // // // //       "3-day LIVE access, combine workbook, and an actionable framework to become profitable",
// // // // //   },
// // // // //   {
// // // // //     id: "plan_qLhtFzRCezWpw",
// // // // //     title: "Poster Pass",
// // // // //     price: "$499",
// // // // //     description:
// // // // //       "Everything in General Admission plus giveaways, private session and lifetime recording access",
// // // // //   },
// // // // // ];

// // // // // const CheckoutPage = () => {
// // // // //   const location = useLocation();
// // // // //   const navigate = useNavigate();
// // // // //   const registrationData = location.state?.registrationData;
// // // // //   const [selectedPlan, setSelectedPlan] = useState(
// // // // //     registrationData?.planid || plans[0].id
// // // // //   );

// // // // //   const leftPanelRef = useRef(null);
// // // // //   const rightPanelRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     if (!registrationData) {
// // // // //       navigate("/register");
// // // // //     }
// // // // //   }, [registrationData, navigate]);

// // // // //   // Sync left panel height with right panel height
// // // // //   useEffect(() => {
// // // // //     function syncHeight() {
// // // // //       if (leftPanelRef.current && rightPanelRef.current) {
// // // // //         leftPanelRef.current.style.height = rightPanelRef.current.offsetHeight + "px";
// // // // //       }
// // // // //     }

// // // // //     syncHeight();
// // // // //     window.addEventListener("resize", syncHeight);

// // // // //     return () => window.removeEventListener("resize", syncHeight);
// // // // //   }, [selectedPlan]);

// // // // //   if (!registrationData) {
// // // // //     return (
// // // // //       <div className="text-center p-4">Redirecting to registration...</div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // // //     <div
// // // // // //       className="min-h-screen flex items-center justify-center p-6"
// // // // // //       style={{
// // // // // //         background: "radial-gradient(circle, rgba(75, 108, 165, 0.94) 33%, rgba(75, 108, 165, 0.81) 66%, rgba(75, 108, 165, 0.7) 100%)",
// // // // // //       }}
// // // // // //     >
// // // // // //       <div className="flex flex-col md:flex-row gap-10 max-w-6xl w-full justify-center">
// // // // // //         {/* --- LEFT: Plan Selection --- */}
// // // // // //         {/* <div
// // // // // //           ref={leftPanelRef}
// // // // // //           className="bg-white border border-orange-800 shadow-md p-8 w-full md:w-[400px] flex flex-col  sticky top-20"
// // // // // //         > */}


// // // // // //           <div
// // // // // //   ref={leftPanelRef}
// // // // // //   className="bg-white shadow-md p-8 w-full md:w-[400px] flex flex-col sticky top-20"
// // // // // //   style={{ height: "400px" }}
// // // // // // >


// // // // // //           <h2
// // // // // //             className="text-2xl font-bold mb-6 text-center"
// // // // // //             style={{ color: COLORS.primary }}
// // // // // //           >
// // // // // //             Choose Your Plan
// // // // // //           </h2>
// // // // // //           <div className="flex flex-col gap-5">
// // // // // //             {plans.map((plan) => (
// // // // // //               <label
// // // // // //                 key={plan.id}
// // // // // //                 className={`flex items-start cursor-pointer border rounded-xl p-4 transition-all duration-300 ${
// // // // // //                   selectedPlan === plan.id
// // // // // //                     ? "border-blue-500 bg-blue-50 shadow-sm"
// // // // // //                     : "border-gray-200 bg-white hover:border-blue-300"
// // // // // //                 }`}
// // // // // //                 onClick={() => setSelectedPlan(plan.id)}
// // // // // //               >
// // // // // //                 {/* Radio */}
// // // // // //                 <div className="mt-1 mr-4">
// // // // // //                   <div
// // // // // //                     className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
// // // // // //                       selectedPlan === plan.id ? "border-blue-600" : "border-gray-400"
// // // // // //                     }`}
// // // // // //                     style={{
// // // // // //                       borderColor: selectedPlan === plan.id ? COLORS.primary : "#ccc",
// // // // // //                       background: selectedPlan === plan.id ? COLORS.buttonBlue : "#fff",
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     {selectedPlan === plan.id && (
// // // // // //                       <span
// // // // // //                         className="w-2.5 h-2.5 rounded-full"
// // // // // //                         style={{ background: COLORS.accent }}
// // // // // //                       ></span>
// // // // // //                     )}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //                 <div className="flex flex-col flex-grow">
// // // // // //                   <div className="flex justify-between items-center mb-1">
// // // // // //                     <span className="font-semibold text-lg" style={{ color: COLORS.primary }}>
// // // // // //                       {plan.title}
// // // // // //                     </span>
// // // // // //                     <span className="text-lg font-bold" style={{ color: COLORS.primary }}>
// // // // // //                       {plan.price}
// // // // // //                     </span>
// // // // // //                   </div>
// // // // // //                   {/* <p className="text-gray-700 text-sm">{plan.description}</p> */}
// // // // // //                 </div>
// // // // // //               </label>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* --- RIGHT: Whop Checkout Embed --- */}
// // // // // //         <div
// // // // // //           ref={rightPanelRef}
// // // // // //           className="bg-white border border-gray-200  shadow-md p-8 w-full md:w-[600px] flex items-center justify-center"
// // // // // //         >
// // // // // //           <div className="w-full">
// // // // // //             <WhopCheckoutEmbed
// // // // // //               key={selectedPlan}
// // // // // //               planId={selectedPlan}
// // // // // //               prefill={{ email: registrationData.email }}
// // // // // //               fallback={
// // // // // //                 <div className="text-center text-gray-600 p-6">Loading checkout...</div>
// // // // // //               }
// // // // // //             />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>

// // // // //     <div
// // // // //   className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-6"
// // // // //   style={{
// // // // //     background:
// // // // //       "radial-gradient(circle, rgba(75, 108, 165, 0.94) 33%, rgba(75, 108, 165, 0.81) 66%, rgba(75, 108, 165, 0.7) 100%)",
// // // // //   }}
// // // // // >
// // // // //   <div className="flex flex-col md:flex-row gap-6 md:gap-10 max-w-6xl w-full justify-center">
// // // // //     {/* --- LEFT: Plan Selection --- */}
// // // // //     {/* <div
// // // // //       ref={leftPanelRef}
// // // // //       className="bg-white shadow-md p-6 md:p-8 w-full md:w-[400px] flex flex-col sticky top-4 md:top-20 max-h-[400px] md:max-h-none overflow-auto rounded-lg border border-orange-800"
// // // // //       style={{ height: "auto", maxHeight: "400px" }}
// // // // //     > */}

// // // // // <div
// // // // //   ref={leftPanelRef}
// // // // //   className="bg-white shadow-md p-6 md:p-8 w-11/12 sm:w-4/5 md:w-[400px] flex flex-col md:sticky top-20 rounded-lg border border-orange-800 max-h-[400px] md:max-h-none overflow-auto"
// // // // //   style={{ height: "auto", maxHeight: "400px" }}
// // // // // >

// // // // //       <h2
// // // // //         className="text-2xl font-bold mb-6 text-center"
// // // // //         style={{ color: COLORS.primary }}
// // // // //       >
// // // // //         Choose Your Plan
// // // // //       </h2>
// // // // //       <div className="flex flex-col gap-4 md:gap-5">
// // // // //         {plans.map((plan) => (
// // // // //           <label
// // // // //             key={plan.id}
// // // // //             className={`flex items-start cursor-pointer border rounded-xl p-4 transition-all duration-300 ${
// // // // //               selectedPlan === plan.id
// // // // //                 ? "border-blue-500 bg-blue-50 shadow-sm"
// // // // //                 : "border-gray-200 bg-white hover:border-blue-300"
// // // // //             }`}
// // // // //             onClick={() => setSelectedPlan(plan.id)}
// // // // //           >
// // // // //             {/* Radio */}
// // // // //             <div className="mt-1 mr-4">
// // // // //               <div
// // // // //                 className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
// // // // //                   selectedPlan === plan.id ? "border-blue-600" : "border-gray-400"
// // // // //                 }`}
// // // // //                 style={{
// // // // //                   borderColor: selectedPlan === plan.id ? COLORS.primary : "#ccc",
// // // // //                   background: selectedPlan === plan.id ? COLORS.buttonBlue : "#fff",
// // // // //                 }}
// // // // //               >
// // // // //                 {selectedPlan === plan.id && (
// // // // //                   <span
// // // // //                     className="w-2.5 h-2.5 rounded-full"
// // // // //                     style={{ background: COLORS.accent }}
// // // // //                   ></span>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>
// // // // //             <div className="flex flex-col flex-grow">
// // // // //               <div className="flex justify-between items-center mb-1">
// // // // //                 <span className="font-semibold text-lg" style={{ color: COLORS.primary }}>
// // // // //                   {plan.title}
// // // // //                 </span>
// // // // //                 <span className="text-lg font-bold" style={{ color: COLORS.primary }}>
// // // // //                   {plan.price}
// // // // //                 </span>
// // // // //               </div>
// // // // //             </div>
// // // // //           </label>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>

// // // // //     {/* --- RIGHT: Whop Checkout Embed --- */}
// // // // //     <div
// // // // //       ref={rightPanelRef}
// // // // //       className="bg-white border border-gray-200 shadow-md p-6 md:p-8 w-full md:w-[600px] flex items-center justify-center rounded-lg"
// // // // //     >
// // // // //       <div className="w-full">
// // // // //         <WhopCheckoutEmbed
// // // // //           key={selectedPlan}
// // // // //           planId={selectedPlan}
// // // // //           prefill={{ email: registrationData.email }}
// // // // //           fallback={
// // // // //             <div className="text-center text-gray-600 p-6">Loading checkout...</div>
// // // // //           }
// // // // //         />
// // // // //       </div>
// // // // //     </div>
// // // // //   </div>
// // // // // </div>


// // // // //   );
// // // // // };

// // // // // export default CheckoutPage;




// // // // import React, { useState, useEffect, useRef } from "react";
// // // // import { useLocation, useNavigate } from "react-router-dom";
// // // // import { WhopCheckoutEmbed } from "@whop/checkout/react";

// // // // const COLORS = {
// // // //   primary: "#1A3D8F",
// // // //   accent: "#FFFFFF",
// // // //   buttonBlue: "#1571FF",
// // // //   background: "#4c6ca5",
// // // // };

// // // // const plans = [
// // // //   {
// // // //     id: "plan_jfnD3Xi7TnAzV",
// // // //     title: "Delegate Pass",
// // // //     price: "$899",
// // // //     description:
// // // //       "Everything in General Admission plus giveaways, private session and lifetime recording access",
// // // //   },
// // // //   {
// // // //     id: "plan_hLWCDW2D5cK92",
// // // //     title: "Speaker Pass",
// // // //     price: "$799",
// // // //     description:
// // // //       "3-day LIVE access, combine workbook, and an actionable framework to become profitable",
// // // //   },
// // // //   {
// // // //     id: "plan_qLhtFzRCezWpw",
// // // //     title: "Poster Pass",
// // // //     price: "$499",
// // // //     description:
// // // //       "Everything in General Admission plus giveaways, private session and lifetime recording access",
// // // //   },
// // // // ];

// // // // const CheckoutPage = () => {
// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();
// // // //   const registrationData = location.state?.registrationData;
// // // //   const [selectedPlan, setSelectedPlan] = useState(
// // // //     registrationData?.planid || plans[0].id
// // // //   );

// // // //   useEffect(() => {
// // // //     if (!registrationData) {
// // // //       navigate("/register");
// // // //     }
// // // //   }, [registrationData, navigate]);

// // // //   if (!registrationData) {
// // // //     return (
// // // //       <div className="text-center p-4">Redirecting to registration...</div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div
// // // //       className="min-h-screen flex flex-col items-center justify-center p-2 md:p-6"
// // // //       style={{
// // // //         background:
// // // //           "radial-gradient(circle, rgba(75, 108, 165, 0.94) 33%, rgba(75, 108, 165, 0.81) 66%, rgba(75, 108, 165, 0.7) 100%)",
// // // //       }}
// // // //     >
// // // //       <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4 md:gap-10 justify-center">
// // // //         {/* --- LEFT: Plan Selection --- */}
// // // //         <div
// // // //           className="
// // // //             bg-white shadow-md p-4 md:p-8
// // // //             w-[95%] sm:w-4/5 md:w-[400px] 
// // // //             flex flex-col
// // // //             mx-auto
// // // //             md:sticky md:top-20
// // // //             max-w-md
// // // //           "
// // // //           style={{
// // // //             marginBottom: "16px",
// // // //             maxHeight: "400px",
// // // //             height: "auto",
// // // //           }}
// // // //         >
// // // //           <h2
// // // //             className="text-2xl font-bold mb-6 text-center"
// // // //             style={{ color: COLORS.primary }}
// // // //           >
// // // //             Choose Your Plan
// // // //           </h2>
// // // //           <div className="flex flex-col gap-3">
// // // //             {plans.map((plan) => (
// // // //               <label
// // // //                 key={plan.id}
// // // //                 className={`flex items-start cursor-pointer border rounded-xl p-4 transition-all duration-300 ${
// // // //                   selectedPlan === plan.id
// // // //                     ? "border-blue-500 bg-blue-50 shadow-sm"
// // // //                     : "border-gray-200 bg-white hover:border-blue-300"
// // // //                 }`}
// // // //                 onClick={() => setSelectedPlan(plan.id)}
// // // //               >
// // // //                 {/* Radio */}
// // // //                 <div className="mt-1 mr-4">
// // // //                   <div
// // // //                     className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
// // // //                       selectedPlan === plan.id
// // // //                         ? "border-blue-600"
// // // //                         : "border-gray-400"
// // // //                     }`}
// // // //                     style={{
// // // //                       borderColor:
// // // //                         selectedPlan === plan.id ? COLORS.primary : "#ccc",
// // // //                       background:
// // // //                         selectedPlan === plan.id
// // // //                           ? COLORS.buttonBlue
// // // //                           : "#fff",
// // // //                     }}
// // // //                   >
// // // //                     {selectedPlan === plan.id && (
// // // //                       <span
// // // //                         className="w-2.5 h-2.5 rounded-full"
// // // //                         style={{ background: COLORS.accent }}
// // // //                       ></span>
// // // //                     )}
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="flex flex-col flex-grow">
// // // //                   <div className="flex justify-between items-center mb-0">
// // // //                     <span
// // // //                       className="font-semibold text-base md:text-base"
// // // //                       style={{ color: COLORS.primary }}
// // // //                     >
// // // //                       {plan.title}
// // // //                     </span>
// // // //                     <span
// // // //                       className="text-base font-bold"
// // // //                       style={{ color: COLORS.primary }}
// // // //                     >
// // // //                       {plan.price}
// // // //                     </span>
// // // //                   </div>
// // // //                 </div>
// // // //               </label>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* --- RIGHT: Whop Checkout Embed --- */}
// // // //         <div
// // // //           className="
// // // //             bg-white border border-gray-200 shadow-md p-4 md:p-8 
// // // //             w-[95%] sm:w-4/5 md:w-[600px]
// // // //             flex items-center justify-center
// // // //             rounded-lg
// // // //             mx-auto
// // // //             max-w-2xl
// // // //           "
// // // //         >
// // // //           <div className="w-full">
// // // //             <WhopCheckoutEmbed
// // // //               key={selectedPlan}
// // // //               planId={selectedPlan}
// // // //               prefill={{ email: registrationData.email }}
// // // //               fallback={
// // // //                 <div className="text-center text-gray-600 p-6">
// // // //                   Loading checkout...
// // // //                 </div>
// // // //               }
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CheckoutPage;



// // // import { WhopCheckoutEmbed } from "@whop/checkout/react";
// // // import { useState } from "react";

// // // const PLAN_OPTIONS = [
// // //   {
// // //     planId: "plan_jfnD3Xi7TnAzV",
// // //     bundledPlanId: "plan_bxNJp9Vm3AKSS",
// // //     title: "Delegate Pass",
// // //     price: "$899",
// // //     description: "",
// // //   },
// // //   {
// // //     planId: "plan_hLWCDW2D5cK92",
// // //     bundledPlanId: "plan_bxNJp9Vm3AKSS",
// // //     title: "Speaker Pass",
// // //     price: "$799",
// // //     description: "",
// // //   },
// // //   {
// // //     planId: "plan_qLhtFzRCezWpw",
// // //     bundledPlanId: "plan_bxNJp9Vm3AKSS",
// // //     title: "Poster Pass",
// // //     price: "$499",
// // //     description: "",
// // //   },
// // // ];

// // // export default function CheckoutPage() {
// // //   const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
// // //   const [addonEnabled, setAddonEnabled] = useState(false);

// // //   const getCurrentPlanId = () => {
// // //     const selectedPlan = PLAN_OPTIONS[selectedPlanIndex];
// // //     if (addonEnabled && selectedPlan.bundledPlanId) {
// // //       return selectedPlan.bundledPlanId;
// // //     }
// // //     return selectedPlan.planId;
// // //   };

// // //   const currentPlanId = getCurrentPlanId();

// // //   return (
// // //     <section className="flex justify-center">
// // //     <div className="w-[720px] p-6">
// // //       {/* Plan Selection */}
// // //       <div className="mb-6">
// // //         <h3 className="text-lg font-semibold mb-4">Choose Plan</h3>
// // //         <div className="space-y-2">
// // //           {PLAN_OPTIONS.map((plan, index) => (
// // //             <label
// // //               key={plan.planId}
// // //               className={`p-4 border-2 rounded-lg cursor-pointer transition-all flex items-center justify-between ${
// // //                 selectedPlanIndex === index
// // //                   ? "border-blue-500 shadow-inner"
// // //                   : "border-gray-200 hover:border-gray-300"
// // //               }`}
// // //               onClick={() => setSelectedPlanIndex(index)}
// // //             >
// // //               <div className="flex items-center gap-3">
// // //                 <input
// // //                   type="radio"
// // //                   name="plan"
// // //                   value={plan.planId}
// // //                   checked={selectedPlanIndex === index}
// // //                   onChange={() => setSelectedPlanIndex(index)}
// // //                   className="w-4 h-4"
// // //                 />
// // //                 <div>
// // //                   <span className="font-medium">{plan.title}</span>
// // //                   {plan.description && (
// // //                     <div className="text-sm text-gray-500">
// // //                       {plan.description}
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //               <span className="font-bold">{plan.price}</span>
// // //             </label>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <div className="flex justify-center">
// // //         <span>Allow 30 seconds for the secure checkout form to load </span>
// // //       </div>


// // //             {/* Addon Section */}
// // //       <div className="mt-6">
// // //         <h3 className="text-lg font-semibold mb-4">Add Extra Features</h3>
// // //         <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all hover:border-blue-300">
// // //           <input
// // //             type="checkbox"
// // //             checked={addonEnabled}
// // //             onChange={(e) => setAddonEnabled(e.target.checked)}
// // //             className="w-4 h-4"
// // //           />
// // //           <div className="flex-1">
// // //             <div className="font-medium">Accommodation</div>
// // //             <div className="text-sm text-gray-500">3 days 2 nights</div>
// // //             <div className="text-sm font-semibold text-blue-600">$600</div>
// // //           </div>
// // //         </label>
// // //       </div>

// // //       {/* Checkout Embed */}
// // //       <div key={currentPlanId} className="mt-6">
// // //         <WhopCheckoutEmbed
// // //           planId={currentPlanId}
// // //           themeOptions={{ accentColor: "indigo" }}
// // //         />
// // //       </div>

// // //       <div>
// // //         <img src="osw2Hf0fZX9pSNWLIAiPtuJe0.png" alt="logo" className="h-12 mt-4 mx-auto rotate-180" />
// // //       </div>
        
// // //       <div>
// // //         <img src="x268oLsQqFe0ShgEiYVSNqArL0E.avif" alt="logo" className="h-24 mt-4 mx-auto" />
// // //       </div>


// // //     </div>
// // //     </section>
// // //   );
// // // }



// // import { WhopCheckoutEmbed } from "@whop/checkout/react";
// // import { useState } from "react";

// // const PLAN_OPTIONS = [
// //   {
// //     planId: "plan_jfnD3Xi7TnAzV",
// //     bundledPlanId: "plan_bxNJp9Vm3AKSS",
// //     title: "Delegate Pass",
// //     price: "$899",
// //     description: "Includes full access to both conference and exhibition sessions.",
// //   },
// //   {
// //     planId: "plan_hLWCDW2D5cK92",
// //     bundledPlanId: "plan_bxNJp9Vm3AKSS",
// //     title: "Speaker Pass",
// //     price: "$799",
// //     description: "Designed for speakers with exclusive backstage access.",
// //   },
// //   {
// //     planId: "plan_qLhtFzRCezWpw",
// //     bundledPlanId: "plan_bxNJp9Vm3AKSS",
// //     title: "Poster Pass",
// //     price: "$499",
// //     description: "Access to exhibition areas and poster presentation zone.",
// //   },
// // ];

// // export default function CheckoutPage() {
// //   const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
// //   const [addonEnabled, setAddonEnabled] = useState(false);

// //   const getCurrentPlanId = () => {
// //     const selectedPlan = PLAN_OPTIONS[selectedPlanIndex];
// //     return addonEnabled && selectedPlan.bundledPlanId
// //       ? selectedPlan.bundledPlanId
// //       : selectedPlan.planId;
// //   };

// //   const currentPlanId = getCurrentPlanId();

// //   return (
// //     <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex justify-center py-12 px-4">
// //       <div className="w-full max-w-3xl rounded-2xl p-8 ">
// //         {/* Header */}
// //         <div className="text-center mb-10">
// //           <h1 className="text-3xl font-bold text-[#5c52d1]">
// //             Secure Your Seat Today
// //           </h1>
// //           <p className="text-gray-500 mt-2">
// //             Secure your seat today. Choose your pass and optional add-ons.
// //           </p>
// //         </div>

// //         {/* Plan Selection */}
// //         <div className="mb-10">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4">
// //             Choose Your Plan
// //           </h3>
// //           <div className="grid gap-4">
// //             {PLAN_OPTIONS.map((plan, index) => (
// //               <label
// //                 key={plan.planId}
// //                 className={`p-5 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md flex justify-between items-center ${
// //                   selectedPlanIndex === index
// //                     ? "border-indigo-500 bg-indigo-50"
// //                     : "border-gray-200 bg-white"
// //                 }`}
// //                 onClick={() => setSelectedPlanIndex(index)}
// //               >
// //                 <div className="flex items-start gap-3">
// //                   <input
// //                     type="radio"
// //                     name="plan"
// //                     checked={selectedPlanIndex === index}
// //                     onChange={() => setSelectedPlanIndex(index)}
// //                     className="mt-1 w-5 h-5 text-indigo-600 focus:ring-indigo-500"
// //                   />
// //                   <div>
// //                     <div className="font-semibold text-gray-800">
// //                       {plan.title}
// //                     </div>
// //                     {/* <p className="text-sm text-gray-500 mt-1">
// //                       {plan.description}
// //                     </p> */}
// //                   </div>
// //                 </div>
// //                 <span className="font-bold text-indigo-700 text-lg">
// //                   {plan.price}
// //                 </span>
// //               </label>
// //             ))}
// //           </div>
// //         </div>

// //                 <p className="text-center text-yellow-500 text-sm mb-8">
// //           Please allow 30 seconds for the secure checkout form to load.
// //         </p>

// //         {/* Addon Section */}
// //         <div className="mb-10">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4">
// //             Add Extra Features
// //           </h3>
// //           <label
// //             className={`p-5 border-2 rounded-xl flex items-center justify-between cursor-pointer transition-all ${
// //               addonEnabled ? "border-indigo-500 bg-indigo-50" : "border-gray-200 bg-white hover:shadow-md"
// //             }`}
// //           >
// //             <div className="flex items-center gap-4">
// //               <input
// //                 type="checkbox"
// //                 checked={addonEnabled}
// //                 onChange={(e) => setAddonEnabled(e.target.checked)}
// //                 className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
// //               />
// //               <div>
// //                 <div className="font-medium text-gray-800">
// //                   Accommodation Package
// //                 </div>
// //                 <div className="text-sm text-gray-500">3 days, 2 nights stay</div>
// //               </div>
// //             </div>
// //             <span className="text-indigo-700 font-semibold">$600</span>
// //           </label>
// //         </div>

// //         {/* Checkout Embed */}
// //         <div className="mb-8 overflow-hidden">
// //           <div key={currentPlanId} className="p-4">
// //             <WhopCheckoutEmbed
// //               planId={currentPlanId}
// //               themeOptions={{ accentColor: "indigo" }}
// //             />
// //           </div>
// //         </div>

// //         {/* Note */}


// //         {/* Logos */}
// //         <div className="flex flex-col items-center gap-8 mt-0">
// //           <img
// //             src="osw2Hf0fZX9pSNWLIAiPtuJe0.png"
// //             alt="logo"
// //             className="h-10 opacity-80 hover:opacity-100 transition transform rotate-180"
// //           />
// //           <img
// //             src="x268oLsQqFe0ShgEiYVSNqArL0E.avif"
// //             alt="logo"
// //             className="h-20 opacity-90 hover:opacity-100 transition"
// //           />
// //         </div>

// //         {/* Footer */}
// //         <div className="mt-10 text-center text-sm text-gray-400">
// //           © {new Date().getFullYear()} Robotics Conference. All rights reserved.
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import { WhopCheckoutEmbed } from "@whop/checkout/react";
// import { useState } from "react";

// const PLAN_OPTIONS = [
//   {
//     planId: "plan_jfnD3Xi7TnAzV",
//     bundledPlanId: "plan_bxNJp9Vm3AKSS",
//     title: "Delegate Pass",
//     price: "$899",
//     description:
//       "Includes full access to both conference and exhibition sessions.",
//   },
//   {
//     planId: "plan_hLWCDW2D5cK92",
//     bundledPlanId: "plan_bxNJp9Vm3AKSS",
//     title: "Speaker Pass",
//     price: "$799",
//     description: "Designed for speakers with exclusive backstage access.",
//   },
//   {
//     planId: "plan_qLhtFzRCezWpw",
//     bundledPlanId: "plan_bxNJp9Vm3AKSS",
//     title: "Poster Pass",
//     price: "$499",
//     description: "Access to exhibition areas and poster presentation zone.",
//   },
// ];

// export default function CheckoutPage() {
//   const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
//   const [addonEnabled, setAddonEnabled] = useState(false);

//   const getCurrentPlanId = () => {
//     const selectedPlan = PLAN_OPTIONS[selectedPlanIndex];
//     return addonEnabled && selectedPlan.bundledPlanId
//       ? selectedPlan.bundledPlanId
//       : selectedPlan.planId;
//   };

//   const currentPlanId = getCurrentPlanId();

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex justify-center py-10 px-4 sm:px-6">
//       <div className="w-full max-w-3xl rounded-2xl p-6 sm:p-8 bg-white shadow-lg border border-gray-100">
//         {/* Header */}
//         <div className="text-center mb-8 sm:mb-10">
//           <h1 className="text-2xl sm:text-3xl font-bold text-[#5c52d1] leading-tight">
//             Secure Your Seat Today
//           </h1>
//           <p className="text-gray-500 mt-2 text-sm sm:text-base">
//             Choose your pass and optional add-ons for the upcoming conference.
//           </p>
//         </div>

//         {/* Plan Selection */}
//         <div className="mb-8 sm:mb-10">
//           <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
//             Choose Your Plan
//           </h3>
//           <div className="grid gap-3 sm:gap-4">
//             {PLAN_OPTIONS.map((plan, index) => (
//               <label
//                 key={plan.planId}
//                 className={`p-4 sm:p-5 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 ${
//                   selectedPlanIndex === index
//                     ? "border-indigo-500 bg-indigo-50"
//                     : "border-gray-200 bg-white"
//                 }`}
//                 onClick={() => setSelectedPlanIndex(index)}
//               >
//                 <div className="flex items-start gap-3">
//                   <input
//                     type="radio"
//                     name="plan"
//                     checked={selectedPlanIndex === index}
//                     onChange={() => setSelectedPlanIndex(index)}
//                     className="mt-1 w-5 h-5 text-indigo-600 focus:ring-indigo-500"
//                   />
//                   <div>
//                     <div className="font-semibold text-gray-800 text-sm sm:text-base">
//                       {plan.title}
//                     </div>
//                     {/* Uncomment if you want to show description */}
//                     {/* <p className="text-xs sm:text-sm text-gray-500 mt-1">
//                       {plan.description}
//                     </p> */}
//                   </div>
//                 </div>
//                 <span className="font-bold text-indigo-700 text-base sm:text-lg">
//                   {plan.price}
//                 </span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Load note */}
//         <p className="text-center text-yellow-500 text-xs sm:text-sm mb-8">
//           Please allow 30 seconds for the secure checkout form to load.
//         </p>

//         {/* Addon Section */}
//         <div className="mb-8 sm:mb-10">
//           <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
//             Add Extra Features
//           </h3>
//           <label
//             className={`p-4 sm:p-5 border-2 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 cursor-pointer transition-all ${
//               addonEnabled
//                 ? "border-indigo-500 bg-indigo-50"
//                 : "border-gray-200 bg-white hover:shadow-md"
//             }`}
//           >
//             <div className="flex items-center gap-3">
//               <input
//                 type="checkbox"
//                 checked={addonEnabled}
//                 onChange={(e) => setAddonEnabled(e.target.checked)}
//                 className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
//               />
//               <div>
//                 <div className="font-medium text-gray-800 text-sm sm:text-base">
//                   Accommodation Package
//                 </div>
//                 <div className="text-xs sm:text-sm text-gray-500">
//                   3 days, 2 nights stay
//                 </div>
//               </div>
//             </div>
//             <span className="text-indigo-700 font-semibold text-sm sm:text-lg">
//               $600
//             </span>
//           </label>
//         </div>

//         {/* Checkout Embed */}
//         <div className="mb-8 overflow-hidden border rounded-xl">
//           <div key={currentPlanId} className="p-2 sm:p-4">
//             <WhopCheckoutEmbed
//               planId={currentPlanId}
//               themeOptions={{ accentColor: "indigo" }}
//             />
//           </div>
//         </div>

//         {/* Logos */}
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6 sm:mt-10">
//           <img
//             src="osw2Hf0fZX9pSNWLIAiPtuJe0.png"
//             alt="logo"
//             className="h-8 sm:h-10 opacity-80 hover:opacity-100 transition transform rotate-180"
//           />
//           <img
//             src="x268oLsQqFe0ShgEiYVSNqArL0E.avif"
//             alt="logo"
//             className="h-14 sm:h-20 opacity-90 hover:opacity-100 transition"
//           />
//         </div>

//         {/* Footer */}
//         <div className="mt-8 sm:mt-10 text-center text-xs sm:text-sm text-gray-400">
//           © {new Date().getFullYear()} Robotics Conference. All rights reserved.
//         </div>
//       </div>
//     </section>
//   );
// }



import { WhopCheckoutEmbed } from "@whop/checkout/react";
import { useState } from "react";

const PLAN_OPTIONS = [
  {
    planId: "plan_jfnD3Xi7TnAzV",
    bundledPlanId: "plan_bxNJp9Vm3AKSS",
    title: "Delegate Pass",
    price: "$899",
  },
  {
    planId: "plan_hLWCDW2D5cK92",
    bundledPlanId: "plan_bxNJp9Vm3AKSS",
    title: "Speaker Pass",
    price: "$799",
  },
  {
    planId: "plan_qLhtFzRCezWpw",
    bundledPlanId: "plan_bxNJp9Vm3AKSS",
    title: "Poster Pass",
    price: "$499",
  },
];

export default function CheckoutPage() {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [addonEnabled, setAddonEnabled] = useState(false);

  // This function correctly determines which plan ID to use based on user selection
  const getCurrentPlanId = () => {
    const selectedPlan = PLAN_OPTIONS[selectedPlanIndex];
    return addonEnabled && selectedPlan.bundledPlanId
      ? selectedPlan.bundledPlanId
      : selectedPlan.planId;
  };

  const currentPlanId = getCurrentPlanId();

  return (
    <section className="min-h-screen bg-gray-50 flex justify-center py-6 px-4">
      <div className="w-full max-w-2xl rounded-2xl p-5 sm:p-8 bg-white shadow-lg border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">

          <h1 className="text-2xl sm:text-3xl font-bold text-[#5c52d1]">
            Secure Your Seat Today
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            Choose your pass for the Artificial Intelligence, Machine Learning and Robotics Conference.
          </p>

        </div>

        {/* Plan Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Choose Your Plan
          </h3>
          <div className="grid gap-3">
            {PLAN_OPTIONS.map((plan, index) => (
              <label
                key={plan.planId}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex justify-between items-center ${
                  selectedPlanIndex === index
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
                onClick={() => setSelectedPlanIndex(index)}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="plan"
                    checked={selectedPlanIndex === index}
                    onChange={() => setSelectedPlanIndex(index)}
                    className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">
                    {plan.title}
                  </span>
                </div>
                <span className="font-bold text-indigo-700 text-base">
                  {plan.price}
                </span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Addon Section */}
        {/* <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Add Accommodation
          </h3>
          <label
            className={`p-4 border-2 rounded-xl flex items-center justify-between cursor-pointer transition-all ${
              addonEnabled
                ? "border-indigo-500 bg-indigo-50"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={addonEnabled}
                onChange={(e) => setAddonEnabled(e.target.checked)}
                className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <div>
                <div className="font-medium text-gray-800 text-sm sm:text-base">
                  Accommodation Package
                </div>
                <div className="text-xs text-gray-500">
                  3 days, 2 nights stay
                </div>
              </div>
            </div>
            <span className="text-indigo-700 font-semibold text-base">
              $600
            </span>
          </label>
        </div> */}

        {/* Informational Note */}
        <p className="text-center text-black-600 p-2 rounded-md text-xs mb-6">
          Please allow 30 seconds for the secure checkout form to load.
        </p>

        {/* Checkout Embed: This is where the form from your image is rendered */}
        <div className="overflow-hidden border rounded-xl">
          <div key={currentPlanId}>
            <WhopCheckoutEmbed
              planId={currentPlanId}
              themeOptions={{ accentColor: "indigo" }}
            />
          </div>
        </div>

              {/* Logos */}     
        <div className="flex flex-col sm:flex-col justify-center items-center gap-2 mt-0 sm:mt-10">
          <img
            src="osw2Hf0fZX9pSNWLIAiPtuJe0.png"
            alt="logo"
            className="h-8 sm:h-10 opacity-80 hover:opacity-100 transition transform rotate-180"
          />
          <div className="mt-4 sm:mt-6">
            <img
              src="x268oLsQqFe0ShgEiYVSNqArL0E.avif"
              alt="logo"
              className="h-14 sm:h-20 opacity-90 hover:opacity-100 transition"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Robotics Conference. All rights reserved.
        </div>
      </div>
    </section>
  );
}