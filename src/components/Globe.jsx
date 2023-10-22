import React, { useRef, useMemo } from "react";
import * as THREE from "three";

const radiusGlobe = 100;

const Globe = (props) => {
  let group = useRef();

  const { map, bump } = props;

  const mapTexture = useMemo(() => new THREE.TextureLoader().load(map), [map]);
  const bumpTexture = useMemo(
    () => new THREE.TextureLoader().load(bump),
    [bump]
  );

  return (
    <group ref={group}>
      <mesh rotation-y={-Math.PI / 2}>
        <sphereBufferGeometry attach="geometry" args={[radiusGlobe, 75, 75]} />
        <meshStandardMaterial
          attach="material"
          transparent
          map={mapTexture}
          bumpMap={bumpTexture}
          bumpScale={1}
        />
      </mesh>
    </group>
  );
};

export default Globe;
