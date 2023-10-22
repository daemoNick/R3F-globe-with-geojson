import React, { useMemo } from "react";
import Mesh from "./Mesh";

const Polygon = ({ geometry, supplyKey }) => {
  const polygons = useMemo(
    () =>
      geometry.type === "Polygon"
        ? [geometry.coordinates]
        : geometry.coordinates,
    [geometry]
  );

  return polygons.map((coords) => (
    <Mesh key={`${supplyKey}-${JSON.stringify(coords)}`} coords={coords} />
  ));
};

export default Polygon;
