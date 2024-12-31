import React from 'react';
import QuizList from '../../components/quiz/QuizList';
import QuizProgress from '../../components/quiz/QuizProgress';
import UpcomingQuizzes from '../../components/quiz/UpcomingQuizzes';

const Quizzes = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Evaluation Quizzes</h1>
      <QuizProgress />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <QuizList />
        </div>
        <div>
          <UpcomingQuizzes />
        </div>
      </div>
    </div>
  );
};

export default Quizzes;