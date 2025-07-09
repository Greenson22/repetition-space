import { Edit, Trash2 } from 'lucide-react';
import type { Plant } from '@/lib/data';

type CardProps = {
  plant: Plant;
  onEdit: (plant: Plant) => void;
  onDelete: (id: number) => void;
};

const PlantCard = ({ plant, onEdit, onDelete }: CardProps) => {
  const careColor = {
    'Mudah': 'bg-emerald-100 text-emerald-800',
    'Sedang': 'bg-amber-100 text-amber-800',
    'Sulit': 'bg-red-100 text-red-800'
  }[plant.careLevel];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="text-lg font-bold text-slate-800 truncate">{plant.name}</h4>
        <p className="text-slate-500 text-sm mb-4">{plant.species}</p>
        <div className="mt-auto flex justify-between items-center">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${careColor}`}>
            {plant.careLevel}
          </span>
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

export default PlantCard;