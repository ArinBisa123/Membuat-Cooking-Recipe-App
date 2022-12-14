import "./recipe-item";

class RecipeList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  set recipes(recipes) {
    this._recipes = recipes;
    this.render();
  }
  //fungsi untuk menangani kegagalan hasil pencarian
  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
      .placeholder {
        font-weight: lighter;
        color: rgba(0, 0, 0, 0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      </style>
      `;
      this.shadowDOM.innerHTML += `<h2 class="placeholder"> ${message}</h2>`;
    }
    render() {
      this.shadowDOM.innerHTML = "";
      this._recipes.forEach((recipe) => {
        const recipeItemElement = document.createElement("recipe-item");
        recipeItemElement.recipe= recipe;
      this.shadowDOM.appendChild(recipeItemElement);
    });
  }
}
customElements.define("recipe-list", RecipeList);

