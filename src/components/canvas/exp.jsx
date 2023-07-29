// import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";
import { FadingImgDisplacement } from "./FadingImgDisplacement";
import {
  AccumulativeShadows,
  RandomizedLight,
  Center,
  Environment,
  OrbitControls,
  View,
} from "@react-three/drei";
export const Exp = () => {
  return (
    <>
    
    <Suspense fallback={null} >
      <FadingImgDisplacement castshadow />
      <OrbitControls
        // autoRotate
        // enableZoom
        // autoRotateSpeed={3}
        // enablePan={false}
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
      />
   </Suspense>

    </>
  );
};

// export default Exp;
