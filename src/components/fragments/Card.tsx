// src/components/fragments/Card.tsx

import type { Plant } from '@/lib/data';

// Props sekarang hanya menerima satu objek Plant
type CardProps = {
  data: Plant;
};

const Card = ({ data }: CardProps) => {
  // Mengakses 'discussions' dari dalam objek 'plant'
  const { discussions } = data;

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* BAGIAN ATAS KARTU */}
      <div className="p-5">
        <div>
          <h4 className="text-lg font-bold text-slate-800">{data.name}</h4>
          {discussions.length > 0 && (
            <span className="text-xs text-slate-500 mt-1 block">
              {discussions[0].repetitionInfo}
            </span>
          )}
        </div>
      </div>

      {/* GARIS PEMISAH UTAMA */}
      <div className="border-t border-slate-200"></div>

      {/* BAGIAN BAWAH KARTU */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow text-sm text-slate-600 divide-y divide-dashed divide-slate-200">
          {discussions.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-3">
              <span>{item.text}</span>
              <span className="text-xs text-slate-500 whitespace-nowrap">{item.repetitionInfo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;