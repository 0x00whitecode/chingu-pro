import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate: string;
  project: string;
}

const TaskList: React.FC = () => {
  const tasks: Task[] = [
    {
      id: '1',
      title: 'Complete API Integration',
      completed: false,
      dueDate: '2024-03-20',
      project: 'E-commerce Platform'
    },
    {
      id: '2',
      title: 'Review Pull Requests',
      completed: true,
      dueDate: '2024-03-19',
      project: 'AI Chat Application'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Today's Tasks</h3>
      <div className="space-y-2">
        {tasks.map(task => (
          <div key={task.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              {task.completed ? (
                <CheckCircle className="text-[#059669]" size={20} />
              ) : (
                <Circle className="text-gray-400" size={20} />
              )}
              <div>
                <p className={task.completed ? 'text-gray-500 line-through' : ''}>{task.title}</p>
                <p className="text-sm text-gray-500">{task.project}</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">{task.dueDate}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;