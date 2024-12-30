import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
// import my_img from "../../assets/image.jpg";
import my_img from "../../assets/image1.jpg";

const About = () => {
  return (
    <div className="about_container">
      <Row>
        <Col lg={7}>
          <div className="about">
            <h1 className="about_me_title">About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptates qui quos. Repudiandae sequi fugiat molestias reprehenderit omnis cupiditate ab, maxime itaque dicta facilis quis nesciunt excepturi quia, eos dolorem voluptatum delectus molestiae optio, neque atque. Repellat provident voluptatem vel maxime et accusamus debitis! Dolorem ipsum beatae facilis officiis. Nisi soluta quas nihil? Asperiores modi vitae eligendi pariatur quisquam, est sit, corporis rem omnis distinctio fugit provident! Recusandae doloremque quos tempora consequatur, officia optio rem voluptates ducimus exercitationem molestias neque assumenda ipsam nesciunt consectetur culpa quo saepe. Velit, excepturi id corrupti totam vitae neque exercitationem temporibus unde, voluptatibus, rerum eius.
            </p>
          </div>
        </Col>
        <Col lg={5}>
          <div className="img_div">
            <img src={my_img} alt="my_img" className="my_img" />
          </div>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h2 className="my_skills_title">My Skills</h2>
          </Col>
          <Col lg={6}>
            <h3 className="skill_sub_title">Programming Langauges</h3>
            <div className="skills_list">
              <p className="skill_name">C</p>
              <p className="skill_name">C++</p>
              <p className="skill_name">Java</p>
              <p className="skill_name">Python</p>
            </div>
          </Col>
          <Col lg={6}>
            <h3 className="skill_sub_title">Web Development</h3>
            <div className="skills_list">
              <p className="skill_name">HTML</p>
              <p className="skill_name">CSS</p>
              <p className="skill_name">JavaScript</p>
            </div>
          </Col>
          <Col lg={6}>
            <h3 className="skill_sub_title">Framework</h3>
            <div className="skills_list">
              <p className="skill_name">Bootstrap</p>
              <p className="skill_name">React Js</p>
              <p className="skill_name">Spring Boot</p>
              <p className="skill_name">Fast API</p>
            </div>
          </Col>
          <Col lg={6}>
            <h3 className="skill_sub_title">Database</h3>
            <div className="skills_list">
              <p className="skill_name">MySQL</p>
              <p className="skill_name">PostgreSQL</p>
              <p className="skill_name">MongoDB</p>
            </div>
          </Col>
          <Col lg={6}>
            <h3 className="skill_sub_title">DevOps Tools</h3>
            <div className="skills_list">
              <p className="skill_name">Docker</p>
              <p className="skill_name">Kubernetes</p>
              <p className="skill_name">Terraform</p>
              <p className="skill_name">GitHub Action</p>
            </div>
          </Col>
          <Col lg={6}>
            <h3 className="skill_sub_title">Additional Skills</h3>
            <div className="skills_list">
              <p className="skill_name">DSA</p>
              <p className="skill_name">Git</p>
              <p className="skill_name">GitHub</p>
              <p className="skill_name">Bash Script</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
