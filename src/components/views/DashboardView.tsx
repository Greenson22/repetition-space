// src/components/views/DashboardView.tsx

"use client";

import { useEffect, useState } from 'react';
import Card from '@/components/fragments/Card';
// Impor data dan tipe yang diperlukan, termasuk untuk diskusi
import { defaultPlants, defaultDiscussions, type Plant, type DiscussionItem } from '@/lib/data';

const DashboardView = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [discussions, setDiscussions] = useState<DiscussionItem[]>([]);

  useEffect(() => {
    // Memuat data tanaman dan diskusi dari file data.ts
    setPlants(defaultPlants);
    setDiscussions(defaultDiscussions);
  }, []);

  return (
    <>
      <header className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Koleksi Saya</h2>
          <p className="text-slate-500 mt-1">Daftar materi yang sedang Anda pelajari.</p>
        </div>
      </header>
      
      {plants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {plants.map(plant => {
            // Saring diskusi yang relevan untuk setiap tanaman berdasarkan plant.id
            const plantDiscussions = discussions.filter(d => d.plantId === plant.id);
            return (
              <Card 
                key={plant.id}
                plant={plant} 
                discussions={plantDiscussions} // Teruskan data diskusi yang sudah disaring
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-slate-700">Koleksi masih kosong.</h3>
          <p className="text-slate-500 mt-2">Data tanaman akan ditampilkan di sini.</p>
        </div>
      )}
    </>
  );
};

export default DashboardView;