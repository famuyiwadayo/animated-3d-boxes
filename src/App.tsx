import React from 'react';
import './App.css';
import { Canvas } from 'react-three-fiber';
import { PlaneHelper } from 'react-three-fiber/components';
import { Box } from './Box';



function App() {
  return (
    <Canvas camera={{position: [-10, 10, 10], fov: 35}}>
      <ambientLight />
      <pointLight position={[-10, 10, -10]} castShadow />
      {
        [-3, 0, 3].map((x) => (
          [-3, 0, 3].map((z, i) => <Box key={i} position={[x, 0, z]} />)
        ))
      }
    </Canvas>
  );
}

export default App;
