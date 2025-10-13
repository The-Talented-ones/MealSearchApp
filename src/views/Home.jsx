import Mainlayouts from "../layouts/Mainlayouts";   
import Button from "../components/Button";
import Alert from "../components/Alert";
import MealCard from "../components/MealCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import LoadIndicator from "../components/LoadIndicator";
import { useState, useEffect } from "react";
import Logout from "../components/Logout"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Use Vite env variable

const Home = () => {
      let [search, setSearch] = useState("");
  let [meals, setMeals] = useState([]);
  let [error, setError] = useState(""); // State for error messages
  let [heading, setHeading] = useState("Random Meals");
  let [loading, setLoading] = useState(false);

  const [alertVisibile, setAlertVisibility] = useState(false);

  const fetchRandomMeals = async () => {
    let randomMeals = [];
    setError("");
    setLoading(true);
    for (let i = 0; i < 6; i++) {
      try {
        const response = await fetch(
          `${API_BASE_URL}/random.php`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch random meal");
        }
        const data = await response.json();
        if (data.meals && data.meals.length > 0) {
          randomMeals.push(data.meals[0]);
        }
      } catch (error) {
        setError("Error fetching random meals. Please try again later.");
        break;
      }
    }
    setMeals(randomMeals);
    setLoading(false);
  };

  // Fetch 6 random meals on mount
  useEffect(() => {
    fetchRandomMeals();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setHeading("Random Meals");
      fetchRandomMeals();
      return;
    }
    setError(""); // Clear previous errors
    setMeals([]);
    setLoading(true);
    try {
      const url = `${API_BASE_URL}/search.php?s=${query}`;
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch meals");
          }
          return response.json();
        })
        .then((data) => {
          setHeading(`Search results for "${query}"`);
          setMeals(data.meals || []);
          setLoading(false);
          if (!data.meals) {
            setError("No meals found for your search.");
          }
        })
        .catch((error) => {
          setError("Error fetching meals. Please try again later.");
          setLoading(false);
        });
    } catch (error) {
      setError("Error fetching meals. Please try again later.");
      setLoading(false);
    }
  };
  return (
    <>
      <Header />
      <SearchForm
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <h2 className="fs-2 fw-2 mb-4">{heading}</h2>
      {error && (
        <div className="text-center my-3">
          <span style={{ color: "red" }}>{error}</span>
        </div>
      )}
      {loading && <LoadIndicator />}
      {!loading && meals.length === 0 && !error && (
        <p className="text-center">
          No meals found. Try searching for something else.
        </p>
      )}

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

      {/* {alertVisibile && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)} color="success">
        My Button
      </Button> */}
      <Logout />

      <Footer />
    </>
  )
}

export default Home
