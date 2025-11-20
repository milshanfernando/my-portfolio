// Particles.tsx
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticlesProps {
  count?: number;
}

interface ParticleMeta {
  speed: number;
}

/** Pure seeded PRNG (mulberry32) — deterministic and safe to call during render */
const mulberry32 = (seed: number) => {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const Particles: React.FC<ParticlesProps> = ({ count = 200 }) => {
  // points mesh ref
  const mesh = useRef<THREE.Points<
    THREE.BufferGeometry,
    THREE.PointsMaterial
  > | null>(null);

  // Create deterministic positions & speeds in pure useMemo.
  // We avoid Math.random() and instead use a seeded PRNG to remain pure during render.
  const { positions, metas } = useMemo(() => {
    const seed = 1337 + count; // change seed if you want different patterns per count
    const rand = mulberry32(seed);

    const posArray = new Float32Array(count * 3);
    const metaArr: ParticleMeta[] = [];

    for (let i = 0; i < count; i++) {
      const x = (rand() - 0.5) * 10;
      const y = rand() * 10 + 5; // higher starting point
      const z = (rand() - 0.5) * 10;
      posArray[i * 3] = x;
      posArray[i * 3 + 1] = y;
      posArray[i * 3 + 2] = z;

      const speed = 0.005 + rand() * 0.001;
      metaArr.push({ speed });
    }

    return { positions: posArray, metas: metaArr };
  }, [count]);

  // update positions on every frame
  useFrame(() => {
    if (!mesh.current) return;

    const posAttr = mesh.current.geometry.attributes.position;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      let y = arr[i * 3 + 1];
      y -= metas[i].speed;
      if (y < -2) {
        // re-seed-like deterministic wrap: compute new y using same PRNG logic
        // but we can use a simple deterministic fallback (e.g., bring back to range)
        // Since we don't want impure functions here either, keep it deterministic by using index
        const seed = 12345 + i;
        const r = mulberry32(seed)();
        y = r * 10 + 5;
      }
      arr[i * 3 + 1] = y;
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        {/* react-three-fiber expects args for BufferAttribute */}
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>

      <pointsMaterial
        // you can also use <pointsMaterial attach="material" /> props object style
        color={"#ffffff"}
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
