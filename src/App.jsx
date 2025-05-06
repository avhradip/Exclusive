import React, { createContext } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { FaArrowUpLong } from "react-icons/fa6";

import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp";
import Navbar from "./Components/Navbar/Navbar";
import Error from "./Pages/Error/Error";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Cart from "./Pages/Cart/Cart";
import Header from "./Components/Header/Header";
import Profile from "./Pages/Profile/Profile";
import Order from "./Pages/Order/Order";
import Cancellations from "./Pages/Cancellations/Cancellations";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Components/Footer/Footer";
import Detailspage from "./Components/Detailspage/Detailspage";
import Checkout from "./Pages/Checkout/Checkout";
import Provider from "./Components/Provider/Provider";
import Allproducts from "./Components/Allproducts/Allproducts";
import CategorieByProduct from "./Pages/ProductByCategorie/CategorieByProduct";
import Search from "./Pages/Search/Search";

import { Provider as ReduxProvider } from "react-redux";
import Store from "./Redux/Store";

import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary"; // Adjust path as needed

export const CardData = createContext(null);

// ScrollToTop component (not doing anything currently)
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Provider>
      <ReduxProvider store={Store}>
        <Router>
          <ScrollToTop />
          <Header />
          <Navbar />
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/order" element={<Order />} />
              <Route path="/cancellations" element={<Cancellations />} />
              <Route path="/detailspage/:id" element={<Detailspage />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/categoriebyproduct" element={<CategorieByProduct />} />
              <Route path="/allproducts" element={<Allproducts />} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </ErrorBoundary>

          <button
            className="p-5 bg-blue-400 rounded-full"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              cursor: "pointer",
            }}
          >
            <FaArrowUpLong style={{ color: "blue" }} />
          </button>

          <Footer />
        </Router>
      </ReduxProvider>
    </Provider>
  );
};

export default App;
