import React from "react";
import Cards from "../../components/Cards/Cards";
// import { useSelector} from "react-redux";

const recipes = [
  {"id":782585,
  "title":"Cannellini Bean and Asparagus Salad with Mushrooms",
  "image":"https://spoonacular.com/recipeImages/782585-312x231.jpg",
  "imageType":"jpg"},
  {"id":716426,"title":"Cauliflower, Brown Rice, and Vegetable Fried Rice","image":"https://spoonacular.com/recipeImages/716426-312x231.jpg","imageType":"jpg"},
  {"id":715497,"title":"Berry Banana Breakfast Smoothie","image":"https://spoonacular.com/recipeImages/715497-312x231.jpg","imageType":"jpg"},
    {"id":715415,"title":"Red Lentil Soup with Chicken and Turnips","image":"https://spoonacular.com/recipeImages/715415-312x231.jpg","imageType":"jpg"},]

const Card = ({ currentRecipes }) => {
  return (
    <div>
      {recipes?.map((r) => {
        return (
          <Cards
            key={r.id}
            name={r.title}
            image={r.image}
            // diets={r.diets}
          />
        );
      })}
    </div>
  );
};

export default Card;
