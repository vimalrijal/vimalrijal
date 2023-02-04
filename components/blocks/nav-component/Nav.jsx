import React, { useState, useEffect } from "react";
// import "./nav.css";
import { AiTwotoneHome as AiTwosomeHome } from "react-icons/ai";
import { BiUserCircle, BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
const Nav = () => {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio("https://www.fesliyanstudios.com/play-mp3/387")); // only call client
  }, []);

  const handleClick = (link) => {
    audio.play();
    setActiveNav(link);
  };

  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => handleClick("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiTwosomeHome />
      </a>
      <a
        href="#about"
        onClick={() => handleClick("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUserCircle />
      </a>
      <a
        href="#experience"
        onClick={() => handleClick("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => handleClick("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => handleClick("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
