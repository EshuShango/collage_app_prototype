import React, { useState, useEffect, StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
// import { Navbar } from "./components/Navbar";

// import { Exp } from "./components/Exp";
import "./App.css";
import { Exp } from "./components/canvas/exp";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <div className="relative bg-primary h-full flex items-center justify-center">
          <div className="bg-white w-[50%] h-[50%] flex items-center justify-center">
            <Canvas
              shadows
              camera={{ position: [1, 0, 1.5], fov: 75 }}
              frameloop="always"
            >
              {/* <Frame id="01" name="Jesse" author="McCree"> */}
              {/* <Sky /> */}
              <Exp />
              {/* <Model position={[0, -2, 0]} /> */}
              {/* </Frame> */}
              <CameraControls
                makeDefault
                minAzimuthAngle={-Math.PI / 2.5}
                maxAzimuthAngle={Math.PI / 2.5}
                minPolarAngle={0.5}
                maxPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </div>
        </div>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
