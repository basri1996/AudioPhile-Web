import styled from "styled-components";
import photo from "../images/Group 12.png";
import { Link } from "react-router-dom";


function EndPoint() {
  
  return (
    <OpacityDiv>
      <Div>
        <Img src={photo}></Img>
        <ThankuText>THANK YOU FOR YOUR ORDER</ThankuText>
        <StyleLink to="/">
          <CheckOutBtn >
            Back To Home
          </CheckOutBtn>
        </StyleLink>
      </Div>
    </OpacityDiv>
  );
}

export default EndPoint;

const Img = styled.img`
  width: 40px;
  height: 40px;
`;

const ThankuText = styled.h1`
  font-family: Manrope;
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 1.1428571939468384px;
  text-align: left;
`;

const Div = styled.div`
  background-color: ${(props) => props.theme.colors.LightGray};
  position: absolute;
  z-index: 120;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  width: 350px;
  height: 350px;
  left: 7%;
  top: 12%;
  padding: 35px;
  @media (min-width: 440px) {
    left: 10%;
  }
  @media (min-width: 450px) {
    left: 15%;
  }
  @media (min-width: 550px) {
    left: 20%;
  }
  @media (min-width: 650px) {
    left: 25%;
  }
  @media (min-width: 750px) {
    left: 30%;
  }
  @media (min-width: 950px) {
    width: 540px;
    height: 540px;
    left: 25%;
    padding: 0;
  }
  @media (min-width: 1440px) {
    left: 35%;
    top: 12%;
  }
`;
const OpacityDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 100%;
  height: 170%;
  top: 88px;
  left: 0;
  z-index: 100;
`;
const CheckOutBtn = styled.button`
  all: unset;
  cursor: pointer;

  height: 48px;
  width: 279px;

  background-color: ${(props) => props.theme.colors.Orange};
  color: ${(props) => props.theme.colors.White};
  font-family: Manrope;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 24px;
  text-align: center;
  :hover {
    background-color: ${(props) => props.theme.colors.LightOrange};
  }
`;
const StyleLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
