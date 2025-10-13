

// // // // // import React, { useState } from 'react';
// // // // // import { Home, ChevronDown, ChevronUp, ChevronRight, Menu, X } from 'lucide-react';
// // // // // import { Navigate } from 'react-router-dom';
// // // // // import { Link } from 'react-router-dom';

// // // // // const Header: React.FC = () => {
// // // // //   const [activeMenu, setActiveMenu] = useState<string | null>(null);
// // // // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


// // // // //   const handleMouseEnter = (menu: string) => {
// // // // //     setActiveMenu(menu);
// // // // //   };

// // // // //   const handleMouseLeave = () => {
// // // // //     setActiveMenu(null);
// // // // //   };

// // // // //   const toggleMobileMenu = () => {
// // // // //     setMobileMenuOpen(!mobileMenuOpen);
// // // // //   };

// // // // //   // const navItems = [
// // // // //   //   {
// // // // //   //     name: 'EXHIBITION',
// // // // //   //     key: 'exhibition',
// // // // //   //     dropdown: [
// // // // //   //       { name: 'Why Exhibit', href: '#' },
// // // // //   //       { name: 'Book a Stand', href: '#' },
// // // // //   //       { name: 'Floorplan', href: '#' },
// // // // //   //     ],
// // // // //   //   },
    
// // // // //   //   {
// // // // //   //     name: 'VISIT',
// // // // //   //     key: 'visit',
// // // // //   //     dropdown: [
// // // // //   //       { name: 'Why Visit', href: '#' },
// // // // //   //       { name: 'Register Your Interest', href: '#' },
// // // // //   //       { name: 'Hotels & Travel', href: '#' },
// // // // //   //     ],
// // // // //   //   },
// // // // //   //   {
// // // // //   //     name: 'CONFERENCES',
// // // // //   //     key: 'conferences',
// // // // //   //     dropdown: [
// // // // //   //       {
// // // // //   //         name: 'STRATEGIC CONFERENCE',
// // // // //   //         href: '#',
// // // // //   //         subDropdown: [
// // // // //   //           { name: 'Agenda', href: '#' },
// // // // //   //           { name: 'Speakers', href: '#' },
// // // // //   //         ],
// // // // //   //       },
// // // // //   //       {
// // // // //   //         name: 'TECHNICAL CONFERENCE',
// // // // //   //         href: '#',
// // // // //   //         subDropdown: [
// // // // //   //           { name: 'Agenda', href: '#' },
// // // // //   //           { name: 'Speakers', href: '#' },
// // // // //   //         ],
// // // // //   //       },
// // // // //   //       { name: 'INFORM ME WHEN CALL FOR PAPERS OPEN', href: '#' },
// // // // //   //       { name: 'CONFERENCE ENQUIRY', href: '#' },
// // // // //   //     ],
// // // // //   //   },
// // // // //   //   {
// // // // //   //     name: 'INNOVATION HUB',
// // // // //   //     key: 'innovation',
// // // // //   //     dropdown: [
// // // // //   //       { name: 'ABOUT', href: '#' },
// // // // //   //       {
// // // // //   //         name: 'CLEANTECH THEATRE',
// // // // //   //         href: '#',
// // // // //   //         subDropdown: [],
// // // // //   //       },
// // // // //   //       {
// // // // //   //         name: 'CLIMATE TECH THEATRE',
// // // // //   //         href: '#',
// // // // //   //         subDropdown: [],
// // // // //   //       },
// // // // //   //     ],
// // // // //   //   },
// // // // //   //   {
// // // // //   //     name: 'SPONSORSHIP',
// // // // //   //     key: 'sponsorship',
// // // // //   //     dropdown: [
// // // // //   //       { name: 'WHY SPONSOR', href: '#' },
// // // // //   //       { name: 'SPONSORSHIP ENQUIRY', href: '#', highlighted: true },
// // // // //   //     ],
// // // // //   //   },
// // // // //   //   {
// // // // //   //     name: 'NETWORK',
// // // // //   //     key: 'network',
// // // // //   //     dropdown: [{ name: 'UTILITIES CLUB', href: '#' }],
// // // // //   //   },
// // // // //   //   {
// // // // //   //     name: 'MEDIA',
// // // // //   //     key: 'media',
// // // // //   //     dropdown: [
// // // // //   //       { name: '2025 PARTNERS', href: '#' },
// // // // //   //       { name: '2025 SUPPORTING ASSOCIATIONS', href: '#' },
// // // // //   //       { name: 'GALLERY', href: '#' },
// // // // //   //       { name: 'NEWS', href: '#' },
// // // // //   //       { name: 'INDUSTRY REPORTS', href: '#' },
// // // // //   //     ],
// // // // //   //   },
// // // // //   // ];

// // // // //   const navItems = [
// // // // //   { name: 'About', href: '/#about-section' },
// // // // //   { name: 'Speakers', href: '#speakers-section' },
// // // // //   { name: 'Conference Agenda', href: '/#conference-agenda' },
// // // // //   { name: 'Highlights', href: '/#highlight-section' },
// // // // //   {name: 'Register', href: '/register' },
// // // // //   {name: 'Submit Abstract', href: '/abstractsubmission' }
// // // // // ];


// // // // //   return (
// // // // //     <header className="bg-teal-700 text-white">
// // // // //       {/* Top Bar */}
// // // // //       <div className="flex justify-end items-center px-4 py-2 text-sm bg-[#356066] md:px-6">
// // // // //         <div className="flex space-x-4 font-roboto">
// // // // //           <Link to="/register">
// // // // //             <button className="bg-blue-500 px-4 py-2 rounded text-xs font-semibold md:px-6">
// // // // //               REGISTER
// // // // //             </button>
// // // // //           </Link>
// // // // //           <Link to="/abstractsubmission">
// // // // //             <button className="bg-[#30b9b0] px-4 py-2 rounded text-xs font-semibold md:px-6">
// // // // //               SUBMIT ABSTRACT
// // // // //             </button>
// // // // //           </Link>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Logo & Support Section */}
// // // // //       <div className="bg-white flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-4">
// // // // //         <div className="flex flex-col items-center text-center md:items-start md:text-left">
// // // // //           <img src="bio-logo.jpg" alt="Logo" className="h-6 md:h-auto" style={{ height: '100px' }} />
          
// // // // //           <span className="text-black font-semibold text-sm mt-2">
// // // // //             19 - 21 MAY 2026 | ABU DHABI, UNITED ARAB EMIRATES
// // // // //           </span>

// // // // //         </div>
// // // // //         <div className="mt-4 md:mt-0">
// // // // //           <h1 className="font-roboto text-black text-center md:text-left text-base mb-2">
// // // // //             Supported by
// // // // //           </h1>
// // // // //           <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
// // // // //             <img src="asset-3.svg" alt="UAE Logo" className="h-16" />
// // // // //             <img src="asset-3-1.svg" alt="Abu Dhabi Logo" className="h-16" />
// // // // //             <img src="asset-3.svg" alt="UAE Logo" className="h-16" />
// // // // //             <img
// // // // //               src="https://worldutilitiescongress.com/media/cauf3m3g/dewa_logo-cropped.svg"
// // // // //               alt="DEWA Logo"
// // // // //               className="h-16"
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Mobile Toggle Button */}
// // // // //       <div className="flex md:hidden justify-end px-4 bg-[#356066] py-3">
// // // // //         <button onClick={toggleMobileMenu}>
// // // // //           {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* Navigation */}
// // // // //  <nav className="border-t border-teal-600 relative bg-[#356066]">
// // // // //   {/* Desktop Navigation */}
// // // // //   <div className="hidden md:flex items-center space-x-6 py-3 px-16">
// // // // //     {/* Home Icon */}
// // // // //     <Link to="/" className="p-2 hover:bg-[#2e5459] transition-colors rounded-full">
// // // // //       <Home className="w-6 h-6" />
// // // // //     </Link>

// // // // //     {/* Vertical Separator */}
// // // // //     <div className="w-px h-6 bg-teal-600"></div>

// // // // //     {/* Navigation Links */}
// // // // //     {navItems.map((item) => (
// // // // //       <a
// // // // //         key={item.name}
// // // // //         href={item.href}
// // // // //         className="font-semibold tracking-wider text-sm uppercase transition-colors hover:text-gray-300 pb-1 border-b-2 border-transparent hover:border-white"
// // // // //       >
// // // // //         {item.name}
// // // // //       </a>
// // // // //     ))}
// // // // //   </div>

// // // // //   {/* Mobile Menu */}
// // // // //   {mobileMenuOpen && (
// // // // //     <div className="md:hidden bg-[#2e5459] px-6 py-4">
// // // // //       <ul className="space-y-4">
// // // // //         {navItems.map((item) => (
// // // // //           <li key={item.name}>
// // // // //             <a
// // // // //               href={item.href}
// // // // //               onClick={() => setMobileMenuOpen(false)} // Closes menu on click
// // // // //               className="block text-lg font-semibold text-white hover:text-teal-300"
// // // // //             >
// // // // //               {item.name.toUpperCase()}
// // // // //             </a>
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>
// // // // //     </div>
// // // // //   )}
// // // // // </nav>
// // // // //     </header>
// // // // //   );
// // // // // };

// // // // // export default Header;





// // // // import React from 'react';
// // // // import { Home, Calendar, MapPin } from 'lucide-react';

// // // // const Header = () => {
// // // //   return (
// // // //     <header className="w-full bg-white shadow-md font-sans">
// // // //       {/* Top Bar */}
// // // //       <div className="border-b">
// // // //         <div className="container mx-auto px-4 h-[120px] flex items-center justify-between">
// // // //           {/* Left Elements Group */}
// // // //           <div className="flex h-full items-center divide-x divide-gray-200">
// // // //             {/* Main Logo */}
// // // //             <div className=" h-full flex items-center">
// // // //               <img 
// // // //                 src="aimllogo.jpg"
// // // //                 alt="Abu Dhabi Global Health Week Logo"
// // // //                 className="h-[120px]"
// // // //               />
// // // //             </div>
// // // //             {/* Hosted By Section */}
// // // //             {/* <div className="px-8 h-full flex items-center space-x-3">
// // // //               <span className="text-xs text-gray-500 mr-2">Hosted By</span>
// // // //               <img
// // // //                 src="https://www.adghw.com/media/hhzpx1cd/logo-doh.png"
// // // //                 alt="Department of Health Logo"
// // // //                 className="h-14"
// // // //               />
// // // //             </div> */}
// // // //             {/* Event Details */}
// // // //             <div className="pl-8 flex flex-col space-y-2 text-sm text-gray-800 min-w-[220px]">
// // // //               <div className="flex items-center space-x-3">
// // // //                 <Calendar className="text-indigo-900" size={20} />
// // // //                 <span className="font-bold tracking-tight">July 28-30, 2026</span>
// // // //               </div>
// // // //               <div className="flex items-center space-x-3">
// // // //                 <MapPin className="text-indigo-900" size={20} />
// // // //                 <span className="font-bold tracking-tight">Crowne Plaza - St. Peter’s Rome, Rome Italy</span>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Right Buttons Group */}
// // // //           <div className="flex items-center gap-4 ml-24">
// // // //             <button className="w-[208px] bg-[#19AE86] text-white font-bold py-2 rounded-md hover:bg-[#178E70] transition-colors duration-300">
// // // //               BOOK YOUR STAND
// // // //             </button>
// // // //             <button className="w-[232px] bg-[#F38A3A] text-white font-bold py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
// // // //               VISITOR REGISTRATION
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //       {/* Bottom Navigation Bar */}
// // // //       <nav className="w-full bg-[#0b97a1] h-[50px] flex items-center">
// // // //         <div className="container mx-auto px-4 flex items-center justify-center gap-9 text-white font-semibold text-[16px]">
// // // //           <a href="#" className="flex items-center hover:text-gray-300 transition-colors">
// // // //             <Home size={20} />
// // // //           </a>
// // // //           <a href="#" className="tracking-wider hover:text-gray-300 transition-colors">EXHIBITION</a>
// // // //           <a href="#" className="tracking-wider hover:text-gray-300 transition-colors">SPONSORSHIP</a>
// // // //           <a href="#" className="tracking-wider hover:text-gray-300 transition-colors">VISIT</a>
// // // //           <a href="#" className="tracking-wider hover:text-gray-300 transition-colors">CONFERENCE</a>
// // // //           <a href="#" className="tracking-wider hover:text-gray-300 transition-colors">FEATURES</a>
// // // //           <a href="#" className="tracking-wider hover:text-gray-300 transition-colors">HEALTHBEATS PODCAST</a>
// // // //           <a href="#" className="tracking-wider hover:text-gray-300 transition-colors">MEDIA</a>
// // // //           <a href="#" className="tracking-wider hover:text-gray-300 transition-colors">CONTACT US</a>
// // // //         </div>
// // // //       </nav>
// // // //     </header>
// // // //   );
// // // // };

// // // // export default Header;


// // // import React, { useState } from 'react';
// // // import { Home, Calendar, MapPin, Menu, X } from 'lucide-react';

// // // const Header = () => {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // //   return (
// // //     <header className="w-full bg-white shadow-md font-sans">
// // //       {/* Top Bar */}
// // //       <div className="border-b">
// // //         <div className="container mx-auto px-4 py-3 md:py-0 h-auto md:h-[120px] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
// // //           {/* Left Elements Group */}
// // //           <div className="flex flex-col md:flex-row items-center md:divide-x divide-gray-200 w-full md:w-auto">
// // //             {/* Main Logo */}
// // //             <div className="flex items-center justify-center md:justify-start h-auto md:h-full">
// // //               <img 
// // //                 src="aimllogo.jpg"
// // //                 alt="Abu Dhabi Global Health Week Logo"
// // //                 className="h-16 md:h-[120px] object-contain"
// // //               />
// // //             </div>

// // //             {/* Event Details */}
// // //             <div className="mt-3 md:mt-0 md:pl-8 flex flex-col space-y-2 text-sm text-gray-800 min-w-[220px]">
// // //               <div className="flex items-center space-x-3">
// // //                 <Calendar className="text-indigo-900" size={18} />
// // //                 <span className="font-bold tracking-tight text-xs md:text-sm">July 28-30, 2026</span>
// // //               </div>
// // //               <div className="flex items-center space-x-3">
// // //                 <MapPin className="text-indigo-900" size={18} />
// // //                 <span className="font-bold tracking-tight text-xs md:text-sm">
// // //                   Crowne Plaza - St. Peter’s Rome, Rome Italy
// // //                 </span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Right Buttons Group */}
// // //           <div className="flex items-center gap-2 md:gap-4">
// // //             {/* Hide on small screens */}
// // //             <button className="hidden sm:block w-[150px] md:w-[208px] bg-[#19AE86] text-white text-xs md:text-base font-bold py-2 rounded-md hover:bg-[#178E70] transition-colors duration-300">
// // //               BOOK YOUR STAND
// // //             </button>
// // //             <button className="hidden sm:block w-[170px] md:w-[232px] bg-[#F38A3A] text-white text-xs md:text-base font-bold py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
// // //               VISITOR REGISTRATION
// // //             </button>

// // //             {/* Mobile menu toggle */}
// // //             <button
// // //               className="sm:hidden p-2 rounded-md border border-gray-300"
// // //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// // //             >
// // //               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Bottom Navigation Bar */}
// // //       <nav className="w-full bg-[#0b97a1]">
// // //         <div className="container mx-auto px-4">
// // //           {/* Desktop Menu */}
// // //           <div className="hidden sm:flex h-[50px] items-center justify-center gap-6 md:gap-9 text-white font-semibold text-sm md:text-[16px]">
// // //             <a href="#" className="flex items-center hover:text-gray-300 transition-colors">
// // //               <Home size={20} />
// // //             </a>
// // //             <a href="#" className="tracking-wider hover:text-gray-300">EXHIBITION</a>
// // //             <a href="#" className="tracking-wider hover:text-gray-300">SPONSORSHIP</a>
// // //             <a href="#" className="tracking-wider hover:text-gray-300">VISIT</a>
// // //             <a href="#" className="tracking-wider hover:text-gray-300">CONFERENCE</a>
// // //             <a href="#" className="tracking-wider hover:text-gray-300">FEATURES</a>
// // //             <a href="#" className="tracking-wider hover:text-gray-300">HEALTHBEATS PODCAST</a>
// // //             <a href="#" className="tracking-wider hover:text-gray-300">MEDIA</a>
// // //             <a href="#" className="tracking-wider hover:text-gray-300">CONTACT US</a>
// // //           </div>

// // //           {/* Mobile Menu (Collapsible) */}
// // //           {isMenuOpen && (
// // //             <div className="flex flex-col sm:hidden bg-[#0b97a1] text-white font-semibold text-sm py-3 space-y-3">
// // //               <a href="#" className="px-4 hover:text-gray-300 flex items-center"><Home size={18} className="mr-2" /> Home</a>
// // //               <a href="#" className="px-4 hover:text-gray-300">EXHIBITION</a>
// // //               <a href="#" className="px-4 hover:text-gray-300">SPONSORSHIP</a>
// // //               <a href="#" className="px-4 hover:text-gray-300">VISIT</a>
// // //               <a href="#" className="px-4 hover:text-gray-300">CONFERENCE</a>
// // //               <a href="#" className="px-4 hover:text-gray-300">FEATURES</a>
// // //               <a href="#" className="px-4 hover:text-gray-300">HEALTHBEATS PODCAST</a>
// // //               <a href="#" className="px-4 hover:text-gray-300">MEDIA</a>
// // //               <a href="#" className="px-4 hover:text-gray-300">CONTACT US</a>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </nav>
// // //     </header>
// // //   );
// // // };

// // // export default Header;



// // import React, { useState } from "react";
// // import { Home, Calendar, MapPin, Menu, X } from "lucide-react";

// // const Header = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   return (
// //     <header className="w-full bg-white shadow-md font-sans">
// //       {/* Top Bar */}
// //       <div className="border-b">
// //         <div className="container mx-auto px-4 h-[120px] flex items-center justify-between">
// //           {/* Left Section */}
// //           <div className="flex h-full items-center divide-x divide-gray-200">
// //             {/* Logo */}
// //             <div className="h-full flex items-center">
// //               <img
// //                 src="aimllogo.jpg"
// //                 alt="Abu Dhabi Global Health Week Logo"
// //                 className="h-[120px]"
// //               />
// //             </div>

// //             {/* Event Details */}
// //             <div className="pl-6 flex flex-col space-y-2 text-sm text-gray-800 min-w-[200px] hidden sm:flex">
// //               <div className="flex items-center space-x-3">
// //                 <Calendar className="text-indigo-900" size={20} />
// //                 <span className="font-bold tracking-tight">
// //                   July 28-30, 2026
// //                 </span>
// //               </div>
// //               <div className="flex items-center space-x-3">
// //                 <MapPin className="text-indigo-900" size={20} />
// //                 <span className="font-bold tracking-tight">
// //                   Crowne Plaza - St. Peter’s Rome, Rome Italy
// //                 </span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Section */}
// //           <div className="hidden md:flex items-center gap-4 ml-12">
// //             <button className="w-[208px] bg-[#19AE86] text-white font-bold py-2 rounded-md hover:bg-[#178E70] transition-colors duration-300">
// //               BOOK YOUR STAND
// //             </button>
// //             <button className="w-[232px] bg-[#F38A3A] text-white font-bold py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
// //               VISITOR REGISTRATION
// //             </button>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <div className="md:hidden">
// //             <button onClick={() => setMenuOpen(!menuOpen)}>
// //               {menuOpen ? <X size={28} /> : <Menu size={28} />}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Bottom Nav */}
// //       <nav className="w-full bg-[#0b97a1] h-[50px] flex items-center">
// //         <div className="container mx-auto px-4 hidden md:flex items-center justify-center gap-9 text-white font-semibold text-[16px]">
// //           <a href="#" className="flex items-center hover:text-gray-300">
// //             <Home size={20} />
// //           </a>
// //           <a href="#" className="tracking-wider hover:text-gray-300">EXHIBITION</a>
// //           <a href="#" className="tracking-wider hover:text-gray-300">SPONSORSHIP</a>
// //           <a href="#" className="tracking-wider hover:text-gray-300">VISIT</a>
// //           <a href="#" className="tracking-wider hover:text-gray-300">CONFERENCE</a>
// //           <a href="#" className="tracking-wider hover:text-gray-300">FEATURES</a>
// //           <a href="#" className="tracking-wider hover:text-gray-300">HEALTHBEATS PODCAST</a>
// //           <a href="#" className="tracking-wider hover:text-gray-300">MEDIA</a>
// //           <a href="#" className="tracking-wider hover:text-gray-300">CONTACT US</a>
// //         </div>
// //       </nav>

// //       {/* Mobile Menu */}
// //       {menuOpen && (
// //         <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-4">
// //           <a href="#" className="block text-gray-800 font-semibold">EXHIBITION</a>
// //           <a href="#" className="block text-gray-800 font-semibold">SPONSORSHIP</a>
// //           <a href="#" className="block text-gray-800 font-semibold">VISIT</a>
// //           <a href="#" className="block text-gray-800 font-semibold">CONFERENCE</a>
// //           <a href="#" className="block text-gray-800 font-semibold">FEATURES</a>
// //           <a href="#" className="block text-gray-800 font-semibold">HEALTHBEATS PODCAST</a>
// //           <a href="#" className="block text-gray-800 font-semibold">MEDIA</a>
// //           <a href="#" className="block text-gray-800 font-semibold">CONTACT US</a>

// //           {/* Mobile Buttons */}
// //           <div className="flex flex-col gap-3 pt-4">
// //             <button className="w-full bg-[#19AE86] text-white font-bold py-2 rounded-md hover:bg-[#178E70] transition-colors duration-300">
// //               BOOK YOUR STAND
// //             </button>
// //             <button className="w-full bg-[#F38A3A] text-white font-bold py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
// //               VISITOR REGISTRATION
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // };

// // export default Header;


// import React, { useState } from "react";
// import { Home, Calendar, MapPin, Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";


// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="w-full bg-white shadow-md font-sans sticky top-0 z-50">
//       {/* Top Bar */}
//       <div className="border-b">
//         <div className="container mx-auto px-4 h-[120px] flex items-center justify-between">
//           {/* Left Section */}
//           <div className="flex h-full items-center divide-x divide-gray-200">
//             {/* Logo */}
//             <div className="h-full flex items-center">
//               <img
//                 src="aimllogo.jpg"
//                 alt="Abu Dhabi Global Health Week Logo"
//                 className="h-[120px]"
//               />
//             </div>

//             {/* Event Details (visible on md and up) */}
//             <div className="pl-6 flex-col space-y-2 text-sm text-gray-800 min-w-[200px] hidden sm:flex">
//               <div className="flex items-center space-x-3">
//                 <Calendar className="text-indigo-900" size={20} />
//                 <span className="font-bold tracking-tight">
//                   July 28-30, 2026
//                 </span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <MapPin className="text-indigo-900" size={20} />
//                 <span className="font-bold tracking-tight">
//                   Crowne Plaza - St. Peter’s Rome, Rome Italy
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Right Section (desktop buttons) */}
//           <div className="hidden md:flex items-center gap-4 ml-12">
//             <Link to="/register">
//               <button className="w-[120px] bg-[#0047bd] text-white font-bold py-2 hover:bg-[#178E70] transition-colors duration-300">
//                 REGISTER
//               </button>
//             </Link>

//             <Link to="/AbstractSubmission">
//               <button className="w-[232px] bg-[#000f30] text-white font-bold py-2 hover:bg-orange-600 transition-colors duration-300">
//                 ABSTRACT SUBMISSION
//               </button>
//             </Link>

//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <button onClick={() => setMenuOpen(!menuOpen)}>
//               {menuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Nav (desktop only) */}
//       <nav className="w-full h-[50px] flex items-center" style={{ backgroundImage: "linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)" }}>
//         <div className="container mx-auto px-4 hidden md:flex items-center justify-center gap-9 text-white font-semibold text-[16px]">
//           <a href="#" className="flex items-center hover:text-gray-300 font-sans-serif text-sm">
//             <Home size={20} />
//           </a>
//           <a href="#" className="tracking-wider hover:text-gray-300 font-sans-serif text-sm">ABOUT</a>
//           <a href="#" className="tracking-wider hover:text-gray-300 font-sans-serif text-sm">SPEAKERS</a>
//           <a href="#" className="tracking-wider hover:text-gray-300 font-sans-serif text-sm">SPONSERS</a>
//           <a href="#" className="tracking-wider hover:text-gray-300 font-sans-serif text-sm">AGENDA</a>
//           <a href="#" className="tracking-wider hover:text-gray-300 font-sans-serif text-sm">TESTMONIALS</a>
//           <a href="#" className="tracking-wider hover:text-gray-300 font-sans-serif text-sm">EVENT OVERVIEW</a>
//           <a href="#" className="tracking-wider hover:text-gray-300 font-sans-serif text-sm">MEDIA</a>
//           <a href="#" className="tracking-wider hover:text-gray-300 font-sans-serif text-sm">CONTACT US</a>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-6">
//           {/* Event Details for Mobile */}
//           <div className="space-y-2 text-gray-800 text-sm">
//             <div className="flex items-center space-x-3">
//               <Calendar className="text-indigo-900" size={20} />
//               <span className="font-bold tracking-tight">July 28-30, 2026</span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <MapPin className="text-indigo-900" size={20} />
//               <span className="font-bold tracking-tight">
//                 Crowne Plaza - St. Peter’s Rome, Rome Italy
//               </span>
//             </div>
//           </div>

//           {/* Nav Links */}
//           <div className="space-y-3">
//             <a href="#" className="block text-gray-800 font-semibold">EXHIBITION</a>
//             <a href="#" className="block text-gray-800 font-semibold">SPONSORSHIP</a>
//             <a href="#" className="block text-gray-800 font-semibold">VISIT</a>
//             <a href="#" className="block text-gray-800 font-semibold">CONFERENCE</a>
//             <a href="#" className="block text-gray-800 font-semibold">FEATURES</a>
//             <a href="#" className="block text-gray-800 font-semibold">HEALTHBEATS PODCAST</a>
//             <a href="#" className="block text-gray-800 font-semibold">MEDIA</a>
//             <a href="#" className="block text-gray-800 font-semibold">CONTACT US</a>
//           </div>

//           {/* Mobile Buttons */}
//           <div className="flex flex-col gap-3 pt-4">
//             <button className="w-full bg-[#19AE86] text-white font-bold py-2 rounded-md hover:bg-[#178E70] transition-colors duration-300">
//               BOOK YOUR STAND
//             </button>
//             <button className="w-full bg-[#F38A3A] text-white font-bold py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
//               VISITOR REGISTRATION
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;



import React, { useState } from "react";
import { Home, Calendar, MapPin, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md font-sans sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b">
        <div className="container mx-auto px-4 h-[90px] sm:h-[120px] flex items-center justify-between">
          {/* Left Section */}
          <div className="flex h-full items-center divide-x divide-gray-200">
            {/* Logo */}
            <div className="h-full flex items-center">
              <img
                src="aimllogo.jpg"
                alt="Artificial Intelligence, Machine Learning and Robotics Conference Logo"
                className="h-[70px] sm:h-[120px] w-auto object-contain transition-all duration-300"
              />
            </div>

            {/* Event Details (visible on sm and up) */}
            <div className="pl-4 sm:pl-6 flex-col space-y-1 sm:space-y-2 text-[11px] sm:text-sm text-gray-800 min-w-[180px] sm:min-w-[200px] flex">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Calendar className="text-indigo-900" size={16} />
                <span className="font-bold tracking-tight sm:text-sm">
                  July 28–30, 2026
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <MapPin className="text-indigo-900" size={16} />
                <span className="font-bold tracking-tight sm:text-sm leading-snug">
                  Crowne Plaza - St. Peter’s Rome, Italy
                </span>
              </div>
            </div>
          </div>

          {/* Right Section (desktop buttons) */}
          <div className="hidden md:flex items-center gap-4 ml-12">
            <Link to="/register">
              <button style={{ backgroundImage: "linear-gradient(90deg, rgba(0,72,139,1) 0%, rgba(15,133,255,1) 100%)" }} className="w-[120px] text-white font-bold py-2 hover:bg-[#425a92] transition-colors duration-300">
                REGISTER
              </button>
            </Link>

            <Link to="/AbstractSubmission">
              <button style={{ backgroundImage: "linear-gradient(90deg, rgba(0,47,48,1) 0%, rgba(0,0,48,1) 100%)" }} className="w-[232px] text-white font-bold py-2 hover:bg-[#011136] transition-colors duration-300">
                ABSTRACT SUBMISSION
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden ml-3">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Nav (desktop only) */}
      <nav className="hidden md:flex w-full h-[50px] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)",
        }}
      >
        <div className="container mx-auto px-4 hidden md:flex items-center justify-center gap-9 text-white font-semibold text-[16px]">
          <a href="#" className="flex items-center hover:text-gray-300 text-sm">
            <Home size={20} />
          </a>
          <a href="#" className="tracking-wider hover:text-gray-300 text-sm">
            ABOUT
          </a>
          <a href="#" className="tracking-wider hover:text-gray-300 text-sm">
            SPEAKERS
          </a>
          <a href="#" className="tracking-wider hover:text-gray-300 text-sm">
            SPONSORS
          </a>
          <a href="#" className="tracking-wider hover:text-gray-300 text-sm">
            AGENDA
          </a>
          <a href="#" className="tracking-wider hover:text-gray-300 text-sm">
            TESTIMONIALS
          </a>
          <a href="#" className="tracking-wider hover:text-gray-300 text-sm">
            EVENT OVERVIEW
          </a>
          <a href="#" className="tracking-wider hover:text-gray-300 text-sm">
            MEDIA
          </a>
          <a href="#" className="tracking-wider hover:text-gray-300 text-sm">
            CONTACT US
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-6">
          {/* Nav Links */}
          <div className="space-y-3">
            <a href="#" className="block text-gray-800 font-semibold">
              ABOUT
            </a>
            <a href="#" className="block text-gray-800 font-semibold">
              SPEAKERS
            </a>
            <a href="#" className="block text-gray-800 font-semibold">
              SPONSORS
            </a>
            <a href="#" className="block text-gray-800 font-semibold">
              AGENDA
            </a>
            <a href="#" className="block text-gray-800 font-semibold">
              TESTIMONIALS
            </a>
            <a href="#" className="block text-gray-800 font-semibold">
              EVENT OVERVIEW
            </a>
            <a href="#" className="block text-gray-800 font-semibold">
              MEDIA
            </a>
            <a href="#" className="block text-gray-800 font-semibold">
              CONTACT US
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <Link to="/register">
              <button className="w-full bg-[#0047bd] text-white font-bold py-2 rounded-md hover:bg-[#178E70] transition-colors duration-300">
                REGISTER
              </button>
            </Link>
            <Link to="/AbstractSubmission">
              <button className="w-full bg-[#000f30] text-white font-bold py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
                ABSTRACT SUBMISSION
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
