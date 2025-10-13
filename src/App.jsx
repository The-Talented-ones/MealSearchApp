import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Ingredients from "./views/Ingredients";
import MealDetails from "./views/MealDetails";
import MealsByIngredient from "./views/MealsByIngredient";
import RequireAuth from "./components/RequireAuth";
import Login from "./views/Login";
import Signup from "./views/Signup";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/home"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />

      <Route
        path="/ingredients"
        element={
          <RequireAuth>
            <Ingredients />
          </RequireAuth>
        }
      />

      <Route path="/meal/:id" element={<MealDetails />} />

      <Route
        path="/meals-by-ingredient/:ingredient"
        element={
          <RequireAuth>
            <MealsByIngredient />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
