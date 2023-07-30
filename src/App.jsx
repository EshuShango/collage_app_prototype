import React, { useState, useEffect, StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
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
            camera={{ position: [0, 0, 8], fov: 75 }}
            frameloop="always"
          >
            <Exp />
          </Canvas>
        </div>
      </div>
    </BrowserRouter>
    </StrictMode>
  );
}

export default App;
