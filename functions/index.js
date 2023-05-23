const { onRequest } = require("firebase-functions/v2/https");
const geocodeRequest = require("./geocode");

exports.geocode = onRequest((request, response) => {
  geocodeRequest(request, response);
});

// const logger = require("firebase-functions/logger");
