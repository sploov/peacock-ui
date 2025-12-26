import React, { useState } from 'react';
import { useBox, usePlane, useSphere } from '@react-three/cannon';
import { useCursor } from '@react-three/drei';
import * as THREE from 'three';

// Shared material for consistency
const shapeMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.2,
  metalness: 0.1,
});

export const PhysicsPlane = (props: any) => {
  const [ref] = usePlane(() => ({ 
    rotation: [-Math.PI / 2, 0, 0], 
    position: [0, -2, 0], // Slightly lower to give space
    type: 'Static',
    ...props 
  }));
  
  return (
    <mesh ref={ref as any} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <shadowMaterial color="#171717" transparent opacity={0.4} />
    </mesh>
  );
};

export const InteractiveBox = ({ position = [0, 5, 0], color = '#5865F2' }: { position?: [number, number, number], color?: string }) => {
  const [hovered, setHover] = useState(false);
  const [ref, api] = useBox(() => ({ 
    mass: 1, 
    position, 
    args: [1, 1, 1],
    rotation: [Math.random(), Math.random(), Math.random()]
  }));

  useCursor(hovered);

  return (
    <mesh
      ref={ref as any}
      castShadow
      receiveShadow
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={() => {
        api.velocity.set(0, 5, 0); // Jump on click
        api.rotation.set(Math.random(), Math.random(), Math.random());
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={hovered ? '#ffffff' : color} 
        roughness={0.2}
        metalness={0.1}
      />
    </mesh>
  );
};

export const InteractiveSphere = ({ position = [0, 5, 0], color = '#f43f5e' }: { position?: [number, number, number], color?: string }) => {
  const [hovered, setHover] = useState(false);
  const [ref, api] = useSphere(() => ({ 
    mass: 1, 
    position, 
    args: [0.7], // Radius
  }));

  useCursor(hovered);

  return (
    <mesh
      ref={ref as any}
      castShadow
      receiveShadow
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={() => {
        api.applyImpulse([0, 5, 0], [0, 0, 0]);
        // Random horizontal push
        const x = (Math.random() - 0.5) * 5;
        const z = (Math.random() - 0.5) * 5;
        api.velocity.set(x, 5, z);
      }}
    >
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial 
        color={hovered ? '#ffffff' : color} 
        roughness={0.2}
        metalness={0.1}
      />
    </mesh>
  );
};
