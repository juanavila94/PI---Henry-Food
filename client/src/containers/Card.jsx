import React from "react";
import Cards from "../components/Cards";
// import { useSelector} from "react-redux";

const Card = ({ currentRecipes }) => {
  // const recipes = useSelector((state) => state.recipes);//estado global recetas
  // const recipes = [
  //   {"id":782585,
  //   "title":"Cannellini Bean and Asparagus Salad with Mushrooms",
  //   "image":"https://spoonacular.com/recipeImages/782585-312x231.jpg",
  //   "imageType":"jpg"},
  //   {"id":716426,"title":"Cauliflower, Brown Rice, and Vegetable Fried Rice","image":"https://spoonacular.com/recipeImages/716426-312x231.jpg","imageType":"jpg"},
  //   {"id":715497,"title":"Berry Banana Breakfast Smoothie","image":"https://spoonacular.com/recipeImages/715497-312x231.jpg","imageType":"jpg"},
  //   {"id":715415,"title":"Red Lentil Soup with Chicken and Turnips","image":"https://spoonacular.com/recipeImages/715415-312x231.jpg","imageType":"jpg"},
  //   {"id":716406,"title":"Asparagus and Pea Soup: Real Convenience Food","image":"https://spoonacular.com/recipeImages/716406-312x231.jpg","imageType":"jpg"},{"id":644387,"title":"Garlicky Kale","image":"https://spoonacular.com/recipeImages/644387-312x231.jpg","imageType":"jpg"},{"id":715446,"title":"Slow Cooker Beef Stew","image":"https://spoonacular.com/recipeImages/715446-312x231.jpg","imageType":"jpg"},{"id":782601,"title":"Red Kidney Bean Jambalaya","image":"https://spoonacular.com/recipeImages/782601-312x231.jpg","imageType":"jpg"},{"id":795751,"title":"Chicken Fajita Stuffed Bell Pepper","image":"https://spoonacular.com/recipeImages/795751-312x231.jpg","imageType":"jpg"},{"id":766453,"title":"Hummus and Za'atar","image":"https://spoonacular.com/recipeImages/766453-312x231.jpg","imageType":"jpg"},{"id":716627,"title":"Easy Homemade Rice and Beans","image":"https://spoonacular.com/recipeImages/716627-312x231.jpg","imageType":"jpg"},{"id":664147,"title":"Tuscan White Bean Soup with Olive Oil and Rosemary","image":"https://spoonacular.com/recipeImages/664147-312x231.jpg","imageType":"jpg"},{"id":640941,"title":"Crunchy Brussels Sprouts Side Dish","image":"https://spoonacular.com/recipeImages/640941-312x231.jpg","imageType":"jpg"},{"id":715495,"title":"Turkey Tomato Cheese Pizza","image":"https://spoonacular.com/recipeImages/715495-312x231.jpg","imageType":"jpg"},{"id":794349,"title":"Broccoli and Chickpea Rice Salad","image":"https://spoonacular.com/recipeImages/794349-312x231.jpg","imageType":"jpg"},{"id":716381,"title":"Nigerian Snail Stew","image":"https://spoonacular.com/recipeImages/716381-312x231.jpg","imageType":"jpg"},{"id":660306,"title":"Slow Cooker: Pork and Garbanzo Beans","image":"https://spoonacular.com/recipeImages/660306-312x231.jpg","imageType":"jpg"},{"id":756814,"title":"Powerhouse Almond Matcha Superfood Smoothie","image":"https://spoonacular.com/recipeImages/756814-312x231.jpg","imageType":"jpg"},{"id":715769,"title":"Broccolini Quinoa Pilaf","image":"https://spoonacular.com/recipeImages/715769-312x231.jpg","imageType":"jpg"},{"id":642129,"title":"Easy To Make Spring Rolls","image":"https://spoonacular.com/recipeImages/642129-312x231.jpg","imageType":"jpg"},{"id":642605,"title":"Farro With Mushrooms and Asparagus","image":"https://spoonacular.com/recipeImages/642605-312x231.jpg","imageType":"jpg"},{"id":636589,"title":"Butternut Squash Frittata","image":"https://spoonacular.com/recipeImages/636589-312x231.jpg","imageType":"jpg"}]


  return (
    <div>
      {currentRecipes?.map((r) => {
        return (
          <Cards
            key={r.id}
            name={r.name}
            image={r.image}
            // diets={r.diets}
          />
        );
      })}
    </div>
  );
};

export default Card;
