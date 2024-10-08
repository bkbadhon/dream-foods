import React from 'react';
import logo from '../../../public/logo.png'
const Footer = () => {
  return (
    <footer className="footer bg-[#615EFC] grid md:grid-cols-4 bottom-0 mt-12 grid-cols-2 text-white md:p-10 p-2">
      <aside>
        <img className='w-32' src={logo} alt="" />
        <p>
          Dream Food and Restaurant
          <br />

        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;