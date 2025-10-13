import React from 'react';

interface Company {
  name: string;
  logo: string;
}

interface ExhibitingCompaniesProps {
  companies: Company[];
}

const ExhibitingCompanies: React.FC<ExhibitingCompaniesProps> = ({ companies }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          2025 EXHIBITING COMPANIES INCLUDED
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {companies.map((company, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <img 
                src={company.logo} 
                alt={company.name}
                className="h-16 mx-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitingCompanies;
