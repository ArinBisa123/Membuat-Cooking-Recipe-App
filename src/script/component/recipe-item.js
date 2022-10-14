class RecipeItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  set recipe(recipe) {
    this._recipe = recipe;
    this.render();
  }
  render() {
    this.shadowDOM.innerHTML = `
    <style>
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }
      :host {
        display: block;
        margin-bottom: 18px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
      }
      
      .recipe-info {
        padding: 24px;
      }
      
      .recipe-info > h2 {
        font-weight: lighter;
      }
      
      .recipe-info > p {
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10; /* number of lines to show */
      }
      </style>
      <div class="recipe-info">
        <h2>${this._recipe.strMeal}</h2>
        <p>${this._recipe.strInstructions}</p>
      </div>
    `;
  }
}
customElements.define("recipe-item", RecipeItem);

