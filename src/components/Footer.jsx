import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------ Left Section ------ */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Prescripto is your trusted platform for seamless doctor
            appointments. We connect you with experienced healthcare
            professionals across various specialties, ensuring convenient and
            reliable medical care from the comfort of your home. Your health is
            our priority.
          </p>
        </div>

        {/* ------ Center Section ------ */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <NavLink
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-primary cursor-pointer"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-primary cursor-pointer"
            >
              About us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-primary cursor-pointer"
            >
              Contact us
            </NavLink>
            <li className="hover:text-primary cursor-pointer">
              Privacy policy
            </li>
          </ul>
        </div>

        {/* ------ Right Section ------ */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-primary cursor-pointer">
              <a href="tel:+254797348041">+254-797-348041</a>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <a href="mailto:calebndungu2020@gmail.com">
                calebndungu2020 @gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ------- Copyright Text ------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025&copy; Prescripto - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
