import React from 'react';
import { Award, Target, BookOpen } from 'lucide-react';

const QuizProgress: React.FC = () => {
  const stats = [
    {
      icon: <Award className="text-[#059669]" size={24} />,
      label: 'Completed Quizzes',
      value: '8/12'
    },
    {
      icon: <Target className="text-[#059669]" size={24} />,
      label: 'Average Score',
      value: '87%'
    },
    {
      icon: <BookOpen className="text-[#059669]" size={24} />,
      label: 'Topics Mastered',
      value: '5'
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {stats.map(stat => (
        <div key={stat.label} className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center space-x-4">
            {stat.icon}
            <div>
              <p className="text-gray-600">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizProgress;