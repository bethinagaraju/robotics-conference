

import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-teal-700 to-teal-600 text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/WhatsApp Video 2025-10-11 at 12.47.18_e854abaa.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Foreground Content */}
      <div className="relative min-h-[430px] flex items-center justify-center px-3 sm:px-6 md:px-8">
        <div className="container mx-auto">
          <div
            className="max-w-4xl w-full flex flex-col items-center text-center py-6 sm:py-10 px-4 sm:px-8 bg-white bg-opacity-40 backdrop-blur-sm"
            style={{ marginTop: '100px' }}
          >
            {/* Title */}
            <p
              style={{ fontFamily: 'Manrope, sans-serif' }}
              className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-black uppercase leading-snug"
            >
              Artificial Intelligence, Machine Learning and Robotics Conference
            </p>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full">
              <Link to="/register">
                <button
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, rgba(0,72,139,1) 0%, rgba(15,133,255,1) 100%)',
                  }}
                  className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base transition-colors hover:opacity-90"
                >
                  REGISTER
                </button>
              </Link>

              <a href="/#contact-form">
                <button
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, rgba(0,47,48,1) 0%, rgba(0,0,48,1) 100%)',
                  }}
                  className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base transition-colors hover:opacity-90"
                >
                  SPONSORSHIP ENQUIRY
                </button>
              </a>

              <Link to="/AbstractSubmission">
                <button
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)',
                  }}
                  className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base transition-colors hover:opacity-90"
                >
                  ABSTRACT SUBMISSION
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
