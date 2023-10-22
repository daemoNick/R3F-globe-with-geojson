import React, { useEffect, useState } from "react";
import Polygon from "./Polygon";

const GeoJSON = () => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    // fetch('110m_geojson.json')
    fetch(
      "https://raw.githubusercontent.com/vasturiano/three-conic-polygon-geometry/master/example/geojson/ne_110m_admin_0_countries.geojson"
    )
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);
      });
  }, []);

  // return <group>{countries && countries.features.map(({ properties, geometry }) => <PolygonLine key={properties.ISO_A3} geometry={geometry} />)}</group>
  return (
    <group>
      {countries &&
        countries.features.map(({ properties, geometry }) => (
          <Polygon
            key={`${properties.NAME}-${properties.ISO_A3}`}
            geometry={geometry}
            supplyKey={properties.ISO_A3}
          />
        ))}
    </group>
  );
};

export default GeoJSON;
