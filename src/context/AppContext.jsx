import styled from "styled-components";
import {
  useContext,
  useReducer,
  createContext,
  useState,
  useEffect,
} from "react";
import data from "../data/data.json";
import icon1 from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import icon2 from "../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import icon3 from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";

const AppContext = createContext();

const initialState = {
  data: [...data],
  filteredByCat: [],
  activeProduct: {},
};
const cartInitialState = {
  cart: [],
  productQuantity: 0,
  total: 0,
  visible: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "filterByCategory":
      return {
        ...state,
        filteredByCat: state.data.filter((el) =>
          el.category.includes(action.payload.toLowerCase())
        ),
      };
    case "activeProduct":
      return {
        ...state,
        activeProduct: state.data.find((item) => item.id == action.payload),
      };
    default:
      return state;
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        productQuantity: state.productQuantity + action.payload.number,
        total: state.total + action.payload.price * action.payload.number,
        visible: true,
      };
    case "changeQuantity":
      return {
        ...state,
        cart: state.cart.map((el) =>
          el.name === action.payload
            ? { ...el, number: el.number + action.quantity }
            : el
        ),
        productQuantity: state.productQuantity + action.quantity,
        total: state.total + action.quantity * action.price,
        visible: true,
      };
    case "changeVisibility":
      return {
        ...state,
        visible: state.visible ? false : true,
      };
      case "visibleFalse":
        return{
          ...state,
          visible:false
        }
    case "clearCart":
      return {
        ...state,
        cart: [],
        visible: false,
        productQuantity: 0,
        total: 0,
      };
    case "changeQuantityInCard":
      return {
        ...state,
        cart: [...action.payload],
        productQuantity:
          action.direction === "plus"
            ? state.productQuantity + 1
            : state.productQuantity - 1,
        total:
          action.direction === "plus"
            ? state.total + action.priceof
            : state.total - action.priceof,
      };
    case "removeProduct":
      return {
        ...state,
        cart: action.payload && [...action.payload],
      };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);
  const [mappedCategories, setMappedCategories] = useState([]);
  const [screenWidth, setScreenWidth] = useState(0);
  
  
 

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    setScreenWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const UseScreenWidth = ({
    photomobile,
    phototablet,
    photodesktop,
    widthmobile,
    heightmobile,
    widthtablet,
    heighttablet,
    widthdesktop,
    heightdesktop,
  }) => {
    const screenW = screenWidth;

    let renderedImage;
    if (screenW < 768) {
      renderedImage = photomobile;
    } else if (screenW >= 768 && screenW < 1440) {
      renderedImage = phototablet;
    } else {
      renderedImage = photodesktop;
    }
    return (
      <Photo
        widthmobile={widthmobile}
        heightmobile={heightmobile}
        widthtablet={widthtablet}
        heighttablet={heighttablet}
        widthdesktop={widthdesktop}
        heightdesktop={heightdesktop}
        src={renderedImage}
      ></Photo>
    );
  };
  const icons = [
    { title: "HEADPHONES", icon: icon1 },
    { title: "SPEAKERS", icon: icon2 },
    { title: "EARPHONES", icon: icon3 },
  ];

  return (
    <AppContext.Provider
      value={{
        dispatch,
        mappedCategories,
        setMappedCategories,
        state,
        UseScreenWidth,
        cartDispatch,
        cartState,
        icons,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const UseAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("You are outside of app-context");
  }
  return context;
};

const Photo = styled.img`
  width: ${(props) => props.widthmobile}px;
  height: ${(props) => props.heightmobile}px;
  border-radius: 8px;
  @media (min-width: 768px) {
    height: ${(props) => props.heighttablet}px;
    width: ${(props) => props.widthtablet}px;
  }
  @media (min-width: 1440px) {
    height: ${(props) => props.heightdesktop}px;
    width: ${(props) => props.widthdesktop}px;
  }
`;
