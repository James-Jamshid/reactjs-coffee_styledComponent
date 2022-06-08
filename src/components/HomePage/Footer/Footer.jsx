import React from "react";
import { Child, ChildInner, Container, FooterImg, Wrapper } from "./Styled";
import line1 from "../assets/bottom1.png";
import line2 from "../assets/bottom2.png";
import Insta from "../assets/Insta.png";
import Fb from "../assets/Fb.png";
import twitter from "../assets/twitter.png";
import pinterest from "../assets/pinterest.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <FooterImg src={line1} />
      <Wrapper>
        <Child>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h4>Merchandise</h4>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>T-shirts</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Caps</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Masks</h5>
          </Link>
        </Child>
        <Child>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h4>Franchise</h4>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Coffee Outlet</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Coffee Vending Machine</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Contact Us</h5>
          </Link>
        </Child>
        <Child>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h4>About Us</h4>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Promotions</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Customer Care</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Legal Information</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Achievements </h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Careers</h5>
          </Link>
        </Child>
        <Child>
          <h4>Follow Us</h4>
          <ChildInner>
            <a href="https://www.instagram.com">
              <FooterImg id="icon" src={Insta} />
            </a>
            <a href="https://www.facebook.com">
              <FooterImg id="icon" src={Fb} />
            </a>
            <a href="https://twitter.com">
              <FooterImg id="icon" src={twitter} />
            </a>
            <a href="https://www.pinterest.com">
              <FooterImg id="icon" src={pinterest} />
            </a>
          </ChildInner>
        </Child>
      </Wrapper>
      <FooterImg src={line2} />
    </Container>
  );
};

export default Footer;
