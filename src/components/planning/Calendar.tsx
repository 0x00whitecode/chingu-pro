import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar: React.FC = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();
  
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const daysInMonth = getDaysInMonth(currentDate);

  return (
    <div className="bg-white rounded-none border border-[#e0e0e0] shadow-sm">
      <div className="flex justify-between items-center p-4 border-b border-[#e0e0e0] bg-[#f4f4f4]">
        <button className="p-2 hover:bg-[#e8e8e8] rounded transition-colors">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-lg font-semibold text-[#161616]">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <button className="p-2 hover:bg-[#e8e8e8] rounded transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7">
        {days.map(day => (
          <div key={day} className="text-center text-sm font-medium text-[#525252] py-3 border-b border-[#e0e0e0]">
            {day}
          </div>
        ))}
        
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="h-28 border-b border-r border-[#e0e0e0]" />
        ))}
        
        {Array.from({ length: daysInMonth }).map((_, index) => (
          <div key={index} className="h-28 border-b border-r border-[#e0e0e0] p-2 hover:bg-[#f4f4f4] transition-colors">
            <span className="text-sm font-medium text-[#161616]">{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;