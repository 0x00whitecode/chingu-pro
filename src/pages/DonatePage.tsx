import React from 'react';
import { Heart, Coffee, Gift } from 'lucide-react';

const DonatePage = () => {
  return (
    <div className="pt-24 bg-[#D1FAE5]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Heart className="w-16 h-16 text-[#059669] mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-[#059669] mb-4">
            Support Our Mission
          </h1>
          <p className="text-xl text-gray-600">
            Help us continue providing opportunities for developers worldwide to gain real experience through collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <Coffee className="w-12 h-12 text-[#059669] mb-4" />
            <h3 className="text-2xl font-bold mb-4">One-time Donation</h3>
            <p className="text-gray-600 mb-6">
              Support our mission with a one-time contribution of any amount.
            </p>
            <button className="w-full bg-[#059669] text-white py-2 px-4 rounded-full hover:bg-[#047857] transition-colors">
              Donate Now
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <Gift className="w-12 h-12 text-[#059669] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Sponsor a Developer</h3>
            <p className="text-gray-600 mb-6">
              Fund a scholarship for an aspiring developer to join our program.
            </p>
            <button className="w-full bg-[#059669] text-white py-2 px-4 rounded-full hover:bg-[#047857] transition-colors">
              Sponsor Now
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Where Your Donation Goes</h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-4">
              <span className="text-[#059669] font-bold">60%</span>
              <span>Direct support for program operations and development</span>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-[#059669] font-bold">25%</span>
              <span>Scholarships for underrepresented developers</span>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-[#059669] font-bold">15%</span>
              <span>Platform maintenance and improvements</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;