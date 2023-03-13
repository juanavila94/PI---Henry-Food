import React from "react";
import Card from "../../containers/Card/Card";
import Paginate from "../../containers/Paginate/Paginate";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes); //estado global recetas

  //   paginado
  const [currentPage, setCurrentPage] = useState(1); // pagina actual
  const recipesPerPage = 9; // cantidad de recetas que necesito
  const lastRecipe = currentPage * recipesPerPage;
  const firstRecipe = lastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(firstRecipe, lastRecipe);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Paginate
          recipesPerPage={recipesPerPage}
          recipes={recipes.length}
          paginate={paginate}
        />
        filtros filtro origen
        <select>
          <option value='api'>API</option>
          <option value='db'>Base de Datos</option>
        </select>
        <select>
          <option value=''>tipos de dietas</option>
        </select>
        orden alfabetico
        <select>
          {" "}
          a-z
          <option value='asc'>ASCENDENTE</option>
          <option value='des'>DESCENDENTE</option>
        </select>
        <select>
          <option value=''>health score</option>
        </select>
        <Card currentRecipes={currentRecipes} />
      </div>
    </div>
  );
};

export default Home;
