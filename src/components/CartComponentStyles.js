import { Link } from "react-router-dom";
import styled from "styled-components";

export const OpacityDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 380%;
  top: 88px;
  z-index: 20;
  @media (min-width: 768px) {
    width: 157%;
  }
  @media (min-width: 1440px) {
    width: 100%;
    height: 380%;
  }
`;
export const CheckOutBtn = styled.button`
  all: unset;
  cursor: pointer;

  height: 48px;
  width: 313px;
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
export const WhiteCard = styled.div`
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.White};
  position: absolute;
  height: auto;
  outline: none;
  z-index: 20;
  border-radius: 8px;
  width: 375px;
  padding: 32px 31px 31px 33px;
  top: 90px;
  @media (min-width: 400px) {
    right: 3%;
    top: 127px;
  }
  @media (min-width: 1440px) {
    right: 385px;
    padding: 32px 31px 31px 33px;
  }
`;

export const Cart = styled.h3`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.2857142686843872px;
  text-align: left;
`;

export const Remove = styled.h2`
  font-family: Manrope;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: ${(props) => props.theme.colors.Black};
  opacity: 0.5;
  cursor: pointer;
`;

export const Images = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 8px;
`;

export const WraperMain = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 60px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartTitle = styled.h2`
  font-family: Manrope;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: ${(props) => props.theme.colors.Black};
`;

export const Price = styled.h2`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: ${(props) => props.theme.colors.Black};
  opacity: 0.5;
`;

export const CountWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const CountBtn = styled.button`
  height: 32px;
  width: 96px;
  background-color: ${(props) => props.theme.colors.LightGray};
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Num = styled.h1`
  font-family: Manrope;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.Black};
`;

export const TotalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;

export const Total = styled.h1`
  font-family: Manrope;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: ${(props) => props.theme.colors.Black};
  opacity: 0.5;
`;

export const TotalPrice = styled.h1`
  color: ${(props) => props.theme.colors.Black};
  font-family: Manrope;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
`;

export const Plus = styled.div`
  cursor: pointer;
`;

export const Min = styled.div`
  cursor: pointer;
`;

export const CartDiv = styled.div`
  height: auto;
  width: 377px;
  left: 0;
  top: 32px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.White};
  position: absolute;
  display: flex;
  gap: 149px;
  padding-left: 33px;
`;

export const Wrapper = styled.div`
  background-color: ${(props) =>
    props.title || props.visible ? "black" : "#1a1a1a"};
  @media (min-width: 768px) {
    padding: 0 39.61px;
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

export const StyleLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
