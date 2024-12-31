import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/auth/SignupForm';

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-[#D1FAE5] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <img
            src="https://www.chingu.io/logo-with-text-192.png"
            alt="Chingu Pro Logo"
            className="mx-auto h-12"
          />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-[#059669] hover:text-[#047857]">
              Sign in
            </Link>
          </p>
        </div>

        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;