"use client";

import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Sparkles, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

// Main Wedding Dress Component
function WeddingDress() {
  const dressRef = useRef<THREE.Group>(null);
  const skirtRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (dressRef.current) {
      // Smooth 360 rotation
      dressRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
    if (skirtRef.current) {
      // Subtle skirt sway
      skirtRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  return (
    <group ref={dressRef} position={[0, -1, 0]}>
      {/* Mannequin/Body Form */}
      <MannequinForm />

      {/* Bodice */}
      <Bodice />

      {/* Main Skirt */}
      <group ref={skirtRef}>
        <Skirt />
      </group>

      {/* Lace Details */}
      <LaceOverlay />

      {/* Sparkle Accents */}
      <SparkleAccents />

      {/* Veil */}
      <Veil />
    </group>
  );
}

// Mannequin upper body form
function MannequinForm() {
  return (
    <group position={[0, 2.2, 0]}>
      {/* Neck */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.3, 16]} />
        <meshStandardMaterial color="#f5e6d3" roughness={0.4} />
      </mesh>
      {/* Head silhouette */}
      <mesh position={[0, 0.95, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#f5e6d3" roughness={0.4} />
      </mesh>
      {/* Shoulders */}
      <mesh position={[0, 0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.08, 0.5, 8, 16]} />
        <meshStandardMaterial color="#f5e6d3" roughness={0.4} />
      </mesh>
    </group>
  );
}

// Elegant fitted bodice
function Bodice() {
  const bodiceRef = useRef<THREE.Mesh>(null);

  return (
    <group position={[0, 1.5, 0]}>
      {/* Main bodice - sweetheart neckline effect */}
      <mesh ref={bodiceRef}>
        <cylinderGeometry args={[0.28, 0.38, 1.2, 32, 1, true]} />
        <meshPhysicalMaterial
          color="#fff8f0"
          roughness={0.2}
          metalness={0.1}
          clearcoat={0.3}
          clearcoatRoughness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Bodice inner layer */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.27, 0.37, 1.18, 32]} />
        <meshStandardMaterial color="#fff5eb" roughness={0.3} />
      </mesh>

      {/* Sweetheart neckline cups */}
      <mesh position={[-0.12, 0.5, 0.18]} rotation={[0.3, 0, -0.2]}>
        <sphereGeometry args={[0.15, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial
          color="#fff8f0"
          roughness={0.2}
          metalness={0.1}
          clearcoat={0.3}
        />
      </mesh>
      <mesh position={[0.12, 0.5, 0.18]} rotation={[0.3, 0, 0.2]}>
        <sphereGeometry args={[0.15, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial
          color="#fff8f0"
          roughness={0.2}
          metalness={0.1}
          clearcoat={0.3}
        />
      </mesh>

      {/* Waist accent belt */}
      <mesh position={[0, -0.55, 0]}>
        <torusGeometry args={[0.39, 0.03, 8, 32]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Belt bow/crystal accent */}
      <mesh position={[0, -0.55, 0.4]}>
        <octahedronGeometry args={[0.08]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.9}
          roughness={0}
          metalness={0}
          ior={2.4}
        />
      </mesh>
    </group>
  );
}

// Flowing ball gown skirt
function Skirt() {
  const layers = useMemo(() => {
    const items = [];
    // Multiple tulle/organza layers
    for (let i = 0; i < 5; i++) {
      items.push({
        radius: 1.8 + i * 0.15,
        height: 2.8 - i * 0.1,
        y: -0.5 - i * 0.05,
        opacity: 0.6 - i * 0.08,
        color: i % 2 === 0 ? "#fff8f0" : "#ffeedd",
      });
    }
    return items;
  }, []);

  return (
    <group position={[0, 0.4, 0]}>
      {/* Base skirt structure */}
      <mesh>
        <coneGeometry args={[1.8, 2.8, 64, 1, true]} />
        <meshPhysicalMaterial
          color="#fffaf5"
          roughness={0.3}
          metalness={0}
          side={THREE.DoubleSide}
          clearcoat={0.2}
        />
      </mesh>

      {/* Tulle overlay layers */}
      {layers.map((layer, i) => (
        <mesh key={i} position={[0, layer.y, 0]}>
          <coneGeometry args={[layer.radius, layer.height, 64, 1, true]} />
          <meshPhysicalMaterial
            color={layer.color}
            transparent
            opacity={layer.opacity}
            roughness={0.4}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Skirt ruffles/gathering at bottom */}
      <SkirtRuffles />

      {/* Train extension */}
      <Train />
    </group>
  );
}

// Ruffles at the bottom of the skirt
function SkirtRuffles() {
  const ruffles = useMemo(() => {
    const items = [];
    const count = 24;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      items.push({
        position: [
          Math.cos(angle) * 1.75,
          -1.35,
          Math.sin(angle) * 1.75,
        ] as [number, number, number],
        rotation: [0.3, angle, 0] as [number, number, number],
      });
    }
    return items;
  }, []);

  return (
    <>
      {ruffles.map((ruffle, i) => (
        <mesh key={i} position={ruffle.position} rotation={ruffle.rotation}>
          <sphereGeometry args={[0.25, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshPhysicalMaterial
            color="#fff8f0"
            transparent
            opacity={0.7}
            roughness={0.4}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </>
  );
}

// Train behind the dress
function Train() {
  const trainRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (trainRef.current) {
      // Subtle flowing animation
      trainRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05 - 0.3;
    }
  });

  return (
    <mesh ref={trainRef} position={[0, -1.2, -1.5]} rotation={[-0.3, 0, 0]}>
      <planeGeometry args={[2, 2.5, 20, 20]} />
      <meshPhysicalMaterial
        color="#fff8f0"
        transparent
        opacity={0.8}
        roughness={0.3}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Lace overlay patterns
function LaceOverlay() {
  const lacePatterns = useMemo(() => {
    const items = [];
    // Bodice lace accents
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      items.push({
        position: [
          Math.cos(angle) * 0.32,
          1.3 + Math.sin(i * 0.5) * 0.2,
          Math.sin(angle) * 0.32,
        ] as [number, number, number],
        scale: 0.03 + Math.random() * 0.02,
      });
    }
    // Skirt lace accents
    for (let i = 0; i < 30; i++) {
      const angle = (i / 30) * Math.PI * 2;
      const radius = 0.8 + Math.random() * 0.8;
      const y = -0.5 - Math.random() * 1.5;
      items.push({
        position: [
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius,
        ] as [number, number, number],
        scale: 0.04 + Math.random() * 0.03,
      });
    }
    return items;
  }, []);

  return (
    <>
      {lacePatterns.map((lace, i) => (
        <mesh key={i} position={lace.position}>
          <icosahedronGeometry args={[lace.scale, 0]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transparent
            opacity={0.9}
            roughness={0.1}
            metalness={0.3}
          />
        </mesh>
      ))}
    </>
  );
}

// Crystal/sparkle accents
function SparkleAccents() {
  const crystals = useMemo(() => {
    const items = [];
    // Bodice crystals
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const y = 1.2 + Math.random() * 0.6;
      items.push({
        position: [
          Math.cos(angle) * (0.3 + Math.random() * 0.1),
          y,
          Math.sin(angle) * (0.3 + Math.random() * 0.1),
        ] as [number, number, number],
        scale: 0.015 + Math.random() * 0.01,
      });
    }
    // Scattered on skirt
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.4 + Math.random() * 1.2;
      const y = 0.5 - Math.random() * 2;
      items.push({
        position: [
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius,
        ] as [number, number, number],
        scale: 0.01 + Math.random() * 0.015,
      });
    }
    return items;
  }, []);

  return (
    <>
      {crystals.map((crystal, i) => (
        <mesh key={i} position={crystal.position}>
          <octahedronGeometry args={[crystal.scale]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={0.8}
            roughness={0}
            metalness={0.2}
            ior={2.4}
            emissive="#fff5e6"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </>
  );
}

// Delicate veil
function Veil() {
  const veilRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (veilRef.current) {
      // Gentle flowing motion
      veilRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
      veilRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05 - 0.2;
    }
  });

  return (
    <group position={[0, 2.85, -0.1]}>
      {/* Veil attachment/tiara */}
      <mesh position={[0, 0.1, 0]}>
        <torusGeometry args={[0.15, 0.02, 8, 32, Math.PI]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Main veil */}
      <mesh ref={veilRef} position={[0, -0.3, -0.3]} rotation={[-0.2, 0, 0]}>
        <planeGeometry args={[1.5, 2, 20, 20]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.3}
          roughness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// Floating rose petals
function FloatingPetals() {
  const petalsRef = useRef<THREE.Group>(null);

  const petals = useMemo(() => {
    const items = [];
    for (let i = 0; i < 30; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ] as [number, number, number],
        speed: 0.5 + Math.random() * 0.5,
        color: ["#ffb6c1", "#ffc0cb", "#fff0f5", "#ffe4e9"][Math.floor(Math.random() * 4)],
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    if (petalsRef.current) {
      petalsRef.current.children.forEach((petal, i) => {
        const data = petals[i];
        petal.rotation.x += 0.01 * data.speed;
        petal.rotation.y += 0.015 * data.speed;
        petal.position.y -= 0.005 * data.speed;

        // Reset position when fallen
        if (petal.position.y < -3) {
          petal.position.y = 3;
          petal.position.x = (Math.random() - 0.5) * 6;
        }
      });
    }
  });

  return (
    <group ref={petalsRef}>
      {petals.map((petal, i) => (
        <mesh key={i} position={petal.position} rotation={petal.rotation} scale={0.08}>
          <sphereGeometry args={[1, 4, 2]} />
          <meshStandardMaterial
            color={petal.color}
            transparent
            opacity={0.8}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

// Platform/pedestal
function Platform() {
  return (
    <group position={[0, -2.6, 0]}>
      {/* Main platform */}
      <mesh>
        <cylinderGeometry args={[2.5, 2.8, 0.15, 64]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
      </mesh>
      {/* Gold rim */}
      <mesh position={[0, 0.08, 0]}>
        <torusGeometry args={[2.5, 0.03, 8, 64]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <directionalLight position={[-5, 10, -5]} intensity={0.5} />
      <pointLight position={[0, 3, 3]} intensity={0.8} color="#fff5e6" />
      <pointLight position={[3, 0, 0]} intensity={0.4} color="#ffe4e9" />
      <pointLight position={[-3, 0, 0]} intensity={0.4} color="#e6f0ff" />
      <spotLight
        position={[0, 8, 0]}
        angle={0.4}
        penumbra={0.5}
        intensity={1.5}
        castShadow
      />

      {/* Main dress */}
      <WeddingDress />

      {/* Platform */}
      <Platform />

      {/* Floating petals */}
      <FloatingPetals />

      {/* Sparkles around dress */}
      <Sparkles
        count={100}
        scale={6}
        size={2}
        speed={0.3}
        opacity={0.6}
        color="#d4af37"
      />

      {/* Environment for reflections */}
      <Environment preset="studio" />
    </>
  );
}

export default function WeddingDressScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 1, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        shadows
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
