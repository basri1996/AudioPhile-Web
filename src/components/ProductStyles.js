import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: ${(props) =>
      props.idnumber === 3 ? "row-reverse" : "row"};
    gap: 125px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const DivWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h1`
  width: 327px;
  height: 76px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    width: 572px;
    height: 88px;
  }

  @media (min-width: 1440px) {
    width: 445px;
    height: 88px;
  }
`;
export const Paragraph = styled.p`
  width: 327px;
  height: 125px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;

  text-align: center;
  opacity: 0.5;

  @media (min-width: 768px) {
    width: 572px;
    height: 75px;
  }

  @media (min-width: 1440px) {
    width: 445px;
    height: 100px;
  }
`;
export const New = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;

  color: #d87d4a;
`;

export const BtnDiv = styled.div`
  width: 160px;
  height: 48px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: #d87d4a;
`;

export const Btn = styled.button`
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
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.LightOrange};
  }
`;
// const StyleLink = styled(Link)`
//   text-decoration: none;
// `;
