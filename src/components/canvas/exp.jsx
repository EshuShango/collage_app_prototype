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
      <group>
        <Suspense fallback={null}>
          
          <FadingImgDisplacement id="01" name="Jesse" author="McCree" />
          {/* <FadingImgDisplacement position={[-1.68, 0, 0]} name="B" /> */}
          {/* <FadingImgDisplacement castshadow position={[1.68, 0, 0.75]} name="c"/> */}
          {/* <OrbitControls
            // autoRotate
            // enableZoom
            // autoRotateSpeed={3}
            enableDamping={true}
            enablePan={false}
            minAzimuthAngle={-Math.PI / 6}
            maxAzimuthAngle={Math.PI / 6}
            minPolarAngle={Math.PI / 3.14}
            maxPolarAngle={Math.PI - Math.PI / 3.14}
          /> */}
        </Suspense>
      </group>
    </>
  );
};

// export default Exp;
