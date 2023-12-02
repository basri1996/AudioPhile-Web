import {
  Container,
  Div,
  Down,
  Icon,
  More,
  Shop,
  StyleLink,
  Title,
} from "./ShopitemStyles";
import more from "../images/Path 2 (1).png";

function ShopItem({ icon, title,setMenuVisible }) {
  return (
    <Container onClick={()=>setMenuVisible(false)}>
      <Icon src={icon}></Icon>
      <Down>
        <Title>{title}</Title>
        <StyleLink to={`/productpage/${title}`}>
          <Div>
            <Shop>SHOP</Shop>
            <More src={more} />
          </Div>
        </StyleLink>
      </Down>
    </Container>
  );
}

export default ShopItem;
