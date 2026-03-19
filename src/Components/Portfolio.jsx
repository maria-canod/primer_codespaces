/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.svg";

const imageAltText = "woman sitting at a desk in front of a laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Spanish LQA for Mobile Games",
    description:
      "1+ year as a Spanish Language QA tester for mobile games, reporting functional and contextual localization issues and improving consistency across releases.",
    url: "https://github.com/yourname/lqa-mobile-games-case-study",
  },
  {
    title: "Video Game Localization (Spanish)",
    description:
      "Localized UI strings, dialogue, and in-game text for two titles, including glossary creation, style guidelines, and cultural adaptation.",
    url: "https://github.com/yourname/game-localization-portfolio",
  },
  {
    title: "Finance and Investment App Localization",
    description:
      "Localized financial UI and copy for Spanish-speaking users, ensuring terminology accuracy and trust-building tone in complex product flows.",
    url: "https://github.com/yourname/finance-localization-samples",
  },
  {
    title: "React i18n Learning Prototype",
    description:
      "CS study project: built a simple React locale switcher that loads text from JSON and supports English/Spanish UI changes.",
    url: "https://github.com/yourname/react-i18n-demo",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
