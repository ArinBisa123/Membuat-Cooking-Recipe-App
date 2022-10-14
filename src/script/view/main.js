import DataSource from "../data/data-source.js";
import "../component/search-bar.js";
import "../component/recipe-list.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const recipeListElement = document.querySelector("recipe-list");

  const onButtonSearchClicked = (_) => {
    DataSource.searchFood(searchElement.value).then(renderResult).catch(fallbackResult);
  };

  const renderResult = (results) => {
    recipeListElement.recipes = results;
  };

  const fallbackResult = (message) => {
    recipeListElement.renderError(message);
  };

  searchElement.buttonClick = onButtonSearchClicked;
};

export default main;
