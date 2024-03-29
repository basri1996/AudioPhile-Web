import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../../public/assets/home/mobile/image-earphones-yx1.jpg";
import img1 from "../../public/assets/home/mobile/image-speaker-zx7.jpg";
import img3 from "../../public/assets/home/tablet/image-speaker-zx7.jpg";
import img4 from "../../public/assets/home/desktop/image-speaker-zx7.jpg";

export const ShopItemMappedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 180px;
  padding-bottom: 25px;
  gap: 100px;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }
  @media (min-width: 1440px) {
    gap: 30px;
  }
`;
export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Div = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    gap: 11px;
  }
  @media (min-width: 1440px) {
    gap: 30px;
    height: 320px;
    width: 1110px;
    border-radius: 8px;
  }
`;

export const Circle1 = styled.div`
  position: absolute;
  top: -119px;
  width: 558px;
  height: 558px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  opacity: 0.4;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  @media (min-width: 768px) {
    top: -429px;
    width: 944px;
    height: 944px;
  }
`;

export const Circle2 = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 542px;
    height: 542px;
  }
`;

export const Circle3 = styled.div`
  width: 279px;
  height: 279px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  @media (min-width: 768px) {
    width: 472px;
    height: 472px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 96px;
  @media (min-width: 768px) {
    padding: 0 40px;
  }
  @media (min-width: 1440px) {
    padding: 0 165px;
  }
`;

export const FirstCard = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 600px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.Orange};
  margin-bottom: 24px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1440px) {
    height: 560px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 1110px;
  }
`;

export const Img = styled.img`
  margin-top: 56px;
  width: 172.5px;
  height: 207px;
  margin-bottom: 32px;
  z-index: 1;
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const Img1 = styled.img`
  display: none;
  @media (min-width: 1440px) {
    display: block;
    z-index: 1;
    height: 493px;
    width: 410.23358154296875px;
  }
`;

export const MainText = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  text-align: left;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 24px;
  margin-left: -23px;
`;

export const Para = styled.p`
  width: 280px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: left;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
  margin-left: 11px;
`;
export const But = styled.button`
  all: unset;
  width: 160px;
  height: 48px;
  background: ${(props) => props.theme.colors.Black};
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: white;
  margin-top: 32px;
  cursor: pointer;
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  bottom: 12%;
  @media (min-width: 1440px) {
    left: 64.5%;
    bottom: 20%;
    transform: none;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.LightBlack};
    opacity: 70%;
  }
`;
export const SecondCard = styled.div`
  width: 100%;
  height: 320px;
  background-image: url(${img1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  margin-bottom: 24px;
  padding-left: 24px;
  padding-top: 60px;
  @media (min-width: 768px) {
    padding-top: 0;
    background-image: url(${img3});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media (min-width: 1440px) {
    padding-left: 95px;
    background-image: url(${img4});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 320px;
    width: 1110px;
  }
`;

export const ThirdCard = styled.div`
  width: 100%;
  min-height: 200px;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    height: 320px;
  }
`;

export const ForthCard = styled.div`
  padding-left: 24px;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.LightGray};
  @media (min-width: 768px) {
    height: 320px;
  }
  @media (min-width: 1440px) {
    padding-left: 95px;
  }
`;

export const EarPhoneh1 = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.Black};
  padding-top: 41px;
  @media (min-width: 768px) {
    padding-top: 0;
    margin-top: 101px;
  }
`;

export const Butt = styled.button`
  width: 160px;
  height: 48px;
  border: 1px solid #000000;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.White};
  margin-top: 32px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.Black};
  &:hover {
    background-color: ${(props) => props.theme.colors.LightBlack};
    opacity: 70%;
  }
`;

export const StyleLink = styled(Link)`
  text-decoration: none;
`;
