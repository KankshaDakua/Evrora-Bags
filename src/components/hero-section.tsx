'use client';

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type * as THREE from 'three';

// Placeholder 3D model component
const HandbagModel = ({ color }: { color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Rotate the model
  useFrame((state, delta) => {
    if(meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <boxGeometry args={[1, 1, 0.2]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
    </mesh>
  );
};

const ColorMoodSelector = ({ setColor }: { setColor: (color: string) => void }) => {
  const colors = [
    { name: 'Onyx', hex: '#1a1a1a' },
    { name: 'Cream', hex: '#f2eee9' },
    { name: 'Rose', hex: '#d9a6a0' },
    { name: 'Sky', hex: '#a4c0d5' },
  ];

  return (
    <motion.div 
      className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-4 p-2 bg-white/50 backdrop-blur-sm rounded-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {colors.map((color) => (
        <button
          key={color.name}
          onClick={() => setColor(color.hex)}
          className="w-8 h-8 rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ backgroundColor: color.hex }}
          aria-label={`Select ${color.name} color`}
        />
      ))}
    </motion.div>
  );
};

const HeroSection = () => {
  const [bagColor, setBagColor] = useState('#1a1a1a');

  return (
    <section id="home" className="relative h-screen w-full flex flex-col justify-center items-center bg-gradient-hero">
      <div className="w-full h-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <Suspense fallback={null}>
            <HandbagModel color={bagColor} />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
        </Canvas>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center pointer-events-none">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Redefining Carry
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-primary/80 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Minimalism in motion.
        </motion.p>
      </div>

      <ColorMoodSelector setColor={setBagColor} />

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-8 h-8 text-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
