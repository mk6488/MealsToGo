const { locations: locationsMock } = require("./geocode.mock");
const url = require("node:url");

module.exports = function geocodeRequest(request, response) {
  const { city } = url.parse(request.url, true).query;
  const locationMock = locationsMock[city.toLowerCase()];

  response.json(locationMock);
};
