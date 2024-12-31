import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminNav from '../../components/admin/AdminNav';
import UsersPage from './UsersPage';
import ProjectsPage from './ProjectsPage';
import VideosPage from './VideosPage';
import TeamsPage from './TeamsPage';

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      <AdminNav />
      <main className="ml-64 pt-16 p-8">
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/teams" element={<TeamsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminPage;