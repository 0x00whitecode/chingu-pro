import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardNav from '../components/dashboard/DashboardNav';
import DashboardHome from './dashboard/DashboardHome';
import Planning from './dashboard/Planning';
import Projects from './dashboard/Projects';
import Sandboxes from './dashboard/Sandboxes';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      <DashboardHeader />
      <DashboardNav />
      
      <main className="ml-64 pt-16 p-8">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sandboxes" element={<Sandboxes />} />
          <Route path="/quizzes" element={<div>Evaluation Quizzes</div>} />
          <Route path="/curriculums" element={<div>Curriculums</div>} />
          <Route path="/concepts" element={<div>Concepts</div>} />
          <Route path="/conference" element={<div>Conference Rooms</div>} />
          <Route path="/videos" element={<div>Video on Demand</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default DashboardPage;