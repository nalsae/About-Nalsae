'use client';

import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import useStore from '@/stores/store';

import Computer from '@/components/Computer';
import Window from '@/components/Window';

export default function Home() {
  const { isClick, isOn } = useStore();

  return (
    <main className="relative w-screen h-screen bg-animation">
      <Canvas shadows camera={{ position: [-4, 2, 8] }}>
        <ambientLight
          color={new THREE.Color('#f3e7ff')}
          position={[2, 2, 2]}
          intensity={2}
        />
        <directionalLight
          color={new THREE.Color('#ffffff')}
          position={[2, 2, 2]}
          intensity={0.1}
        />
        <directionalLight
          color={new THREE.Color('#ffffff')}
          position={[2, -1, -2]}
          castShadow
          intensity={1.2}
        />
        <pointLight
          color={new THREE.Color('#e4cdff')}
          position={[0, -0.8, 2.5]}
          intensity={0.5}
          decay={2}
        />
        <Computer />
        <OrbitControls
          enableRotate={!isClick}
          enableZoom={false}
          minPolarAngle={1.15}
          maxPolarAngle={1.75}
        />
        {/* <gridHelper /> */}
      </Canvas>
      {isOn && <Window />}
    </main>
  );
}
