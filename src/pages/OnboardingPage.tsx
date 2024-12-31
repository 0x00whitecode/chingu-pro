import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import OnboardingLayout from '../components/onboarding/OnboardingLayout';
import TechStackStep from '../components/onboarding/steps/TechStackStep';
import SkillsStep from '../components/onboarding/steps/SkillsStep';
import { OnboardingData } from '../types/onboarding';

const steps = [
  {
    title: 'Choose Your Tech Stack',
    subtitle: 'Select the technologies you want to work with',
    component: TechStackStep,
  },
  {
    title: 'Your Skills',
    subtitle: 'Tell us about your experience level',
    component: SkillsStep,
  },
  // Additional steps can be added here
];

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    techStacks: [],
    skills: [],
    languages: [],
    region: '',
    availability: [],
    projectPreference: 'team',
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit onboarding data and redirect to dashboard
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <OnboardingLayout
      title={steps[currentStep].title}
      subtitle={steps[currentStep].subtitle}
      step={currentStep + 1}
      totalSteps={steps.length}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <CurrentStepComponent
            selected={onboardingData[Object.keys(onboardingData)[currentStep] as keyof OnboardingData] as string[]}
            onSelect={(id: string) => {
              const key = Object.keys(onboardingData)[currentStep] as keyof OnboardingData;
              const current = onboardingData[key] as string[];
              setOnboardingData({
                ...onboardingData,
                [key]: current.includes(id)
                  ? current.filter(item => item !== id)
                  : [...current, id],
              });
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-between">
        <button
          onClick={handleBack}
          className={`px-6 py-2 rounded-lg border-2 border-[#059669] text-[#059669]
            ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#D1FAE5]'}`}
          disabled={currentStep === 0}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 rounded-lg bg-[#059669] text-white hover:bg-[#047857]"
        >
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </OnboardingLayout>
  );
};

export default OnboardingPage;