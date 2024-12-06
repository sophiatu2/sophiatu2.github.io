import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import ProjectCard from "./ProjectCard";
import foxBlob from "../assets/foxblob.gif";
import television from "../assets/screenshots/television.png";
import pdf from "../assets/2021 _CV_Final_Project.pdf";
import food from "../assets/screenshots/foodclassification.png";
import pvdxScreenshot from "../assets/screenshots/pvdx_figma.png";
import redesignScreenshot from "../assets/screenshots/redesign-screenshot.png";
import iterativeScreenshot from "../assets/screenshots/iterativedesign-screenshot.png";
import developmentScreenshot from "../assets/screenshots/development-screenshot.png";
import "../index.css";

function Projects() {
  return (
    <div>
      <div className="parallax">
        <div className="project-header">
          <h1>Projects</h1>
        </div>
      </div>
      <Container className="display">
        <img src={foxBlob} alt="fox blob gif" width="320px" />
        <h2>My Work</h2>
        <ProjectCard
          title="Brown Space Engineering PVDX App"
          img={pvdxScreenshot}
          link="https://github.com/BrownSpaceEngineering/pvdx_webapp"
          desc={
            <div>
              <p>
                Led Ground Software team in{" "}
                <a
                  style={{ color: "var(--pop)" }}
                  href="https://www.brownspace.io/"
                >
                  Brown Space Engineering (BSE)
                </a>{" "}
                to develop a mobile app in React to interface with our cube
                satellite. I worked with other BSE leaders to determine key
                features/functionality and led my team to design a beta version
                of the app (to be filled with live data upon launch of the
                satellite). The app includes a dashboard for monitoring the
                satellite's status (e.g., battery level, temperature of
                components, etc.), a map to track the satellite's location, and
                a CAD model of the satellite.
              </p>
              <p>
                Prior to graduation, I was also working on a block-coding
                interface to allow young students to draw images with code,
                similar to Python's{" "}
                <a
                  style={{ color: "var(--pop)" }}
                  href="https://docs.python.org/3/library/turtle.html"
                >
                  turtle
                </a>
                , and submit their images to the satellite. The satellite would
                display these images on its screen, take a picture of itself
                using a camera attached to its arm, and send back the image for
                students to view their work in space.
              </p>
            </div>
          }
          skills={"React, TypeScript, Figma, Product Management"}
        />
        <ProjectCard
          title="Gesture Control System"
          img={television}
          link="https://github.com/sophiatu2/television"
          desc={
            <p>
              Gesture-based music control system using a Convolutional Neural
              Network. Various hand positions were mapped to commands on a
              computer, creating an alternate method of controlling interfaces.
              Using a{" "}
              <a
                style={{ color: "var(--pop)" }}
                href="https://www.kaggle.com/datasets/koryakinp/fingers"
              >
                Kaggle database
              </a>
              , I worked in a group to build and test the CNN model. We adjusted
              hyperparameters and batch sizes to achieve a{" "}
              <strong>99.58% accuracy and 1.65% loss</strong>, visualizing these
              metrics using tensorboard in GCP. To test the model, we created an
              interface with functioning gesture contols for a short playlist.
            </p>
          }
          skills={
            "Python, TensorFlow, Keras, Google Cloud Platform, OpenCV, CNNs, AI/ML"
          }
          other={
            <button className="custom-button" href={pdf} download>
              <AiOutlineDownload />
              &nbsp;Download paper
            </button>
          }
        />
        <ProjectCard
          title="Food Classification"
          img={food}
          link="https://github.com/meera-kurup/skimage"
          desc={
            <p>
              Food classification using Convolutional Neural Networks. I worked
              in a team to implement an{" "}
              <a
                style={{ color: "var(--pop)" }}
                href="https://ieeexplore.ieee.org/document/8228338"
              >
                existing paper
              </a>{" "}
              using CNNs to classify a subset of food types in the Food-101 data
              set. Due to limited processing power, we trained and tested on 5
              of the 101 food classes (sashimi, baklava, ramen, edamame, and
              chocolate cake) and simplified the CNN architecture. We also
              implemented an input optimizer to understand targeted features.
              Our model reached an <strong>average test accuracy of 63%</strong>{" "}
              across all batches. It did not reach the 86.97% accuracy attained
              using the proposed approach in the paper. However our model's
              performance was considerably impressive given its simplified
              architecture and limited computing power.
            </p>
          }
          skills={"Python, TensorFlow, Keras, Matplotlib, CNNs, AI/ML"}
          other={
            <button
              className="custom-button"
              href={
                "https://devpost.com/software/creatively-captioning-culinary-cuisines"
              }
              target="_blank"
            >
              View Devpost
            </button>
          }
        />
        <ProjectCard
          title="Responsive Redesign"
          img={redesignScreenshot}
          link="https://vibingcat217.github.io/responsive-redesign/"
          desc={
            "A website redesign for Johnny Burrito, a place I frequented during my investment banking internship in Charlotte. I removed unnecessary tabs and redundant links and addressed overall usability and accessibility issue."
          }
          skills={"React, Figma, Balsamiq, UI/UX"}
        />

        <ProjectCard
          title="Iterative Design"
          img={iterativeScreenshot}
          link="https://jumpylemur431.github.io/iterative-design/"
          desc={
            "Interactive interface design for Discz, a music discovery social media platform from Y Combinator. I worked in a group to prototype the app, making sure to align with the original mission and taking inspriation from Tinder and other music apps. We also received critiques on our design and assembled a list of potential changes based on the feedback."
          }
          skills={"Figma, Balsamiq, Product Design"}
        />

        <ProjectCard
          title="Development"
          img={developmentScreenshot}
          caption="Rainbow Six Siege Shop"
          link="https://vibingcat217.github.io/development/"
          desc={
            "An interface mirroring a shopping system that allows Rainbow Six Siege players to calculate how much Renown (in-game currency) they need to purchase their desired operators. Players can filter by various metrics and optimize their Renown spending by carefully choosing which combination of characters they would like to purchase and working towards the total cost."
          }
          skills={"React"}
        />
      </Container>
    </div>
  );
}

export default Projects;
