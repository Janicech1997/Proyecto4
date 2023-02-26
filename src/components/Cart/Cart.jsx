import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

// Components
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

// Context
import CartContext from "../../context/cartContext";

// Styles
import classes from "./Cart.module.css";

const Cart = () => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const cartContext = useContext(CartContext);

  // Conditional rendering
  if (!cartContext.cartIsOpen) return null;

  const closeCart = () => {
    cartContext.setcartIsOpen(false);
    setIsCheckout(false);
    setDidSubmit(false);
  };

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.cartItems.length > 0;

  const cartItems = cartContext.cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://c0c-react-db-connection-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: userData,
            orderedItems: cartContext.cartItems,
          }),
        }
      );

      if (!response.ok) {
        setIsSubmitting(false);
        throw new Error("Algo salió mal al hacer el pedido!");
      }

      setIsSubmitting(false);
      setDidSubmit(true);
      cartContext.clearCart();
    } catch (error) {
      setSubmitError(error.message);
    }
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={closeCart}>
        Cerrar
      </button>
      {hasItems && (
        <button className={classes["button"]} onClick={orderHandler}>
          Orden
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && cartContext.cartItems.length > 0 && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={closeCart}
          submitError={submitError}
        />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Enviar datos del orden...</p>;

  const didSubmitModalContent = (
    <>
      <p>Pedido realizado exitosamente!</p>
      <div className={classes.actions}>
        <button className={classes["button"]} onClick={closeCart}>
          Cerrar
        </button>
      </div>
    </>
  );

  return (
    <Modal>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

Cart.propTypes = {};

export default Cart;
