import React from 'react';
import { Users, Rocket, Heart } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: <Users />,
      title: 'Gain experience in a remote team',
      description: '57% of full-time entry-level jobs now ask for 3 years or more of experience.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: <Rocket />,
      title: 'Work on real projects',
      description: 'Sick of doing tutorial after tutorial with nothing to show for them?',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: <Heart />,
      title: 'Join a supportive community',
      description: 'It can be hard to find someone to help you get unstuck.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80'
    },
  ];

  return (
    <section className="py-16 bg-[#FFF7ED]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#059669]">
          A collaborative learning experience
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;