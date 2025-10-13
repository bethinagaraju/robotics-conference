

// // // import React, { useState, useEffect } from 'react';
// // // import { Calendar, MapPin, Clock, Send, Lock, RotateCw } from 'lucide-react';

// // // // Defines the structure for the form's data
// // // interface FormData {
// // //   title: string;
// // //   fullName: string;
// // //   phoneNumber: string;
// // //   emailAddress: string;
// // //   institute: string;
// // //   country: string;
// // //   registrationType: 'only' | 'accommodation' | '';
// // //   presentationType: 'speaker' | 'poster' | 'listener' | 'delegate' | 'student' | 'exhibitor' | '';
// // //   captchaInput: string; // Added for user's captcha entry
// // // }

// // // // Generates a random 6-character alphanumeric code
// // // const generateCaptchaCode = (): string => {
// // //   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// // //   let result = '';
// // //   for (let i = 0; i < 6; i++) {
// // //     result += chars.charAt(Math.floor(Math.random() * chars.length));
// // //   }
// // //   return result;
// // // };


// // // const ConferenceRegistration: React.FC = () => {
// // //   const themeColor = '#00a99d'; // ✨ IMPORTANT: Change this to your website's main color

// // //   const [formData, setFormData] = useState<FormData>({
// // //     title: 'Mr.',
// // //     fullName: '',
// // //     phoneNumber: '',
// // //     emailAddress: '',
// // //     institute: '',
// // //     country: 'Japan',
// // //     registrationType: '',
// // //     presentationType: '',
// // //     captchaInput: '', // Initial state for captcha
// // //   });

// // //   const [captchaCode, setCaptchaCode] = useState<string>('');
// // //   const [captchaError, setCaptchaError] = useState<boolean>(false);

// // //   // Initialize captcha code on component mount
// // //   useEffect(() => {
// // //     setCaptchaCode(generateCaptchaCode());
// // //   }, []);


// // //   const handleChange = (
// // //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// // //   ) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prevState) => ({
// // //       ...prevState,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleRefreshCaptcha = () => {
// // //     setCaptchaCode(generateCaptchaCode());
// // //     setFormData((prevState) => ({ ...prevState, captchaInput: '' }));
// // //     setCaptchaError(false);
// // //   };

// // //   const handleSubmit = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setCaptchaError(false);

// // //     // Case-insensitive captcha verification
// // //     if (formData.captchaInput.toLowerCase() !== captchaCode.toLowerCase()) {
// // //       setCaptchaError(true);
// // //       alert('Security verification failed. Please try again.');
// // //       return;
// // //     }

// // //     // In a real application, you would send this data to a server.
// // //     alert('Registration Submitted! Check the console for the data.');
// // //     console.log('Form Data:', formData);
// // //   };

// // //   return (
// // //     <section className="bg-gray-50 py-16 px-4">
// // //       <div className="max-w-4xl mx-auto">
// // //         <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
// // //           Conference Registration
// // //         </h2>
// // //         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
// // //           Secure your spot for the premier biotechnology conference of 2026. Please fill out the form below.
// // //         </p>

// // //         {/* Info Cards Section */}
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
// // //           <div className="bg-white p-6 rounded-lg shadow-sm">
// // //             <Calendar className="mx-auto mb-3" size={32} style={{ color: themeColor }}/>
// // //             <h3 className="font-bold text-lg text-gray-800">Conference Date</h3>
// // //             <p className="text-gray-600">May 29-31, 2026</p>
// // //           </div>
// // //           <div className="bg-white p-6 rounded-lg shadow-sm">
// // //             <MapPin className="mx-auto mb-3" size={32} style={{ color: themeColor }}/>
// // //             <h3 className="font-bold text-lg text-gray-800">Location</h3>
// // //             <p className="text-gray-600">DoubleTree by Hilton, Tokyo</p>
// // //           </div>
// // //           <div className="bg-white p-6 rounded-lg shadow-sm">
// // //             <Clock className="mx-auto mb-3" size={32} style={{ color: themeColor }}/>
// // //             <h3 className="font-bold text-lg text-gray-800">Registration Deadline</h3>
// // //             <p className="text-gray-600">March 30, 2026</p>
// // //           </div>
// // //         </div>

// // //         {/* Registration Form */}
// // //         <div className="bg-white p-8 rounded-lg shadow-md">
// // //           <form onSubmit={handleSubmit} className="space-y-6">
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               {/* --- Form fields remain the same --- */}
// // //                {/* Title */}
// // //                <div>
// // //                 <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
// // //                 <select id="title" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}>
// // //                   <option>Mr.</option><option>Mrs.</option><option>Ms.</option><option>Dr.</option><option>Prof.</option>
// // //                 </select>
// // //               </div>

// // //               {/* Full Name */}
// // //               <div>
// // //                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
// // //                 <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// // //               </div>
              
// // //               {/* Phone Number */}
// // //               <div>
// // //                 <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
// // //                 <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// // //               </div>

// // //               {/* Email Address */}
// // //               <div>
// // //                 <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
// // //                 <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// // //               </div>

// // //               {/* Institute/Organization */}
// // //               <div>
// // //                 <label htmlFor="institute" className="block text-sm font-medium text-gray-700 mb-1">Institute/Organization <span className="text-red-500">*</span></label>
// // //                 <input type="text" id="institute" name="institute" value={formData.institute} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// // //               </div>

// // //               {/* Country */}
// // //               <div>
// // //                 <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
// // //                 <select id="country" name="country" value={formData.country} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}>
// // //                   <option>Japan</option><option>United States</option><option>Germany</option><option>India</option><option>United Kingdom</option>
// // //                 </select>
// // //               </div>

// // //               {/* Registration Type */}
// // //               <div className="md:col-span-2">
// // //                 <label className="block text-sm font-medium text-gray-700 mb-2">Registration Type <span className="text-red-500">*</span></label>
// // //                 <div className="flex flex-wrap gap-4">
// // //                   <label className="flex items-center space-x-2"><input type="radio" name="registrationType" value="only" onChange={handleChange} required className="focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/> <span>Registration Only</span></label>
// // //                   <label className="flex items-center space-x-2"><input type="radio" name="registrationType" value="accommodation" onChange={handleChange} required className="focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/> <span>Registration + Accommodation</span></label>
// // //                 </div>
// // //               </div>

// // //               {/* Presentation Type */}
// // //               <div className="md:col-span-2">
// // //                 <label className="block text-sm font-medium text-gray-700 mb-2">Presentation Type <span className="text-red-500">*</span></label>
// // //                 <div className="flex flex-wrap gap-x-6 gap-y-2">
// // //                   <label className="flex items-center space-x-2"><input type="radio" name="presentationType" value="speaker" onChange={handleChange} required className="focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/> <span>Speaker</span></label>
// // //                   <label className="flex items-center space-x-2"><input type="radio" name="presentationType" value="poster" onChange={handleChange} required className="focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/> <span>Poster</span></label>
// // //                   <label className="flex items-center space-x-2"><input type="radio" name="presentationType" value="listener" onChange={handleChange} required className="focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/> <span>Listener</span></label>
// // //                   <label className="flex items-center space-x-2"><input type="radio" name="presentationType" value="delegate" onChange={handleChange} required className="focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/> <span>Delegate</span></label>
// // //                   <label className="flex items-center space-x-2"><input type="radio" name="presentationType" value="student" onChange={handleChange} required className="focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/> <span>Student</span></label>
// // //                   <label className="flex items-center space-x-2"><input type="radio" name="presentationType" value="exhibitor" onChange={handleChange} required className="focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/> <span>Exhibitor</span></label>
// // //                 </div>
// // //               </div>

// // //               {/* Security Verification Section (Captcha) */}
// // //               <div className="md:col-span-2">
// // //                 <div className="bg-gray-100 p-6 rounded-lg">
// // //                   <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-4">Security Verification</h3>
// // //                   <div className="flex items-center gap-3 mb-4">
// // //                     <div
// // //                       className="flex-shrink-0 px-4 py-2 text-2xl font-bold tracking-widest text-center bg-gray-800 text-white rounded-md select-none"
// // //                       style={{ letterSpacing: '0.4em' }}
// // //                     >
// // //                       {captchaCode}
// // //                     </div>
// // //                     <button
// // //                       type="button"
// // //                       onClick={handleRefreshCaptcha}
// // //                       className="p-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition-colors flex-shrink-0"
// // //                       aria-label="Refresh captcha"
// // //                     >
// // //                       <RotateCw size={20} />
// // //                     </button>
// // //                   </div>
// // //                   <input
// // //                     type="text"
// // //                     name="captchaInput"
// // //                     value={formData.captchaInput}
// // //                     onChange={handleChange}
// // //                     required
// // //                     maxLength={6}
// // //                     className={`w-full p-3 border rounded-md shadow-sm focus:ring-2 ${
// // //                       captchaError ? 'border-red-500' : 'border-gray-300'
// // //                     }`}
// // //                     placeholder="Enter the code shown above"
// // //                     style={{'--tw-ring-color': themeColor} as React.CSSProperties}
// // //                   />
// // //                   {captchaError && (
// // //                     <p className="text-red-500 text-sm mt-1">Incorrect code. Please try again.</p>
// // //                   )}
// // //                   <p className="text-gray-500 text-sm mt-3 flex items-center">
// // //                     <Lock size={16} className="mr-2" /> Please enter the 6-character code to verify you're human
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Submit Button */}
// // //             <div className="text-center pt-4">
// // //               <button type="submit" className="inline-flex items-center justify-center px-8 py-3 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105" style={{ backgroundColor: themeColor }}>
// // //                 <Send size={18} className="mr-2" />
// // //                 Register Now
// // //               </button>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ConferenceRegistration;











// // import React, { useState, useEffect } from 'react';
// // import { Calendar, MapPin, Clock, Send, Lock, RotateCw } from 'lucide-react';

// // // Define interfaces for form data and API responses
// // interface FormData {
// //   title: string;
// //   fullName: string;
// //   phoneNumber: string;
// //   emailAddress: string;
// //   institute: string;
// //   country: string;
// //   registrationType: 'only' | 'accommodation' | '';
// //   presentationType: 'speaker' | 'poster' | 'listener' | 'delegate' | 'student' | 'exhibitor' | '';
// //   guests: number;
// //   nights: number;
// //   captchaInput: string;
// // }

// // interface PricingConfig {
// //   id: number;
// //   presentationType: {
// //     id: number;
// //     type: string;
// //     price: number;
// //   };
// //   accommodationOption?: {
// //     id: number;
// //     nights: number;
// //     guests: number;
// //     price: number;
// //   };
// //   processingFeePercent: number;
// //   totalPrice: number;
// // }

// // // Base URL for API (adjust as needed)
// // const BASE_URL = 'https://your-api-base-url.com'; // Replace with actual API base URL

// // // Generates a random 6-character alphanumeric code
// // const generateCaptchaCode = (): string => {
// //   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// //   let result = '';
// //   for (let i = 0; i < 6; i++) {
// //     result += chars.charAt(Math.floor(Math.random() * chars.length));
// //   }
// //   return result;
// // };

// // const ConferenceRegistration: React.FC = () => {
// //   const themeColor = '#00a99d'; // Theme color for the renewable website

// //   const [formData, setFormData] = useState<FormData>({
// //     title: 'Mr.',
// //     fullName: '',
// //     phoneNumber: '',
// //     emailAddress: '',
// //     institute: '',
// //     country: 'Japan',
// //     registrationType: '',
// //     presentationType: '',
// //     guests: 1,
// //     nights: 1,
// //     captchaInput: '',
// //   });

// //   const [captchaCode, setCaptchaCode] = useState<string>('');
// //   const [captchaError, setCaptchaError] = useState<boolean>(false);
// //   const [pricing, setPricing] = useState<PricingConfig[] | null>(null);
// //   const [pricingError, setPricingError] = useState<string>('');
// //   const [errors, setErrors] = useState<{ [key: string]: string }>({});
// //   const [showModal, setShowModal] = useState<boolean>(false);

// //   // Initialize captcha code on component mount
// //   useEffect(() => {
// //     setCaptchaCode(generateCaptchaCode());
// //   }, []);

// //   // Fetch pricing configurations when registrationType, presentationType, guests, or nights change
// //   useEffect(() => {
// //     if (!formData.registrationType || !formData.presentationType) {
// //       setPricing(null);
// //       return;
// //     }

// //     const fetchPricing = async () => {
// //       try {
// //         const response = await fetch(`${BASE_URL}/api/registration/get-pricing-config`, {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/json',
// //             'Origin': 'https://globalrenewablemeet.com',
// //           },
// //           body: JSON.stringify({
// //             presentationType: formData.presentationType.toUpperCase(),
// //             registrationType: formData.registrationType === 'accommodation' ? 'REGISTRATION_AND_ACCOMMODATION' : 'REGISTRATION_ONLY',
// //             numberOfNights: formData.nights,
// //             numberOfGuests: formData.guests,
// //           }),
// //         });

// //         if (!response.ok) {
// //           throw new Error('Failed to fetch pricing');
// //         }

// //         const data: PricingConfig[] = await response.json();
// //         setPricing(data);
// //         setPricingError('');
// //       } catch (error) {
// //         console.error('Error fetching pricing:', error);
// //         setPricing(null);
// //         setPricingError('Unable to load pricing details. Please try again.');
// //       }
// //     };

// //     fetchPricing();
// //   }, [formData.registrationType, formData.presentationType, formData.nights, formData.guests]);

// //   const validateField = (name: string, value: string | number) => {
// //     let error = '';
// //     if (name === 'emailAddress' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.toString())) {
// //       error = 'Invalid email format';
// //     }
// //     if (name === 'phoneNumber' && value && !/^\+?\d{10,15}$/.test(value.toString())) {
// //       error = 'Phone number must be 10-15 digits';
// //     }
// //     if (['title', 'fullName', 'phoneNumber', 'emailAddress', 'institute', 'country', 'registrationType', 'presentationType'].includes(name) && !value) {
// //       error = 'This field is required';
// //     }
// //     setErrors((prev) => ({ ...prev, [name]: error }));
// //   };

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// //   ) => {
// //     const { name, value } = e.target;
// //     // Reset guests and nights if registrationType is set to 'only'
// //     if (name === 'registrationType' && value === 'only') {
// //       setFormData((prev) => ({
// //         ...prev,
// //         [name]: value,
// //         guests: 1,
// //         nights: 1,
// //       }));
// //     } else {
// //       setFormData((prev) => ({
// //         ...prev,
// //         [name]: name === 'guests' || name === 'nights' ? parseInt(value) || 1 : value,
// //       }));
// //     }
// //     validateField(name, value);
// //   };

// //   const handleRefreshCaptcha = () => {
// //     setCaptchaCode(generateCaptchaCode());
// //     setFormData((prev) => ({ ...prev, captchaInput: '' }));
// //     setCaptchaError(false);
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setCaptchaError(false);

// //     // Validate all fields
// //     const validationErrors: { [key: string]: string } = {};
// //     Object.keys(formData).forEach((key) => {
// //       if (key !== 'captchaInput' && key !== 'guests' && key !== 'nights') {
// //         validateField(key, formData[key as keyof FormData] as string | number);
// //         if (['title', 'fullName', 'phoneNumber', 'emailAddress', 'institute', 'country', 'registrationType', 'presentationType'].includes(key) && !formData[key as keyof FormData]) {
// //           validationErrors[key] = 'This field is required';
// //         }
// //       }
// //     });

// //     if (Object.keys(validationErrors).length > 0) {
// //       setErrors(validationErrors);
// //       return;
// //     }

// //     // Case-insensitive captcha verification
// //     if (formData.captchaInput.toLowerCase() !== captchaCode.toLowerCase()) {
// //       setCaptchaError(true);
// //       alert('Security verification failed. Please try again.');
// //       return;
// //     }

// //     if (!pricing || pricing.length === 0) {
// //       alert('Pricing details are not available. Please try again.');
// //       return;
// //     }

// //     // Submit registration to API
// //     try {
// //       const response = await fetch(`${BASE_URL}/api/registration/register`, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Origin': 'https://globalrenewablemeet.com',
// //         },
// //         body: JSON.stringify({
// //           name: `${formData.title} ${formData.fullName}`,
// //           phone: formData.phoneNumber,
// //           email: formData.emailAddress,
// //           instituteOrUniversity: formData.institute,
// //           country: formData.country,
// //           pricingConfig: {
// //             id: pricing[0].id,
// //           },
// //           amountPaid: pricing[0].totalPrice,
// //         }),
// //       });

// //       if (!response.ok) {
// //         throw new Error('Registration failed');
// //       }

// //       setShowModal(true);
// //       // Reset form after successful submission
// //       setFormData({
// //         title: 'Mr.',
// //         fullName: '',
// //         phoneNumber: '',
// //         emailAddress: '',
// //         institute: '',
// //         country: 'Japan',
// //         registrationType: '',
// //         presentationType: '',
// //         guests: 1,
// //         nights: 1,
// //         captchaInput: '',
// //       });
// //       setCaptchaCode(generateCaptchaCode());
// //     } catch (error) {
// //       console.error('Error during registration:', error);
// //       alert('Registration failed. Please try again.');
// //     }
// //   };

// //   return (
// //     <section className="bg-gray-50 py-16 px-4">
// //       <div className="max-w-4xl mx-auto">
// //         <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
// //           Renewable Energy Summit 2026
// //         </h2>
// //         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
// //           Secure your spot for the premier renewable energy conference of 2026. Please fill out the form below.
// //         </p>

// //         {/* Info Cards Section */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
// //           <div className="bg-white p-6 rounded-lg shadow-sm">
// //             <Calendar className="mx-auto mb-3" size={32} style={{ color: themeColor }} />
// //             <h3 className="font-bold text-lg text-gray-800">Conference Date</h3>
// //             <p className="text-gray-600">May 29-31, 2026</p>
// //           </div>
// //           <div className="bg-white p-6 rounded-lg shadow-sm">
// //             <MapPin className="mx-auto mb-3" size={32} style={{ color: themeColor }} />
// //             <h3 className="font-bold text-lg text-gray-800">Location</h3>
// //             <p className="text-gray-600">DoubleTree by Hilton, Tokyo</p>
// //           </div>
// //           <div className="bg-white p-6 rounded-lg shadow-sm">
// //             <Clock className="mx-auto mb-3" size={32} style={{ color: themeColor }} />
// //             <h3 className="font-bold text-lg text-gray-800">Registration Deadline</h3>
// //             <p className="text-gray-600">March 30, 2026</p>
// //           </div>
// //         </div>

// //         {/* Registration Form */}
// //         <div className="bg-white p-8 rounded-lg shadow-md">
// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               {/* Title */}
// //               <div>
// //                 <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title <span className="text-red-500">*</span></label>
// //                 <select
// //                   id="title"
// //                   name="title"
// //                   value={formData.title}
// //                   onChange={handleChange}
// //                   required
// //                   className={`w-full p-2 border rounded-md shadow-sm focus:ring-2 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
// //                   style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                 >
// //                   <option value="Mr.">Mr.</option>
// //                   <option value="Mrs.">Mrs.</option>
// //                   <option value="Ms.">Ms.</option>
// //                   <option value="Dr.">Dr.</option>
// //                   <option value="Prof.">Prof.</option>
// //                 </select>
// //                 {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
// //               </div>

// //               {/* Full Name */}
// //               <div>
// //                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
// //                 <input
// //                   type="text"
// //                   id="fullName"
// //                   name="fullName"
// //                   value={formData.fullName}
// //                   onChange={handleChange}
// //                   required
// //                   className={`w-full p-2 border rounded-md shadow-sm focus:ring-2 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
// //                   style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                 />
// //                 {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
// //               </div>

// //               {/* Phone Number */}
// //               <div>
// //                 <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
// //                 <input
// //                   type="tel"
// //                   id="phoneNumber"
// //                   name="phoneNumber"
// //                   value={formData.phoneNumber}
// //                   onChange={handleChange}
// //                   required
// //                   className={`w-full p-2 border rounded-md shadow-sm focus:ring-2 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
// //                   style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                 />
// //                 {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
// //               </div>

// //               {/* Email Address */}
// //               <div>
// //                 <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
// //                 <input
// //                   type="email"
// //                   id="emailAddress"
// //                   name="emailAddress"
// //                   value={formData.emailAddress}
// //                   onChange={handleChange}
// //                   required
// //                   className={`w-full p-2 border rounded-md shadow-sm focus:ring-2 ${errors.emailAddress ? 'border-red-500' : 'border-gray-300'}`}
// //                   style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                 />
// //                 {errors.emailAddress && <p className="text-red-500 text-sm mt-1">{errors.emailAddress}</p>}
// //               </div>

// //               {/* Institute/Organization */}
// //               <div>
// //                 <label htmlFor="institute" className="block text-sm font-medium text-gray-700 mb-1">Institute/Organization <span className="text-red-500">*</span></label>
// //                 <input
// //                   type="text"
// //                   id="institute"
// //                   name="institute"
// //                   value={formData.institute}
// //                   onChange={handleChange}
// //                   required
// //                   className={`w-full p-2 border rounded-md shadow-sm focus:ring-2 ${errors.institute ? 'border-red-500' : 'border-gray-300'}`}
// //                   style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                 />
// //                 {errors.institute && <p className="text-red-500 text-sm mt-1">{errors.institute}</p>}
// //               </div>

// //               {/* Country */}
// //               <div>
// //                 <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
// //                 <select
// //                   id="country"
// //                   name="country"
// //                   value={formData.country}
// //                   onChange={handleChange}
// //                   required
// //                   className={`w-full p-2 border rounded-md shadow-sm focus:ring-2 ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
// //                   style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                 >
// //                   <option value="Japan">Japan</option>
// //                   <option value="United States">United States</option>
// //                   <option value="Germany">Germany</option>
// //                   <option value="India">India</option>
// //                   <option value="United Kingdom">United Kingdom</option>
// //                   <option value="Other">Other</option>
// //                 </select>
// //                 {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
// //               </div>

// //               {/* Registration Type */}
// //               <div className="md:col-span-2">
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">Registration Type <span className="text-red-500">*</span></label>
// //                 <div className="flex flex-wrap gap-4">
// //                   <label className="flex items-center space-x-2">
// //                     <input
// //                       type="radio"
// //                       name="registrationType"
// //                       value="only"
// //                       onChange={handleChange}
// //                       required
// //                       className="focus:ring-2"
// //                       style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                     />
// //                     <span>Registration Only</span>
// //                   </label>
// //                   <label className="flex items-center space-x-2">
// //                     <input
// //                       type="radio"
// //                       name="registrationType"
// //                       value="accommodation"
// //                       onChange={handleChange}
// //                       required
// //                       className="focus:ring-2"
// //                       style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                     />
// //                     <span>Registration + Accommodation</span>
// //                   </label>
// //                 </div>
// //                 {errors.registrationType && <p className="text-red-500 text-sm mt-1">{errors.registrationType}</p>}
// //               </div>

// //               {/* Presentation Type */}
// //               <div className="md:col-span-2">
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">Presentation Type <span className="text-red-500">*</span></label>
// //                 <div className="flex flex-wrap gap-x-6 gap-y-2">
// //                   <label className="flex items-center space-x-2">
// //                     <input
// //                       type="radio"
// //                       name="presentationType"
// //                       value="speaker"
// //                       onChange={handleChange}
// //                       required
// //                       className="focus:ring-2"
// //                       style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                     />
// //                     <span>Speaker</span>
// //                   </label>
// //                   <label className="flex items-center space-x-2">
// //                     <input
// //                       type="radio"
// //                       name="presentationType"
// //                       value="poster"
// //                       onChange={handleChange}
// //                       required
// //                       className="focus:ring-2"
// //                       style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                     />
// //                     <span>Poster</span>
// //                   </label>
// //                   <label className="flex items-center space-x-2">
// //                     <input
// //                       type="radio"
// //                       name="presentationType"
// //                       value="listener"
// //                       onChange={handleChange}
// //                       required
// //                       className="focus:ring-2"
// //                       style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                     />
// //                     <span>Listener</span>
// //                   </label>
// //                   <label className="flex items-center space-x-2">
// //                     <input
// //                       type="radio"
// //                       name="presentationType"
// //                       value="delegate"
// //                       onChange={handleChange}
// //                       required
// //                       className="focus:ring-2"
// //                       style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                     />
// //                     <span>Delegate</span>
// //                   </label>
// //                   <label className="flex items-center space-x-2">
// //                     <input
// //                       type="radio"
// //                       name="presentationType"
// //                       value="student"
// //                       onChange={handleChange}
// //                       required
// //                       className="focus:ring-2"
// //                       style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                     />
// //                     <span>Student</span>
// //                   </label>
// //                   <label className="flex items-center space-x-2">
// //                     <input
// //                       type="radio"
// //                       name="presentationType"
// //                       value="exhibitor"
// //                       onChange={handleChange}
// //                       required
// //                       className="focus:ring-2"
// //                       style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                     />
// //                     <span>Exhibitor</span>
// //                   </label>
// //                 </div>
// //                 {errors.presentationType && <p className="text-red-500 text-sm mt-1">{errors.presentationType}</p>}
// //               </div>

// //               {/* Accommodation Selectors */}
// //               {formData.registrationType === 'accommodation' && (
// //                 <div className="md:col-span-2">
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Accommodation Details</label>
// //                   <div className="flex gap-4">
// //                     <select
// //                       name="nights"
// //                       value={formData.nights}
// //                       onChange={handleChange}
// //                       className="w-32 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2"
// //                       style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                     >
// //                       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((night) => (
// //                         <option key={night} value={night}>
// //                           {night} Night{night > 1 ? 's' : ''}
// //                         </option>
// //                       ))}
// //                     </select>
// //                     <select
// //                       name="guests"
// //                       value={formData.guests}
// //                       onChange={handleChange}
// //                       className="w-32 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2"
// //                       style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                     >
// //                       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((guest) => (
// //                         <option key={guest} value={guest}>
// //                           {guest} Guest{guest > 1 ? 's' : ''}
// //                         </option>
// //                       ))}
// //                     </select>
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Payment Summary */}
// //               <div className="md:col-span-2">
// //                 <div className="border-t-2 border-dashed border-gray-700 pt-6">
// //                   <h3 className="text-xl font-semibold mb-4">Payment Summary</h3>
// //                   {pricingError && <p className="text-red-500 text-sm mb-2">{pricingError}</p>}
// //                   <div className="flex justify-between mb-2">
// //                     <span>Registration Fee:</span>
// //                     <span>{pricing && pricing[0]?.presentationType?.price ? `$${pricing[0].presentationType.price.toFixed(2)}` : 'TBD'}</span>
// //                   </div>
// //                   {formData.registrationType === 'accommodation' && pricing && pricing[0]?.accommodationOption && (
// //                     <div className="flex justify-between mb-2">
// //                       <span>Accommodation Fee:</span>
// //                       <span>{`$${pricing[0].accommodationOption.price.toFixed(2)}`}</span>
// //                     </div>
// //                   )}
// //                   <div className="flex justify-between mb-2">
// //                     <span>Processing Fee ({pricing && pricing[0]?.processingFeePercent ? pricing[0].processingFeePercent : 0}%):</span>
// //                     <span>{pricing && pricing[0]?.totalPrice ? `$${(pricing[0].totalPrice - (pricing[0].presentationType.price + (pricing[0].accommodationOption?.price || 0))).toFixed(2)}` : 'TBD'}</span>
// //                   </div>
// //                   <div className="flex justify-between mb-4">
// //                     <span>Total Amount Payable:</span>
// //                     <span>{pricing && pricing[0]?.totalPrice ? `$${pricing[0].totalPrice.toFixed(2)}` : 'TBD'}</span>
// //                   </div>
// //                   <p className="text-sm text-gray-600 mb-4">
// //                     By clicking "Register Now", you confirm that you have read the terms and conditions, that you understand them, and that you agree to be bound by them.
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* Security Verification Section (Captcha) */}
// //               <div className="md:col-span-2">
// //                 <div className="bg-gray-100 p-6 rounded-lg">
// //                   <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-4">Security Verification</h3>
// //                   <div className="flex items-center gap-3 mb-4">
// //                     <div
// //                       className="flex-shrink-0 px-4 py-2 text-2xl font-bold tracking-widest text-center bg-gray-800 text-white rounded-md select-none"
// //                       style={{ letterSpacing: '0.4em' }}
// //                     >
// //                       {captchaCode}
// //                     </div>
// //                     <button
// //                       type="button"
// //                       onClick={handleRefreshCaptcha}
// //                       className="p-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition-colors flex-shrink-0"
// //                       aria-label="Refresh captcha"
// //                     >
// //                       <RotateCw size={20} />
// //                     </button>
// //                   </div>
// //                   <input
// //                     type="text"
// //                     name="captchaInput"
// //                     value={formData.captchaInput}
// //                     onChange={handleChange}
// //                     required
// //                     maxLength={6}
// //                     className={`w-full p-3 border rounded-md shadow-sm focus:ring-2 ${captchaError ? 'border-red-500' : 'border-gray-300'}`}
// //                     placeholder="Enter the code shown above"
// //                     style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
// //                   />
// //                   {captchaError && (
// //                     <p className="text-red-500 text-sm mt-1">Incorrect code. Please try again.</p>
// //                   )}
// //                   <p className="text-gray-500 text-sm mt-3 flex items-center">
// //                     <Lock size={16} className="mr-2" /> Please enter the 6-character code to verify you're human
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Submit Button */}
// //             <div className="text-center pt-4">
// //               <button
// //                 type="submit"
// //                 className="inline-flex items-center justify-center px-8 py-3 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
// //                 style={{ backgroundColor: themeColor }}
// //               >
// //                 <Send size={18} className="mr-2" />
// //                 Register Now
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>

// //       {/* Success Modal */}
// //       {showModal && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// //           <div className="bg-white p-8 rounded-lg shadow-xl text-center">
// //             <h3 className="text-xl font-semibold mb-4">Registration Successful!</h3>
// //             <p className="mb-4">Thank you for registering for the Renewable Energy Summit 2026.</p>
// //             <button
// //               className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
// //               onClick={() => setShowModal(false)}
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </section>
// //   );
// // };

// // export default ConferenceRegistration;



// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom'; // Add useLocation
// import { FaSyncAlt } from 'react-icons/fa';
// import { BASE_URL } from '../config';

// interface RegisterFormData {
//   title: string;
//   name: string;
//   phone: string;
//   email: string;
//   institute: string;
//   country: string;
//   registrationType: string;
//   presentationType: string;
//   guests: number;
//   nights: number;
//   accompanyingPerson: boolean;
//   extraNights: number;
//   captcha: string;
// }

// interface AbstractFormData {
//   title: string;
//   name: string;
//   phone: string;
//   email: string;
//   organization: string;
//   interestedIn: string;
//   session: string;
//   country: string;
//   abstractFile: File | null;
//   captcha: string;
// }

// interface PricingConfig {
//   id: number;
//   presentationType: {
//     id: number;
//     type: string;
//     price: number;
//   };
//   accommodationOption?: {
//     id: number;
//     nights: number;
//     guests: number;
//     price: number;
//   };
//   processingFeePercent: number;
//   totalPrice: number;
// }

// const Style: React.FC = () => (
//   <style>
//     {`
//       @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

//       * {
//         font-family: 'IBM Plex Sans', sans-serif;
//       }

//       .form-input, .form-select {
//         width: 100%;
//         padding: 0.75rem 1rem;
//         border: 1px solid #e5e7eb;
//         border-radius: 0.5rem;
//         font-size: 1rem;
//         color: #1f2937;
//         transition: border-color 0.2s ease;
//       }
//       .form-input:focus, .form-select:focus {
//         outline: none;
//         border-color: #000;
//       }
//       .form-input.error, .form-select.error {
//         border-color: #ef4444;
//       }
//       .error-text {
//         color: #ef4444;
//         font-size: 0.875rem;
//         margin-top: 0.25rem;
//       }
//       .custom-checkbox {
//         width: 1.5rem;
//         height: 1.5rem;
//         border: 2px solid #1f2937;
//         border-radius: 0.25rem;
//         display: inline-flex;
//         align-items: center;
//         justify-content: center;
//         cursor: pointer;
//         transition: background-color 0.2s ease, border-color 0.2s ease;
//       }
//       .custom-checkbox.checked {
//         background-color: #1f2937;
//         border-color: #1f2937;
//       }
//       .custom-checkbox.checked::before {
//         content: '✔';
//         color: #fff;
//         font-size: 1rem;
//         font-weight: bold;
//       }
//       .radio-group {
//         display: flex;
//         flex-wrap: wrap;
//         gap: 1rem;
//         margin-bottom: 1rem;
//       }
//       .radio-label {
//         display: flex;
//         align-items: center;
//         gap: 0.5rem;
//         cursor: pointer;
//       }
//       .radio-input {
//         width: 1.25rem;
//         height: 1.25rem;
//         border: 2px solid #1f2937;
//         border-radius: 50%;
//         appearance: none;
//         cursor: pointer;
//       }
//       .radio-input:checked {
//         background-color: #1f2937;
//         border-color: #1f2937;
//         position: relative;
//       }
//       .radio-input:checked::before {
//         content: '';
//         width: 0.5rem;
//         height: 0.5rem;
//         background-color: #fff;
//         border-radius: 50%;
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//       }
//       .payment-summary {
//         border-top: 2px dashed #1f2937;
//         padding-top: 1.5rem;
//         margin-top: 2rem;
//       }
//       .captcha-section {
//         display: flex;
//         align-items: center;
//         gap: 1rem;
//         margin-top: 1rem;
//         background: #f0fdfa;
//         border-radius: 0.75rem;
//         padding: 1rem;
//         box-shadow: 0 2px 8px #e0f2f1;
//       }
//       .captcha-image {
//         font-size: 2rem;
//         letter-spacing: 0.3em;
//         font-weight: 700;
//         background: linear-gradient(90deg,#4db6ac 30%,#fff 100%);
//         color: #222;
//         border: 2px dashed #4db6ac;
//         padding: 0.75rem 1.5rem;
//         border-radius: 0.75rem;
//         text-shadow: 1px 1px 2px #b2dfdb;
//       }
//       .refresh-button {
//         background: #fff;
//         border: 2px solid #4db6ac;
//         color: #4db6ac;
//         padding: 0.5rem 0.75rem;
//         border-radius: 0.5rem;
//         font-size: 1.5rem;
//         margin-left: 0.5rem;
//         transition: transform 0.2s;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//       }
//       .refresh-button:hover {
//         transform: rotate(90deg);
//       }
//       .accommodation-selectors {
//         display: flex;
//         gap: 1rem;
//         flex-wrap: wrap;
//       }
//       .tabs {
//         display: flex;
//         border-bottom: 2px solid #e5e7eb;
//         margin-bottom: 2rem;
//       }
//       .tab {
//         flex: 1;
//         text-align: center;
//         padding: 1rem;
//         font-weight: 600;
//         cursor: pointer;
//         transition: all 0.3s ease;
//       }
//       .tab.active {
//         background-color: #4db6ac;
//         color: white;
//         border-radius: 0.5rem 0.5rem 0 0;
//       }
//       .tab:hover:not(.active) {
//         background-color: #f3f4f6;
//       }
//       .info-section {
//         display: flex;
//         justify-content: space-between;
//         margin-bottom: 2rem;
//         padding: 1rem;
//         background-color: #f9fafb;
//         border-radius: 0.5rem;
//       }
//       .info-item {
//         text-align: center;
//       }
//       .info-item label {
//         font-weight: 600;
//         color: #1f2937;
//       }
//       .info-item p {
//         color: #4b5563;
//       }
//       .file-input {
//         padding: 0.5rem;
//         border: 1px solid #e5e7eb;
//         border-radius: 0.5rem;
//         width: 100%;
//       }
//       .file-preview {
//         margin-top: 0.5rem;
//         color: #4b5563;
//         font-size: 0.875rem;
//       }
//       .modal {
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         background-color: rgba(0, 0, 0, 0.5);
//         display: flex;
//         justify-content: center;
//         align-items: center;
//       }
//       .modal-content {
//         background-color: white;
//         padding: 2rem;
//         border-radius: 0.5rem;
//         text-align: center;
//       }
//       .modal-button {
//         background-color: #4db6ac;
//         color: white;
//         padding: 0.5rem 1rem;
//         border-radius: 0.5rem;
//         margin-top: 1rem;
//         cursor: pointer;
//       }
//       .button-group {
//         display: flex;
//         gap: 1rem;
//       }
//     `}
//   </style>
// );

// const Register: React.FC<{
//   captchaCode: string;
//   generateCaptcha: () => void;
//   setRegisterFormData: React.Dispatch<React.SetStateAction<RegisterFormData>>;
//   registerFormData: RegisterFormData;
//   setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
//   resetForm: () => void;
// }> = ({ captchaCode, generateCaptcha, setRegisterFormData, registerFormData, setShowModal, resetForm }) => {
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [pricing, setPricing] = useState<PricingConfig[] | null>(null);
//   const [pricingError, setPricingError] = useState<string>('');

//   const fetchPricing = async () => {
//     if (!registerFormData.registrationType || !registerFormData.presentationType) {
//       setPricing(null);
//       return;
//     }

//     try {
//       const response = await fetch(`${BASE_URL}/api/registration/get-pricing-config`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           registrationType: registerFormData.registrationType === 'registrationAndAccommodation'
//             ? 'REGISTRATION_AND_ACCOMMODATION'
//             : 'REGISTRATION_ONLY',
//           presentationType: registerFormData.presentationType.toUpperCase(),
//           numberOfNights: registerFormData.nights,
//           numberOfGuests: registerFormData.guests,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch pricing');
//       }

//       const data: PricingConfig[] = await response.json();
//       setPricing(data);
//       setPricingError('');
//     } catch (error) {
//       console.error('Error fetching pricing:', error);
//       setPricing(null);
//       setPricingError('Unable to load pricing details. Please try again.');
//     }
//   };

//   const handleRegistration = async () => {
//     if (!pricing || pricing.length === 0) {
//       alert('Pricing details are not available. Please try again.');
//       return;
//     }

//     try {
//       const response = await fetch(`${BASE_URL}/api/registration/register`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: `${registerFormData.title} ${registerFormData.name}`,
//           phone: registerFormData.phone,
//           email: registerFormData.email,
//           instituteOrUniversity: registerFormData.institute,
//           country: registerFormData.country,
//           pricingConfigId: pricing[0].id,
//           // pricingConfig: {
//           //   id: pricing[0].id
//           // },
//           amountPaid: pricing[0].totalPrice
//         }),
//       });

//       console.log('Registration response:', { pricingConfig: { id: pricing[0].id } });

//       if (!response.ok) {
//         throw new Error('Registration failed');
//       }

//       setShowModal(true);
//     } catch (error) {
//       console.error('Error during registration:', error);
//       alert('Registration failed. Please try again.');
//     }
//   };

//   useEffect(() => {
//     // Clear pricing and error immediately on combo change
//     setPricing(null);
//     setPricingError('');
//     fetchPricing();
//   }, [
//     registerFormData.registrationType,
//     registerFormData.presentationType,
//     registerFormData.nights,
//     registerFormData.guests,
//   ]);

//   const validateField = (name: string, value: string | number) => {
//     let error = '';
//     if (name === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.toString())) {
//       error = 'Invalid email format';
//     }
//     if (name === 'phone' && value && !/^\+?\d{10,15}$/.test(value.toString())) {
//       error = 'Phone number must be 10-15 digits';
//     }
//     if (['title', 'name', 'institute', 'country', 'registrationType'].includes(name) && !value) {
//       error = 'This field is required';
//     }
//     setErrors((prev) => ({ ...prev, [name]: error }));
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     // If registrationType is changed to registrationOnly, reset guests and nights to 1
//     if (name === 'registrationType' && value === 'registrationOnly') {
//       setRegisterFormData((prev) => ({
//         ...prev,
//         [name]: value,
//         guests: 1,
//         nights: 1,
//       }));
//       validateField(name, value);
//       return;
//     }
//     setRegisterFormData((prev) => ({ ...prev, [name]: parseInt(value) || value }));
//     validateField(name, value);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const validationErrors: { [key: string]: string } = {};
//     Object.keys(registerFormData).forEach((key) => {
//       validateField(key, registerFormData[key as keyof RegisterFormData] as string | number);
//       if (['title', 'name', 'phone', 'email', 'institute', 'country', 'registrationType'].includes(key) && !registerFormData[key as keyof RegisterFormData]) {
//         validationErrors[key] = 'This field is required';
//       }
//     });

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     if (registerFormData.captcha.toLowerCase() !== captchaCode.toLowerCase()) {
//       alert('Invalid CAPTCHA code');
//       return;
//     }

//     handleRegistration();
//   };

//   return (
//     <form className="space-y-6">
//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Select Title *
//         </label>
//         <select
//           name="title"
//           value={registerFormData.title}
//           onChange={handleChange}
//           required
//           className={`form-select ${errors.title ? 'error' : ''}`}
//         >
//           <option value="">Title</option>
//           <option value="Mr">Mr.</option>
//           <option value="Ms">Ms.</option>
//           <option value="Dr">Dr.</option>
//           <option value="Prof">Prof.</option>
//         </select>
//         {errors.title && <p className="error-text">{errors.title}</p>}
//       </div>



//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Name *
//         </label>
//         <input
//           name="name"
//           placeholder="Name"
//           value={registerFormData.name}
//           onChange={handleChange}
//           required
//           className={`form-input ${errors.name ? 'error' : ''}`}
//         />
//         {errors.name && <p className="error-text">{errors.name}</p>}
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Phone *
//         </label>
//         <input
//           name="phone"
//           placeholder="Phone"
//           value={registerFormData.phone}
//           onChange={handleChange}
//           required
//           className={`form-input ${errors.phone ? 'error' : ''}`}
//         />
//         {errors.phone && <p className="error-text">{errors.phone}</p>}
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Email *
//         </label>
//         <input
//           name="email"
//           placeholder="Email"
//           value={registerFormData.email}
//           onChange={handleChange}
//           required
//           className={`form-input ${errors.email ? 'error' : ''}`}
//         />
//         {errors.email && <p className="error-text">{errors.email}</p>}
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Institute/University *
//         </label>
//         <input
//           name="institute"
//           placeholder="Institute/University"
//           value={registerFormData.institute}
//           onChange={handleChange}
//           required
//           className={`form-input ${errors.institute ? 'error' : ''}`}
//         />
//         {errors.institute && <p className="error-text">{errors.institute}</p>}
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Country *
//         </label>
//         <select
//           name="country"
//           value={registerFormData.country}
//           onChange={handleChange}
//           required
//           className={`form-select ${errors.country ? 'error' : ''}`}
//         >
//           <option value="">Choose Country</option>
//           <option value="us">United States</option>
//           <option value="ca">Canada</option>
//           <option value="uk">United Kingdom</option>
//           <option value="au">Australia</option>
//           <option value="de">Germany</option>
//           <option value="fr">France</option>
//           <option value="other">Other</option>
//         </select>
//         {errors.country && <p className="error-text">{errors.country}</p>}
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Select Registration Type *
//         </label>
//         <div className="radio-group">
//           <label className="radio-label">
//             <input
//               type="radio"
//               name="registrationType"
//               value="registrationOnly"
//               onChange={handleChange}
//               className="radio-input"
//               required
//             />
//             Registration Only
//           </label>
//           <label className="radio-label">
//             <input
//               type="radio"
//               name="registrationType"
//               value="registrationAndAccommodation"
//               onChange={handleChange}
//               className="radio-input"
//             />
//             Registration and Accommodation
//           </label>
//         </div>
//         {errors.registrationType && <p className="error-text">{errors.registrationType}</p>}
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Select Presentation Type
//         </label>
//         <div className="radio-group">
//           {['Speaker', 'Poster', 'Listener/Delegate', 'Sponsor', 'Student', 'Exhibitor'].map((type) => (
//             <label key={type} className="radio-label">
//               <input
//                 type="radio"
//                 name="presentationType"
//                 value={type.toLowerCase()}
//                 onChange={handleChange}
//                 className="radio-input"
//               />
//               {type}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Select Accommodation Type
//         </label>
//         <div className="accommodation-selectors">
//           <select
//             name="nights"
//             value={registerFormData.nights}
//             onChange={handleChange}
//             className="form-select w-32"
//             disabled={registerFormData.registrationType === 'registrationOnly'}
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((night) => (
//               <option key={night} value={night}>
//                 {night} Night{night > 1 ? 's' : ''}
//               </option>
//             ))}
//           </select>
//           <select
//             name="guests"
//             value={registerFormData.guests}
//             onChange={handleChange}
//             className="form-select w-32"
//             disabled={registerFormData.registrationType === 'registrationOnly'}
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((guest) => (
//               <option key={guest} value={guest}>
//                 {guest} Guest{guest > 1 ? 's' : ''}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="payment-summary">
//         <h3 className="text-xl font-semibold mb-4">Payment Summary</h3>
//         {pricingError && <p className="error-text mb-2">{pricingError}</p>}
//         <div className="flex justify-between mb-2">
//           <span>Registration Fee:</span>
//           <span>{pricing && pricing[0]?.presentationType?.price ? `$${pricing[0].presentationType.price.toFixed(2)}` : 'TBD'}</span>
//         </div>
//         {/* Only show accommodation fee if registrationType is not 'registrationOnly' and accommodationOption exists */}
//         {registerFormData.registrationType !== 'registrationOnly' && pricing && pricing[0]?.accommodationOption && (
//           <div className="flex justify-between mb-2">
//             <span>Accommodation Fee:</span>
//             <span>{`$${pricing[0].accommodationOption.price.toFixed(2)}`}</span>
//           </div>
//         )}
//         <div className="flex justify-between mb-2">
//           <span>Processing Fee ({pricing && pricing[0]?.processingFeePercent ? pricing[0].processingFeePercent : 0}%):</span>
//           <span>{pricing && pricing[0]?.totalPrice ? `$${(pricing[0].totalPrice - (pricing[0].presentationType.price + (pricing[0].accommodationOption?.price || 0))).toFixed(2)}` : 'TBD'}</span>
//         </div>
//         <div className="flex justify-between mb-4">
//           <span>Total Amount Payable in $:</span>
//           <span>{pricing && pricing[0]?.totalPrice ? `$${pricing[0].totalPrice.toFixed(2)}` : 'TBD'}</span>
//         </div>

//         <p className="text-sm text-gray-600 mb-4">
//           By clicking "Pay Now", you confirm that you have read the terms and conditions, that you understand them and that you agree to be bound by them.
//         </p>

//         <div className="captcha-section" style={{ background: '#f0fdfa', borderRadius: '0.75rem', padding: '1rem', boxShadow: '0 2px 8px #e0f2f1' }}>
//           <span className="captcha-image" style={{ fontSize: '2rem', letterSpacing: '0.3em', fontWeight: 700, background: 'linear-gradient(90deg,#4db6ac 30%,#fff 100%)', color: '#222', border: '2px dashed #4db6ac', padding: '0.75rem 1.5rem', borderRadius: '0.75rem', textShadow: '1px 1px 2px #b2dfdb' }}>{captchaCode}</span>
//           <span style={{ fontWeight: 600, color: '#333' }}>Enter the code above here:</span>
//           <input
//             name="captcha"
//             value={registerFormData.captcha}
//             onChange={handleChange}
//             required
//             className="form-input w-32"
//             style={{ fontSize: '1.2rem', border: '2px solid #4db6ac', borderRadius: '0.5rem', padding: '0.5rem 1rem', background: '#fff' }}
//           />
//           <button
//             type="button"
//             className="refresh-button flex items-center justify-center"
//             onClick={generateCaptcha}
//             style={{ background: '#fff', border: '2px solid #4db6ac', color: '#4db6ac', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '1.5rem', marginLeft: '0.5rem', transition: 'transform 0.2s' }}
//             title="Refresh Captcha"
//           >
//             <FaSyncAlt />
//           </button>
//         </div>
//       </div>

//       <div className="pt-4 button-group">
//         <button
//           type="button"
//           onClick={resetForm}
//           className="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all"
//         >
//           Reset Form
//         </button>
//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all"
//         >
//           Pay Now
//         </button>
//       </div>
//     </form>
//   );
// };

// const AbstractRegistration: React.FC<{
//   captchaCode: string;
//   generateCaptcha: () => void;
//   setAbstractFormData: React.Dispatch<React.SetStateAction<AbstractFormData>>;
//   abstractFormData: AbstractFormData;
//   setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
//   resetForm: () => void;
// }> = ({ captchaCode, generateCaptcha, setAbstractFormData, abstractFormData, setShowModal, resetForm }) => {
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [interestedInOptions, setInterestedInOptions] = useState<{ id: string; option_name: string }[]>([]);
//   const [sessionOptions, setSessionOptions] = useState<{ id: string; sessionName: string }[]>([]);

//   useEffect(() => {
//     // Fetch interested in options
//     fetch(`${BASE_URL}/api/form-submission/get-interested-in-options`)
//       .then(res => res.json())
//       .then(data => setInterestedInOptions(data || []))
//       .catch(() => setInterestedInOptions([]));
//     // Fetch session options
//     fetch(`${BASE_URL}/api/form-submission/get-session-options`)
//       .then(res => res.json())
//       .then(data => setSessionOptions(data || []))
//       .catch(() => setSessionOptions([]));
//   }, []);

//   // Captcha auto-refresh every 1 minute
//   useEffect(() => {
//     const interval = setInterval(() => {
//       generateCaptcha();
//     }, 60000); // 1 minute
//     return () => clearInterval(interval);
//   }, [generateCaptcha]);

//   const validateField = (name: string, value: string) => {
//     let error = '';
//     if (name === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
//       error = 'Invalid email format';
//     }
//     if (name === 'phone' && value && !/^\+?\d{10,15}$/.test(value)) {
//       error = 'Phone number must be 10-15 digits';
//     }
//     if (['title', 'name', 'email', 'phone'].includes(name) && !value) {
//       error = 'This field is required';
//     }
//     setErrors((prev) => ({ ...prev, [name]: error }));
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setAbstractFormData((prev) => ({ ...prev, [name]: value }));
//     validateField(name, value);
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null;
//     setAbstractFormData((prev) => ({ ...prev, abstractFile: file }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const validationErrors: { [key: string]: string } = {};
//     Object.keys(abstractFormData).forEach((key) => {
//       if (["title", "name", "email", "phone"].includes(key) && !abstractFormData[key as keyof AbstractFormData]) {
//         validationErrors[key] = "This field is required";
//       }
//       validateField(key, abstractFormData[key as keyof AbstractFormData] as string);
//     });

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     if (abstractFormData.captcha.toLowerCase() !== captchaCode.toLowerCase()) {
//       alert("Invalid CAPTCHA code");
//       return;
//     }

//     // Prepare form data for submission
//     const formData = new FormData();
//     formData.append("titlePrefix", abstractFormData.title);
//     formData.append("name", abstractFormData.name);
//     formData.append("email", abstractFormData.email);
//     formData.append("phone", abstractFormData.phone);
//     formData.append("organizationName", abstractFormData.organization);
//     // Pass only the id for interestedIn and session
//     if (abstractFormData.interestedIn) {
//       formData.append("interestedInId", abstractFormData.interestedIn);
//     }
//     if (abstractFormData.session) {
//       formData.append("sessionId", abstractFormData.session);
//     }
//     if (abstractFormData.abstractFile) {
//       formData.append("abstractFile", abstractFormData.abstractFile);
//     }
//     formData.append("country", abstractFormData.country);

//     try {
//       const response = await fetch(`${BASE_URL}/api/form-submission/submit`, {
//         method: "POST",
//         body: formData,
//       });
//       if (!response.ok) {
//         throw new Error("Submission failed");
//       }
//       setShowModal(true);
//     } catch (error) {
//       alert("Submission failed. Please try again.");
//     }
//   };

//   return (
//     <form className="space-y-6">
//       <div className="info-section">
//         <div className="info-item">
//           <label>Conference Dates:</label>
//           <p>April 24-26, 2026</p>
//         </div>
//         <div className="info-item">
//           <label>Submission Deadline:</label>
//           <p>September 15, 2025</p>
//         </div>
//         <div className="info-item">
//           <label>Conference Venue:</label>
//           <p>Seoul, South Korea</p>
//         </div>
//         <div className="info-item">
//           <label>Early Bird Registration:</label>
//           <p>July 28, 2025</p>
//         </div>
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Select Titles *
//         </label>
//         <select
//           name="title"
//           value={abstractFormData.title}
//           onChange={handleChange}
//           required
//           className={`form-select ${errors.title ? 'error' : ''}`}
//         >
//           <option value="">Select Titles</option>
//           <option value="Mr">Mr.</option>
//           <option value="Ms">Ms.</option>
//           <option value="Dr">Dr.</option>
//           <option value="Prof">Prof.</option>
//         </select>
//         {errors.title && <p className="error-text">{errors.title}</p>}
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Your Name *
//         </label>
//         <input
//           name="name"
//           placeholder="Your Name"
//           value={abstractFormData.name}
//           onChange={handleChange}
//           required
//           className={`form-input ${errors.name ? 'error' : ''}`}
//         />
//         {errors.name && <p className="error-text">{errors.name}</p>}
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Your Email *
//         </label>
//         <input
//           name="email"
//           placeholder="Your Email"
//           value={abstractFormData.email}
//           onChange={handleChange}
//           required
//           className={`form-input ${errors.email ? 'error' : ''}`}
//         />
//         {errors.email && <p className="error-text">{errors.email}</p>}
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Your Phone *
//         </label>
//         <input
//           name="phone"
//           placeholder="Your Phone"
//           value={abstractFormData.phone}
//           onChange={handleChange}
//           required
//           className={`form-input ${errors.phone ? 'error' : ''}`}
//         />
//         {errors.phone && <p className="error-text">{errors.phone}</p>}
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Organization Name
//         </label>
//         <input
//           name="organization"
//           placeholder="Organization Name"
//           value={abstractFormData.organization}
//           onChange={handleChange}
//           className="form-input"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Interested In
//         </label>
//         <select
//           name="interestedIn"
//           value={abstractFormData.interestedIn}
//           onChange={handleChange}
//           className="form-select"
//         >
//           <option value="">Select Option</option>
//           {interestedInOptions.map(opt => (
//             <option key={opt.id} value={opt.id}>{opt.option_name}</option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Please Select Session
//         </label>
//         <select
//           name="session"
//           value={abstractFormData.session}
//           onChange={handleChange}
//           className="form-select"
//         >
//           <option value="">Please Select Session</option>
//           {sessionOptions.map(opt => (
//             <option key={opt.id} value={opt.id}>{opt.sessionName}</option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Select Country
//         </label>
//         <select
//           name="country"
//           value={abstractFormData.country}
//           onChange={handleChange}
//           className="form-select"
//         >
//           <option value="">Select Country</option>
//           <option value="us">United States</option>
//           <option value="ca">Canada</option>
//           <option value="uk">United Kingdom</option>
//           <option value="au">Australia</option>
//           <option value="de">Germany</option>
//           <option value="fr">France</option>
//           <option value="other">Other</option>
//         </select>
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Upload Abstract:
//         </label>
//         <input
//           type="file"
//           name="abstractFile"
//           onChange={handleFileChange}
//           className="file-input"
//         />
//         {abstractFormData.abstractFile && (
//           <p className="file-preview">
//             Selected file: {abstractFormData.abstractFile.name} ({(abstractFormData.abstractFile.size / 1024).toFixed(2)} KB)
//           </p>
//         )}
//       </div>

//       <div className="captcha-section" style={{ background: '#f0fdfa', borderRadius: '0.75rem', padding: '1rem', boxShadow: '0 2px 8px #e0f2f1' }}>
//         <span className="captcha-image" style={{ fontSize: '2rem', letterSpacing: '0.3em', fontWeight: 700, background: 'linear-gradient(90deg,#4db6ac 30%,#fff 100%)', color: '#222', border: '2px dashed #4db6ac', padding: '0.75rem 1.5rem', borderRadius: '0.75rem', textShadow: '1px 1px 2px #b2dfdb' }}>{captchaCode}</span>
//         <span style={{ fontWeight: 600, color: '#333' }}>Enter the code above here:</span>
//         <input
//           name="captcha"
//           value={abstractFormData.captcha}
//           onChange={handleChange}
//           required
//           className="form-input w-32"
//           style={{ fontSize: '1.2rem', border: '2px solid #4db6ac', borderRadius: '0.5rem', padding: '0.5rem 1rem', background: '#fff' }}
//         />
//         <button
//           type="button"
//           className="refresh-button flex items-center justify-center"
//           onClick={generateCaptcha}
//           style={{ background: '#fff', border: '2px solid #4db6ac', color: '#4db6ac', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '1.5rem', marginLeft: '0.5rem', transition: 'transform 0.2s' }}
//           title="Refresh Captcha"
//         >
//           <FaSyncAlt />
//         </button>
//       </div>

//       <div className="pt-4 button-group">
//         <button
//           type="button"
//           onClick={resetForm}
//           className="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all"
//         >
//           Reset Form
//         </button>
//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all"
//         >
//           Submit Abstract
//         </button>
//       </div>
//     </form>
//   );
// };

// const ConferenceRegistration: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'register' | 'abstract'>('register');
//   const [captchaCode, setCaptchaCode] = useState<string>('');
//   const [showModal, setShowModal] = useState(false);
//   const [registerFormData, setRegisterFormData] = useState<RegisterFormData>({
//     title: '',
//     name: '',
//     phone: '',
//     email: '',
//     institute: '',
//     country: '',
//     registrationType: '',
//     presentationType: '',
//     guests: 1,
//     nights: 1,
//     accompanyingPerson: false,
//     extraNights: 0,
//     captcha: '',
//   });
//   const [abstractFormData, setAbstractFormData] = useState<AbstractFormData>({
//     title: '',
//     name: '',
//     phone: '',
//     email: '',
//     organization: '',
//     interestedIn: '',
//     session: '',
//     country: '',
//     abstractFile: null,
//     captcha: '',
//   });

//   const location = useLocation(); // Add useLocation to read query parameters

//   const generateCaptcha = () => {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     for (let i = 0; i < 6; i++) {
//       result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     setCaptchaCode(result);
//     if (activeTab === 'register') {
//       setRegisterFormData((prev) => ({ ...prev, captcha: '' }));
//     } else {
//       setAbstractFormData((prev) => ({ ...prev, captcha: '' }));
//     }
//   };

//   const resetRegisterForm = () => {
//     setRegisterFormData({
//       title: '',
//       name: '',
//       phone: '',
//       email: '',
//       institute: '',
//       country: '',
//       registrationType: '',
//       presentationType: '',
//       guests: 1,
//       nights: 1,
//       accompanyingPerson: false,
//       extraNights: 0,
//       captcha: '',
//     });
//     generateCaptcha();
//   };

//   const resetAbstractForm = () => {
//     setAbstractFormData({
//       title: '',
//       name: '',
//       phone: '',
//       email: '',
//       organization: '',
//       interestedIn: '',
//       session: '',
//       country: '',
//       abstractFile: null,
//       captcha: '',
//     });
//     generateCaptcha();
//   };

//   // Handle tab change from URL or custom event
//   useEffect(() => {
//     // Check URL query parameter
//     const params = new URLSearchParams(location.search);
//     const tab = params.get('tab');
//     // Also check for hash (for /register#abstract)
//     const hash = location.hash.replace('#', '');
//     if (tab === 'register' || tab === 'abstract') {
//       setActiveTab(tab);
//     } else if (hash === 'abstract' || hash === 'register') {
//       setActiveTab(hash as 'register' | 'abstract');
//     }

//     // Listen for tabChange event
//     const handleTabChange = (event: Event) => {
//       const customEvent = event as CustomEvent<{ tab: 'register' | 'abstract' }>;
//       if (customEvent.detail.tab === 'register' || customEvent.detail.tab === 'abstract') {
//         setActiveTab(customEvent.detail.tab);
//       }
//     };

//     window.addEventListener('tabChange', handleTabChange);
//     return () => window.removeEventListener('tabChange', handleTabChange);
//   }, [location.search, location.hash]);

//   useEffect(() => {
//     generateCaptcha();
//   }, [activeTab]);

//   return (
//     <div>
//       <Style />
//       <section className="bg-gradient-to-b from-gray-50 py-8 to-white">
//         <div className="container mx-auto px-4 py-16 max-w-4xl">
//           <div className="text-center mb-12">
//             <span className="inline-block px-3 py-1 text-sm font-semibold text-black bg-gray-200 rounded-full mb-4">
//               REGISTRATION OPEN
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
//               Renewable Energy Summit 2026
//             </h2>
//             <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//               Secure your exclusive access to the premier renewable energy conference of the year
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
//             <div className="tabs">
//               <div
//                 className={`tab ${activeTab === 'register' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('register')}
//               >
//                 Register
//               </div>
//               <div
//                 className={`tab ${activeTab === 'abstract' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('abstract')}
//               >
//                 Abstract Submission
//               </div>
//             </div>

//             {activeTab === 'register' ? (
//               <Register
//                 captchaCode={captchaCode}
//                 generateCaptcha={generateCaptcha}
//                 setRegisterFormData={setRegisterFormData}
//                 registerFormData={registerFormData}
//                 setShowModal={setShowModal}
//                 resetForm={resetRegisterForm}
//               />
//             ) : (
//               <AbstractRegistration
//                 captchaCode={captchaCode}
//                 generateCaptcha={generateCaptcha}
//                 setAbstractFormData={setAbstractFormData}
//                 abstractFormData={abstractFormData}
//                 setShowModal={setShowModal}
//                 resetForm={resetAbstractForm}
//               />
//             )}
//           </div>
//         </div>
//       </section>

//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h3 className="text-xl font-semibold mb-4">
//               {activeTab === 'register' ? 'Registration Successful!' : 'Abstract Submitted Successfully!'}
//             </h3>
//             <p className="mb-4">
//               {activeTab === 'register'
//                 ? 'Thank you for registering for the Renewable Energy Summit 2026.'
//                 : 'Your abstract has been submitted successfully.'}
//             </p>
//             <button
//               className="modal-button"
//               onClick={() => {
//                 setShowModal(false);
//                 activeTab === 'register' ? resetRegisterForm() : resetAbstractForm();
//               }}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ConferenceRegistration;











import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// --- Configuration ---
// Define the BASE_URL directly in the component file.
// Replace this with your actual backend server address.
const BASE_URL = 'http://zynconfback.theroboticssummit.com';

// --- Interfaces (Data Structures) ---
interface RegisterFormData {
  title: string;
  name: string;
  phone: string;
  email: string;
  institute: string;
  country: string;
  registrationType: string;
  presentationType: string;
  guests: number;
  nights: number;
  accompanyingPerson: boolean;
  extraNights: number;
  captcha: string;
}

interface AbstractFormData {
  title: string;
  name: string;
  phone: string;
  email: string;
  organization: string;
  interestedIn: string;
  session: string;
  country: string;
  abstractFile: File | null;
  captcha: string;
}

interface PricingConfig {
  id: number;
  presentationType: {
    id: number;
    type: string;
    price: number;
  };
  accommodationOption?: {
    id: number;
    nights: number;
    guests: number;
    price: number;
  };
  processingFeePercent: number;
  totalPrice: number;
}

// --- Reusable Components ---

// Replaced react-icons with an inline SVG for the refresh icon.
const FaSyncAlt = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M440.65 12.57l4 82.77A247.16 247.16 0 00255.83 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 00166.18-63.21l-66.15-66.15A159.94 159.94 0 11256 128c44.11 0 84.34 17.9 113.17 46.83l-82.77-4a247.45 247.45 0 00-112.64-25.27C119.6 145.56 7.9 256.41 8 393.42 8.1 432.32 21.82 468.1 48 493.58a247.33 247.33 0 00373.18-191.95l-82.77 4A159.92 159.92 0 01256 416a159.63 159.63 0 01-113.17-46.83l66.15 66.15A247.17 247.17 0 00448 256.2C448 181.43 403.66 116.18 344.22 81.51l82.77-4-1.34-27.44z"></path>
    </svg>
);


const Style: React.FC = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

      * {
        font-family: 'IBM Plex Sans', sans-serif;
      }

      .form-input, .form-select {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        font-size: 1rem;
        color: #1f2937;
        transition: border-color 0.2s ease;
      }
      .form-input:focus, .form-select:focus {
        outline: none;
        border-color: #000;
      }
      .form-input.error, .form-select.error {
        border-color: #ef4444;
      }
      .error-text {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
      }
      .custom-checkbox {
        width: 1.5rem;
        height: 1.5rem;
        border: 2px solid #1f2937;
        border-radius: 0.25rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.2s ease, border-color 0.2s ease;
      }
      .custom-checkbox.checked {
        background-color: #1f2937;
        border-color: #1f2937;
      }
      .custom-checkbox.checked::before {
        content: '✔';
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
      }
      .radio-group {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1rem;
      }
      .radio-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
      }
      .radio-input {
        width: 1.25rem;
        height: 1.25rem;
        border: 2px solid #1f2937;
        border-radius: 50%;
        appearance: none;
        cursor: pointer;
      }
      .radio-input:checked {
        background-color: #1f2937;
        border-color: #1f2937;
        position: relative;
      }
      .radio-input:checked::before {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .payment-summary {
        border-top: 2px dashed #1f2937;
        padding-top: 1.5rem;
        margin-top: 2rem;
      }
      .captcha-section {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
        background: #f0fdfa;
        border-radius: 0.75rem;
        padding: 1rem;
        box-shadow: 0 2px 8px #e0f2f1;
      }
      .captcha-image {
        font-size: 2rem;
        letter-spacing: 0.3em;
        font-weight: 700;
        background: linear-gradient(90deg,#4db6ac 30%,#fff 100%);
        color: #222;
        border: 2px dashed #4db6ac;
        padding: 0.75rem 1.5rem;
        border-radius: 0.75rem;
        text-shadow: 1px 1px 2px #b2dfdb;
      }
      .refresh-button {
        background: #fff;
        border: 2px solid #4db6ac;
        color: #4db6ac;
        padding: 0.5rem 0.75rem;
        border-radius: 0.5rem;
        font-size: 1.5rem;
        margin-left: 0.5rem;
        transition: transform 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .refresh-button:hover {
        transform: rotate(90deg);
      }
      .accommodation-selectors {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }
      .tabs {
        display: flex;
        border-bottom: 2px solid #e5e7eb;
        margin-bottom: 2rem;
      }
      .tab {
        flex: 1;
        text-align: center;
        padding: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .tab.active {
        background-color: #4db6ac;
        color: white;
        border-radius: 0.5rem 0.5rem 0 0;
      }
      .tab:hover:not(.active) {
        background-color: #f3f4f6;
      }
      .info-section {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
        padding: 1rem;
        background-color: #f9fafb;
        border-radius: 0.5rem;
      }
      .info-item {
        text-align: center;
      }
      .info-item label {
        font-weight: 600;
        color: #1f2937;
      }
      .info-item p {
        color: #4b5563;
      }
      .file-input {
        padding: 0.5rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        width: 100%;
      }
      .file-preview {
        margin-top: 0.5rem;
        color: #4b5563;
        font-size: 0.875rem;
      }
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 50;
      }
      .modal-content {
        background-color: white;
        padding: 2rem;
        border-radius: 0.5rem;
        text-align: center;
      }
      .modal-button {
        background-color: #4db6ac;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        margin-top: 1rem;
        cursor: pointer;
      }
      .button-group {
        display: flex;
        gap: 1rem;
      }
    `}
  </style>
);

// --- Registration Form Component (with Payment Integration) ---
const Register: React.FC<{
  captchaCode: string;
  generateCaptcha: () => void;
  setRegisterFormData: React.Dispatch<React.SetStateAction<RegisterFormData>>;
  registerFormData: RegisterFormData;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalMessage: React.Dispatch<React.SetStateAction<string>>;
  resetForm: () => void;
}> = ({ captchaCode, generateCaptcha, setRegisterFormData, registerFormData, setShowModal, setModalMessage, resetForm }) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [pricing, setPricing] = useState<PricingConfig[] | null>(null);
  const [pricingError, setPricingError] = useState<string>('');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const fetchPricing = async () => {
    if (!registerFormData.registrationType || !registerFormData.presentationType) {
      setPricing(null);
      return;
    }
    try {
      const response = await fetch(`${BASE_URL}/api/registration/get-pricing-config`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Origin': 'https://globalrenewablemeet.com' },
        body: JSON.stringify({
          registrationType: registerFormData.registrationType === 'registrationAndAccommodation' ? 'REGISTRATION_AND_ACCOMMODATION' : 'REGISTRATION_ONLY',
          presentationType: registerFormData.presentationType.toUpperCase(),
          numberOfNights: registerFormData.nights,
          numberOfGuests: registerFormData.guests,
        }),
      });
      if (!response.ok) throw new Error('Failed to fetch pricing');
      const data: PricingConfig[] = await response.json();
      setPricing(data);
      setPricingError('');
    } catch (error) {
      console.error('Error fetching pricing:', error);
      setPricing(null);
      setPricingError('Unable to load pricing details. Please try again.');
    }
  };

  const handlePaymentRedirect = async () => {
    if (!pricing || pricing.length === 0) {
      setModalMessage('Pricing details are not available. Cannot proceed to payment.');
      setShowModal(true);
      return;
    }

    setIsProcessingPayment(true);
    const selectedPricing = pricing[0];

    const checkoutRequest = {
      productName: `Registration for ${selectedPricing.presentationType.type}`,
      description: `Conference registration for Renewable Energy Summit 2026.`,
      orderReference: `REG-${Date.now()}`,
      unitAmount: Math.round(selectedPricing.totalPrice * 100), // Convert EUR to cents
      quantity: 1,
      currency: "eur",
      successUrl: `${window.location.origin}/payment-success`,
      cancelUrl: `${window.location.origin}/payment-cancelled`,
      pricingConfigId: selectedPricing.id,
      name: `${registerFormData.title} ${registerFormData.name}`,
      phone: registerFormData.phone,
      email: registerFormData.email,
      instituteOrUniversity: registerFormData.institute,
      country: registerFormData.country,
      registrationType: registerFormData.registrationType,
      presentationType: registerFormData.presentationType,
      accompanyingPerson: registerFormData.accompanyingPerson,
      extraNights: registerFormData.extraNights,
      accommodationNights: selectedPricing.accommodationOption?.nights || 0,
      accommodationGuests: selectedPricing.accommodationOption?.guests || 0,
    };

    try {
      const response = await fetch(`${BASE_URL}/api/payment/create-checkout-session?pricingConfigId=${selectedPricing.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'https://globalrenewablemeet.com' 
        },
        body: JSON.stringify(checkoutRequest),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create payment session.');
      }

      const session = await response.json();
      if (session && session.url) {
        window.location.href = session.url; // Redirect to Stripe
      } else {
        throw new Error("Received an invalid session response from the server.");
      }
    } catch (error: any) {
      console.error('Error creating checkout session:', error);
      setModalMessage(`Payment initiation failed: ${error.message}. Please try again.`);
      setShowModal(true);
      setIsProcessingPayment(false);
    }
  };

  useEffect(() => {
    setPricing(null);
    setPricingError('');
    if(registerFormData.registrationType && registerFormData.presentationType) {
        fetchPricing();
    }
  }, [
    registerFormData.registrationType,
    registerFormData.presentationType,
    registerFormData.nights,
    registerFormData.guests,
  ]);

  const validateField = (name: string, value: string | number) => {
    let error = '';
    if (name === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.toString())) {
      error = 'Invalid email format';
    } else if (name === 'phone' && value && !/^\+?\d{10,15}$/.test(value.toString())) {
      error = 'Phone number must be 10-15 digits';
    } else if (['title', 'name', 'institute', 'country', 'registrationType', 'presentationType', 'phone', 'email'].includes(name) && !value) {
      error = 'This field is required';
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'registrationType' && value === 'registrationOnly') {
      setRegisterFormData((prev) => ({ ...prev, [name]: value, guests: 1, nights: 1, }));
    } else {
      setRegisterFormData((prev) => ({ ...prev, [name]: value }));
    }
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isFormValid = true;
    const validationErrors: { [key: string]: string } = {};

    Object.entries(registerFormData).forEach(([key, value]) => {
      if (!validateField(key, value as string | number)) {
        isFormValid = false;
        if (errors[key]) validationErrors[key] = errors[key];
      }
    });

    if (!isFormValid) {
        setErrors(validationErrors);
        setModalMessage("Please fix the errors before proceeding.");
        setShowModal(true);
        return;
    }

    if (registerFormData.captcha.toLowerCase() !== captchaCode.toLowerCase()) {
      setModalMessage('Invalid CAPTCHA code');
      setShowModal(true);
      return;
    }

    handlePaymentRedirect();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
       <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Select Title *</label>
        <select name="title" value={registerFormData.title} onChange={handleChange} required className={`form-select ${errors.title ? 'error' : ''}`}>
            <option value="">Title</option>
            <option value="Mr">Mr.</option><option value="Ms">Ms.</option><option value="Dr">Dr.</option><option value="Prof">Prof.</option>
        </select>
        {errors.title && <p className="error-text">{errors.title}</p>}
      </div>
      <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
          <input name="name" placeholder="Name" value={registerFormData.name} onChange={handleChange} required className={`form-input ${errors.name ? 'error' : ''}`}/>
          {errors.name && <p className="error-text">{errors.name}</p>}
      </div>
      <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
          <input name="phone" placeholder="Phone" value={registerFormData.phone} onChange={handleChange} required className={`form-input ${errors.phone ? 'error' : ''}`}/>
          {errors.phone && <p className="error-text">{errors.phone}</p>}
      </div>
      <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
          <input name="email" placeholder="Email" value={registerFormData.email} onChange={handleChange} required className={`form-input ${errors.email ? 'error' : ''}`}/>
          {errors.email && <p className="error-text">{errors.email}</p>}
      </div>
      <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Institute/University *</label>
          <input name="institute" placeholder="Institute/University" value={registerFormData.institute} onChange={handleChange} required className={`form-input ${errors.institute ? 'error' : ''}`}/>
          {errors.institute && <p className="error-text">{errors.institute}</p>}
      </div>
      <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Country *</label>
          <select name="country" value={registerFormData.country} onChange={handleChange} required className={`form-select ${errors.country ? 'error' : ''}`}>
              <option value="">Choose Country</option>
              <option value="us">United States</option><option value="ca">Canada</option><option value="uk">United Kingdom</option><option value="au">Australia</option><option value="de">Germany</option><option value="fr">France</option><option value="other">Other</option>
          </select>
          {errors.country && <p className="error-text">{errors.country}</p>}
      </div>
      <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Select Registration Type *</label>
          <div className="radio-group">
              <label className="radio-label"><input type="radio" name="registrationType" value="registrationOnly" checked={registerFormData.registrationType === 'registrationOnly'} onChange={handleChange} className="radio-input" required/>Registration Only</label>
              <label className="radio-label"><input type="radio" name="registrationType" value="registrationAndAccommodation" checked={registerFormData.registrationType === 'registrationAndAccommodation'} onChange={handleChange} className="radio-input"/>Registration and Accommodation</label>
          </div>
          {errors.registrationType && <p className="error-text">{errors.registrationType}</p>}
      </div>
      <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Select Presentation Type *</label>
          <div className="radio-group">
              {['Speaker', 'Poster', 'Listener/Delegate', 'Sponsor', 'Student', 'Exhibitor'].map((type) => (
                  <label key={type} className="radio-label"><input type="radio" name="presentationType" value={type.toLowerCase()} checked={registerFormData.presentationType === type.toLowerCase()} onChange={handleChange} className="radio-input" required/>{type}</label>
              ))}
          </div>
           {errors.presentationType && <p className="error-text">{errors.presentationType}</p>}
      </div>
      <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Select Accommodation Type</label>
          <div className="accommodation-selectors">
              <select name="nights" value={registerFormData.nights} onChange={handleChange} className="form-select w-32" disabled={registerFormData.registrationType === 'registrationOnly'}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((night) => (<option key={night} value={night}>{night} Night{night > 1 ? 's' : ''}</option>))}
              </select>
              <select name="guests" value={registerFormData.guests} onChange={handleChange} className="form-select w-32" disabled={registerFormData.registrationType === 'registrationOnly'}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((guest) => (<option key={guest} value={guest}>{guest} Guest{guest > 1 ? 's' : ''}</option>))}
              </select>
          </div>
      </div>
      <div className="payment-summary">
        <h3 className="text-xl font-semibold mb-4">Payment Summary</h3>
        {pricingError && <p className="error-text mb-2">{pricingError}</p>}
        <div className="flex justify-between mb-2"><span>Registration Fee:</span><span>{pricing && pricing[0]?.presentationType?.price ? `€${pricing[0].presentationType.price.toFixed(2)}` : 'TBD'}</span></div>
        {registerFormData.registrationType !== 'registrationOnly' && pricing && pricing[0]?.accommodationOption && (<div className="flex justify-between mb-2"><span>Accommodation Fee:</span><span>{`€${pricing[0].accommodationOption.price.toFixed(2)}`}</span></div>)}
        <div className="flex justify-between mb-2"><span>Processing Fee ({pricing && pricing[0]?.processingFeePercent ? pricing[0].processingFeePercent : 0}%):</span><span>{pricing && pricing[0]?.totalPrice ? `€${(pricing[0].totalPrice - (pricing[0].presentationType.price + (pricing[0].accommodationOption?.price || 0))).toFixed(2)}` : 'TBD'}</span></div>
        <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t border-gray-300"><span>Total Amount Payable:</span><span>{pricing && pricing[0]?.totalPrice ? `€${pricing[0].totalPrice.toFixed(2)}` : 'TBD'}</span></div>
        <p className="text-sm text-gray-600 mt-4">By clicking "Pay Now", you will be redirected to our secure payment gateway to complete your registration.</p>
        <div className="captcha-section"><span className="captcha-image">{captchaCode}</span><span style={{ fontWeight: 600, color: '#333' }}>Enter the code:</span><input name="captcha" value={registerFormData.captcha} onChange={handleChange} required className="form-input w-32"/><button type="button" className="refresh-button" onClick={generateCaptcha} title="Refresh Captcha"><FaSyncAlt /></button></div>
      </div>
      <div className="pt-4 button-group">
        <button type="button" onClick={resetForm} className="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all">Reset Form</button>
        <button type="submit" disabled={isProcessingPayment} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all disabled:bg-teal-400 disabled:cursor-not-allowed">{isProcessingPayment ? 'Redirecting...' : 'Pay Now'}</button>
      </div>
    </form>
  );
};

// --- Abstract Submission Form Component (Unchanged) ---
const AbstractRegistration: React.FC<{
    captchaCode: string;
    generateCaptcha: () => void;
    setAbstractFormData: React.Dispatch<React.SetStateAction<AbstractFormData>>;
    abstractFormData: AbstractFormData;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setModalMessage: React.Dispatch<React.SetStateAction<string>>;
    resetForm: () => void;
  }> = ({ captchaCode, generateCaptcha, setAbstractFormData, abstractFormData, setShowModal, setModalMessage, resetForm }) => {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [interestedInOptions, setInterestedInOptions] = useState<{ id: string; option_name: string }[]>([]);
    const [sessionOptions, setSessionOptions] = useState<{ id: string; sessionName: string }[]>([]);
  
    useEffect(() => {
      fetch(`${BASE_URL}/api/form-submission/get-interested-in-options`, { headers: { 'Origin': 'https://globalrenewablemeet.com' } }).then(res => res.json()).then(data => setInterestedInOptions(data || [])).catch(() => setInterestedInOptions([]));
      fetch(`${BASE_URL}/api/form-submission/get-session-options`, { headers: { 'Origin': 'https://globalrenewablemeet.com' } }).then(res => res.json()).then(data => setSessionOptions(data || [])).catch(() => setSessionOptions([]));
    }, []);
  
    useEffect(() => {
      const interval = setInterval(() => generateCaptcha(), 60000);
      return () => clearInterval(interval);
    }, [generateCaptcha]);
  
    const validateField = (name: string, value: string) => {
      let error = '';
      if (name === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) { error = 'Invalid email format'; }
      if (name === 'phone' && value && !/^\+?\d{10,15}$/.test(value)) { error = 'Phone number must be 10-15 digits'; }
      if (['title', 'name', 'email', 'phone'].includes(name) && !value) { error = 'This field is required'; }
      setErrors((prev) => ({ ...prev, [name]: error }));
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setAbstractFormData((prev) => ({ ...prev, [name]: value }));
      validateField(name, value);
    };
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      setAbstractFormData((prev) => ({ ...prev, abstractFile: file }));
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors: { [key: string]: string } = {};
      Object.keys(abstractFormData).forEach((key) => {
        if (["title", "name", "email", "phone"].includes(key) && !abstractFormData[key as keyof AbstractFormData]) { validationErrors[key] = "This field is required"; }
        validateField(key, abstractFormData[key as keyof AbstractFormData] as string);
      });
  
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
  
      if (abstractFormData.captcha.toLowerCase() !== captchaCode.toLowerCase()) {
        setModalMessage("Invalid CAPTCHA code");
        setShowModal(true);
        return;
      }
  
      const formData = new FormData();
      formData.append("titlePrefix", abstractFormData.title);
      formData.append("name", abstractFormData.name);
      formData.append("email", abstractFormData.email);
      formData.append("phone", abstractFormData.phone);
      formData.append("organizationName", abstractFormData.organization);
      if (abstractFormData.interestedIn) formData.append("interestedInId", abstractFormData.interestedIn);
      if (abstractFormData.session) formData.append("sessionId", abstractFormData.session);
      if (abstractFormData.abstractFile) formData.append("abstractFile", abstractFormData.abstractFile);
      formData.append("country", abstractFormData.country);
  
      try {
        const response = await fetch(`${BASE_URL}/api/form-submission/submit`, { method: "POST", headers: { 'Origin': 'https://globalrenewablemeet.com' }, body: formData });
        if (!response.ok) throw new Error("Submission failed");
        setModalMessage("Abstract Submitted Successfully!");
        setShowModal(true);
      } catch (error) {
        setModalMessage("Submission failed. Please try again.");
        setShowModal(true);
      }
    };
  
    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="info-section">
                <div className="info-item"><label>Conference Dates:</label><p>April 24-26, 2026</p></div>
                <div className="info-item"><label>Submission Deadline:</label><p>September 15, 2025</p></div>
                <div className="info-item"><label>Conference Venue:</label><p>Seoul, South Korea</p></div>
                <div className="info-item"><label>Early Bird Registration:</label><p>July 28, 2025</p></div>
            </div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-2">Select Titles *</label><select name="title" value={abstractFormData.title} onChange={handleChange} required className={`form-select ${errors.title ? 'error' : ''}`}><option value="">Select Titles</option><option value="Mr">Mr.</option><option value="Ms">Ms.</option><option value="Dr">Dr.</option><option value="Prof">Prof.</option></select>{errors.title && <p className="error-text">{errors.title}</p>}</div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label><input name="name" placeholder="Your Name" value={abstractFormData.name} onChange={handleChange} required className={`form-input ${errors.name ? 'error' : ''}`} />{errors.name && <p className="error-text">{errors.name}</p>}</div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-2">Your Email *</label><input name="email" placeholder="Your Email" value={abstractFormData.email} onChange={handleChange} required className={`form-input ${errors.email ? 'error' : ''}`} />{errors.email && <p className="error-text">{errors.email}</p>}</div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-2">Your Phone *</label><input name="phone" placeholder="Your Phone" value={abstractFormData.phone} onChange={handleChange} required className={`form-input ${errors.phone ? 'error' : ''}`} />{errors.phone && <p className="error-text">{errors.phone}</p>}</div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-2">Organization Name</label><input name="organization" placeholder="Organization Name" value={abstractFormData.organization} onChange={handleChange} className="form-input" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-2">Interested In</label><select name="interestedIn" value={abstractFormData.interestedIn} onChange={handleChange} className="form-select"><option value="">Select Option</option>{interestedInOptions.map(opt => (<option key={opt.id} value={opt.id}>{opt.option_name}</option>))}</select></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-2">Please Select Session</label><select name="session" value={abstractFormData.session} onChange={handleChange} className="form-select"><option value="">Please Select Session</option>{sessionOptions.map(opt => (<option key={opt.id} value={opt.id}>{opt.sessionName}</option>))}</select></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-2">Select Country</label><select name="country" value={abstractFormData.country} onChange={handleChange} className="form-select"><option value="">Select Country</option><option value="us">United States</option><option value="ca">Canada</option><option value="uk">United Kingdom</option><option value="au">Australia</option><option value="de">Germany</option><option value="fr">France</option><option value="other">Other</option></select></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-2">Upload Abstract:</label><input type="file" name="abstractFile" onChange={handleFileChange} className="file-input" />{abstractFormData.abstractFile && (<p className="file-preview">Selected file: {abstractFormData.abstractFile.name} ({(abstractFormData.abstractFile.size / 1024).toFixed(2)} KB)</p>)}</div>
            <div className="captcha-section"><span className="captcha-image">{captchaCode}</span><span style={{ fontWeight: 600, color: '#333' }}>Enter the code:</span><input name="captcha" value={abstractFormData.captcha} onChange={handleChange} required className="form-input w-32" /><button type="button" className="refresh-button" onClick={generateCaptcha} title="Refresh Captcha"><FaSyncAlt /></button></div>
            <div className="pt-4 button-group"><button type="button" onClick={resetForm} className="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all">Reset Form</button><button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all">Submit Abstract</button></div>
        </form>
    );
};

// --- Main Component Shell ---
const ConferenceRegistration: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'register' | 'abstract'>('register');
    const [captchaCode, setCaptchaCode] = useState<string>('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [registerFormData, setRegisterFormData] = useState<RegisterFormData>({
      title: '', name: '', phone: '', email: '', institute: '', country: '',
      registrationType: '', presentationType: '', guests: 1, nights: 1,
      accompanyingPerson: false, extraNights: 0, captcha: '',
    });
    const [abstractFormData, setAbstractFormData] = useState<AbstractFormData>({
      title: '', name: '', phone: '', email: '', organization: '', interestedIn: '',
      session: '', country: '', abstractFile: null, captcha: '',
    });
  
    const location = useLocation();
  
    const generateCaptcha = () => {
      const characters = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789';
      let result = '';
      for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      setCaptchaCode(result);
      if (activeTab === 'register') {
        setRegisterFormData((prev) => ({ ...prev, captcha: '' }));
      } else {
        setAbstractFormData((prev) => ({ ...prev, captcha: '' }));
      }
    };
  
    const resetRegisterForm = () => {
      setRegisterFormData({
        title: '', name: '', phone: '', email: '', institute: '', country: '',
        registrationType: '', presentationType: '', guests: 1, nights: 1,
        accompanyingPerson: false, extraNights: 0, captcha: '',
      });
      generateCaptcha();
    };
  
    const resetAbstractForm = () => {
      setAbstractFormData({
        title: '', name: '', phone: '', email: '', organization: '', interestedIn: '',
        session: '', country: '', abstractFile: null, captcha: '',
      });
      generateCaptcha();
    };
  
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const tab = params.get('tab');
      const hash = location.hash.replace('#', '');
      if (tab === 'register' || tab === 'abstract') setActiveTab(tab);
      else if (hash === 'abstract' || hash === 'register') setActiveTab(hash as 'register' | 'abstract');
  
      const handleTabChange = (event: Event) => {
        const customEvent = event as CustomEvent<{ tab: 'register' | 'abstract' }>;
        if (customEvent.detail.tab === 'register' || customEvent.detail.tab === 'abstract') {
          setActiveTab(customEvent.detail.tab);
        }
      };
  
      window.addEventListener('tabChange', handleTabChange);
      return () => window.removeEventListener('tabChange', handleTabChange);
    }, [location.search, location.hash]);
  
    useEffect(() => {
      generateCaptcha();
    }, [activeTab]);
  
    return (
      <div>
        <Style />
        <section className="bg-gradient-to-b from-gray-50 py-8 to-white">
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-black bg-gray-200 rounded-full mb-4">REGISTRATION OPEN</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Artificial Intelligence, Machine Learning and Robotics Conference</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Secure your exclusive access to the premier renewable energy conference of the year
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="tabs">
                <div className={`tab ${activeTab === 'register' ? 'active' : ''}`} onClick={() => setActiveTab('register')}>Register</div>
                <div className={`tab ${activeTab === 'abstract' ? 'active' : ''}`} onClick={() => setActiveTab('abstract')}>Abstract Submission</div>
              </div>
              {activeTab === 'register' ? (
                <Register
                  captchaCode={captchaCode}
                  generateCaptcha={generateCaptcha}
                  setRegisterFormData={setRegisterFormData}
                  registerFormData={registerFormData}
                  setShowModal={setShowModal}
                  setModalMessage={setModalMessage}
                  resetForm={resetRegisterForm}
                />
              ) : (
                <AbstractRegistration
                  captchaCode={captchaCode}
                  generateCaptcha={generateCaptcha}
                  setAbstractFormData={setAbstractFormData}
                  abstractFormData={abstractFormData}
                  setShowModal={setShowModal}
                  setModalMessage={setModalMessage}
                  resetForm={resetAbstractForm}
                />
              )}
            </div>
          </div>
        </section>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3 className="text-xl font-semibold mb-4">{modalMessage.includes('Success') ? 'Success!' : 'Notice'}</h3>
              <p className="mb-4">{modalMessage}</p>
              <button
                className="modal-button"
                onClick={() => {
                  setShowModal(false);
                  if (modalMessage.includes('Success')) {
                    activeTab === 'register' ? resetRegisterForm() : resetAbstractForm();
                  }
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ConferenceRegistration;

