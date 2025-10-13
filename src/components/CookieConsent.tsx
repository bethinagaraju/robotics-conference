


import React, { useState } from "react";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white z-50 flex items-start justify-center p-4">
      <div className="relative w-full max-w-3xl shadow-xl px-6 py-12 flex flex-col sm:flex-row gap-6">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X size={20} />
        </button>

        {/* Text content */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Cookie Consent</h2>
          <p className="text-sm text-gray-600">
            We use cookies and similar other tracking technologies where necessary to provide our website,
            and also to improve your browsing experience on our website, to show you personalized content
            and targeted ads, to analyze our website traffic, and to understand where our visitors are coming
            from. Click “Accept all” to consent to our use of these technologies and to the related processing
            of your personal data. To learn more about the technologies we use or modify your consent, click on
            "Cookie Settings".
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setIsVisible(false)}
            className="bg-black text-yellow-300 font-semibold py-2 px-4 rounded hover:opacity-90"
          >
            Accept All Cookies
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="bg-black text-yellow-300 font-semibold py-2 px-4 rounded hover:opacity-90"
          >
            Reject Optional Cookies
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="border border-black text-black font-semibold py-2 px-4 rounded hover:bg-gray-100"
          >
            Cookies Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
