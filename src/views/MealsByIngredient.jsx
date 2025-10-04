import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadIndicator from "../components/LoadIndicator";
import MealCard from "../components/MealCard";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const MealsByIngredient = () => {
  const { ingredient } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `${API_BASE_URL}/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        const basicMeals = data.meals || [];

        // Fetch details for each meal to get strYoutube
        const detailedMeals = await Promise.all(
          basicMeals.map(async (meal) => {
            const res = await fetch(
              `${API_BASE_URL}/lookup.php?i=${meal.idMeal}`
            );
            const detailData = await res.json();
            return detailData.meals ? detailData.meals[0] : meal;
          })
        );

        setMeals(detailedMeals);
      } catch {
        setError("Failed to fetch meals.");
      }
      setLoading(false);
    };
    if (ingredient) fetchMeals();
  }, [ingredient]);

  return (
    <>
      <Header />
      <div className="p-4 text-center">
        <h2 className="mb-4">Meals with "{ingredient}"</h2>
        {loading && <LoadIndicator />}
        {error && <div style={{ color: "red" }}>{error}</div>}
        <div className="container my-4">
          <div className="row">
            {meals.map((meal) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                key={meal.idMeal}
              >
                <MealCard meal={meal} />
              </div>
            ))}
          </div>
        </div>
        {!loading && meals.length === 0 && !error && (
          <div>No meals found for this ingredient.</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MealsByIngredient;
