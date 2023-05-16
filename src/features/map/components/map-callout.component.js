import React from "react";

import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant.component";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};
