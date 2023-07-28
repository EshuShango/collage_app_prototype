// import { OrbitControls } from "@react-three/drei";
import { FadingImgDisplacement } from "./FadingImgDisplacement";
import {
  AccumulativeShadows,
  RandomizedLight,
  Center,
  Environment,
  OrbitControls,

} from "@react-three/drei";

export const Exp = () => {
  return (
    <>
      {/* <meshNormalMaterial color={"hotpink"} /> */}

      <group>
        {/* <AccumulativeShadows
          temporal
          frames={200}
          color="purple"
          colorBlend={0.5}
          opacity={1}
          scale={10}
          alphaTest={0.85}
          >
          </AccumulativeShadows> */}
          <RandomizedLight
            amount={8}
            radius={5}
            ambient={0.5}
            position={[5, 3, 2]}
            bias={0.001}
          />
        <FadingImgDisplacement casthadow />
      </group>

      <OrbitControls
        autoRotate
        // enableZoom
        autoRotateSpeed={3}
        enablePan={false}
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
      />
    </>
  );
};

// export default Exp;
