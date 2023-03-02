import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderCartButton from "../Layout/HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import CartContext from "../../context/cartContext";

const Header = () => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

  const cartContext = useContext(CartContext);

  const showCart = () => {
    cartContext.setcartIsOpen(true);
  };

  useEffect(() => {
    // Only execute this if there's at least one item in the cart.
    if (cartContext.cartItems.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    // Remove animation class (bump) after 300ms.
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // Cleanup function to clear the timer.
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.cartItems]);

  return (
    <>
      <header className={classes.header}>
        <h1>ZEN WEI</h1>
        <button className={classes.btnClasses} >
          <Link to="/">
            <span className={classes.label} >Inicio</span>
          </Link>
        </button>
        <button className={classes.btnClasses} >
          <Link to="/menu">Menu</Link>
        </button>
        <button className={classes.btnClasses} >
          <Link to="/contacto">Contacto</Link>
        </button>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
