"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

function ParticlesGlobe() {
  const pointsRef = useRef<THREE.Points>(null);
  const [dotTexture, setDotTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext("2d");
    if (context) {
      context.beginPath();
      context.arc(32, 32, 28, 0, 2 * Math.PI, false);
      context.fillStyle = "#ffffff";
      context.fill();
    }
    setDotTexture(new THREE.CanvasTexture(canvas));
  }, []);
  
  const particlesCount = 2500;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      // Add slight volumetric variance
      const radius = 2.4 + (Math.random() * 0.2);
      
      pos[i*3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i*3+1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i*3+2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.15;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      {dotTexture ? (
        <pointsMaterial 
          size={0.06} 
          color="#00AEEF" 
          transparent 
          opacity={0.8} 
          map={dotTexture}
          depthWrite={false}
          sizeAttenuation 
        />
      ) : (
        <pointsMaterial size={0} color="#00AEEF" />
      )}
    </points>
  );
}

export function GlobeComponent() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <ParticlesGlobe />
      </Canvas>
    </div>
  );
}
