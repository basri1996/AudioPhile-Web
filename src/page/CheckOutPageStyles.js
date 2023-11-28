import styled from "styled-components";

export const Label = styled.h2`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.2142857164144516px;
  text-align: left;
`;

export const LabelDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
export const BillingText = styled.h1`
  font-family: Manrope;
  font-size: 13px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.9285714030265808px;
  text-align: left;
  color: ${(props) => props.theme.colors.Orange};
  margin-top: 32px;
`;

export const CheckOuttext = styled.h1`
  font-family: Manrope;
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 1px;
  text-align: left;
`;
export const FlexDiv = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.LightGray};
  flex-direction: column;
  padding-bottom: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    padding-bottom: 70px;
  }
`;

export const ErrorName = styled.h1`
  @media (min-width: 1440px) {
    color: rgba(205, 44, 44, 1);
    font-size: 11px;
    font-weight: 700;
    line-height: 16.5px;
    font-family: "Poppins";
    font-style: "Medium Italic";
    position: absolute;
    top: 18.7%;
    right: 5%;
  }
  @media (max-width: 1440px) {
    display: none;
  }
`;

export const ErrorEmail = styled(ErrorName)`
  top: 27.8%;
`;
export const ErrorPhoneNumber = styled(ErrorName)`
  top: 37.1%;
`;

export const ErrorAddress = styled(ErrorName)`
  top: 53.5%;
`;
export const ErrorZipCode = styled(ErrorName)`
  top: 62.7%;
`;
export const ErrorCity = styled(ErrorName)`
  top: 72%;
`;

export const ErrorBank = styled(ErrorName)`
  top: 97.4%;
`;

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 1);
  width: 327px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-left: 24px;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.1469);
  margin-top: 65px;
  padding-bottom: 31px;
  position: relative;
  @media (min-width: 1440px) {
    width: 700px;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  @media (min-width: 1440px) {
    gap: 25px;
  }
`;

export const Input = styled.input`
  background-color: white;
  width: 279px;
  height: 56px;
  border-radius: 5px;
  border: ${(props) =>
    props.Error ? "1px solid rgba(205, 44, 44, 1)" : "1px solid #DEDEDE"};
  outline: none;
  padding-left: 19.41px;
  color: gray;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins";
  position: relative;
  @media (min-width: 1440px) {
    width: 95%;
    padding-left: 32px;
  }
  ::placeholder {
    color: gray;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.75;
    font-family: "Poppins";
  }
`;
export const CheckOutBtn = styled.button`
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
  &:hover {
    background-color: ${(props) => props.theme.colors.LightOrange};
  }
`;
export const WhiteCard = styled.div`
  margin-bottom: 97px;
  margin-top: 32px;
  height: auto;
  width: 327px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.White};
  padding: 32px 31px 31px 33px;
  outline: none;
  z-index: 20;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;
export const WhiteCardContainer = styled.div`
  @media (min-width: 768px) {
    height: 1220px;
    width: 327px;
    border-radius: 8px;
    padding: 0;
    display: flex;
    margin-top: 85px;
    flex-direction: column;
    justify-content: flex-start;
  }
  @media (min-width: 1440px) {
    margin-top: 0px;
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
  color: ${(props) => props.theme.colors.Orange};
  font-family: Manrope;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
`;
