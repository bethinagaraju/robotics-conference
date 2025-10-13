


import React from 'react';

const Footer: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('Gemini_Generated_Image_szvxggszvxggszvx(1).png')",
        backdropFilter: "blur(80px)",
      }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
      <div className="bg-black bg-opacity-70 py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left text */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 border-2 border-white p-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-full h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12H8m8 4H8m-4 4h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold">Let's keep in touch</h2>
            </div>
            <p className="text-lg text-gray-200 leading-relaxed">
              Sign up to receive the World Utilities Congress event updates directly to your inbox
              (special highlights, new speaker announcements, list of exhibiting companies, key
              attendees and more)
            </p>
          </div>

          {/* Right form */}
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="bg-transparent border border-white rounded px-4 py-2 placeholder-white text-white"
            />
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent border border-white rounded px-4 py-2 placeholder-white text-white"
            />
            <input
              type="text"
              placeholder="Your job title"
              className="bg-transparent border border-white rounded px-4 py-2 placeholder-white text-white"
            />
            <input
              type="text"
              placeholder="Your company name"
              className="bg-transparent border border-white rounded px-4 py-2 placeholder-white text-white"
            />
            <select
              className="bg-transparent border border-white rounded px-4 py-2 text-white"
              defaultValue=""
            >
              <option value="" disabled className="bg-gray-200 text-white">
                – select –
              </option>
              <option value="United States" className="text-black">United States</option>
              <option value="Canada" className="text-black">Canada</option>
              <option value="United Kingdom" className="text-black">United Kingdom</option>
              <option value="Germany" className="text-black">Germany</option>
              <option value="France" className="text-black">France</option>
              <option value="Italy" className="text-black">Italy</option>
              <option value="Spain" className="text-black">Spain</option>
              <option value="Netherlands" className="text-black">Netherlands</option>
              <option value="Switzerland" className="text-black">Switzerland</option>
              <option value="Sweden" className="text-black">Sweden</option>
              <option value="Australia" className="text-black">Australia</option>
              <option value="Japan" className="text-black">Japan</option>
              <option value="China" className="text-black">China</option>
              <option value="India" className="text-black">India</option>
              <option value="Brazil" className="text-black">Brazil</option>
              <option value="Mexico" className="text-black">Mexico</option>
              <option value="South Korea" className="text-black">South Korea</option>
              <option value="Russia" className="text-black">Russia</option>
              <option value="South Africa" className="text-black">South Africa</option>
              <option value="New Zealand" className="text-black">New Zealand</option>
            </select>
            <input
              type="text"
              placeholder="Your mobile number"
              className="bg-transparent border border-white rounded px-4 py-2 placeholder-white text-white"
            />
            <div className="sm:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-[#344278] hover:bg-[#46629a] text-white font-bold py-2 px-6 rounded"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
