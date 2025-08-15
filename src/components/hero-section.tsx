'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type * as THREE from 'three';

// You can replace this with an actual GLB model of a handbag
const HandbagModel = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  // Slow rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, state.pointer.x * 0.2, 0.05);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -state.pointer.y * 0.1, 0.05);
    }
  });

  return (
    <group ref={meshRef}>
        <mesh scale={2.5}>
            <boxGeometry args={[1, 1, 0.2]} />
            <meshStandardMaterial color="hsl(var(--foreground))" roughness={0.3} metalness={0.2} />
        </mesh>
    </group>
  );
};

const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={targetRef} id="home" className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ scale, opacity }} className="sticky top-0 h-full">
        <div className="absolute inset-0 bg-gradient-hero" />
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <Suspense fallback={null}>
              <HandbagModel />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </motion.div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center pointer-events-none">
        <motion.h1
          className="text-6xl md:text-8xl font-bold font-serif text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          AURA
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-primary/80 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          Timeless by Design
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <ChevronDown className="w-8 h-8 text-primary/50 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
