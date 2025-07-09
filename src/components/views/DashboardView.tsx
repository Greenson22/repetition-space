// src/components/views/DashboardView.tsx

"use client";

import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '@/components/elements/Button';
import Card from '@/components/fragments/Card';
import FormModal from '@/components/fragments/FormModal';
import { defaultPlants, type Plant } from '@/lib/data';

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

  return (
    <>
      <header className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Koleksi Saya</h2>
          <p className="text-slate-500 mt-1">Daftar teman hijau yang Anda rawat.</p>
        </div>
        <Button onClick={() => handleOpenModal()} icon={<Plus className="w-5 h-5" />}>
          Tambah
        </Button>
      </header>
      
      {plants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {plants.map(plant => (
            <Card 
              key={plant.id} 
              plant={plant} 
              onEdit={handleOpenModal}
              onDelete={handleDeletePlant}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-slate-700">Koleksi masih kosong.</h3>
          <p className="text-slate-500 mt-2">Klik tombol 'Tambah Tanaman' untuk memulai.</p>
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