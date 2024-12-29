import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about_container">
        <Container>
          <div className="about_head">
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              possimus pariatur! Nam veniam possimus magni! Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. A, ipsum.
            </p>
          </div>

          <Row>
            <Col lg={6}>
              <div className="about_box">
                <h3>Get to know me!</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda provident, facere sequi commodi, quam architecto ex
                  non natus ratione dolorem corrupti, eum asperiores repellat
                  esse molestias maiores perferendis totam voluptate? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
                  cupiditate odio. Consectetur repellat autem officia, ipsum
                  omnis possimus porro dicta nam eligendi corporis neque
                  aspernatur et quasi quia. Rem iusto esse id a laborum vero
                  enim praesentium sit nostrum illo.
                </p>
              </div>
            </Col>

            <Col lg={6}>
              <div className="about_box_skill">
                <h3>My Skills</h3>

                <div className="about_skill">
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>REACT JS</div>
                  <div>JAVA</div>
                  <div>PHYTHON</div>
                  <div>WORDPRESS</div>
                  <div>GIT</div>
                  <div>GITHUB</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
