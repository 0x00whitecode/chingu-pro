import React from 'react';
import { Twitter, Linkedin, Youtube, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400">How it works</a></li>
              <li><a href="#" className="hover:text-purple-400">Contact</a></li>
              <li><a href="#" className="hover:text-purple-400">Privacy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400"><Twitter size={20} /></a>
              <a href="#" className="hover:text-purple-400"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-purple-400"><Youtube size={20} /></a>
              <a href="#" className="hover:text-purple-400"><BookOpen size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© 2024 Chingu, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;