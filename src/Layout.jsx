import { Outlet } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import CartProvider from './context/CartProvider';
import Cart from "./components/Cart/Cart";

const Layout = () => (
  <>
    <CartProvider>
      <Header />
      <Cart />
      <Outlet />
      <Footer />
    </CartProvider>
  </>
);

export default Layout;