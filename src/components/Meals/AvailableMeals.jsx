import { useEffect, useState } from "react";

import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const data = {
        "m1": { "description": "Patatas con verduras", "name": "Papas fritas", "price": 4.50 },
        "m2": { "description": "Especial de la casa", "name": "Fideos", "price": 4.20 },
        "m3": { "description": "Caldo de verduras", "name": "Sopa de verduras", "price": 3.70 },
        "m4": { "description": "Lasagna de verduras.", "name": "Lasagna", "price": 5.60 },
        "m5": { "description": "Raviolis cocidas a vapor", "name": "Ravioli", "price": 6.50 },
        "m6": { "description": "Plato de papas fritas", "name": "Papas fritas", "price": 5.00 },
        "m7": { "description": "Sopa del dia con plato fuerte", "name": "Almuerzo", "price": 4.50 },
        "m8": { "description": "Pizza de verduras", "name": "Pizza veggie", "price": 3.60 },
        "m9": { "description": "Arroz con sopa", "name": "Chop Suey", "price": 4.20 }
      };
      
      const loadedMeals = [];

      for (const key in data) {
        const meal = {
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        };

        loadedMeals.push(meal);
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Cargando...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.MealsError}>
        <p>{error}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
