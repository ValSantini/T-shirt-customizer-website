import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={30}
      alphaTest={0.8}
      scale={5}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.1]}
    >
      <RandomizedLight 
        amount={4}
        radius={3}
        intensity={0.5}
        ambient={0.3}
        position={[-5, 5, 5]}  // Top left light
        castShadow
      />
      <RandomizedLight 
        amount={4}
        radius={3}
        intensity={0.5}
        ambient={0.3}
        position={[5, 5, 5]}  // Top right light
        castShadow
      />
    </AccumulativeShadows>
  );
}

export default Backdrop;
