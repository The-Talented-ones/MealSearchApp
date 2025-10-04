import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadIndicator from "../components/LoadIndicator";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Ingredients = () => {
  const [error, setError] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const heading = "Ingredients";

  const fetchIngredients = async () => {
    setError("");
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/list.php?i=list`);
      const data = await response.json();
      setIngredients(data.meals || []);
      setLoading(false);
    } catch (error) {
      setError("Error fetching ingredients. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <>
      <Header />
      <div className="p-4 text-light text-center">
        <h2 className="fs-2 fw-2 mb-4 text-black">{heading}</h2>
        {error && (
          <div className="text-center my-3">
            <span style={{ color: "red" }}>{error}</span>
          </div>
        )}
        {loading && <LoadIndicator />}
        {!loading && ingredients.length === 0 && !error && (
          <p className="text-center">No ingredients found. Try again later.</p>
        )}

        <div className="container my-4">
          <div className="row">
            {ingredients.map((ingredient) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                key={ingredient.idIngredient}
              >
                <Card>
                  <Link
                    to={`/meals-by-ingredient/${encodeURIComponent(
                      ingredient.strIngredient
                    )}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h2 style={{ color: "#222" }}>{ingredient.strIngredient}</h2>
                    <p style={{ color: "#333" }}>
                      {ingredient.strDescription?.slice(0, 100) ||
                        "No description."}
                    </p>
                  </Link>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ingredients;
