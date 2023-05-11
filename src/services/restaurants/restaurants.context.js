import React, { useState, createContext, useEffect, useMemo } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [1, 2, 3, 4, 5, 6, 7, 8],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
