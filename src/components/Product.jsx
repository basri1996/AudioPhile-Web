import {
  Btn,
  BtnDiv,
  DivWrapper,
  MainDiv,
  New,
  Paragraph,
  Title,
} from "./ProductStyles";
import { useNavigate } from "react-router-dom";
import { UseAppContext } from "../context/AppContext";

const Product = ({
  photomobile,
  phototablet,
  photodesktop,
  name,
  description,
  id,
  newone,
}) => {
  const { UseScreenWidth } = UseAppContext();
  const navigate = useNavigate();

  const navigateTo = (id) => {
    navigate(`/productdetail/${id}`);
  };

  return (
    <MainDiv idnumber={id}>
      <UseScreenWidth
        photomobile={photomobile}
        phototablet={phototablet}
        photodesktop={photodesktop}
        widthmobile={"327"}
        heightmobile={"352"}
        widthtablet={"689"}
        heighttablet={"352"}
        widthdesktop={"540"}
        heightdesktop={"560"}
      />
      <DivWrapper>
        {newone && <New>NEW PRODUCT</New>}
        <Title>{name}</Title>
        <Paragraph>{description}</Paragraph>
        <BtnDiv>
          <Btn
            onClick={() => {
              navigateTo(id);
            }}
          >
            See Product
          </Btn>
        </BtnDiv>
      </DivWrapper>
    </MainDiv>
  );
};

export default Product;
