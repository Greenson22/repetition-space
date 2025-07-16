// src/components/views/DashboardView.tsx

"use client";

import { useEffect, useState } from 'react';
import Card from '@/components/fragments/Card';
import DiscussionModal from '@/components/fragments/DiscussionModal'; // Impor Modal
import { defaultData, type Plant } from '@/lib/data';

const DashboardView = () => {
  const [data, setData] = useState<Plant[]>([]);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  useEffect(() => {
    setData(defaultData);
  }, []);

  const handleCardClick = (plant: Plant) => {
    setSelectedPlant(plant);
  };

  const handleCloseModal = () => {
    setSelectedPlant(null);
  };

  return (
    <>
      <header className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Koleksi Materi</h2>
          <p className="text-slate-500 mt-1">Daftar materi yang sedang Anda pelajari.</p>
        </div>
      </header>
      
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.map(plant => (
            <Card 
              key={plant.id}
              data={plant}
              onClick={() => handleCardClick(plant)} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-slate-700">Koleksi masih kosong.</h3>
          <p className="text-slate-500 mt-2">Data tanaman akan ditampilkan di sini.</p>
        </div>
      )}

      {selectedPlant && (
        <DiscussionModal
          plant={selectedPlant}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default DashboardView;
