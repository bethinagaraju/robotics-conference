
import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard'; // adjust path as needed
import { Quote } from 'lucide-react';

const EventOverview = () => {
  const testimonials = [
    {
      id: 1,
      imageUrl: "ilias-photo.png",
      // quote: "The World Utilities Congress 2024 served as a premier platform for industry leaders to collaborate, innovate, and shape the future of sustainable utilities. The event fostered insightful discussions and strategic partnerships, driving the global transition toward cleaner energy solutions. Hydropower was honored to contribute to these critical conversations and engage with key stakeholders committed to a sustainable future.",
      quote : "RoboticsWorldSummit.com for the World Summit and Expo on Robotics, AI, and Machine Learning (ROBOTICS-2026), I’ll adapt the provided testimonial to align with this conference, ensuring it reflects the event’s focus on AI, machine learning, and robotics. The original testimonial is about the World Utilities Congress 2024, so I’ll reframe it to fit the context of ROBOTICS-2026, maintaining its tone and intent.",
      name: "DR. ROGER ACHKAR",
      title: "Founder\nGlobal Waste Cleaning Network (GWCN)",
      companyLogoUrl: "hydropower-1-1.jpg",
    },
    {
      id: 2,
      imageUrl: "roger-achkar-photo-mar-2025-crop.jpg",
      quote: "GWCN is proud to support the World Conference on Robotics, AI, and Machine Learning (ROBOTICS-2026), a prestigious event uniting leaders to tackle AI and robotics challenges. At GWCN, we advance technological innovation and believe this conference offers an invaluable platform for knowledge sharing, collaboration, and intelligent automation. We're excited for the impactful discussions and solutions ahead, and look forward to contributing to this transformative dialogue.",
      name: "Dr. Roger Achkar",
      title: "Founder\nGlobal Waste Cleaning Network (GWCN)",
      companyLogoUrl: "gwcn1.png",
    },
    // Add more if needed
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Show each for 4 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Single testimonial carousel */}
        <div className="flex justify-center items-center">
          <TestimonialCard
            key={testimonials[current].id}
            imageUrl={testimonials[current].imageUrl}
            quote={testimonials[current].quote}
            name={testimonials[current].name}
            title={testimonials[current].title}
            companyLogoUrl={testimonials[current].companyLogoUrl}
          />
        </div>

        {/* Optional Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition ${
                idx === current ? 'bg-[#26285d]' : 'bg-gray-300'
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventOverview;
