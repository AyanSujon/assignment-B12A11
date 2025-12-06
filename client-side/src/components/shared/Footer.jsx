import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
import LogoWhite from "../shared/LogoWhite";

const Footer = () => {
  return (
    <footer className="bg-[#17161A] text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* COLUMN 1: LOGO + ABOUT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <LogoWhite />
          </div>
          <p className="text-sm leading-relaxed">
            ClubSphere is a membership & event management platform built for
            local clubs. Manage clubs, collect memberships, host events, and
            engage your community—all in one place.
          </p>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li className="hover:text-[#0b99ce] cursor-pointer">Home</li>
            <li className="hover:text-[#0b99ce] cursor-pointer">Discover Clubs</li>
            <li className="hover:text-[#0b99ce] cursor-pointer">Upcoming Events</li>
            <li className="hover:text-[#0b99ce] cursor-pointer">Membership Plans</li>
            <li className="hover:text-[#0b99ce] cursor-pointer">How it Works</li>
          </ul>
        </div>

        {/* COLUMN 3: IMPORTANT LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Important Links</h3>
          <ul className="space-y-3">
            <li className="hover:text-[#0b99ce] cursor-pointer">Privacy Policy</li>
            <li className="hover:text-[#0b99ce] cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-[#0b99ce] cursor-pointer">Refund Policy</li>
            <li className="hover:text-[#0b99ce] cursor-pointer">Cookie Policy</li>
            <li className="hover:text-[#0b99ce] cursor-pointer">Support Center</li>
          </ul>
        </div>

        {/* COLUMN 4: CONTACT + SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 ">Contact Info</h3>
          <ul className="space-y-3">

            {/* Email */}
            <li>
              <a
                href="mailto:support@clubsphere.com"
                className="hover:text-[#0b99ce]"
              >
                support@clubsphere.com
              </a>
            </li>

            {/* Phone */}
            <li>
              <a
                href="tel:+8801234567890"
                className="hover:text-[#0b99ce]"
              >
                +880 1234-567890
              </a>
            </li>

            {/* Location */}
            <li>
              <a
                href="https://maps.google.com/?q=Dhaka,Bangladesh"
                target="_blank"
                className="hover:text-[#0b99ce]"
              >
                Dhaka, Bangladesh
              </a>
            </li>
          </ul>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-4 mt-6 text-xl">
            <a href="#" className="hover:text-[#0b99ce]"><FaGithub /></a>
            <a href="#" className="hover:text-[#0b99ce]"><FaLinkedin /></a>
            <a href="#" className="hover:text-[#0b99ce]"><FaXTwitter /></a>
            <a href="#" className="hover:text-[#0b99ce]"><FaFacebook /></a>
            <a href="#" className="hover:text-[#0b99ce]"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ClubSphere — Membership & Event Management Platform.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
