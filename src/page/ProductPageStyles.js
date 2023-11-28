import styled from "styled-components";

export const DivTitle = styled.div`
  height: 102px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.Black};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    height: 246px;
  }

  @media (min-width: 1440px) {
    height: 239px;
  }
`;

export const Title = styled.h1`
  font-family: Manrope;
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 2px;
  text-align: center;
  color: ${(props) => props.theme.colors.White};
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.4285714626312256px;
    text-align: center;
  }
`;
export const ProductMapDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 70px;
  margin-top: 70px;
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
