import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface Quiz {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in_progress' | 'not_started';
  score?: number;
  timeLimit: string;
  questions: number;
}

const QuizList: React.FC = () => {
  const quizzes: Quiz[] = [
    {
      id: '1',
      title: 'React Fundamentals',
      description: 'Test your knowledge of React core concepts',
      status: 'completed',
      score: 92,
      timeLimit: '45 minutes',
      questions: 25
    },
    {
      id: '2',
      title: 'TypeScript Advanced',
      description: 'Advanced TypeScript features and patterns',
      status: 'in_progress',
      timeLimit: '60 minutes',
      questions: 30
    }
  ];

  const getStatusIcon = (status: Quiz['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'in_progress':
        return <Clock className="text-blue-500" size={20} />;
      case 'not_started':
        return <AlertCircle className="text-gray-400" size={20} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Available Quizzes</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {quizzes.map(quiz => (
          <div key={quiz.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                {getStatusIcon(quiz.status)}
                <h3 className="font-medium">{quiz.title}</h3>
              </div>
              {quiz.score && (
                <span className="text-green-500 font-medium">{quiz.score}%</span>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-2">{quiz.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>{quiz.timeLimit}</span>
              <span>{quiz.questions} questions</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizList;