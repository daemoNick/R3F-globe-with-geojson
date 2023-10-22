import React, { useMemo, useState, useCallback } from "react";
import { ConicPolygonBufferGeometry } from "three-conic-polygon-geometry";

const Mesh = ({ coords }) => {
  const [hovered, set] = useState(false);
  const tGeometry = useMemo(
    () => new ConicPolygonBufferGeometry(coords, 0, 101, true, true, true, 5),
    [coords]
  );

  const onPointHoverHandler = useCallback((e) => {
    e.stopPropagation();
    set(true);
  }, []);

  const onPointOutHandler = useCallback((e) => {
    e.stopPropagation();
    set(false);
  }, []);

  return (
    <mesh
      geometry={tGeometry}
      onPointerOver={onPointHoverHandler}
      onPointerOut={onPointOutHandler}
    >
      <meshBasicMaterial
        attach="material"
        color={hovered ? "hotpink" : "blue"}
      />
    </mesh>
  );
};

export default Mesh;
