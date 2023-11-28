import {
  Container,
  Div,
  DivWraper,
  Image,
  ImageDesktop,
  ImageTablet,
  Paragraph,
  ParagraphTablet,
  Title,
  TitleTablet,
} from "./BeforeFooterStyles";

import boy from "../../public/assets/shared/mobile/image-best-gear.jpg";
import boyTablet from "../../public/assets/shared/tablet/image-best-gear.jpg";
import boyDesktop from "../../public/assets/shared/desktop/image-best-gear.jpg";

const BeforeFooter = () => {
  return (
    <DivWraper>
      <Div>
        <Image src={boy} />
        <ImageTablet src={boyTablet} />
        <ImageDesktop src={boyDesktop} />
        <Container>
          <Title>
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </Title>
          <Paragraph>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Paragraph>
        </Container>
        <TitleTablet>
          BRINGING YOU THE <span>BEST</span> AUDIO GEAR
        </TitleTablet>
        <ParagraphTablet>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </ParagraphTablet>
      </Div>
    </DivWraper>
  );
};

export default BeforeFooter;
