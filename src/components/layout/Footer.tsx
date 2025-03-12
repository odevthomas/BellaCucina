import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

interface FooterProps {
  restaurantName?: string;
  address?: string;
  phone?: string;
  email?: string;
}

const Footer = ({
  restaurantName = "Bella Cucina",
  address = "123 Main Street, City, State 12345",
  phone = "(555) 123-4567",
  email = "info@restaurant.com",
}: FooterProps) => {
  return (
    <footer className="w-full bg-slate-900 text-white py-12 md:py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{restaurantName}</h3>
            <p className="text-gray-300 mb-2">{address}</p>
            <p className="text-gray-300 mb-2">{phone}</p>
            <p className="text-gray-300">{email}</p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <p className="text-gray-300 mb-2">
              Monday - Thursday: 11:00 AM - 10:00 PM
            </p>
            <p className="text-gray-300 mb-2">
              Friday - Saturday: 11:00 AM - 11:00 PM
            </p>
            <p className="text-gray-300">Sunday: 12:00 PM - 9:00 PM</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#reservations"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Reservations
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">
                Subscribe to our newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none flex-1"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {restaurantName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
