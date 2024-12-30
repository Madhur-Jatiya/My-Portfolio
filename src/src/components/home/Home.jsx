import React from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
import Button from "../button/Button";
import { HiMiniArrowDownTray } from "react-icons/hi2";

const Home = () => {
  return (
    <div className="home_container">
      <Container>
        <div className="home_box">
          <h1>Hey, I'm Madhur Jatiya</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, culpa reprehenderit hic accusamus numquam facilis iusto consequuntur dicta quibusdam unde architecto harum. Minus consequatur atque fugiat repellat veritatis pariatur modi, quisquam et rem officiis architecto, tempore sint! Maxime quae, fugiat obcaecati veritatis cum ad, asperiores excepturi odit voluptatem, explicabo fugit!
          </p>
        </div>
        <div className="home_button">
          <Button
            value={'Download CV'}
            className={'button'}
            icon={<HiMiniArrowDownTray className="download_icon" />}
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;
