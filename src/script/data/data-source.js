// const header = new Headers({ "Access-Control-Allow-Origin": "https://www.themealdb.com/api.php?s=" });
class DataSource {
  static searchFood(keyword) {
    return fetch(`https://www.themealdb.com/api.php/v1/1/search.php?s=${keyword}`, {
      method: "GET",
      // header: header,
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "1",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${keyword}is not found`);
        }
      });
  }
}

export default DataSource;
