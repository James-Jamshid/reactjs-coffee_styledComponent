import React from "react";
import {
  Btn,
  Buttons,
  Container,
  Lower,
  MiddleImg,
  Upper,
  UpperInner,
} from "./Styled";
import Line1 from "../assets/Explore.png";
import Line2 from "../assets/Brands.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import Coffee from "../assets/Coffee.png";
import mocha from "../assets/mocha.png";
import latte from "../assets/latte.png";
import java from "../assets/java.png";
import { Link } from "react-router-dom";

const Middle = () => {
  return (
    <Container>
      <MiddleImg src={Line1} />
      <Upper>
        <UpperInner>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <MiddleImg id="img" src={Coffee} />
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h4>Cappacino</h4>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            Massa, <br /> fermentum id id vitae, integer <br /> fermentum
            tellus. In vitae id nisl quis <br /> ornare diam commodo in vel
            dolor.
          </p>
          <Buttons>
            <h4>$8.60</h4>
            <Link to="/btn" style={{ textDecoration: "none" }}>
              <Btn id="btn">Order Now</Btn>
            </Link>
          </Buttons>
        </UpperInner>
        <UpperInner>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <MiddleImg id="img" src={mocha} />
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h4>Cappacino</h4>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            Massa, <br /> fermentum id id vitae, integer <br /> fermentum
            tellus. In vitae id nisl quis <br /> ornare diam commodo in vel
            dolor.
          </p>
          <Buttons>
            <h4>$8.60</h4>
            <Link to="/btn" style={{ textDecoration: "none" }}>
              <Btn id="btn">Order Now</Btn>
            </Link>
          </Buttons>
        </UpperInner>
        <UpperInner>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <MiddleImg id="img" src={latte} />
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h4>Cappacino</h4>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            Massa, <br /> fermentum id id vitae, integer <br /> fermentum
            tellus. In vitae id nisl quis <br /> ornare diam commodo in vel
            dolor.
          </p>
          <Buttons>
            <h4>$8.60</h4>
            <Link to="/btn" style={{ textDecoration: "none" }}>
              <Btn id="btn">Order Now</Btn>
            </Link>
          </Buttons>
        </UpperInner>
        <UpperInner>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <MiddleImg id="img" src={java} />
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h4>Cappacino</h4>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            Massa, <br /> fermentum id id vitae, integer <br /> fermentum
            tellus. In vitae id nisl quis <br /> ornare diam commodo in vel
            dolor.
          </p>
          <Buttons>
            <h4>$8.60</h4>
            <Link to="/btn" style={{ textDecoration: "none" }}>
              <Btn id="btn">Order Now</Btn>
            </Link>
          </Buttons>
        </UpperInner>
      </Upper>
      <MiddleImg src={Line2} />
      <Lower>
        <Link to="/btn" style={{ textDecoration: "none" }}>
          <MiddleImg src={logo1} />
        </Link>
        <Link to="/btn" style={{ textDecoration: "none" }}>
          <MiddleImg src={logo2} />
        </Link>
        <Link to="/btn" style={{ textDecoration: "none" }}>
          <MiddleImg src={logo3} />
        </Link>
        <Link to="/btn" style={{ textDecoration: "none" }}>
          <MiddleImg src={logo4} />
        </Link>
      </Lower>
    </Container>
  );
};

export default Middle;
