import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Restaurant Vegetariano Zen Wei</h2>
      <p>
      Visitanos y consume lo mas rico que es la comida vegetariana para una buena salud y buen día.
      </p>
      <p>
      Este restaurante esta ubicado en riobamba en las calles princesa toa 43-29 y calicuchima, ven y visitamos te ofrecemos almuerzos y platos a la carta, postres y platos a tu gusto.
      Todo para una buena salud!!!
      </p>
    </section>
  );
};

export default MealsSummary;
