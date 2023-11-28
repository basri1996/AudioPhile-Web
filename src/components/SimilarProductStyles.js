import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyleLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;
export const Div = styled.div``;

export const Title = styled.h1`
  font-family: Manrope;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 1.7142857313156128px;
  text-align: center;
  margin-top: 32px;
`;
export const Btn = styled.a`
  all: unset;
  height: 48px;
  width: 160px;
  background-color: ${(props) => props.theme.colors.Orange};
  color: ${(props) => props.theme.colors.White};
  font-family: Manrope;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.colors.LightOrange};
  }
`;
