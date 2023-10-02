'use client';

import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import gsap from 'gsap';

import useMonitorStore from '@/stores/monitorStore';

type MonitorGLTF = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh;
    Cube_2: THREE.Mesh;
    Cube_3: THREE.Mesh;
    Cube_4: THREE.Mesh;
  };
  materials: {
    GLASS: THREE.MeshStandardMaterial;
    BOTTOM_LINE: THREE.MeshStandardMaterial;
    FRAME: THREE.MeshStandardMaterial;
    BASE_COLOR: THREE.MeshStandardMaterial;
  };
};

export default function Monitor() {
  const { isClick, isOn, zoom, toggle } = useMonitorStore();

  const { camera } = useThree();
  const {
    nodes: { Cube_1, Cube_2, Cube_3, Cube_4 },
    materials: { GLASS, BOTTOM_LINE, FRAME, BASE_COLOR },
  } = useGLTF('/assets/model/monitor.glb') as MonitorGLTF;

  useFrame(() => {
    if (isClick) {
      gsap.to(camera.position, {
        x: () => 0,
        y: () => 0,
        z: () => 1.85,
        duration: 0.5,
      });
    }
    // if (!isClick) {
    //   gsap.to(camera.position, {
    //     x: () => -4,
    //     y: () => 2,
    //     z: () => 8,
    //     duration: 0.5,
    //   });
    // }
  });

  return (
    <>
      <mesh
        geometry={Cube_1.geometry}
        material={GLASS}
        position={[-0.025, 0.75, 0]}
        onClick={() => zoom()}
      />
      <mesh
        geometry={Cube_2.geometry}
        material={BOTTOM_LINE}
        position={[-0.025, 0.75, 0]}
      />
      <mesh
        geometry={Cube_3.geometry}
        material={FRAME}
        position={[-0.025, 0.75, 0]}
      />
      <mesh
        geometry={Cube_4.geometry}
        material={BASE_COLOR}
        position={[-0.025, 0.75, 0]}
      />
      <mesh position={[1.53, -0.54, 0.08]} onClick={() => toggle()}>
        <circleGeometry args={[0.05, 16]} />
        <meshStandardMaterial color="#f06868" />
      </mesh>
      <mesh position={[1.38, -0.54, 0.08]}>
        <circleGeometry args={[0.05, 16]} />
        <meshStandardMaterial color={isOn ? '#7dd467' : '#b8b8b8'} />
      </mesh>
    </>
  );
}
