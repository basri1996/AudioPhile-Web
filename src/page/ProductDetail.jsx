import {
  AllWrapper,
  BoxDiv,
  BoxText,
  BoxTitle,
  BoxWrapper,
  Btn,
  BtnDiv,
  Count,
  CountButton,
  DivWrapper,
  FeatureDiv,
  FeatureText,
  FeatureTitle,
  GridWraper,
  HeaderText,
  MainDiv,
  New,
  Paragraph,
  Photo,
  PhotoDiv,
  PhotoOne,
  PhotoThree,
  PhotoTwo,
  Price,
  ShopItemMappedDiv,
  SimilarProductDiv,
  Title,
} from "./ProductDetailStyles";
import SimilarProduct from "../components/SimilarProduct";
import ShopItem from "../components/ShopItem";
import BeforeFooter from "../components/BeforeFooter";
import { useEffect, useState } from "react";
import { UseAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";


const ProductDetail = () => {
  const { id } = useParams();
  const { state, dispatch, cartState, cartDispatch,icons } = UseAppContext();
  const [count, setCount] = useState(1);
  // const renderCountRef = useRef(0);

  // renderCountRef.current += 1;
  // console.log("details page", renderCountRef.current);

  useEffect(() => {
    dispatch({ type: "activeProduct", payload: id });
    setCount(1)
  }, [id, dispatch]);

  function AddToCard(count) {
    const Item = cartState.cart.find(
      (el) => el.name === state.activeProduct?.name
    );
    if (Item) {
      cartDispatch({
        type: "changeQuantity",
        payload: Item.name,
        quantity: count,
        price: state.activeProduct?.price,
      });
    } else {
      cartDispatch({
        type: "addToCart",
        payload: {
          name: state.activeProduct?.name,
          number: count,
          cartPhoto: state.activeProduct?.categoryImage.mobile,
          price: state.activeProduct?.price,
        },
      });
    }
    setCount(1);
  }


  return (
    <AllWrapper>
      <MainDiv>
        <Photo photo={state.activeProduct?.image}></Photo>
        <DivWrapper flexdirection={"column"}>
          {state.activeProduct?.new && <New>NEW PRODUCT</New>}
          <Title>{state.activeProduct?.name}</Title>
          <Paragraph>{state.activeProduct?.description}</Paragraph>
          <Price>${state.activeProduct?.price?.toLocaleString()}</Price>
          <BtnDiv>
            <CountButton>
              <Count
                onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : prev))}
              >
                -
              </Count>
              <Count>{count}</Count>
              <Count onClick={() => setCount((prev) => prev + 1)}>+</Count>
            </CountButton>
            <Btn onClick={() => AddToCard(count)}>ADD TO CARD</Btn>
          </BtnDiv>
        </DivWrapper>
      </MainDiv>
      <DivWrapper flexdirection={"row"}>
        <FeatureDiv>
          <FeatureTitle>FEATURES</FeatureTitle>
          <FeatureText>{state.activeProduct?.features}</FeatureText>
        </FeatureDiv>
        <BoxDiv>
          <BoxTitle>IN THE BOX</BoxTitle>
          <BoxWrapper>
            {state.activeProduct?.includes?.map((item) => (
              <BoxText quantity={item.quantity} key={Math.random()}>
                {item.item}
              </BoxText>
            ))}
          </BoxWrapper>
        </BoxDiv>
      </DivWrapper>
      <PhotoDiv>
        <GridWraper>
          <PhotoOne gallery={state.activeProduct?.gallery}></PhotoOne>
          <PhotoTwo gallery={state.activeProduct?.gallery}></PhotoTwo>
        </GridWraper>
        <PhotoThree gallery={state.activeProduct?.gallery}></PhotoThree>
      </PhotoDiv>
      <HeaderText>you may also like</HeaderText>

      <SimilarProductDiv>
        {state.activeProduct?.others?.map((el) => (
          <SimilarProduct
            title={el.name}
            photomobile={el.image.mobile}
            phototablet={el.image.tablet}
            photodesktop={el.image.desktop}
            key={Math.random()}
          />
        ))}
      </SimilarProductDiv>

      <ShopItemMappedDiv>
        {icons.map((icon) => (
          <ShopItem title={icon.title} icon={icon.icon} key={Math.random()} />
        ))}
      </ShopItemMappedDiv>
      <BeforeFooter />
    </AllWrapper>
  );
};

export default ProductDetail;
