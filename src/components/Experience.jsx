import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Globe from "./Globe";
import GeoJSON from "./GeoJSON";
import { useThree } from "@react-three/fiber";

const PointLight = () => {
  return <pointLight color={"white"} intensity={1} position={[10, 10, 10]} />;
};

export const Experience = () => {
  // const { camera } = useThree();

  // function logCameraPosition() {
  //   console.log(camera);
  // }
  // window.addEventListener("click", logCameraPosition);

  return (
    <>
      <OrbitControls />
      <ambientLight color="lightblue" />
      <PointLight />
      <Suspense fallback={null}>
        <Globe
          map="/earth-large.jpg"
          bump="bump-large.jpg"
          clouds="/clouds-large.jpg"
        />
        <GeoJSON />
      </Suspense>
      <OrbitControls />
    </>
  );
};
