// src/components/views/PlaceholderView.tsx

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Blocks } from 'lucide-react';

type PlaceholderViewProps = {
  title: string;
};

// Varian animasi untuk container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Memberi jeda antar animasi anak
    },
  },
};

// Varian animasi untuk item di dalamnya (teks)
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const PlaceholderView = ({ title }: PlaceholderViewProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="mb-6 p-4 bg-slate-200/50 rounded-full"
        // Animasi untuk ikon
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.1,
        }}
      >
        <Blocks size={40} className="text-slate-500" />
      </motion.div>

      <motion.h1
        className="text-3xl font-bold text-slate-800"
        variants={itemVariants}
      >
        {title}
      </motion.h1>

      <motion.p
        className="mt-2 text-slate-500"
        variants={itemVariants}
      >
        Halaman ini sedang dalam pengembangan.
      </motion.p>
    </motion.div>
  );
};

export default PlaceholderView;