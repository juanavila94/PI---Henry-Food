import React from "react";
import Cards from "../components/Cards";
// import { useSelector} from "react-redux";

const Card = ({ currentRecipes }) => {


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
