// src/components/views/DashboardView.tsx

"use client";

import { useEffect, useState } from 'react';
import Card from '@/components/fragments/Card';
import { defaultData, type Plant } from '@/lib/data';

const DashboardView = () => {
  const [data, setData] = useState<Plant[]>([]);

  useEffect(() => {
    setData(defaultData);
  }, []);

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
          {data.map(data => (
            <Card 
              key={data.id}
              data={data} 
            />
          ))}
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