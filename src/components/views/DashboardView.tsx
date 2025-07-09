// src/components/views/DashboardView.tsx

"use client";

import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '@/components/elements/Button';
import FormModal from '@/components/fragments/FormModal';
// Impor juga DiscussionItem
import { defaultPlants, type Plant, type DiscussionItem } from '@/lib/data';
import Card from '@/components/fragments/Card';

const DashboardView = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [plantToEdit, setPlantToEdit] = useState<Plant | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('plantData');
    const initialPlants = savedData ? JSON.parse(savedData) : defaultPlants;
    setPlants(initialPlants);
  }, []);

  useEffect(() => {
    if (plants.length > 0) {
      localStorage.setItem('plantData', JSON.stringify(plants));
    }
  }, [plants]);

  const handleOpenModal = (plant: Plant | null = null) => {
    setPlantToEdit(plant);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPlantToEdit(null);
  };

  const handleSavePlant = (plantData: Plant) => {
    let updatedPlants;
    if (plantToEdit) {
      updatedPlants = plants.map(p => p.id === plantData.id ? plantData : p);
    } else {
      updatedPlants = [...plants, { ...plantData, id: Date.now() }];
    }
    setPlants(updatedPlants);
    handleCloseModal();
  };

  const handleDeletePlant = (id: number) => {
    const updatedPlants = plants.filter(p => p.id !== id);
    setPlants(updatedPlants);
  };

  // Fungsi untuk menghasilkan data pembahasan dengan info repetisi
  const getDiscussionsWithRepetitionInfo = (plantIndex: number): DiscussionItem[] => {
      const discussions = ['Pembahasan 1', 'Pembahasan 2', 'Pembahasan 3'];
      return discussions.map((text, discussionIndex) => {
          const date = new Date();
          // Logika tanggal bisa disesuaikan, ini hanya contoh sederhana
          date.setDate(date.getDate() + (plantIndex * 10) + discussionIndex); 
          const day = String(date.getDate()).padStart(2, '0');
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const year = date.getFullYear();
          const repetition = `R${discussionIndex + 1}D`;
          return {
              text: text,
              repetitionInfo: `${day}-${month}-${year} / ${repetition}`
          };
      });
  }

  return (
    <>
      <header className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Koleksi Saya</h2>
          <p className="text-slate-500 mt-1">Daftar materi yang sedang Anda pelajari.</p>
        </div>
        <Button onClick={() => handleOpenModal()} icon={<Plus className="w-5 h-5" />}>
          Tambah Materi
        </Button>
      </header>
      
      {plants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant, index) => (
            <Card 
              key={plant.id} 
              plant={plant}
              discussions={getDiscussionsWithRepetitionInfo(index)}
              onEdit={handleOpenModal}
              onDelete={handleDeletePlant}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-slate-700">Koleksi masih kosong.</h3>
          <p className="text-slate-500 mt-2">Klik tombol 'Tambah Materi' untuk memulai.</p>
        </div>
      )}

      <FormModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSavePlant}
        plantToEdit={plantToEdit}
      />
    </>
  );
};

export default DashboardView;