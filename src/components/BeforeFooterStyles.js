import styled from "styled-components";

export const DivWraper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 1440px) {
    padding: 122px 0;
  }
`;
export const Div = styled.div`
  width: 327px;
  height: 940px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.White};

  @media (min-width: 768px) {
    width: 100%;
    height: 766px;
  }

  @media (min-width: 1440px) {
    width: 1110px;
    height: 588px;
    flex-direction: row-reverse;
    gap: 125px;
  }
`;
export const Image = styled.img`
  width: 327px;
  height: 300px;
  border-radius: 8px;

  @media (min-width: 768px) {
    display: none;
  }
`;
export const ImageTablet = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
    margin: 39px;
    border-radius: 8px;
    margin-left: 39px;
    margin-right: 40px;
    width: 689px;
    height: 300px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;
export const ImageDesktop = styled.img`
  display: none;
  @media (min-width: 1440px) {
    display: inline-block;
    border-radius: 8px;
    width: 540px;
    height: 588px;
  }
`;
export const Title = styled.h1`
  span {
    color: orange;
  }
  font-family: "Manrope", sans-serif;
  font-size: 28px;
  margin-top: 32px;
  text-align: center;

  @media (min-width: 768px) {
    width: 573px;
    height: 88px;
    font-size: 40px;
  }

  @media (min-width: 1440px) {
    width: 445px;
    text-align: left;
  }
`;
export const TitleTablet = styled(Title)`
  @media (min-width: 1440px) {
    display: none;
  }
`;
export const Paragraph = styled.p`
  font-size: 15px;
  color: black;
  font-family: "Manrope", sans-serif;
  margin-top: 32px;
  text-align: center;
  opacity: 50%;

  @media (min-width: 768px) {
    width: 573px;
    height: 150px;
  }
  @media (min-width: 1440px) {
    width: 445px;
    height: 175px;
    text-align: left;
  }
`;
export const ParagraphTablet = styled(Paragraph)`
  @media (min-width: 1440px) {
    display: none;
  }
`;
export const Container = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
