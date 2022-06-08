import React from "react";
import {
  BtnSmall,
  Container,
  Icon,
  Upper,
  UpperLeft,
  UpperMiddle,
  UpperRight,
  Wrapper,
  WrapperInner,
} from "./Styled";
import apple from "../assets/apple.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Upper>
        <UpperLeft>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2>Filtro</h2>
          </Link>
        </UpperLeft>
        <UpperMiddle>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Home</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Explore Us</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Brands</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Contact Us</h5>
          </Link>
        </UpperMiddle>
        <UpperRight>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <BtnSmall id="btn">Sign up/Login</BtnSmall>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <BtnSmall id="btn">
              <Icon src={apple} />
              Get the app
            </BtnSmall>
          </Link>
        </UpperRight>
      </Upper>
      <Wrapper>
        <WrapperInner>
          <h1>Power up with coffee</h1>
          <h3>Start your exciting day with a cup of Brew Coffee</h3>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <button>Explore Us</button>
          </Link>
        </WrapperInner>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
