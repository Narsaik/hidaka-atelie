"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingFabric() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color="#8b7355"
          roughness={0.4}
          metalness={0.1}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function FloatingRibbon({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[0.1, 2, 0.02]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
    </mesh>
  );
}

function Particles() {
  const count = 50;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;
    const temp = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      const x = (Math.sin(i * 0.5 + time * 0.2) * 3);
      const y = ((i / count) * 6 - 3) + Math.sin(time * 0.3 + i) * 0.2;
      const z = (Math.cos(i * 0.5 + time * 0.2) * 3);

      temp.position.set(x, y, z);
      temp.scale.setScalar(0.02 + Math.sin(i + time) * 0.01);
      temp.updateMatrix();
      meshRef.current.setMatrixAt(i, temp.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color="#b5a48c" emissive="#8b7355" emissiveIntensity={0.2} />
    </instancedMesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#b5a48c" />

      <FloatingFabric />
      <Particles />

      <FloatingRibbon position={[-2, 0, -1]} color="#1a1a1a" scale={0.8} />
      <FloatingRibbon position={[2, 0.5, -1]} color="#8b7355" scale={1} />
      <FloatingRibbon position={[-1.5, -0.5, 0]} color="#b5a48c" scale={0.6} />
      <FloatingRibbon position={[1.5, -1, 0.5]} color="#d4d4d4" scale={0.7} />

      <Environment preset="studio" />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
