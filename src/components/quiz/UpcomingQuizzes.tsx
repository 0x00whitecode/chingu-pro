import React from 'react';
import { Calendar } from 'lucide-react';

interface UpcomingQuiz {
  id: string;
  title: string;
  date: string;
  timeLimit: string;
}

const UpcomingQuizzes: React.FC = () => {
  const quizzes: UpcomingQuiz[] = [
    {
      id: '1',
      title: 'Node.js Performance',
      date: 'Mar 25, 2024',
      timeLimit: '45 minutes'
    },
    {
      id: '2',
      title: 'GraphQL Fundamentals',
      date: 'Mar 28, 2024',
      timeLimit: '30 minutes'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Upcoming Quizzes</h2>
      <div className="space-y-4">
        {quizzes.map(quiz => (
          <div key={quiz.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg">
            <Calendar className="text-[#059669] mt-1" size={20} />
            <div>
              <h3 className="font-medium">{quiz.title}</h3>
              <p className="text-sm text-gray-500">{quiz.date}</p>
              <p className="text-sm text-gray-500">{quiz.timeLimit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingQuizzes;