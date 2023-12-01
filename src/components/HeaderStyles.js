import { Link } from "react-router-dom";
import styled from "styled-components";

export const MappedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  gap: 80px;
  margin-top: 117px;
  margin-bottom: 35px;
  transition: height 5s, visibility 5s;
  position: absolute;
  top: -2.8%;
  left: 0;
  background-color: white;
  z-index: 5;
  height: 850px;
  width: 100%;
  @media (min-width: 768px) {
    width: 30%;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  background-color: ${(props) =>
    props.locationpath === "true" ? "black" : "#1a1a1a"};
  @media (min-width: 768px) {
    padding: 0;
    margin-left: -60%;
  }
  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 0px;
  }
`;

export const Div = styled.div`
  height: 89px;
  width: 100%;
  background-color: ${(props) =>
    props.locationpath === "true" ? "#black" : "#1a1a1a"};
  display: flex;
  padding: 0 24px;
  justify-content: space-between;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    padding: 0;
    width: 1100px;
  }
`;

export const RectangleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  flex-direction: column;
  @media (min-width: 768px) {
    margin-right: 50px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;
export const RectangleDivMobile = styled(RectangleDiv)`
  @media (min-width: 768px) {
    display: none;
  }
`;
export const RectangleImage = styled.img`
  width: 16px;
  height: 3px;
`;
export const RectangleImageMobile = styled(RectangleImage)`
  @media (min-width: 768px) {
    display: none;
  }
`;
export const AudioPhileDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AudioPhileDivMobile = styled(AudioPhileDiv)`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const AudioPhile = styled.img`
  cursor: pointer;
`;
export const AudioPhileMobile = styled(AudioPhile)`
  @media (min-width: 768px) {
    display: none;
  }
  cursor: pointer;
`;

export const ShapeDiv = styled(AudioPhileDiv)``;
export const Shape = styled.img``;

export const WrapperTablet = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;
export const Line = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.colors.White};
  width: 100%;
  opacity: 60%;
  @media (min-width: 1440px) {
    width: 1110px;
    opacity: 10%;
  }
`;

export const MenuDiv = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 34px;
    padding-left: 197px;
    padding-right: 319px;
  }
`;
export const Home = styled.h1`
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.White};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.Orange};
  }
`;
export const HeadPhones = styled(Home)``;
export const Speakers = styled(Home)``;
export const EarPhones = styled(Home)``;

export const StyleLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
