import React from "react";
// import "./header.css";
import CTA from "./CTA";
import ME from "../../../public/assets/me.png";
import HeaderSocials from "./HeaderSocials";
import Image from "next/image";
const Header = () => {
  return (
    <header>
      <div className="container header__container h-fit">
        <h5>Hello Im</h5>
        <h1>Vimal Rijal</h1>
        <h5 className="text-light">Full-stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me grid content-end p-0">
          <Image src={ME} alt="me" className="w-full" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
