import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyleLink = styled(Link)`
  text-decoration: none;
`;

export const Text = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top: 56px;
  padding-bottom: 48px;
`;

export const DeskWrapper2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
`;
export const DeskWrapper1 = styled.div`
  display: flex;
  gap: 34px;
`;
export const DeskWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 75px;
`;

export const DeskPages = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  &:hover {
    color: ${(props) => props.theme.colors.LightOrange};
    cursor: pointer;
  }
`;

export const DeskImg = styled.img`
  cursor: pointer;
`;

export const Container1 = styled.div`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    width: 100%;
    background-color: ${(props) => props.theme.colors.Black};
    padding: 0 165px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.Black};
  padding: 0 24px;
  @media (min-width: 768px) {
    align-items: flex-start;
    padding: 0 39px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;
export const Line = styled.div`
  width: 104px;
  height: 4px;
  background-color: ${(props) => props.theme.colors.Orange};
  margin-bottom: 48px;
`;
export const Audiophile = styled.img`
  margin-bottom: 48px;
  cursor: pointer;
`;
export const Pages = styled.h4`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.White};
  margin-bottom: 16px;
  cursor: pointer;
`;
export const Paragraph = styled.p`
  max-width: 600px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: ${(props) => props.theme.colors.White};
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top: 32px;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
export const Parag = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: ${(props) => props.theme.colors.White};
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 48px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 38px;
`;

export const Icon = styled.img`
  cursor: pointer;
`;
export const PagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    gap: 34px;
    flex-direction: row;
  }
`;

export const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 33px;
  }
`;
