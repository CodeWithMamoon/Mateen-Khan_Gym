import React from "react";
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header>
      <p>MATEEN KHAN FITNESS</p>
      <a
        href="https://api.whatsapp.com/send/?phone=923129866232&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <FaWhatsapp size={30} />
      </a>
      {/* Muhammad Mamoon */}
    </header>
  );
};

export default Navbar;
