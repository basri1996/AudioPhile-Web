import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Routes, Route, useLocation } from "react-router-dom";
import { defaultTheme } from "./defaultTheme";
import { Helmet } from "react-helmet";
import { UseAppContext } from "./context/AppContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetail from "./page/ProductDetail";
import Home from "./page/Home";
import ProductPage from "./page/ProductPage";
import CheckOutPage from "./page/CheckOutPage";
import CartComponent from "./components/CartComponent";
import { Toaster } from 'react-hot-toast';


function App() {
  const{cartState}=UseAppContext()
  const location=useLocation()
  

  
  return (
   
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "95px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "green",
          },
        }}
      />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Poppins:wght@400;600;700&family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      
        <Header />
        {cartState.visible & !location.pathname.includes("/checkoutpage") ?<CartComponent/>:null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productpage/:cat" element={<ProductPage />} />
          <Route path="/productdetail/:id" element={<ProductDetail />}/>
          <Route path="/checkoutpage" element={<CheckOutPage />}/>
        </Routes>
        <Footer />
       
    </ThemeProvider>
    
  );
}

export default App;




