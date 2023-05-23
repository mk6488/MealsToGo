import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `https://cc58-195-140-213-221.eu.ngrok.io/mealstogo-4bdaf/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
