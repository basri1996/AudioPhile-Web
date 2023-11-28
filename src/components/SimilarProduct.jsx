import { Btn, Div, MainDiv, StyleLink, Title } from "./SimilarProductStyles";
import { UseAppContext } from "../context/AppContext";

const SimilarProduct = ({ photomobile, phototablet, photodesktop, title }) => {
  const { state, UseScreenWidth, dispatch } = UseAppContext();
  const activeProduct = state.data.find((el) => el.name.includes(title));

  return (
    <>
      <MainDiv>
        <Div>
          <UseScreenWidth
            photomobile={photomobile}
            phototablet={phototablet}
            photodesktop={photodesktop}
            widthmobile={"327"}
            heightmobile={"120"}
            widthtablet={"223"}
            heighttablet={"318"}
            widthdesktop={"350"}
            heightdesktop={"318"}
          />
        </Div>
        <Title>{title}</Title>
        <StyleLink to={`/productdetail/${activeProduct.id}`}>
          <Btn
            onClick={() => {
              dispatch({ type: "activeProduct", payload: activeProduct.id });
            }}
          >
            SEE PRODUCT
          </Btn>
        </StyleLink>
      </MainDiv>
    </>
  );
};

export default SimilarProduct;
