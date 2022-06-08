import styled from "styled-components";
import image from "../assets/img.png";

export const Container = styled.div`
  background-image: url(${image});
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 720px;
  h2 {
    font-family: "Gotham";
    font-style: italic;
    font-weight: 700;
    font-size: 24px;
    line-height: 23px;
    /* identical to box height */
    cursor: pointer;

    color: #ffffff;
  }
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 84px;

    color: #fffada;
  }
  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #ccb9b1;
  }
  button {
    background: #a0583c;
    border-radius: 18px;
    width: 250px;
    height: 55px;
    cursor: pointer;
    border: 1px solid black;
    color: white;
  }
  button:hover {
    background-color: black;
    color: white;
    transition: all 200ms ease;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
`;
export const WrapperInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;
export const Upper = styled.div`
  display: flex;

  padding: 20px;
  align-items: center;
  justify-content: center;
`;
export const UpperLeft = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;
export const UpperMiddle = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex: 1;
`;
export const UpperRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 20px;
`;
export const BtnSmall = styled.div``;
export const Icon = styled.img``;
