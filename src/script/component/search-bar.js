class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  //sebuah event untuk button
  set buttonClick(event) {
    this._buttonClick = event;
    this.render();
  }
  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }
  render() {
    this.shadowDOM.innerHTML = `
      <style>
      .search-container {
        max-width: 800px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 16px;
        border-radius: 5px;
        display: flex;
        position: sticky;
        top: 10px;
        background-color: white;
      }
      
      .search-container > input {
        width: 75%;
        padding: 16px;
        border: 0;
        border-bottom: 1px solid rgb(255, 148, 148);
        font-weight: bold;
      }
      
      .search-container > input:focus {
        outline: 0;
        border-bottom: 2px solid rgb(255, 148, 148);
      }
      
      .search-container > input:focus::placeholder {
        font-weight: bold;
      }
      
      .search-container > input::placeholder {
        color: rgb(255, 148, 148);
        font-weight: normal;
      }
      
      .search-container > button {
        width: 23%;
        cursor: pointer;
        margin-left: auto;
        padding: 16px;
        background-color: rgb(255, 209, 209);
        color: white;
        border: 0;
        text-transform: uppercase;
        
      }
      .search-container > button:hover {
        font-weight: bold;
        background-color: rgb(255, 148, 148);
      }
      
      @media screen and (max-width: 550px) {
        .search-container {
          flex-direction: column;
          position: static;
        }
      
        .search-container > input {
          width: 100%;
          margin-bottom: 12px;
        }
      
        .search-container > button {
          width: 100%;
        }
      }
      </style>
      <div id="search-container" class="search-container">
          <input placeholder="What Do You Want To Cook?" id="searchElement" type="search" />
          <button id="searchButtonElement" type="submit">Search</button>
      </div>
        `;
    this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._buttonClick);
  }
}
customElements.define("search-bar", SearchBar);
