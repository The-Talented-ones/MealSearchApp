import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadIndicator from "../components/LoadIndicator";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMeal = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
        const data = await response.json();
        setMeal(data.meals ? data.meals[0] : null);
      } catch {
        setError("Failed to fetch meal details.");
      }
      setLoading(false);
    };
    fetchMeal();
  }, [id]);

  return (
    <>
      <Header />
      <div className="p-4 w-50 mx-auto border border-success rounded-3 py-4 my-4">
        {loading && <LoadIndicator />}
        {error && <div style={{ color: "red" }}>{error}</div>}
        {meal && (
          <div>
            <h3>{meal.strMeal}</h3>
            <img
              className="img-fluid w-screen mb-4"
              src={meal.strMealThumb}
              alt={meal.strMeal}
              style={{ maxWidth: 300 }}
            />
            <p>{meal.strInstructions}</p>
            <div>
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        )}
        {!loading && !meal && !error && <div>No meal details found.</div>}
      </div>
      <Footer />
    </>
  );
};

export default MealDetails;
