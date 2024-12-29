import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Project_img from "../../public/assets/project.jpeg";
import "./project.css";

const projectData = [
  {
    title: "Crown Template",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, saepe laborum vero vel quaerat maxime.",
    buttonLabel: "Case Study",
  },
  {
    title: "Crown Template",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, saepe laborum vero vel quaerat maxime.",
    buttonLabel: "Case Study",
  },
  {
    title: "Crown Template",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, saepe laborum vero vel quaerat maxime.",
    buttonLabel: "Case Study",
  },
  {
    title: "Crown Template",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, saepe laborum vero vel quaerat maxime.",
    buttonLabel: "Case Study",
  },
];

const Project = () => {
  return (
    <div className="project_container">
      <Container>
        <div className="project_heading">
          <h1>Projects</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            magnam vero architecto soluta nesciunt illum rerum accusantium quis
            voluptatum laborum?
          </p>
        </div>

        {projectData.map((project, index) => (
          <Row key={index} className="project_row mb-4">
            <Col md={6}>
              <div className="project_img">
                <img src={Project_img} alt="Project" />
              </div>
            </Col>
            <Col md={6}>
              <div className="project_box">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project_button">
                  <button>{project.buttonLabel}</button>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Project;
