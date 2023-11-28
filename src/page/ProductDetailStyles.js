import styled from "styled-components";

export const AllWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1440px) {
    align-items: center;
    justify-content: center;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const BoxWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: 11px;
  }
  @media (min-width: 1440px) {
    margin-left: 0;
  }
`;
export const BoxText = styled.p`
  &:before {
    content: "${(props) => props.quantity}x";
    padding-right: 24px;
    color: ${(props) => props.theme.colors.Orange};
    font-family: "Manrope";
  }
  font-family: "Manrope";
  font-size: 24px;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.Black};
`;
export const BoxTitle = styled.h1`
  height: 36px;
  width: 327px;
  font-family: "Manrope";
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.8571428656578064px;
  text-align: left;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 1.1428571939468384px;
  }
`;
export const BoxDiv = styled.div`
  margin-top: 88px;
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
  }
`;
export const FeatureText = styled.p`
  height: 475px;
  width: 327px;
  opacity: 0.5;
  font-family: "Manrope";
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  margin-top: 24px;
  color: ${(props) => props.theme.colors.Black};
  @media (min-width: 768px) {
    height: 250px;
    width: 689px;
  }
`;
export const FeatureTitle = styled.h1`
  font-family: "Manrope";
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.8571428656578064px;
  text-align: left;
  margin-top: 88px;
  @media (min-width: 768px) {
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 1.1428571939468384px;
  }
`;
export const FeatureDiv = styled.div``;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 80px;
  }
`;

export const Count = styled.div`
  font-family: Manrope;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: center;
  color: ${(props) => props.theme.colors.Black};
  cursor: pointer;
`;

export const CountButton = styled.div`
  height: 48px;
  width: 120px;
  background-color: ${(props) => props.theme.colors.LightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const Price = styled.h1`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.2857142686843872px;
  text-align: left;
  margin-top: 32px;
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 69.5px;
    margin-top: 160px;
    justify-content: flex-start;
    /* margin-left: 39px; */
  }
  @media (min-width: 1440px) {
    gap: 125px;
    margin-top: 160px;
    margin-bottom: 160px;
    /* margin-left: 165px; */
  }
`;

export const DivWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => props.flexdirection};
  gap: 24px;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 1440px) {
    flex-direction: ${(props) => props.flexdirection};
  }
`;

export const Photo = styled.div`
  width: 327px;
  height: 352px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo?.mobile});
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    height: 480px;
    width: 281px;
    border-radius: 8px;
    background-image: url(${(props) => props.photo?.tablet});
  }

  @media (min-width: 1440px) {
    background-image: url(${(props) => props.photo?.desktop});
    width: 540px;
    height: 560px;
  }
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
  text-align: left;

  @media (min-width: 768px) {
    height: 88px;
    width: 339px;
  }

  @media (min-width: 1440px) {
    width: 445px;
    height: 88px;
    text-align: left;
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
  text-align: left;
  opacity: 0.5;

  @media (min-width: 768px) {
    width: 339px;
    height: 75px;
  }

  @media (min-width: 1440px) {
    width: 445px;
    height: 100px;
    text-align: left;
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
  color: #d87d4a;
  text-align: left;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;

export const BtnDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 16px;
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

export const PhotoDiv = styled.div`
  display: grid;
  place-items: center;
  gap: 18px;
  margin-top: 88px;
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1440px) {
  }
`;
export const GridWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 1440px) {
    gap: 30px;
  }
`;
export const PhotoOne = styled.div`
  background-image: url(${(props) => props.gallery?.first?.mobile});
  width: 327px;
  height: 174px;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 8px;

  @media (min-width: 768px) {
    background-image: url(${(props) => props.gallery?.first?.tablet});
    width: 277px;
  }
  @media (min-width: 1440px) {
    background-image: url(${(props) => props.gallery?.first?.desktop});
    width: 445px;
    height: 280px;
  }
`;
export const PhotoTwo = styled.div`
  background-image: url(${(props) => props.gallery?.second?.mobile});
  width: 327px;
  height: 174px;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 8px;

  @media (min-width: 768px) {
    background-image: url(${(props) => props.gallery?.second?.tablet});
    width: 277px;
  }
  @media (min-width: 1440px) {
    background-image: url(${(props) => props.gallery?.second?.desktop});
    width: 445px;
    height: 280px;
  }
`;
export const PhotoThree = styled.div`
  background-image: url(${(props) => props.gallery?.third?.mobile});
  width: 327px;
  height: 368px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;

  @media (min-width: 768px) {
    background-image: url(${(props) => props.gallery?.third?.tablet});
    width: 395px;
    height: 368px;
  }
  @media (min-width: 1440px) {
    background-image: url(${(props) => props.gallery?.third?.desktop});
    width: 635px;
    height: 592px;
  }
`;
export const SimilarProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 11px;
    margin-top: 56px;
  }
  @media (min-width: 1440px) {
    gap: 30px;
    margin-top: 64px;
  }
`;

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
    gap: 10px;
  }
  @media (min-width: 1440px) {
    gap: 30px;
  }
`;
export const HeaderText = styled.h1`
  margin-top: 108px;
  font-family: Manrope;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.8571428656578064px;
  text-align: center;
  color: ${(props) => props.theme.colors.Black};
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 32px;
    letter-spacing: 1.1428571939468384px;
  }
  @media (min-width: 1440px) {
  }
`;
