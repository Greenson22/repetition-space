// src/components/fragments/Card.tsx

import { Edit, Trash2 } from 'lucide-react';
import type { Plant } from '@/lib/data';

type CardProps = {
  plant: Plant;
  index: number;
  repetitionInfo: string;
  onEdit: (plant: Plant) => void;
  onDelete: (id: number) => void;
};

const Card = ({ plant, index, repetitionInfo, onEdit, onDelete }: CardProps) => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Bagian Atas (Sempit) */}
      <div className="flex justify-between items-center p-4 border-b border-slate-200">
        <h3 className="font-bold text-slate-800">Materi {index + 1}</h3>
        <span className="text-xs text-slate-500 font-mono">{repetitionInfo}</span>
      </div>

      {/* Bagian Bawah (Luas) */}
      <div className="p-4 flex-grow flex flex-col">
         <div className="flex-grow">
            <h4 className="font-semibold text-slate-700">{plant.name}</h4>
            <p className="text-sm text-slate-500">{plant.species}</p>
         </div>
         <div className="flex justify-end space-x-2 mt-4">
           <button onClick={() => onEdit(plant)} className="p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors" title="Edit">
             <Edit className="w-4 h-4" />
           </button>
           <button onClick={() => onDelete(plant.id)} className="p-2 rounded-full text-red-400 hover:bg-red-100 hover:text-red-600 transition-colors" title="Hapus">
             <Trash2 className="w-4 h-4" />
           </button>
         </div>
      </div>
    </div>
  );
};

export default Card;