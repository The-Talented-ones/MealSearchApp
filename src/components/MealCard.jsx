import { Link } from "react-router-dom";

const MealCard = ({ meal }) => (
  <div className="card h-100">
    <Link
      to={`/meal/${meal.idMeal}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{meal.strMeal}</h5>
      </div>
    </Link>
    {meal.strYoutube && (
      <div className="pb-3 bg-transparent text-center">
        <a
          href={meal.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-danger"
        >
          Watch on YouTube
        </a>
      </div>
    )}
  </div>
);

export default MealCard;
