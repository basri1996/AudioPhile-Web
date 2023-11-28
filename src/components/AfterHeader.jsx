import {
  BlackHadPhone,
  Btn,
  Div,
  HadWraper,
  Header,
  HeaderBoldOne,
  MainDiv,
  Paragraph,
  PhotoDesktop,
  StyleLink,
  Wraper,
} from "./AfterHeaderStyles";
import DesktopHad from "../images/xx99-mark-ii-headphones.f7f5fde6090b9f9cfd2ceb115f60aa37.jpg";

const AfterHeader = () => {
  return (
    <MainDiv>
      <PhotoDesktop src={DesktopHad} />
      <BlackHadPhone>
        <Header>NEW PRODUCT</Header>
        <HadWraper>
          <HeaderBoldOne>XX99 MARK II</HeaderBoldOne>
          <HeaderBoldOne>HEADPHONE</HeaderBoldOne>
        </HadWraper>
        <Paragraph>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Paragraph>
        <Wraper>
          <StyleLink to={`/productdetail/${4}`}>
            <Btn>See Product</Btn>
          </StyleLink>
        </Wraper>
      </BlackHadPhone>
      <Div>
        <Header>NEW PRODUCT</Header>
        <HadWraper>
          <HeaderBoldOne>XX99 MARK II</HeaderBoldOne>
          <HeaderBoldOne>HEADPHONE</HeaderBoldOne>
        </HadWraper>
        <Paragraph>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Paragraph>
        <Wraper>
          <StyleLink to={`/productdetail/${4}`}>
            <Btn>See Product</Btn>
          </StyleLink>
        </Wraper>
      </Div>
    </MainDiv>
  );
};
export default AfterHeader;
