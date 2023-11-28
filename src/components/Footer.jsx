import {
  Audiophile,
  Container,
  Container1,
  DeskImg,
  DeskPages,
  DeskWrapper,
  DeskWrapper1,
  DeskWrapper2,
  Icon,
  Line,
  Pages,
  PagesWrapper,
  Parag,
  Paragraph,
  StyleLink,
  Text,
  Wrapper,
  Wrapper1,
} from "./FooterStyles";
import audiophile from "../images/audiophile.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import insta from "../images/instagram.png";

export default function Footer() {
  return (
    <>
      <Container>
        <Line></Line>
        <Audiophile src={audiophile}></Audiophile>
        <PagesWrapper>
          <StyleLink to="/">
            {" "}
            <Pages>HOME</Pages>
          </StyleLink>
          <StyleLink to="/productpage/HEADPHONES">
            <Pages>HEADPHONES</Pages>
          </StyleLink>
          <StyleLink to="/productpage/SPEAKERS">
            {" "}
            <Pages>SPEAKERS</Pages>
          </StyleLink>
          <StyleLink to="/productpage/EARPHONES">
            <Pages>EARPHONES</Pages>
          </StyleLink>
        </PagesWrapper>

        <Paragraph>
          Audiophile is an all in one stop to fulfill your audio needs. We are a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we are open 7 days a week.
        </Paragraph>
        <Wrapper1>
          <Parag>Copyright 2021. All Rights Reserved</Parag>
          <Wrapper>
            <Icon src={facebook}></Icon>
            <Icon src={twitter}></Icon>
            <Icon src={insta}></Icon>
          </Wrapper>
        </Wrapper1>
      </Container>

      <Container1>
        <Line></Line>
        <DeskWrapper>
          <StyleLink to="/">
            <DeskImg src={audiophile}></DeskImg>
          </StyleLink>
          <DeskWrapper1>
            <StyleLink to="/">
              <DeskPages>Home</DeskPages>
            </StyleLink>
            <StyleLink to="/productpage/HEADPHONES">
              <DeskPages>HEADPHONES</DeskPages>
            </StyleLink>
            <StyleLink to="/productpage/SPEAKERS">
              <DeskPages>SPEAKERS</DeskPages>
            </StyleLink>
            <StyleLink to="/productpage/EARPHONES">
              <DeskPages>EARPHONES</DeskPages>
            </StyleLink>
          </DeskWrapper1>
        </DeskWrapper>
        <DeskWrapper2>
          <Paragraph>
            Audiophile is an all in one stop to fulfill your audio needs. We are
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we are open 7 days a week.
          </Paragraph>
          <Wrapper>
            <Icon src={facebook}></Icon>
            <Icon src={twitter}></Icon>
            <Icon src={insta}></Icon>
          </Wrapper>
        </DeskWrapper2>
        <Text>Copyright 2021. All Rights Reserved</Text>
      </Container1>
    </>
  );
}
