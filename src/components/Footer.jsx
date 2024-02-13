import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImHeart } from "react-icons/im";

const Footer = () => {
  return (
    <div className="w-screen text-center h-[8vh] grid grid-cols-3 radial-gradient font-itim items-center justify-start text-rose-900">
      <div className="opacity-60">
        <p className="text-xs">DESIGNER</p>
        <div className="flex gap-2 text-2xl justify-center">
          <a href="https://www.instagram.com/prince2512_/">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/princesinghbaghel/">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <p className="flex items-center justify-center gap-1">Made with <ImHeart/></p>
      <div className="opacity-60">
        <div className="flex gap-2 text-2xl justify-center">
          <a href="https://www.instagram.com/yours_truly_vijay_/">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/vijaytamada/">
            <FaLinkedin />
          </a>
        </div>
        <p className="text-xs opac">DEVELOPER</p>
      </div>
    </div>
  );
};

export default Footer;
