// import React from 'react';
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaInstagram,
//   FaYoutube,
// //   FaXTwitter,
//   FaThumbsUp,
//   FaCalendarAlt,
//   FaLink,
//   FaAt,
// } from 'react-icons/fa';
// import { FaCookieBite } from "react-icons/fa6";
// // import FaXTwitter from 'react-icons/fa';


// const EndFooter: React.FC = () => {
//   return (
//     <footer className="bg-gray-100 text-[#002d45] text-sm">


//       {/* Top section */}
//       <div className="container mx-auto px-16 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-300">
//         {/* Opening Times */}
//         <div>
//           <h3 className="flex items-center gap-2 text-teal-500 font-semibold text-lg mb-4">
//             <FaCalendarAlt /> OPENING TIMES
//           </h3>
//           <ul className="mb-4 space-y-2">
//             <li><strong>Tuesday 19 May 2026:</strong> 09:30 – 17:00</li>
//             <li><strong>Wednesday 20 May 2026:</strong> 10:00 – 17:00</li>
//             <li><strong>Thursday 21 May 2026:</strong> 10:00 – 17:00</li>
//           </ul>
//           <button className="bg-[#0a1437] text-white py-2 px-4 rounded">ADD TO CALENDAR</button>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="flex items-center gap-2 text-teal-500 font-semibold text-lg mb-4">
//             <FaLink /> QUICK LINKS
//           </h3>
//           <ul className="space-y-2 underline underline-offset-2">
//             <li>Book a Stand</li>
//             <li>Become a Sponsor</li>
//             <li>Visitor Registration</li>
//           </ul>
//           <h3 className="flex items-center gap-2 text-teal-500 font-semibold text-lg mt-6 mb-2">
//             <FaThumbsUp /> FOLLOW US
//           </h3>
//           <div className="flex items-center space-x-4 text-2xl mt-2">
//             <FaFacebookF />
//             {/* <FaXTwitter /> */}
//             <FaLinkedinIn />
//             <FaYoutube />
//             <FaInstagram />
//           </div>
//         </div>

//         {/* Contact Us */}
//         <div className="md:col-span-2">
//           <h3 className="flex items-center gap-2 text-teal-500 font-semibold text-lg mb-4">
//             <FaAt /> CONTACT US
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <p><strong>General Enquiry</strong></p>
//               <p>enquiries@worldutilitiescongress.com</p>
//             </div>
//             <div>
//               <p><strong>Marketing Enquiry</strong></p>
//               <p>marketing@worldutilitiescongress.com</p>
//             </div>
//             <div>
//               <p><strong>Sales Enquiry</strong></p>
//               <p>sales@worldutilitiescongress.com</p>
//             </div>
//             <div>
//               <p><strong>Sponsorship Enquiry</strong></p>
//               <p>sponsorship@worldutilitiescongress.com</p>
//             </div>
//             <div>
//               <p><strong>Conference Enquiry</strong></p>
//               <p>conferences@worldutilitiescongress.com</p>
//             </div>
//             <div>
//               <p><strong>Delegate Enquiry</strong></p>
//               <p>delegate@worldutilitiescongress.com</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom section */}

//       {/* <div className="bg-[#4c5d6c] text-white px-4 py-6">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
//           <img src="/logo-footer.png" alt="dmg events" className="h-10" />

//           <ul className="flex flex-wrap gap-4 text-sm text-white/90">
//             <li>ABOUT US</li>
//             <li>CAREERS</li>
//             <li>PRIVACY POLICY</li>
//             <li>COOKIE POLICY</li>
//             <li>COOKIES SETTINGS</li>
//             <li>CONTACT US</li>
//           </ul>
//         </div>

//         <hr className="my-4 border-white/30" />

//         <div className="container mx-auto text-center text-sm text-white/80">
//           dmg events is an international exhibition and conference organiser, publisher and
//           information provider to the Energy, Construction, Plastics, Coatings, Manufacturing,
//           Transport, Security, Interiors and Hospitality industries.
//         </div>
//       </div> */}


//       <div className="bg-[#4c5d6c] text-white px-4 pt-10 pb-6 relative">
//       <div className="container mx-auto flex flex-col items-center gap-6">
//         {/* Logo */}
//         <img src="/logo-footer.png" alt="dmg events" className="h-8 md:h-10" />

//         {/* Social Icons */}
//         <div className="flex gap-4">
//           <a href="#" className="bg-white text-[#4c5d6c] p-2 rounded-full">
//             <FaLinkedinIn />
//           </a>
//           <a href="#" className="bg-white text-[#4c5d6c] p-2 rounded-full">
//             <FaFacebookF />
//           </a>
//           <a href="#" className="bg-white text-[#4c5d6c] p-2 rounded-full">
//             {/* <FaXTwitter /> */}
//           </a>
//         </div>

//         {/* Navigation */}
//         <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-white/90 border-t border-white/40 border-b py-3 w-full max-w-4xl">
//           <li>ABOUT US</li>
//           <li>CAREERS</li>
//           <li>PRIVACY POLICY</li>
//           <li>COOKIE POLICY</li>
//           <li>COOKIES SETTINGS</li>
//           <li>CONTACT US</li>
//         </ul>

//         {/* Members row */}
//         <div className="flex items-center gap-4 justify-center text-sm mt-2">
//           <span className="text-white/80 font-light">MEMBER OF</span>
//           <img src="/ufi.png" alt="ufi" className="h-6" />
//           <img src="/siso.png" alt="siso" className="h-6" />
//           <img src="/aeo.png" alt="aeo" className="h-6" />
//           <img src="/asso.png" alt="association" className="h-6" />
//         </div>

//         {/* Description */}
//         <div className="text-center text-sm text-white/80 max-w-3xl mt-4">
//           dmg events is an international exhibition and conference organiser, publisher and
//           information provider to the Energy, Construction, Plastics, Coatings, Manufacturing,
//           Transport, Security, Interiors and Hospitality industries.
//         </div>
//       </div>

//       {/* Cookie Icon */}
//       <div className="fixed bottom-4 left-4 z-50">
//         <FaCookieBite className="w-12 h-12 text-black" />
//       </div>
//     </div>

//     </footer>
//   );
// };

// export default EndFooter;







import React, { useState } from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaThumbsUp,
  FaCalendarAlt,
  FaLink,
  FaAt,
} from 'react-icons/fa';
import { FaCookieBite } from 'react-icons/fa6';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const EndFooter: React.FC = () => {
  const [visibleLeft, setVisibleLeft] = useState(false); // Sidebar state

  return (
    <footer className="bg-gray-100 text-[#002d45] text-sm">


      <Sidebar
  visible={visibleLeft}
  position="left"
  onHide={() => setVisibleLeft(false)}
  style={{ width: '100%', maxWidth: '500px', background: 'white' }}
  showCloseIcon={true}
>
  <div className="p-6 text-[#002d45] text-sm space-y-6">

    {/* <div className="w-full pb-4 border-b border-gray-400">
        <img src="dmg-600.png" alt="dmg events" className="h-6" />
    </div> */}
    {/* Header */}
    <div>
      {/* <img src="/logo-footer.png" alt="dmg events" className="h-6 mb-3" /> */}
      <h2 className="text-xl font-semibold">Privacy Preference Center</h2>
      <p className="mt-2 text-gray-700">
        When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to.
      </p>
      <p className="mt-2 text-gray-700">
        The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings.
      </p>
      <p className="mt-2 text-gray-700">
        However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.
      </p>
      <a href="#" className="underline text-blue-600 mt-2 block">More information</a>
    </div>

    {/* Consent Preferences */}
    <div>
      <h3 className="text-base font-semibold mb-4">Manage Consent Preferences</h3>
      <div className="border border-gray-300 rounded overflow-hidden">
        {/* Item 1 */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <button className="font-medium">+ Strictly Necessary Cookies</button>
          <span className="text-blue-700 font-semibold text-sm">Always Active</span>
        </div>

        {/* Item 2 */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <button className="font-medium">+ Targeting Cookies</button>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
          </label>
        </div>

        {/* Item 3 */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <button className="font-medium">+ Analytics Cookies</button>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
          </label>
        </div>

        {/* Item 4 */}
        <div className="flex justify-between items-center px-4 py-3">
          <button className="font-medium">+ Social Media Cookies</button>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
          </label>
        </div>
      </div>
    </div>

    {/* Footer buttons */}
    <div className="flex justify-between gap-4 pt-4">
      <button className="flex-1 bg-black text-white py-2 font-semibold" onClick={() => setVisibleLeft(false)}>Reject All</button>
      <button className="flex-1 bg-yellow-300 hover:bg-yellow-400 text-black py-2 font-semibold" onClick={() => setVisibleLeft(false)}>Confirm My Choices</button>
    </div>

    {/* Onetrust footer */}
    <div className="text-xs text-gray-400 text-center mt-4">
      Powered by <span className="font-semibold">onetrust</span>
    </div>
  </div>
</Sidebar>
  

      {/* Top section */}
      <div className="container mx-auto px-16 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-300">
        {/* Opening Times */}
        <div>
          <h3 className="flex items-center gap-2 text-[#2e376d] font-semibold text-lg mb-4">
            <FaCalendarAlt /> OPENING TIMES
          </h3>
          <ul className="mb-4 space-y-2">
            <li><strong>Wednesday 28 July 2026:</strong> 09:30 – 17:00</li>
            <li><strong>Thursday 29 July 2026:</strong> 10:00 – 17:00</li>
            <li><strong>Friday 30 July 2026:</strong> 10:00 – 17:00</li>
          </ul>
          <button className="bg-[#3f558d] text-white py-2 px-4 rounded">ADD TO CALENDAR</button>
        </div>

        {/* Quick Links */}
        <div>

          <h3 className="flex items-center gap-2 text-[#2e376d] font-semibold text-lg mb-4">
            <FaLink /> QUICK LINKS
          </h3>

          <ul className="space-y-2 underline underline-offset-2">
            <li>Book a Stand</li>
            <li>Become a Sponsor</li>
            <li>Visitor Registration</li>
          </ul>

          <h3 className="flex items-center gap-2 text-[#2e376d] font-semibold text-lg mt-6 mb-2">
            <FaThumbsUp /> FOLLOW US
          </h3>

          <div className="flex items-center space-x-4 text-2xl mt-2">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        {/* Contact Us */}
        <div className="md:col-span-2">

          <h3 className="flex items-center gap-2 text-[#2e376d] font-semibold text-lg mb-4">
            <FaAt /> CONTACT US
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p><strong>General Enquiry</strong></p>
              <p>secretary@theroboticssummit.com</p>
            </div>
            <div>
              <p><strong>Marketing Enquiry</strong></p>
              <p>marketing@theroboticssummit.com</p>
            </div>
            <div>
              <p><strong>Sales Enquiry</strong></p>
              <p>sales@theroboticssummit.com</p>
            </div>
            <div>
              <p><strong>Sponsorship Enquiry</strong></p>
              <p>sponsorship@theroboticssummit.com</p>
            </div>
            <div>
              <p><strong>Conference Enquiry</strong></p>
              <p>conferences@theroboticssummit.com</p>
            </div>
            <div>
              <p><strong>Delegate Enquiry</strong></p>
              <p>delegate@theroboticssummit.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-[#4c5d6c] text-white px-4 pt-10 pb-6 relative">
        <div className="container mx-auto flex flex-col items-center gap-6">
          {/* <div className="flex items-center justify-center w-[70%] border-b border-white pb-4">
          <img src="dmgenergylogowhite_logo.png" alt="dmg events" className="h-8 md:h-10" />
          </div> */}

         

          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-white/90 border-t border-white/40 border-b py-3 w-full max-w-4xl">




            <li>ABOUT US</li>
            <li>CAREERS</li>
            <li>PRIVACY POLICY</li>
            <li>COOKIE POLICY</li>
            <li>COOKIES SETTINGS</li>
            <li>CONTACT US</li>


          


          </ul>

          <span>All rights reserved by Ai Ml Robotics conference</span>

          

          {/* <div className="text-center text-base text-white/80 max-w-3xl mt-4">
            An international exhibition and conference organiser, publisher and
            information provider to the Energy, Construction, Plastics, Coatings, Manufacturing,
            Transport, Security, Interiors and Hospitality industries.
          </div> */}
        </div>

        {/* 🍪 Cookie Icon */}
        <div className="fixed bottom-4 left-4 z-50 md:bottom-8 md:left-8">
          <button onClick={() => setVisibleLeft(true)} className="focus:outline-none">
            <FaCookieBite className="w-10 h-10 text-black md:w-12 md:h-12" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default EndFooter;
