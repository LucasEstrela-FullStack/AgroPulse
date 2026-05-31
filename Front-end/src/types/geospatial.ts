export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type GeoBoundingBox = {
  northEast: Coordinates;
  southWest: Coordinates;
};
