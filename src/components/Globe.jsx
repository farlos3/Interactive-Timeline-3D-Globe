"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Line } from "@react-three/drei";
import { TextureLoader } from "three";
import { useRef, useState, useEffect } from "react";

const Globe = () => {
  const globeRef = useRef();
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const loadTexture = async () => {
      const tex = await new TextureLoader().load("/00_earthmap1k.jpg");
      setTexture(tex);
    };
    loadTexture();
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Stars radius={80} depth={80} count={500} factor={3} />

      {texture && (
        <mesh ref={globeRef} rotation={[0.4, 0, 0.2]}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      )}

      <OrbitControls
        enableZoom={true}
        minDistance={2} 
        maxDistance={10} 
      />
    </Canvas>
  );
};

export default Globe;
