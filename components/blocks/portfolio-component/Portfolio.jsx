import React, { useState } from "react";
// import "./portfolio.css";
import IMG1 from "../../../public/assets/maqroGoogleLanding.png";
import IMG2 from "../../../public/assets/maqroPortal.png";
import IMG3 from "../../../public/assets/maqroHome.png";
import IMG4 from "../../../public/assets/taxServices.png";
import IMG5 from "../../../public/assets/cotivity.png";
import IMG6 from "../../../public/assets/extra.png";
import Image from "next/image";

import { RxEyeClosed } from "react-icons/rx";
import { RiEyeLine } from "react-icons/ri";
import { HiEyeOff } from "react-icons/hi";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Maqro Google Landing page",
    github: "https://github.com",
    demo: "https://maqro.com.au/landingTest/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Maqro Stock Recommendation Platform",
    github: "https://github.com",
    demo: "https://maqro-portal-frontend.vercel.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Maqro Marketing Website",
    github: "https://github.com",
    demo: "https://maqro.com.au/home-test/",
  },
  {
    id: 4,
    image: IMG4,
    title: "TAX Services",
    github: "https://github.com",
    demo: "https://taxservicesnepal.com.np/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Data Quality check platform (internal Project)",
    github: "https://github.com",
    demo: "internal project",
  },
  {
    id: 6,
    image: IMG6,
    title: "Not hosted",
    github: "https://github.com",
    demo: "internal project",
  },
];

const Portfolio = () => {
  const [blur, Setblur] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }, index) => {
          const isActive = index === selectedIndex;
          return (
            <article key={id} className="portfolio__item">
              <div className=" relative portfolio__item-image">
                {isActive && blur ? (
                  <RiEyeLine
                    className={`hover:cursor-pointer scale-150 absolute
                  z-10  top-3 right-3  p-15`}
                    onClick={() => {
                      setSelectedIndex(index);
                      Setblur(!blur);
                    }}
                  />
                ) : (
                  <HiEyeOff
                    className={`hover:cursor-pointer scale-150 absolute
                  z-10  top-3 right-3  p-15`}
                    onClick={() => {
                      setSelectedIndex(index);
                      Setblur(!blur);
                    }}
                  />
                )}

                <Image
                  src={image}
                  alt={title}
                  className={`${isActive && blur ? "blur-none" : "blur"}`}
                />
              </div>
              <h3
                className={`${
                  isActive && blur ? "blur-none" : "blur-sm"
                } truncate`}
              >
                {title}
              </h3>
              {demo === "internal project" ? (
                ""
              ) : (
                <div className="portfolio__item-cta">
                  <a
                    href={demo}
                    className={`${
                      isActive && blur
                        ? "btn btn-primary"
                        : "btn btn-primary opacity-0"
                    }`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
