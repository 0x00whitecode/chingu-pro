import React from 'react';
import { motion } from 'framer-motion';

interface OnboardingLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  step: number;
  totalSteps: number;
}

const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  children,
  title,
  subtitle,
  step,
  totalSteps,
}) => {
  return (
    <div className="min-h-screen bg-[#D1FAE5] flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="mb-4 flex justify-center space-x-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-2 w-8 rounded-full ${
                  i < step ? 'bg-[#059669]' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default OnboardingLayout;