import React, { useContext, useRef, useState } from "react";
import PropTypes from "prop-types";

// Components
import Input from "../../UI/Input";

// Styles
import classes from "./MealItemForm.module.css";

// Contexts
import CartContext from "../../../context/cartContext.js";

const MealItemForm = ({ meal }) => {
  const cartContext = useContext(CartContext);
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    // Check for input validity
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      // Entered amount is not valid.
      setAmountIsValid(false);
      return;
    }

    const addItemToCart = (amount) => {
      setAmountIsValid(true);
      cartContext.addItemToCart({
        id: meal.id,
        name: meal.name,
        amount: amount,
        price: meal.price,
      });
    };
    addItemToCart(enteredAmountNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Monto"
        input={{
          id: meal.id,
          type: "numb",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit" className={classes.button}>
        + Añadir
      </button>
      {!amountIsValid && <p>Por favor ingrese una cantidad válida (1-5)</p>}
    </form>
  );
};

MealItemForm.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default MealItemForm;
