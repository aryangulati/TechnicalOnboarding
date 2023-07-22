/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a CS and ML enthusiast pursuing a Master's in Computer Science with a concentration in Artificial Intelligence from the University of Ottawa, Canada. As an avid learner, my passion lies in exploring Data and Algorithmic approaches. My skills shine in working with numbers, conducting thorough data analysis, and developing effective research strategies. I am constantly captivated by the ever-evolving landscape of AI and technology, staying up to date with the latest research on groundbreaking inventions and advancements. My educational journey has equipped me with a solid foundation in Computer Science, while my experience at Infosys STG allowed me to apply my skills in practical projects and gain valuable insights into real-world software development.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Artificial Intelligence",
  "Deep learning",
  "Machine Learning",
  "Data Analytics",
  "Natural language processing",
  "Problem Solving",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Driven by a continuous thirst for knowledge, I am excited to contribute to the exciting world of AI and technology through innovation, research, and problem-solving.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
