// src/components/fragments/Card.tsx

import { Edit, Trash2 } from 'lucide-react';
// Pastikan DiscussionItem diimpor dari data.ts
import type { Plant, DiscussionItem } from '@/lib/data';

type CardProps = {
  plant: Plant;
  discussions: DiscussionItem[];
  onEdit: (plant: Plant) => void;
  onDelete: (id: number) => void;
};

const Card = ({ plant, discussions, onEdit, onDelete }: CardProps) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* BAGIAN ATAS KARTU */}
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h4 className="text-lg font-bold text-slate-800 truncate pr-2">{plant.name}</h4>
          {/* Menampilkan info repetisi dari pembahasan pertama sebagai info utama */}
          <span className="text-xs text-slate-500 whitespace-nowrap">
            {discussions.length > 0 ? discussions[0].repetitionInfo : ''}
          </span>
        </div>
      </div>

      {/* GARIS PEMISAH */}
      <div className="border-t border-slate-200"></div>

      {/* BAGIAN BAWAH KARTU */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow space-y-3 text-sm text-slate-600">
          {discussions.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>{item.text}</span>
              <span className="text-xs text-slate-500 whitespace-nowrap">{item.repetitionInfo}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end items-center">
          <div className="flex space-x-1">
            <button onClick={() => onEdit(plant)} className="p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors" title="Edit">
              <Edit className="w-4 h-4" />
            </button>
            <button onClick={() => onDelete(plant.id)} className="p-2 rounded-full text-red-400 hover:bg-red-100 hover:text-red-600 transition-colors" title="Hapus">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;