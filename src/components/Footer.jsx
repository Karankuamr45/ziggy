// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
          <h2 className="text-lg font-semibold mb-2">About Us</h2>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p className="text-sm">Email: contact@example.com</p>
          <p className="text-sm">Phone: +1 (123) 456-7890</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <p className="text-sm">Facebook</p>
          <p className="text-sm">Twitter</p>
          <p className="text-sm">Instagram</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
          <h2 className="text-lg font-semibold mb-2">Subscribe</h2>
          <p className="text-sm">Subscribe to our newsletter for updates.</p>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">&copy; 2023 Your Food Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
