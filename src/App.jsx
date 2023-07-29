import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
// import { Navbar } from "./components/Navbar";

// import { Exp } from "./components/Exp";
import "./App.css";
import { Exp } from "./components/canvas/exp";

function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-primary h-full">
        <h1 className="text-center">Hello</h1>
        <Canvas
          shadows
          camera={{ position: [0, 0, 8], fov: 75 }}
          frameloop="demand"
        >
          <Exp />
        </Canvas>
      </div>
    </BrowserRouter>
  );
}

export default App;
