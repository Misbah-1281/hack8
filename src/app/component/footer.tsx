import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-9 px-4 md:px-20 text-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
          <div>
            <h2 className="text-lg font-bold">SHOP.CO</h2>
            <p className="mt-2 text-sm">
              We have clothes that suit your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex space-x-3 mt-4">
              <FaFacebookF className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* All Sections in a Single Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div>
            <h3 className="font-bold">COMPANY</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">HELP</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">FAQ</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">RESOURCES</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-sm text-gray-500 text-center md:text-left">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex justify-center md:justify-end space-x-3 mt-2">
            <img src="/Visa.png" alt="Visa" className="h-2 mt-1" />
            <img src="/Badge.png" alt="Mastercard" className="h-5" />
            <img src="/Badge (1).png" alt="PayPal" className="h-5" />
            <img src="/Badge (2).png" alt="Apple Pay" className="h-5" />
            <img src="/Badge (3).png" alt="Google Pay" className="h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
