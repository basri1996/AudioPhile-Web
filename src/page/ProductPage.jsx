import {
  DivTitle,
  ProductMapDiv,
  ShopItemMappedDiv,
  Title,
} from "./ProductPageStyles.js";
import Product from "../components/Product.jsx";
import ShopItem from "../components/ShopItem.jsx";
import BeforeFooter from "../components/BeforeFooter.jsx";
import { UseAppContext } from "../context/AppContext.jsx";
import { useParams } from "react-router-dom";
import { useEffect} from "react";

function ProductPage() {
  const { cat } = useParams();
  const { state, dispatch, icons } = UseAppContext();

  // const renderCountRef = useRef(0);

  // renderCountRef.current += 1;
  // console.log("productpage", renderCountRef.current);

  useEffect(() => {
    dispatch({ type: "filterByCategory", payload: cat });
  }, [dispatch, cat]);

  return (
    <>
      <DivTitle>
        <Title>{cat}</Title>
      </DivTitle>
      <ProductMapDiv>
        {state.filteredByCat.map((item) => (
          <Product
            photomobile={item.categoryImage.mobile}
            phototablet={item.categoryImage.tablet}
            photodesktop={item.categoryImage.desktop}
            newone={item.new}
            name={item.name}
            description={item.description}
            id={item.id}
            key={item.id}
          />
        ))}
      </ProductMapDiv>
      <ShopItemMappedDiv>
        {icons.map((icon) => (
          <ShopItem title={icon.title} icon={icon.icon} key={icon.title} />
        ))}
      </ShopItemMappedDiv>
      <BeforeFooter />
    </>
  );
}

export default ProductPage;
