import React from 'react';

const Companies = () => {
  const companies = ['LinkedIn', 'Amazon', 'Intel', 'Red Hat', 'Facebook', 'Microsoft'];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Leading companies hire Chingus</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companies.map((company) => (
            <div key={company} className="flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-800">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;