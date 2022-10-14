class DataSource {
  static searchFood(keyword) {
    return fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.foods) {
          return Promise.resolve(responseJson.foods);
        } else {
          return Promise.reject(`${keyword}is not found`);
        }
      });
  }
}
export default DataSource;
