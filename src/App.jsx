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
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 30 }}>
        <Exp />
      </Canvas>
    </BrowserRouter>
  );
}

export default App;
