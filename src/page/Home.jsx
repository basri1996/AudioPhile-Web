import {
  But,
  Butt,
  Circle1,
  Circle2,
  Circle3,
  Container,
  Div,
  Div1,
  EarPhoneh1,
  FirstCard,
  ForthCard,
  Img,
  Img1,
  MainText,
  Para,
  SecondCard,
  ShopItemMappedDiv,
  StyleLink,
  ThirdCard,
} from "./HomeStyles";
import AfterHeader from "../components/AfterHeader";
import BeforeFooter from "../components/BeforeFooter";
import ShopItem from "../components/ShopItem";
import img2 from "../../public/assets/home/mobile/image-speaker-zx9.png";
import img5 from "../../public/assets/home/desktop/image-speaker-zx9.png";
import { UseAppContext } from "../context/AppContext";
// import { useRef } from "react";

function Home() {
  const { icons } = UseAppContext();
  // const renderCountRef = useRef(0);

  // renderCountRef.current += 1;
  // console.log("home", renderCountRef.current);

  return (
    <>
      <AfterHeader />
      <ShopItemMappedDiv>
        {icons.map((icon) => (
          <ShopItem title={icon.title} icon={icon.icon} key={icon.title} />
        ))}
      </ShopItemMappedDiv>
      <Container>
        <FirstCard>
          <Circle1>
            <Circle2>
              <Circle3></Circle3>
            </Circle2>
          </Circle1>

          <Img src={img2}></Img>
          <Img1 src={img5}></Img1>

          <Div1>
            <MainText>ZX9 SPEAKER</MainText>
            <Para>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Para>
            <StyleLink to={`/productdetail/${6}`}>
              {" "}
              <But>SEE PRODUCT</But>
            </StyleLink>
          </Div1>
        </FirstCard>
        <SecondCard>
          <EarPhoneh1>ZX7 SPEAKER</EarPhoneh1>
          <StyleLink to={`/productdetail/${5}`}>
            {" "}
            <Butt>SEE PRODUCT</Butt>
          </StyleLink>
        </SecondCard>
        <Div>
          <ThirdCard></ThirdCard>
          <ForthCard>
            <EarPhoneh1>YX1 EARPHONES</EarPhoneh1>
            <StyleLink to={`/productdetail/${1}`}>
              <Butt>SEE PRODUCT</Butt>
            </StyleLink>
          </ForthCard>
        </Div>
      </Container>
      <BeforeFooter />
    </>
  );
}

export default Home;
