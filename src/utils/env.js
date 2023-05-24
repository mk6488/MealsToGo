const liveHost = "https://us-central1-mealstogo-4bdaf.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-4bdaf/us-central1";

export const isDevelopment = process.env.NODE_ENV === "Development";

export const host = isDevelopment ? localHost : liveHost;
