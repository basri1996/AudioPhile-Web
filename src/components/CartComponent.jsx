import {
  Cart,
  CartDiv,
  CartTitle,
  CartWrapperDiv,
  CheckOutBtn,
  CountBtn,
  CountWrap,
  Images,
  Min,
  Num,
  OpacityDiv,
  Plus,
  Price,
  Remove,
  StyleLink,
  Total,
  TotalPrice,
  TotalWrap,
  TransparentWrapper,
  WhiteCard,
  Wrap,
  WraperMain,
} from "./CartComponentStyles";
import { UseAppContext } from "../context/AppContext";
import { useLocation } from "react-router-dom";

export default function CartComponent() {
  const { cartState, cartDispatch, state, screenWidth } = UseAppContext();

  // this variables are for opacity div
  const location = useLocation().pathname;
  const productPageArraylength = state.filteredByCat.length;

  const height = () => {
    if (location === "/" && screenWidth < 768) {
      return "530%";
    } else if (location === "/" && screenWidth >= 768 && screenWidth<1440){
      return "420%"
    }
  };

  // cart function

  const changeQuantityInCard = (direction, title, price) => {
    const array = [...cartState.cart];
    const Product = cartState.cart.find((el) => el.name === title);
    const index = cartState.cart.findIndex((el) => el.name === title);

    if (direction === "plus") {
      Product.number = Product.number + 1;
      array[index] === Product;
      cartDispatch({
        type: "changeQuantityInCard",
        payload: array,
        direction: direction,
        priceof: parseInt(price),
      });
    } else {
      Product.number = Product.number - 1;
      array[index] === Product;
      cartDispatch({
        type: "changeQuantityInCard",
        payload: array,
        direction: direction,
        priceof: parseInt(price),
      });
    }
    if (Product.number === 0) {
      array.splice(index, 1);
      cartDispatch({ type: "removeProduct", payload: array });
    }
  };

  return (
    <>
      <OpacityDiv
        onClick={() => cartDispatch({ type: "changeVisibility" })}
        height={height}
      />
      <TransparentWrapper>
        <CartWrapperDiv>
          <WhiteCard>
            {cartState.cart.length > 0 && (
              <CartDiv>
                <Cart>CART({cartState.productQuantity})</Cart>
                <Remove onClick={() => cartDispatch({ type: "clearCart" })}>
                  Remove all
                </Remove>
              </CartDiv>
            )}
            {cartState.cart.length === 0 && (
              <h1
                style={{
                  marginTop: 4,
                  textAlign: "center",
                  fontSize: 22,
                  fontFamily: "Manrope",
                }}
              >
                Your cart is empty!
              </h1>
            )}
            {cartState.cart.map((el) => (
              <>
                <WraperMain>
                  <Images src={el.cartPhoto} alt="Photo67"></Images>
                  <CountWrap>
                    <Wrap>
                      <CartTitle>
                        {el.name.split("").length > 12
                          ? el.name.split("").splice(0, 4)
                          : el.name.split("").splice(0, 3)}
                      </CartTitle>
                      <Price>${(el.number * el.price).toLocaleString()}</Price>
                    </Wrap>
                    <CountBtn>
                      <Min
                        onClick={() =>
                          changeQuantityInCard("minus", el.name, el.price)
                        }
                      >
                        -
                      </Min>
                      <Num>{el.number}</Num>{" "}
                      <Plus
                        onClick={() =>
                          changeQuantityInCard("plus", el.name, el.price)
                        }
                      >
                        +
                      </Plus>
                    </CountBtn>
                  </CountWrap>
                </WraperMain>
              </>
            ))}

            {cartState.cart.length > 0 && (
              <TotalWrap>
                <Total>TOTAL</Total>
                <TotalPrice>${cartState.total.toLocaleString()}</TotalPrice>
              </TotalWrap>
            )}
            {cartState.cart.length > 0 && (
              <StyleLink to="/checkoutpage">
                <CheckOutBtn
                  onClick={() => cartDispatch({ type: "changeVisibility" })}
                >
                  CHECKOUT
                </CheckOutBtn>
              </StyleLink>
            )}
          </WhiteCard>
        </CartWrapperDiv>
      </TransparentWrapper>
    </>
  );
}
