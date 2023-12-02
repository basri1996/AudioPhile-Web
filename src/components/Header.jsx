import {
  AudioPhile,
  AudioPhileDiv,
  AudioPhileDivMobile,
  AudioPhileMobile,
  Div,
  EarPhones,
  HeadPhones,
  Home,
  Line,
  MappedDiv,
  MenuDiv,
  RectangleDiv,
  RectangleDivMobile,
  RectangleImage,
  RectangleImageMobile,
  Shape,
  ShapeDiv,
  Speakers,
  StyleLink,
  Wrapper,
  WrapperTablet,
} from "./HeaderStyles";
import { UseAppContext } from "../context/AppContext";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import rectangle from "../images/Rectangle.png";
import audiophile from "../images/audiophile.png";
import shape from "../images/Shape .png";
import ShopItem from "./ShopItem";

function Header() {
  const { cartDispatch, icons } = UseAppContext();
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const locationpath = location.pathname.includes("/productpage").toString();

  const navigateTo = (cat) => {
    navigate(`/productpage/${cat}`);
    cartDispatch({ type: "visibleFalse" });
  };

  return (
    <>
      <Wrapper locationpath={locationpath}>
        <Div locationpath={locationpath}>
          <RectangleDivMobile
            onClick={() => {
              setMenuVisible(!menuVisible),
                cartDispatch({ type: "visibleFalse" });
            }}
          >
            <RectangleImageMobile src={rectangle} />
            <RectangleImageMobile src={rectangle} />
            <RectangleImageMobile src={rectangle} />
          </RectangleDivMobile>
          <StyleLink to="/">
            <AudioPhileDivMobile>
              <AudioPhileMobile src={audiophile} />
            </AudioPhileDivMobile>
          </StyleLink>
          <WrapperTablet>
            <RectangleDiv
              onClick={() => {
                setMenuVisible(!menuVisible),
                  cartDispatch({ type: "visibleFalse" });
              }}
            >
              <RectangleImage src={rectangle} />
              <RectangleImage src={rectangle} />
              <RectangleImage src={rectangle} />
            </RectangleDiv>
            <AudioPhileDiv>
              <StyleLink to="/">
                <AudioPhile src={audiophile} />
              </StyleLink>
            </AudioPhileDiv>
          </WrapperTablet>
          <MenuDiv>
            <StyleLink to="/">
              <Home>HOME</Home>
            </StyleLink>
            <HeadPhones
              onClick={(e) => {
                navigateTo(e.target.innerText);
              }}
            >
              HEADPHONES
            </HeadPhones>
            <Speakers
              onClick={(e) => {
                navigateTo(e.target.innerText);
              }}
            >
              SPEAKERS
            </Speakers>

            <EarPhones
              onClick={(e) => {
                navigateTo(e.target.innerText);
              }}
            >
              EARPHONES
            </EarPhones>
          </MenuDiv>
          <ShapeDiv
            onClick={() => {
              !location.pathname.includes("/checkoutpage") &&
                cartDispatch({ type: "changeVisibility" });
              setMenuVisible(false);
            }}
          >
            <Shape src={shape} />
          </ShapeDiv>
        </Div>
        <Line />
      </Wrapper>
      {menuVisible && (
        <MappedDiv>
          {icons.map((icon) => (
            <ShopItem setMenuVisible={setMenuVisible}title={icon.title} icon={icon.icon} key={icon.title} />
          ))}
        </MappedDiv>
      )}
    </>
  );
}

export default Header;
