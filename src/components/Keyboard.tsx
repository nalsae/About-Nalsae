'use client';

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type KeyboardGLTF = GLTF & {
  nodes: {
    keyboard: THREE.Mesh & { children: THREE.Mesh[] };
  };
  materials: {
    blackMaterial: THREE.MeshStandardMaterial;
    darkGrayMaterial: THREE.MeshStandardMaterial;
    lightGrayMaterial: THREE.MeshStandardMaterial;
  };
};

export default function Keyboard() {
  const keyboard = useGLTF(
    '/assets/models/keyboardAndMouse.glb',
  ) as KeyboardGLTF;

  console.log(keyboard);

  return <mesh geometry={keyboard.nodes.keyboard.children[0].geometry}></mesh>;
}
