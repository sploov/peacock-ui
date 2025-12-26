"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei';
import { PhysicsPlane, InteractiveBox, InteractiveSphere } from './primitives/PhysicsShapes';

interface PeacockPhysicsSceneProps {
  className?: string;
}

export const PeacockPhysicsScene: React.FC<PeacockPhysicsSceneProps> = ({ className }) => {
  return (
    <div className={`w-full h-[500px] rounded-lg overflow-hidden bg-black/5 ${className}`}>
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[2048, 2048]} castShadow />
          
          <Physics>
            <PhysicsPlane />
            <InteractiveBox position={[-1.5, 5, 0]} color="#5865F2" />
            <InteractiveBox position={[1.5, 8, 0]} color="#23a559" />
            <InteractiveSphere position={[0, 10, 0]} color="#f43f5e" />
          </Physics>

          <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.25} far={10} color="#000000" />
          <Environment preset="city" />
          <OrbitControls makeDefault />
        </Suspense>
      </Canvas>
    </div>
  );
};
