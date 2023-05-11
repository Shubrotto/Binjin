import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/portfolio2.jpg";
import Img3 from "../../assets/portfolio3.jpg";
import Img4 from "../../assets/portfolio4.jpg";
import Img5 from "../../assets/portfolio5.png";
import Img6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Crypto Currency DashBoard & Finalcial Visualization",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/21403305-Krypto-Website",
  },

  {
    id: 2,
    image: Img2,
    title: "Personal Portfolio Website useing js ",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/21403292-Personal-Portfolio-Website",
  },

  {
    id: 3,
    image: Img3,
    title: "Personal Website create with JS",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/21403280-Personal-Website-create-with-JS",
  },

  {
    id: 4,
    image: Img4,
    title: "Crypto Currency DashBoard & Finalcial Visualization",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/21403305-Krypto-Website",
  },

  {
    id: 5,
    image: Img5,
    title: "Personal Portfolio Website useing React",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/21403292-Personal-Portfolio-Website",
  },

  {
    id: 6,
    image: Img6,
    title: "Personal Website create with JS",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/21403280-Personal-Website-create-with-JS",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a href={github} target="_blanks" className="btn">
                  Github
                </a>
                <a href={demo} target="_blanks" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
