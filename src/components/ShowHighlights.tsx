


import React, { useRef, useEffect } from 'react';
import HighletOne from './HighletOne';
import HighletTwo from './HighletTwo';
import HighletThree from './HighletThree';

const ShowHighlights = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate highlights for smooth infinite loop
  const highlights = [
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
    <HighletOne key="1" />,
    <HighletTwo key="2" />,
  ];
  const allHighlights = [...highlights, ...highlights]; // clone

  const scrollRight = () => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({ left: window.innerWidth, behavior: 'smooth' });

      // If near the cloned end, reset back to start instantly (no animation)
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - container.clientWidth
      ) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: 'auto' });
        }, 500); // wait for smooth scroll to finish
      }
    }
  };

  const scrollLeft = () => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });

      // If at the very start, jump to middle (the cloned set)
      if (container.scrollLeft <= 0) {
        setTimeout(() => {
          container.scrollTo({
            left: container.scrollWidth / 2 - container.clientWidth,
            behavior: 'auto',
          });
        }, 500);
      }
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (scrollRef.current && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      scrollRef.current.scrollBy({ left: e.deltaY, behavior: 'auto' });
      e.preventDefault();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='highlets-section' className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          {/* <h2 className="text-2xl font-bold text-[#f4aa3d] text-center md:text-4xl md:text-center">
            2025 SHOW HIGHLIGHTS
          </h2> */}

                    <h1
            style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
            className="text-2xl md:text-4xl font-bold text-center mb-4"
          >
            2025 SHOW HIGHLIGHTS
          </h1>

          <div className="space-x-2 hidden md:flex">
            <button
              aria-label="Scroll Left"
              onClick={scrollLeft}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow"
            >
              <span className="text-2xl">{'‹'}</span>
            </button>
            <button
              aria-label="Scroll Right"
              onClick={scrollRight}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow"
            >
              <span className="text-2xl">{'›'}</span>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth gap-4 no-scrollbar snap-x snap-mandatory"
          onWheel={handleWheel}
        >
          {allHighlights.map((Highlight, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full md:w-auto snap-start"
            >
              {Highlight}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowHighlights;
