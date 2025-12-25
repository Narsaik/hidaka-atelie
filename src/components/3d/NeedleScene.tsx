"use client";

import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Float, Environment, Line } from "@react-three/drei";
import * as THREE from "three";

// Needle component - elegant sewing needle
function Needle({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }: {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  const needleRef = useRef<THREE.Group>(null);
  const time = useRef(0);

  useFrame((state, delta) => {
    if (needleRef.current) {
      time.current += delta;
      // Smooth weaving motion
      needleRef.current.position.x = position[0] + Math.sin(time.current * 0.8) * 0.5;
      needleRef.current.position.y = position[1] + Math.sin(time.current * 1.2) * 0.3;
      needleRef.current.rotation.z = Math.sin(time.current * 0.6) * 0.3;
    }
  });

  return (
    <group ref={needleRef} position={position} rotation={rotation} scale={scale}>
      {/* Needle body - long thin cylinder */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.015, 2, 16]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Needle point */}
      <mesh position={[1.1, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.02, 0.2, 16]} />
        <meshStandardMaterial color="#d4d4d4" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Needle eye */}
      <mesh position={[-0.9, 0, 0]}>
        <torusGeometry args={[0.04, 0.01, 8, 16]} />
        <meshStandardMaterial color="#a0a0a0" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

// Haystack - collection of straw-like cylinders
function Haystack() {
  const haystackRef = useRef<THREE.Group>(null);

  const straws = useMemo(() => {
    const items = [];
    for (let i = 0; i < 200; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 2;
      const height = Math.random() * 1.5 + 0.5;
      items.push({
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 2,
          Math.sin(angle) * radius
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ] as [number, number, number],
        length: height,
        color: `hsl(${40 + Math.random() * 20}, ${60 + Math.random() * 20}%, ${50 + Math.random() * 20}%)`
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    if (haystackRef.current) {
      haystackRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={haystackRef} position={[0, 0, -1]}>
      {straws.map((straw, i) => (
        <mesh key={i} position={straw.position} rotation={straw.rotation}>
          <cylinderGeometry args={[0.015, 0.01, straw.length, 6]} />
          <meshStandardMaterial color={straw.color} roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

// Thread using drei Line component
function GoldenThread({ startPosition }: { startPosition: THREE.Vector3 }) {
  const time = useRef(0);

  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 50; i++) {
      const t = i / 49;
      pts.push(new THREE.Vector3(
        startPosition.x - t * 3,
        startPosition.y + Math.sin(t * Math.PI * 4) * 0.2,
        startPosition.z + Math.cos(t * Math.PI * 4) * 0.2
      ));
    }
    return pts;
  }, [startPosition]);

  return (
    <Line
      points={points}
      color="#8b7355"
      lineWidth={2}
    />
  );
}

// Animated needle weaving through haystack
function WeavingNeedle() {
  const needleRef = useRef<THREE.Group>(null);
  const time = useRef(0);

  useFrame((state, delta) => {
    time.current += delta;

    if (needleRef.current) {
      // Complex weaving path through haystack
      const t = time.current * 0.5;
      needleRef.current.position.x = Math.sin(t) * 1.5;
      needleRef.current.position.y = Math.sin(t * 2.3) * 0.8;
      needleRef.current.position.z = Math.cos(t * 1.7) * 1.5 - 1;

      // Needle rotation follows movement direction
      needleRef.current.rotation.z = Math.sin(t) * 0.5;
      needleRef.current.rotation.y = Math.cos(t * 0.7) * 0.3;
      needleRef.current.rotation.x = Math.sin(t * 1.3) * 0.2;
    }
  });

  return (
    <group ref={needleRef}>
      {/* Main needle */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.02, 2.5, 16]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.95} roughness={0.05} />
      </mesh>
      {/* Sharp point */}
      <mesh position={[1.35, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.03, 0.3, 16]} />
        <meshStandardMaterial color="#f0f0f0" metalness={0.95} roughness={0.05} />
      </mesh>
      {/* Eye of needle */}
      <mesh position={[-1.15, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.06, 0.015, 8, 24]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Golden thread */}
      <GoldenThread startPosition={new THREE.Vector3(-1.15, 0, 0)} />
    </group>
  );
}

// Floating fabric pieces
function FloatingFabric() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[3, 1, -2]} scale={0.8}>
        <planeGeometry args={[1.5, 2, 20, 20]} />
        <meshStandardMaterial
          color="#f5f0e8"
          side={THREE.DoubleSide}
          roughness={0.6}
          metalness={0}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#fff5e6" />
      <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.5} penumbra={0.5} />

      {/* Main haystack */}
      <Haystack />

      {/* Weaving needle */}
      <WeavingNeedle />

      {/* Additional decorative needles */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <Needle position={[-3, 1.5, 0]} rotation={[0.2, 0.5, 0.3]} scale={0.6} />
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
        <Needle position={[2.5, -1, 1]} rotation={[-0.3, -0.2, 0.4]} scale={0.5} />
      </Float>

      {/* Floating fabric pieces */}
      <FloatingFabric />

      <Environment preset="studio" />
    </>
  );
}

export default function NeedleScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
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
