import React from 'react';

interface Speaker {
  name: string;
  title: string;
  company: string;
  image: string;
}

interface SpeakersSectionProps {
  speakers: Speaker[];
}

const SpeakersSection: React.FC<SpeakersSectionProps> = ({ speakers }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          THOUGHT LEADERS AT ROBOTICS CONFERENCE HAVE INCLUDED
        </h2>
        
        <div className="grid md:grid-cols-5 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <img 
                src={speaker.image} 
                alt={speaker.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg mb-1">{speaker.name}</h3>
              <p className="text-gray-600 text-sm mb-1">{speaker.title}</p>
              <p className="text-gray-500 text-xs">{speaker.company}</p>
            </div>
          ))}
        </div>
        
        <div className="text-right mt-8">
          <div className="bg-white p-4 rounded-lg shadow inline-block">
            <h4 className="font-semibold mb-2">2025 SPONSORS</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>Exclusive Cooling Partner</div>
              <div>Platinum Sponsor</div>
              <div>Platinum Sponsor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
