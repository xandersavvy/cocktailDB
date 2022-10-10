const fetchCocktail = async (searchString = "a", searchTerm = "f") => {
  let uri = `https://www.thecocktaildb.com/api/json/v1/1/search.php?${searchTerm}=${searchString}`;
  try {
    let res = await fetch(uri);
    let data = await res.json();
    console.log(uri);
    console.log(data.drinks);
    return data.drinks;
  } catch (err) {
    console.error(err);
    return "";
  }
};

export default fetchCocktail;
