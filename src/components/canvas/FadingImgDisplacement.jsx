import {
  Center,
  shaderMaterial,
  useTexture,
  MeshPortalMaterial,
  Text,
} from "@react-three/drei";
import { useFrame, extend } from "@react-three/fiber";
import { useState } from "react";
import { useRef } from "react";
import { suspend } from "suspend-react";
import { geometry } from "maath";
import * as THREE from "three";
extend(geometry);
const GOLDENRATIO = 1.61803398875;
const zPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
const yPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 1);

export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
    disp: undefined,
  },
  ` varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  ` varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform sampler2D disp;
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;
    void main() {
      vec2 uv = vUv;
      vec4 disp = texture2D(disp, uv);
      vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
      vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
      vec4 _texture = texture2D(tex, distortedPosition);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);
      vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      gl_FragColor = finalTexture;
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`
);

// eslint-disable-next-line no-undef
extend({ ImageFadeMaterial });

export const FadingImgDisplacement = ({
  id,
  name,
  author,
  bg,
  width = 1,
  height = GOLDENRATIO,
  children,
  ...props
}) => {
  const ref = useRef();
  // console.log(ref);
  const [texture1, texture2, dispTexture] = useTexture([
    // "../assets/textures/advent.jpg",
    // "../assets/textures/ancestors.jpg",
    // "../assets/displacement/11.jpg",

    "/textures/advent.jpg",
    "/textures/ancestors.jpg",
    "/displacement/11.jpg",
  ]);
  const [hovered, setHover] = useState(false);
  useFrame(() => {
    ref.current.dispFactor = THREE.MathUtils.lerp(
      ref.current.dispFactor,
      hovered ? 1 : 0,
      0.075
    );
  });
  return (
    // <Center Center>
    <group {...props}>
      <mesh
        // {...props}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        castShadow
      >
        <boxGeometry
        // args={[2.25, 4]} // 9:16 ratio
        // args={[2,2,2,2]} // 9:16 ratio

        // wireframe={true}
        />
        <imageFadeMaterial
          side={THREE.DoubleSide}
          // side={THREE.FrontSide}
          ref={ref}
          tex={texture1}
          tex2={texture2}
          disp={dispTexture}
          // toneMapped={false}
        />
      </mesh>
    </group>
    // </Center>
  );
};
