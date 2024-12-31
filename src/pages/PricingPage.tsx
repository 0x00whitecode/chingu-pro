import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Access to community",
      "Basic project matching",
      "Standard support",
      "1 project per quarter"
    ]
  },
  {
    name: "Pro",
    price: "$49/month",
    features: [
      "Everything in Basic",
      "Priority team matching",
      "Mentor support",
      "Unlimited projects",
      "Career guidance",
      "Certificate of completion"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Everything in Pro",
      "Custom team size",
      "Dedicated support",
      "Custom project scope",
      "Training workshops"
    ]
  }
];

const PricingPage = () => {
  return (
    <div className="pt-24 bg-[#D1FAE5]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#059669] mb-12">
          Simple, Transparent Pricing
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`bg-white rounded-xl p-8 shadow-md ${
                tier.highlighted ? 'ring-2 ring-[#059669] shadow-xl' : ''
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-3xl font-bold text-[#059669] mb-6">{tier.price}</p>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <Check className="text-[#059669]" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2 px-4 rounded-full ${
                tier.highlighted
                  ? 'bg-[#059669] text-white hover:bg-[#047857]'
                  : 'border-2 border-[#059669] text-[#059669] hover:bg-[#D1FAE5]'
              } transition-colors`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;