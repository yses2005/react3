async function fetchDogs({
  limit = 10,
  page = 0,
  order = "ASC", //ASC or DSC
  size = "lrg", //"small" or "med" or "lar"
} = {}) {
  const response = await fetch(
    `https://api.thedogapi.com/v1/images/search?limit=${limit}&page=${page}&order=${order}&size=${size}`
  );
  const responseJSON = await response.json();
  return responseJSON;
}

export default fetchDogs;
