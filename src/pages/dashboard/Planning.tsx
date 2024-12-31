import React from 'react';
import Calendar from '../../components/planning/Calendar';
import TaskList from '../../components/planning/TaskList';

const Planning = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Planning</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Calendar />
        </div>
        <div>
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default Planning;